import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

// Input validation schema
const querySchema = z.object({
  page: z.string().optional().transform(val => parseInt(val || '1')),
  limit: z.string().optional().transform(val => parseInt(val || '10')),
  category: z.string().optional(),
  search: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
  featured: z.string().optional().transform(val => val === 'true'),
  minPrice: z.string().optional().transform(val => parseFloat(val || '0')),
  maxPrice: z.string().optional().transform(val => parseFloat(val || '999999')),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = querySchema.parse(Object.fromEntries(searchParams))

    // Build where clause for filtering
    const where: {
      status: string
      category?: string
      OR?: Array<{
        title?: { contains: string; mode: 'insensitive' }
        description?: { contains: string; mode: 'insensitive' }
        content?: { path: string[]; string_contains: string }
      }>
      featured?: boolean
      price?: {
        gte?: number
        lte?: number
      }
    } = {
      status: 'PUBLISHED',
    }

    if (query.category) {
      where.category = query.category as any
    }

    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } },
        { content: { path: ['executiveSummary'], string_contains: query.search } },
      ]
    }

    if (query.featured !== undefined) {
      where.featured = query.featured
    }

    if (query.minPrice !== undefined || query.maxPrice !== undefined) {
      where.price = {}
      if (query.minPrice !== undefined) where.price.gte = query.minPrice
      if (query.maxPrice !== undefined) where.price.lte = query.maxPrice
    }

    // Calculate pagination
    const skip = (query.page - 1) * query.limit
    const take = query.limit

    // Execute query with performance optimization
    const [reports, total] = await Promise.all([
      prisma.report.findMany({
        where,
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          price: true,
          reportCode: true,
          category: true,
          subcategory: true,
          imageUrl: true,
          featured: true,
          createdAt: true,
          author: {
            select: {
              name: true,
            },
          },
        },
        orderBy: [
          { featured: 'desc' },
          { createdAt: 'desc' },
        ],
        skip,
        take,
      }),
      prisma.report.count({ where }),
    ])

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / query.limit)
    const hasNextPage = query.page < totalPages
    const hasPrevPage = query.page > 1

    return NextResponse.json({
      success: true,
      data: reports,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages,
        hasNextPage,
        hasPrevPage,
      },
    })
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reports' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const reportSchema = z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
      description: z.string().optional(),
      content: z.any(),
      price: z.number().positive(),
      reportCode: z.string().min(1),
      category: z.enum([
        'AEROSPACE_DEFENSE',
        'AUTOMOTIVE_TRANSPORTATION',
        'BANKING_FINANCIAL_SERVICES_INSURANCE',
        'CHEMICALS_MATERIALS',
        'CONSUMER_GOODS',
        'ELECTRONICS_SEMICONDUCTOR',
        'ENERGY_POWER',
        'FOOD_BEVERAGES',
        'LIFE_SCIENCES',
        'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS',
      ]),
      subcategory: z.string().optional(),
      imageUrl: z.string().optional(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      keywords: z.string().optional(),
    })

    const validatedData = reportSchema.parse(body)

    // Create report
    const report = await prisma.report.create({
      data: {
        ...validatedData,
        authorId: 'temp-author-id', // This should come from authenticated user
        status: 'DRAFT',
      },
    })

    return NextResponse.json({
      success: true,
      data: report,
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating report:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create report' },
      { status: 400 }
    )
  }
}
