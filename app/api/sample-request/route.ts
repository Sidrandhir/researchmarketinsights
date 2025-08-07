import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, purpose, reportId } = body

    // Validate required fields
    if (!name || !email || !purpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const sampleRequest = await prisma.sampleRequest.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        purpose,
        reportId: reportId || null,
        status: 'PENDING',
      },
    })

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'info@marketresearchinsights.com',
    //   subject: 'New Sample Request',
    //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPurpose: ${purpose}`,
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Sample request submitted successfully',
        id: sampleRequest.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Sample request error:', error)
    return NextResponse.json(
      { error: 'Failed to submit sample request' },
      { status: 500 }
    )
  }
} 