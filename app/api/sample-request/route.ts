import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, reportTitle, reportCode, message } = body

    // Validate required fields
    if (!name || !email || !reportTitle) {
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

    // Find or create a report based on reportCode or reportTitle
    let reportId: string | null = null
    
    if (reportCode) {
      const existingReport = await prisma.report.findUnique({
        where: { reportCode }
      })
      if (existingReport) {
        reportId = existingReport.id
      }
    }

    // If no report found by code, create a placeholder report or use a default one
    if (!reportId) {
      // For now, we'll create a placeholder report
      const placeholderReport = await prisma.report.create({
        data: {
          title: reportTitle,
          slug: reportTitle.toLowerCase().replace(/\s+/g, '-'),
          description: `Sample request for: ${reportTitle}`,
          price: 0.00,
          reportCode: reportCode || `SAMPLE-${Date.now()}`,
          category: 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS',
          authorId: 'system', // You'll need to handle this properly
          content: {},
          status: 'DRAFT'
        }
      })
      reportId = placeholderReport.id
    }

    // Save to database
    const sampleRequest = await prisma.sample.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message: message || `Sample request for: ${reportTitle}`,
        reportId: reportId!,
        status: 'PENDING',
      },
    })

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'info@marketresearchinsights.com',
    //   subject: 'New Sample Request',
    //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nReport: ${reportTitle}\nMessage: ${message}`,
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