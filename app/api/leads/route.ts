import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'
import { LeadStatus } from '@prisma/client'

// Input validation schema
const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
})

const querySchema = z.object({
  page: z.string().optional().transform(val => parseInt(val || '1')),
  limit: z.string().optional().transform(val => parseInt(val || '10')),
  status: z.enum(['NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'LOST']).optional(),
  search: z.string().optional(),
  source: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = querySchema.parse(Object.fromEntries(searchParams))

    // Build where clause for filtering
    const where: {
      status?: LeadStatus;
      source?: string;
      OR?: Array<{
        name?: { contains: string; mode: 'insensitive' };
        email?: { contains: string; mode: 'insensitive' };
        company?: { contains: string; mode: 'insensitive' };
        subject?: { contains: string; mode: 'insensitive' };
      }>;
    } = {}

    if (query.status) {
      where.status = query.status as LeadStatus
    }

    if (query.source) {
      where.source = query.source
    }

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } },
        { company: { contains: query.search, mode: 'insensitive' } },
        { subject: { contains: query.search, mode: 'insensitive' } },
      ]
    }

    // Calculate pagination
    const skip = (query.page - 1) * query.limit
    const take = query.limit

    // Execute query with performance optimization
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          company: true,
          phone: true,
          country: true,
          subject: true,
          message: true,
          source: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
      }),
      prisma.lead.count({ where }),
    ])

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / query.limit)
    const hasNextPage = query.page < totalPages
    const hasPrevPage = query.page > 1

    return NextResponse.json({
      success: true,
      data: leads,
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
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body: {
      name: string;
      email: string;
      phone: string;
      company: string;
      subject: string;
      message: string;
    } = await request.json();
    
    // Validate input
    const validatedData = leadSchema.parse(body)

    // Create lead
    const lead = await prisma.lead.create({
      data: {
        ...validatedData,
        status: LeadStatus.NEW,
      },
    })

    // TODO: Send notification email to admin
    // TODO: Integrate with CRM system

    return NextResponse.json({
      success: true,
      data: lead,
      message: 'Lead submitted successfully',
    }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating lead:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Lead ID is required' },
        { status: 400 }
      )
    }

    // Update lead
    const lead = await prisma.lead.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json({
      success: true,
      data: lead,
      message: 'Lead updated successfully',
    })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}