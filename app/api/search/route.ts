import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || 'all';
    const category = searchParams.get('category') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    if (!query.trim()) {
      return NextResponse.json({
        success: false,
        message: 'Search query is required',
      });
    }

    const results = [];

    // Search reports
    if (type === 'all' || type === 'reports') {
      const reports = await prisma.report.findMany({
        where: {
          AND: [
            {
              OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { description: { contains: query, mode: 'insensitive' } },
              ],
            },
            { status: 'PUBLISHED' },
            ...(category ? [{ category: category as any }] : []),
          ],
        },
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          price: true,
          slug: true,
          imageUrl: true,
          featured: true,
          createdAt: true,
        },
        take: limit,
        skip: offset,
        orderBy: [
          { featured: 'desc' },
          { createdAt: 'desc' },
        ],
      });

      results.push(
        ...reports.map((report) => ({
          id: report.id,
          type: 'REPORT' as const,
          title: report.title,
          description: report.description || '',
          category: report.category,
          price: report.price,
          imageUrl: report.imageUrl,
          featured: report.featured,
          createdAt: report.createdAt,
          url: `/reports/${report.slug}`,
        }))
      );
    }

    // Search press releases
    if (type === 'all' || type === 'press-releases') {
      const pressReleases = await prisma.pressRelease.findMany({
        where: {
          AND: [
            {
              OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { content: { contains: query, mode: 'insensitive' } },
              ],
            },
            { status: 'PUBLISHED' },
            ...(category ? [{ category: category as any }] : []),
          ],
        },
        select: {
          id: true,
          title: true,
          content: true,
          excerpt: true,
          category: true,
          imageUrl: true,
          slug: true,
          featured: true,
          createdAt: true,
        },
        take: limit,
        skip: offset,
        orderBy: [
          { featured: 'desc' },
          { createdAt: 'desc' },
        ],
      });

      results.push(
        ...pressReleases.map((pr) => ({
          id: pr.id,
          type: 'PRESS_RELEASE' as const,
          title: pr.title,
          description: pr.excerpt || pr.content.substring(0, 200) + '...',
          category: pr.category,
          imageUrl: pr.imageUrl,
          featured: pr.featured,
          createdAt: pr.createdAt,
          url: `/press-releases/${pr.slug}`,
        }))
      );
    }

    // Sort results by relevance
    results.sort((a, b) => {
      // Prioritize featured items
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Then by type priority
      const typePriority = { REPORT: 1, PRESS_RELEASE: 2 };
      return typePriority[a.type] - typePriority[b.type];
    });

    return NextResponse.json({
      success: true,
      data: results.slice(0, limit),
      pagination: {
        page,
        limit,
        total: results.length,
        totalPages: Math.ceil(results.length / limit),
      },
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
} 