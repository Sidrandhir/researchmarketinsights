import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    // Check if database is available
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { 
          error: 'Database not configured',
          message: 'DATABASE_URL environment variable is not set'
        },
        { status: 503 }
      )
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30' // days

    const daysAgo = new Date()
    daysAgo.setDate(daysAgo.getDate() - parseInt(period))

    // Get counts
    const [
      totalReports,
      totalLeads,
      totalOrders,
      totalSamples,
      recentReports,
      recentLeads,
      recentOrders,
      recentSamples,
      categoryStats,
      leadSourceStats,
      revenueStats
    ] = await Promise.all([
      // Total counts
      prisma.report.count(),
      prisma.lead.count(),
      prisma.order.count(),
      prisma.sample.count(),
      
      // Recent counts (last 30 days)
      prisma.report.count({
        where: {
          createdAt: {
            gte: daysAgo
          }
        }
      }),
      prisma.lead.count({
        where: {
          createdAt: {
            gte: daysAgo
          }
        }
      }),
      prisma.order.count({
        where: {
          createdAt: {
            gte: daysAgo
          }
        }
      }),
      prisma.sample.count({
        where: {
          createdAt: {
            gte: daysAgo
          }
        }
      }),
      
      // Category statistics
      prisma.report.groupBy({
        by: ['category'],
        _count: {
          category: true
        }
      }),
      
      // Lead source statistics
      prisma.lead.groupBy({
        by: ['source'],
        _count: {
          source: true
        }
      }),
      
      // Revenue statistics
      prisma.order.aggregate({
        where: {
          status: 'PAID'
        },
        _sum: {
          amount: true
        },
        _count: true
      })
    ])

    // Get recent leads
    const recentLeadsList = await prisma.lead.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        status: true,
        createdAt: true
      }
    })

    // Get recent reports
    const recentReportsList = await prisma.report.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        category: true,
        status: true,
        createdAt: true
      }
    })

    // Format category stats
    const formattedCategoryStats = categoryStats.map(stat => ({
      category: stat.category,
      count: stat._count.category
    }))

    // Format lead source stats
    const formattedLeadSourceStats = leadSourceStats.map(stat => ({
      source: stat.source,
      count: stat._count.source
    }))

    return NextResponse.json({
      overview: {
        totalReports,
        totalLeads,
        totalOrders,
        totalSamples,
        recentReports,
        recentLeads,
        recentOrders,
        recentSamples
      },
      recentLeads: recentLeadsList,
      recentReports: recentReportsList,
      categoryStats: formattedCategoryStats,
      leadSourceStats: formattedLeadSourceStats,
      revenueStats: {
        totalRevenue: revenueStats._sum.amount || 0,
        totalOrders: revenueStats._count || 0
      }
    })
  } catch (error) {
    console.error('Analytics error:', error)
    
    // Check if it's a database connection error
    if (error instanceof Error && error.message.includes('DATABASE_URL')) {
      return NextResponse.json(
        { 
          error: 'Database not configured',
          message: 'Please configure DATABASE_URL environment variable'
        },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
