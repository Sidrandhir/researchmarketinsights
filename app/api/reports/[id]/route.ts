import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const report = await prisma.report.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    if (!report) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error('Report fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch report' },
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
      title,
      description,
      content,
      price,
      discount,
      reportCode,
      category,
      subcategory,
      imageUrl,
      toc,
      scope,
      segments,
      faqs,
      metaTitle,
      metaDescription,
      keywords,
      status,
      featured
    } = body

    // Check if report exists
    const existingReport = await prisma.report.findUnique({
      where: { id: params.id }
    })

    if (!existingReport) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      )
    }

    // Check if reportCode already exists (if changed)
    if (reportCode && reportCode !== existingReport.reportCode) {
      const duplicateReport = await prisma.report.findUnique({
        where: { reportCode }
      })

      if (duplicateReport) {
        return NextResponse.json(
          { error: 'Report code already exists' },
          { status: 400 }
        )
      }
    }

    // Update report
    const report = await prisma.report.update({
      where: { id: params.id },
      data: {
        title: title || existingReport.title,
        slug: title ? title.toLowerCase().replace(/\s+/g, '-') : existingReport.slug,
        description: description !== undefined ? description : existingReport.description,
        content: content || existingReport.content,
        price: price !== undefined ? parseFloat(price) : existingReport.price,
        discount: discount !== undefined ? parseFloat(discount) : existingReport.discount,
        reportCode: reportCode || existingReport.reportCode,
        category: category || existingReport.category,
        subcategory: subcategory !== undefined ? subcategory : existingReport.subcategory,
        imageUrl: imageUrl !== undefined ? imageUrl : existingReport.imageUrl,
        toc: toc || existingReport.toc,
        scope: scope || existingReport.scope,
        segments: segments || existingReport.segments,
        faqs: faqs || existingReport.faqs,
        metaTitle: metaTitle !== undefined ? metaTitle : existingReport.metaTitle,
        metaDescription: metaDescription !== undefined ? metaDescription : existingReport.metaDescription,
        keywords: keywords !== undefined ? keywords : existingReport.keywords,
        status: status || existingReport.status,
        featured: featured !== undefined ? featured : existingReport.featured
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Report updated successfully',
        report 
      }
    )
  } catch (error) {
    console.error('Report update error:', error)
    return NextResponse.json(
      { error: 'Failed to update report' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if report exists
    const existingReport = await prisma.report.findUnique({
      where: { id: params.id }
    })

    if (!existingReport) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      )
    }

    // Delete report
    await prisma.report.delete({
      where: { id: params.id }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Report deleted successfully'
      }
    )
  } catch (error) {
    console.error('Report deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete report' },
      { status: 500 }
    )
  }
}
