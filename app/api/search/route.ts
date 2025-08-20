import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Type for category values
type CategoryType = 'AEROSPACE_DEFENSE' | 'AUTOMOTIVE_TRANSPORTATION' | 'BANKING_FINANCIAL_SERVICES_INSURANCE' | 'CHEMICALS_MATERIALS' | 'CONSUMER_GOODS' | 'ELECTRONICS_SEMICONDUCTOR' | 'ENERGY_POWER' | 'FOOD_BEVERAGES' | 'LIFE_SCIENCES' | 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || 'all';
    const category = searchParams.get('category') as CategoryType | null;
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (!query.trim()) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    const results: Array<{
      id: string;
      type: 'REPORT' | 'PRESS_RELEASE';
      title: string;
      description: string;
      category: string;
      price?: number;
      imageUrl?: string | null;
      featured: boolean;
      createdAt: Date;
      url: string;
    }> = [];

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
            ...(category ? [{ category: category }] : []),
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
          price: Number(report.price),
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
            ...(category ? [{ category: category }] : []),
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
      if (a.type === 'REPORT' && b.type === 'PRESS_RELEASE') return -1;
      if (a.type === 'PRESS_RELEASE' && b.type === 'REPORT') return 1;
      
      // Finally by creation date
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json({
      success: true,
      results,
      total: results.length,
      query,
      type,
      category,
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    );
  }
} 