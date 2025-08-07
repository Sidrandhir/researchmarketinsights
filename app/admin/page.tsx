'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  FileText, 
  Mail, 
  Download, 
  TrendingUp, 
  DollarSign,
  Eye,
  Star
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalReports: 0,
    totalLeads: 0,
    totalSampleRequests: 0,
    totalRevenue: 0,
    totalViews: 0,
    totalDownloads: 0,
    averageRating: 0,
  })

  const [recentLeads, setRecentLeads] = useState([])
  const [recentReports, setRecentReports] = useState([])

  useEffect(() => {
    // Simulate loading data
    setStats({
      totalUsers: 1250,
      totalReports: 456,
      totalLeads: 89,
      totalSampleRequests: 234,
      totalRevenue: 125000,
      totalViews: 45678,
      totalDownloads: 1234,
      averageRating: 4.5,
    })

    setRecentLeads([
      { id: 1, name: 'John Doe', email: 'john@example.com', company: 'Tech Corp', date: '2024-01-15', status: 'NEW' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'Health Inc', date: '2024-01-14', status: 'CONTACTED' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', company: 'Auto Ltd', date: '2024-01-13', status: 'QUALIFIED' },
    ])

    setRecentReports([
      { id: 1, title: 'Global Healthcare Market Analysis', views: 1234, downloads: 89, revenue: 2500 },
      { id: 2, title: 'Electric Vehicle Market Report', views: 987, downloads: 67, revenue: 1800 },
      { id: 3, title: 'AI in Financial Services', views: 756, downloads: 45, revenue: 1200 },
    ])
  }, [])

  const statCards = [
    { name: 'Total Users', value: stats.totalUsers, icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Total Reports', value: stats.totalReports, icon: FileText, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Total Leads', value: stats.totalLeads, icon: Mail, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { name: 'Sample Requests', value: stats.totalSampleRequests, icon: Download, color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { name: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
    { name: 'Total Views', value: stats.totalViews.toLocaleString(), icon: Eye, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    { name: 'Downloads', value: stats.totalDownloads.toLocaleString(), icon: Download, color: 'text-pink-600', bgColor: 'bg-pink-100' },
    { name: 'Avg Rating', value: `${stats.averageRating}/5`, icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your market research insights dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Revenue chart coming soon</p>
            </div>
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Traffic</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <Eye className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Traffic chart coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.email}</p>
                    <p className="text-sm text-gray-500">{lead.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{lead.date}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      lead.status === 'NEW' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'CONTACTED' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Reports</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{report.title}</p>
                    <p className="text-sm text-gray-500">{report.views} views • {report.downloads} downloads</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">${report.revenue}</p>
                    <p className="text-sm text-gray-500">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Add New Report
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Create Press Release
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            View Analytics
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Manage Users
          </button>
        </div>
      </div>
    </div>
  )
} 