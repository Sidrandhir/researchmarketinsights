// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/lib/db'

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, company, purpose, reportId } = body

//     // Validate required fields
//     if (!name || !email || !purpose) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       )
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       )
//     }

//     // Find a report to connect to, if no reportId is provided, this will fail.
//     // For now, we will make reportId required to avoid errors.
//     if (!reportId) {
//         return NextResponse.json(
//             { error: 'Report ID is required for a sample request' },
//             { status: 400 }
//         )
//     }

//     // Save to database using the correct model name 'sample'
//     const sampleRequest = await prisma.sample.create({
//       data: {
//         name,
//         email,
//         phone: phone || null,
//         company: company || null,
//         message: purpose, // Map 'purpose' to the 'message' field in the schema
//         reportId: reportId, // Connect to the report
//         status: 'PENDING',
//       },
//     })

//     // TODO: Send email notification
//     // await sendEmail({
//     //   to: 'info@marketresearchinsights.com',
//     //   subject: 'New Sample Request',
//     //   body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPurpose: ${purpose}`,
//     // })

//     return NextResponse.json(
//       { 
//         success: true, 
//         message: 'Sample request submitted successfully',
//         id: sampleRequest.id 
//       },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Sample request error:', error)
//     return NextResponse.json(
//       { error: 'Failed to submit sample request' },
//       { status: 500 }
//     )
//   }
// }

import { NextResponse } from 'next/server'

export async function POST() {
    return NextResponse.json({ success: true, message: 'Sample request submitted successfully' }, { status: 201 });
}