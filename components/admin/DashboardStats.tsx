'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Users, 
  FileText, 
  DollarSign, 
  Eye, 
  Download,
  Mail,
  Clock
} from 'lucide-react'

interface Stats {
  totalUsers: number
  totalReports: number
  totalLeads: number
  totalSampleRequests: number
  totalRevenue: number
  totalViews: number
  totalDownloads: number
  averageRating: number
  monthlyGrowth: number
  conversionRate: number
}

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalReports: 0,
    totalLeads: 0,
    totalSampleRequests: 0,
    totalRevenue: 0,
    totalViews: 0,
    totalDownloads: 0,
    averageRating: 0,
    monthlyGrowth: 0,
    conversionRate: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with loading state
    const fetchStats = async () => {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data - in real app, this would come from API
      setStats({
        totalUsers: 1250,
        totalReports: 456,
        totalLeads: 89,
        totalSampleRequests: 234,
        totalRevenue: 125000,
        totalViews: 45678,
        totalDownloads: 1234,
        averageRating: 4.5,
        monthlyGrowth: 12.5,
        conversionRate: 3.2,
      })
      
      setLoading(false)
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      name: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      change: `+${stats.monthlyGrowth}%`,
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Registered users this month'
    },
    {
      name: 'Total Reports',
      value: stats.totalReports.toLocaleString(),
      change: '+8.2%',
      changeType: 'positive',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Published market research reports'
    },
    {
      name: 'Total Leads',
      value: stats.totalLeads.toLocaleString(),
      change: '+15.3%',
      changeType: 'positive',
      icon: Mail,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'New leads generated'
    },
    {
      name: 'Sample Requests',
      value: stats.totalSampleRequests.toLocaleString(),
      change: '+5.7%',
      changeType: 'positive',
      icon: Download,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Sample report requests'
    },
    {
      name: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: `+${stats.monthlyGrowth}%`,
      changeType: 'positive',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      description: 'Revenue this month'
    },
    {
      name: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      change: '+22.1%',
      changeType: 'positive',
      icon: Eye,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      description: 'Report page views'
    },
    {
      name: 'Downloads',
      value: stats.totalDownloads.toLocaleString(),
      change: '+18.4%',
      changeType: 'positive',
      icon: Download,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      description: 'Report downloads'
    },
    {
      name: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      description: 'Lead to customer conversion'
    }
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-pulse">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => (
        <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="text-right">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change}
              </span>
            </div>
          </div>
          
          <div className="mb-2">
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
          </div>
          
          <p className="text-xs text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}
