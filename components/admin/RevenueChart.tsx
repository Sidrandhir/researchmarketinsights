'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react'

interface RevenueData {
  month: string
  revenue: number
  growth: number
  reports: number
  downloads: number
}



export default function RevenueChart() {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [revenueData, setRevenueData] = useState<RevenueData[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMetric, setSelectedMetric] = useState<'revenue' | 'growth' | 'reports' | 'downloads'>('revenue')

  useEffect(() => {
    const fetchRevenueData = async () => {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600))
      
      // Mock data based on timeframe
      let mockData: RevenueData[] = []
      
      if (timeframe === '7d') {
        mockData = [
          { month: 'Mon', revenue: 8500, growth: 12.5, reports: 15, downloads: 45 },
          { month: 'Tue', revenue: 9200, growth: 8.2, reports: 18, downloads: 52 },
          { month: 'Wed', revenue: 7800, growth: -5.3, reports: 12, downloads: 38 },
          { month: 'Thu', revenue: 10500, growth: 15.7, reports: 22, downloads: 65 },
          { month: 'Fri', revenue: 11800, growth: 18.9, reports: 25, downloads: 72 },
          { month: 'Sat', revenue: 6800, growth: -2.1, reports: 10, downloads: 28 },
          { month: 'Sun', revenue: 7200, growth: 5.9, reports: 14, downloads: 35 }
        ]
      } else if (timeframe === '30d') {
        mockData = [
          { month: 'Week 1', revenue: 45000, growth: 8.5, reports: 85, downloads: 280 },
          { month: 'Week 2', revenue: 52000, growth: 15.6, reports: 95, downloads: 320 },
          { month: 'Week 3', revenue: 48000, growth: 12.3, reports: 88, downloads: 295 },
          { month: 'Week 4', revenue: 58000, growth: 20.8, reports: 105, downloads: 380 }
        ]
      } else if (timeframe === '90d') {
        mockData = [
          { month: 'Jan', revenue: 125000, growth: 12.5, reports: 456, downloads: 1234 },
          { month: 'Feb', revenue: 138000, growth: 18.2, reports: 489, downloads: 1356 },
          { month: 'Mar', revenue: 152000, growth: 22.1, reports: 523, downloads: 1489 }
        ]
      } else {
        mockData = [
          { month: '2023 Q1', revenue: 320000, growth: 8.5, reports: 1200, downloads: 3200 },
          { month: '2023 Q2', revenue: 380000, growth: 18.7, reports: 1350, downloads: 3800 },
          { month: '2023 Q3', revenue: 420000, growth: 25.3, reports: 1480, downloads: 4200 },
          { month: '2023 Q4', revenue: 480000, growth: 32.1, reports: 1620, downloads: 4800 },
          { month: '2024 Q1', revenue: 415000, growth: 15.2, reports: 1456, downloads: 4150 }
        ]
      }
      
      setRevenueData(mockData)
      setLoading(false)
    }

    fetchRevenueData()
  }, [timeframe])



  const getMetricValue = () => {
    if (revenueData.length === 0) return { current: 0, previous: 0, change: 0 }
    
    const current = revenueData[revenueData.length - 1][selectedMetric]
    const previous = revenueData[revenueData.length - 2]?.[selectedMetric] || current
    const change = ((current - previous) / previous) * 100
    
    return { current, previous, change }
  }

  const formatMetricValue = (value: number) => {
    if (selectedMetric === 'revenue') {
      return `$${value.toLocaleString()}`
    } else if (selectedMetric === 'growth') {
      return `${value.toFixed(1)}%`
    } else {
      return value.toLocaleString()
    }
  }

  const { current, change } = getMetricValue()

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with metric selector */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Revenue Analytics</h4>
          <p className="text-sm text-gray-600">Track your business performance</p>
        </div>
        
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value as 'revenue' | 'growth' | 'reports' | 'downloads')}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="revenue">Revenue</option>
          <option value="growth">Growth</option>
          <option value="reports">Reports</option>
          <option value="downloads">Downloads</option>
        </select>
      </div>

      {/* Current metric display */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Current {selectedMetric}
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1">
              {formatMetricValue(current)}
            </p>
          </div>
          
          <div className="text-right">
            <div className={`flex items-center text-sm font-medium ${
              change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {change >= 0 ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {Math.abs(change).toFixed(1)}%
            </div>
            <p className="text-xs text-gray-500 mt-1">vs previous period</p>
          </div>
        </div>
      </div>

      {/* Timeframe selector */}
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4 text-gray-400" />
        <div className="flex bg-gray-100 rounded-lg p-1">
          {(['7d', '30d', '90d', '1y'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                timeframe === period
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
          <TrendingUp className="h-6 w-6" />
          <span className="text-sm font-medium">Chart Visualization</span>
        </div>
        
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded-full"></div>
          <div className="h-2 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
          <div className="h-2 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
          <div className="h-2 bg-gray-200 rounded-full w-3/4 mx-auto"></div>
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          Chart library integration coming soon
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">
            {revenueData.reduce((sum, d) => sum + d.revenue, 0).toLocaleString()}
          </p>
          <p className="text-xs text-gray-600">Total Revenue</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-2xl font-bold text-gray-900">
            {revenueData.reduce((sum, d) => sum + d.reports, 0).toLocaleString()}
          </p>
          <p className="text-xs text-gray-600">Total Reports</p>
        </div>
      </div>
    </div>
  )
}
