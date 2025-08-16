import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db'
import type { Prisma } from '@prisma/client'

// Interface definitions remain the same
interface ReportData {
  title: string
  description?: string
  content?: Prisma.JsonValue
  price: string
  discount?: string
  reportCode?: string
  category?: string
  subcategory?: string | null
  imageUrl?: string | null
  toc?: Prisma.JsonValue
  scope?: Prisma.JsonValue
  segments?: Prisma.JsonValue
  faqs?: Prisma.JsonValue
  metaTitle?: string | null
  metaDescription?: string | null
  keywords?: string | null
  status?: string
  featured?: boolean
}

interface PressReleaseData {
  title: string
  content?: string
  excerpt?: string | null
  imageUrl?: string | null
  category?: string
  metaTitle?: string | null
  metaDescription?: string | null
  keywords?: string | null
  status?: string
  featured?: boolean
  publishedAt?: string | null
}

interface FilterData {
  ids?: string[]
  category?: string
  status?: string
}

// FIX: We will now properly use this type
type PrismaWhereClause = {
  id?: { in: string[] }
  category?: any // Using 'any' to match the schema's enum type for now
  status?: any   // Using 'any' to match the schema's enum type for now
}

export async function POST(request: Request) {
  try {
    const body: { 
      action: string;
      data?: unknown;
      reports?: Array<{
        id: string;
        title: string;
        category: string;
        pages: number;
        format: string;
        price: number;
      }>;
      email?: string;
    } = await request.json();
    const { action, data } = body

    switch (action) {
      case 'upload_reports':
        return await handleBulkReportUpload(data as ReportData[])
      case 'upload_press_releases':
        return await handleBulkPressReleaseUpload(data as PressReleaseData[])
      case 'download_reports':
        return await handleBulkReportDownload(data as FilterData)
      case 'download_press_releases':
        return await handleBulkPressReleaseDownload(data as FilterData)
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Bulk operation error:', error)
    return NextResponse.json(
      { error: 'Failed to perform bulk operation' },
      { status: 500 }
    )
  }
}

async function handleBulkReportUpload(data: ReportData[]) {
    // This function is correct, no changes needed
    try {
        const reports = []
        
        for (const reportData of data) {
          const report = await prisma.report.create({
            data: {
              title: reportData.title,
              slug: reportData.title.toLowerCase().replace(/\s+/g, '-'),
              description: reportData.description || '',
              content: reportData.content || {},
              price: parseFloat(reportData.price) || 0,
              discount: reportData.discount ? parseFloat(reportData.discount) : null,
              reportCode: reportData.reportCode || `REPORT-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
              category: (reportData.category || 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS') as any,
              subcategory: reportData.subcategory || null,
              imageUrl: reportData.imageUrl || null,
              toc: reportData.toc || {},
              scope: reportData.scope || {},
              segments: reportData.segments || {},
              faqs: reportData.faqs || {},
              metaTitle: reportData.metaTitle || null,
              metaDescription: reportData.metaDescription || null,
              keywords: reportData.keywords || null,
              status: (reportData.status || 'DRAFT') as any,
              featured: reportData.featured || false,
              authorId: 'system'
            }
          })
          reports.push(report)
        }
    
        return NextResponse.json(
          { 
            success: true, 
            message: `${reports.length} reports uploaded successfully`,
            reports 
          }
        )
      } catch (error) {
        console.error('Bulk report upload error:', error)
        return NextResponse.json(
          { error: 'Failed to upload reports' },
          { status: 500 }
        )
      }
}

async function handleBulkPressReleaseUpload(data: PressReleaseData[]) {
    // This function is correct, no changes needed
    try {
        const pressReleases = []
        
        for (const prData of data) {
          const pressRelease = await prisma.pressRelease.create({
            data: {
              title: prData.title,
              slug: prData.title.toLowerCase().replace(/\s+/g, '-'),
              content: prData.content || '',
              excerpt: prData.excerpt || null,
              imageUrl: prData.imageUrl || null,
              category: (prData.category || 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS') as any,
              metaTitle: prData.metaTitle || null,
              metaDescription: prData.metaDescription || null,
              keywords: prData.keywords || null,
              status: (prData.status || 'DRAFT') as any,
              featured: prData.featured || false,
              publishedAt: prData.publishedAt ? new Date(prData.publishedAt) : null,
              authorId: 'system'
            }
          })
          pressReleases.push(pressRelease)
        }
    
        return NextResponse.json(
          { 
            success: true, 
            message: `${pressReleases.length} press releases uploaded successfully`,
            pressReleases 
          }
        )
      } catch (error) {
        console.error('Bulk press release upload error:', error)
        return NextResponse.json(
          { error: 'Failed to upload press releases' },
          { status: 500 }
        )
      }
}

async function handleBulkReportDownload(data: FilterData) {
  try {
    // FIX: Use the 'PrismaWhereClause' type instead of 'any'
    const where: PrismaWhereClause = {}
    
    if (data.ids) {
      where.id = { in: data.ids }
    }
    
    if (data.category) {
      where.category = data.category
    }
    
    if (data.status) {
      where.status = data.status
    }

    const reports = await prisma.report.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: `${reports.length} reports downloaded successfully`,
        reports 
      }
    )
  } catch (error) {
    console.error('Bulk report download error:', error)
    return NextResponse.json(
      { error: 'Failed to download reports' },
      { status: 500 }
    )
  }
}

async function handleBulkPressReleaseDownload(data: FilterData) {
  try {
    // FIX: Use the 'PrismaWhereClause' type instead of 'any'
    const where: PrismaWhereClause = {}
    
    if (data.ids) {
      where.id = { in: data.ids }
    }
    
    if (data.category) {
      where.category = data.category
    }
    
    if (data.status) {
      where.status = data.status
    }

    const pressReleases = await prisma.pressRelease.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: `${pressReleases.length} press releases downloaded successfully`,
        pressReleases 
      }
    )
  } catch (error) {
    console.error('Bulk press release download error:', error)
    return NextResponse.json(
      { error: 'Failed to download press releases' },
      { status: 500 }
    )
  }
}