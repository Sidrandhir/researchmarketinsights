import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ 
        reports: [],
        message: 'Database not configured'
      });
    }

    const reports = await prisma.report.findMany({
      where: {
        status: 'PUBLISHED',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ reports });
  } catch (error) {
    console.error('Error fetching reports:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    
    const report = await prisma.report.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description || '',
        content: body.content || {},
        price: body.price || 0,
        reportCode: body.reportCode || `REPORT-${Date.now()}`,
        category: body.category || 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS',
        status: body.status || 'DRAFT',
        authorId: body.authorId || 'system',
      },
    });

    return NextResponse.json({ report });
  } catch (error) {
    console.error('Error creating report:', error);
    return NextResponse.json(
      { error: 'Failed to create report' },
      { status: 500 }
    );
  }
}