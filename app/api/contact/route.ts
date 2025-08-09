import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
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
    const contact = await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
        source: 'contact_form',
        status: 'NEW',
      },
    })

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'info@marketresearchinsights.com',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        id: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}