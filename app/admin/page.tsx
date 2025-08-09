'use client'

import { Suspense } from 'react'
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
import DashboardStats from '@/components/admin/DashboardStats'
import RecentActivity from '@/components/admin/RecentActivity'
import RevenueChart from '@/components/admin/RevenueChart'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your market research platform.</p>
      </div>

      {/* Stats Grid */}
      <Suspense fallback={<LoadingSpinner />}>
        <DashboardStats />
      </Suspense>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
          <Suspense fallback={<LoadingSpinner />}>
            <RevenueChart />
          </Suspense>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <Suspense fallback={<LoadingSpinner />}>
            <RecentActivity />
          </Suspense>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <FileText className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-blue-600">Create Report</span>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <Mail className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-blue-600">View Leads</span>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <Download className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-blue-600">Sample Requests</span>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <Users className="h-8 w-8 text-gray-400 group-hover:text-blue-500" />
            <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-blue-600">Manage Users</span>
          </button>
        </div>
      </div>
    </div>
  )
} 