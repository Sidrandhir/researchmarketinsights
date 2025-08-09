'use client'

import { useState, useEffect } from 'react'
import { 
  FileText, 
  Users, 
  Mail, 
  Download, 
  Eye, 
  DollarSign,
  TrendingUp,
  AlertCircle
} from 'lucide-react'

interface Activity {
  id: string
  type: 'report' | 'user' | 'lead' | 'download' | 'view' | 'revenue' | 'system'
  title: string
  description: string
  timestamp: Date
  status: 'success' | 'warning' | 'error' | 'info'
  metadata?: Record<string, string | number>
}

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Mock data - in real app, this would come from API
      const mockActivities: Activity[] = [
        {
          id: '1',
          type: 'report',
          title: 'New Report Published',
          description: 'Global Patient Repositioning System Market report has been published',
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          status: 'success',
          metadata: { reportId: 'MR-001-2024', author: 'Admin User' }
        },
        {
          id: '2',
          type: 'download',
          title: 'Report Downloaded',
          description: 'Sample request approved for Connected Drug Delivery Devices report',
          timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
          status: 'success',
          metadata: { reportId: 'MR-002-2024', user: 'john.smith@healthcare.com' }
        },
        {
          id: '3',
          type: 'lead',
          title: 'New Lead Generated',
          description: 'Contact form submission from Healthcare Solutions Inc.',
          timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
          status: 'info',
          metadata: { company: 'Healthcare Solutions Inc.', email: 'john.smith@healthcare.com' }
        },
        {
          id: '4',
          type: 'revenue',
          title: 'Revenue Milestone',
          description: 'Monthly revenue target achieved - $125,000',
          timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
          status: 'success',
          metadata: { amount: 125000, currency: 'USD' }
        },
        {
          id: '5',
          type: 'user',
          title: 'User Registration',
          description: 'New user registered: sarah.johnson@pharma.com',
          timestamp: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
          status: 'info',
          metadata: { email: 'sarah.johnson@pharma.com', role: 'RESEARCHER' }
        },
        {
          id: '6',
          type: 'view',
          title: 'High Traffic Alert',
          description: 'Life Sciences industry page received 500+ views in last hour',
          timestamp: new Date(Date.now() - 1000 * 60 * 240), // 4 hours ago
          status: 'warning',
          metadata: { page: '/industry/life-sciences', views: 500, timeframe: '1 hour' }
        },
        {
          id: '7',
          type: 'system',
          title: 'System Update',
          description: 'Database backup completed successfully',
          timestamp: new Date(Date.now() - 1000 * 60 * 300), // 5 hours ago
          status: 'success',
          metadata: { backupSize: '2.3GB', duration: '15 minutes' }
        },
        {
          id: '8',
          type: 'report',
          title: 'Report Update',
          description: 'Pharmaceutical Packaging Market report content updated',
          timestamp: new Date(Date.now() - 1000 * 60 * 360), // 6 hours ago
          status: 'info',
          metadata: { reportId: 'MR-003-2024', changes: 'Market data refresh' }
        }
      ]
      
      setActivities(mockActivities)
      setLoading(false)
    }

    fetchActivities()
  }, [])

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'report':
        return <FileText className="h-4 w-4" />
      case 'user':
        return <Users className="h-4 w-4" />
      case 'lead':
        return <Mail className="h-4 w-4" />
      case 'download':
        return <Download className="h-4 w-4" />
      case 'view':
        return <Eye className="h-4 w-4" />
      case 'revenue':
        return <DollarSign className="h-4 w-4" />
      case 'system':
        return <TrendingUp className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) {
      return `${minutes}m ago`
    } else if (hours < 24) {
      return `${hours}h ago`
    } else {
      return `${days}d ago`
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-start space-x-3 animate-pulse">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.slice(0, 8).map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <div className={`p-2 rounded-full bg-gray-100 text-gray-600 flex-shrink-0`}>
            {getActivityIcon(activity.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 truncate">
                {activity.title}
              </p>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(activity.status)}`}>
                {activity.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {activity.description}
            </p>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">
                {formatTimestamp(activity.timestamp)}
              </span>
              
              {activity.metadata && (
                <div className="flex items-center space-x-2">
                  {Object.entries(activity.metadata).slice(0, 2).map(([key, value]) => (
                    <span key={key} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                      {key}: {value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {activities.length > 8 && (
        <div className="text-center pt-4">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Activities →
          </button>
        </div>
      )}
    </div>
  )
}
