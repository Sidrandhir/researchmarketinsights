import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: params.id }
    })

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Lead fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      source,
      status
    } = body

    // Check if lead exists
    const existingLead = await prisma.lead.findUnique({
      where: { id: params.id }
    })

    if (!existingLead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    // Update lead
    const lead = await prisma.lead.update({
      where: { id: params.id },
      data: {
        name: name || existingLead.name,
        email: email || existingLead.email,
        phone: phone !== undefined ? phone : existingLead.phone,
        company: company !== undefined ? company : existingLead.company,
        subject: subject !== undefined ? subject : existingLead.subject,
        message: message !== undefined ? message : existingLead.message,
        source: source || existingLead.source,
        status: status || existingLead.status
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead updated successfully',
        lead 
      }
    )
  } catch (error) {
    console.error('Lead update error:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if lead exists
    const existingLead = await prisma.lead.findUnique({
      where: { id: params.id }
    })

    if (!existingLead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    // Delete lead
    await prisma.lead.delete({
      where: { id: params.id }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead deleted successfully'
      }
    )
  } catch (error) {
    console.error('Lead deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    )
  }
}
