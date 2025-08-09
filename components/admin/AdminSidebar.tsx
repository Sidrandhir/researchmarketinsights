'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Mail, 
  Download, 
  Settings, 
  BarChart3,
  Newspaper,
  ShoppingCart,
  CreditCard,
  HelpCircle,
  LogOut
} from 'lucide-react'

interface MenuItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard
  },
  {
    name: 'Reports',
    href: '/admin/reports',
    icon: FileText,
    children: [
      { name: 'All Reports', href: '/admin/reports', icon: FileText },
      { name: 'Create Report', href: '/admin/reports/create', icon: FileText },
      { name: 'Categories', href: '/admin/reports/categories', icon: FileText },
      { name: 'Analytics', href: '/admin/reports/analytics', icon: BarChart3 }
    ]
  },
  {
    name: 'Press Releases',
    href: '/admin/press-releases',
    icon: Newspaper,
    children: [
      { name: 'All Press Releases', href: '/admin/press-releases', icon: Newspaper },
      { name: 'Create Press Release', href: '/admin/press-releases/create', icon: Newspaper }
    ]
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: Users,
    children: [
      { name: 'All Users', href: '/admin/users', icon: Users },
      { name: 'User Roles', href: '/admin/users/roles', icon: Users },
      { name: 'Permissions', href: '/admin/users/permissions', icon: Users }
    ]
  },
  {
    name: 'Leads',
    href: '/admin/leads',
    icon: Mail,
    badge: '12',
    children: [
      { name: 'All Leads', href: '/admin/leads', icon: Mail },
      { name: 'Lead Scoring', href: '/admin/leads/scoring', icon: Mail },
      { name: 'CRM Integration', href: '/admin/leads/crm', icon: Mail }
    ]
  },
  {
    name: 'Sample Requests',
    href: '/admin/sample-requests',
    icon: Download,
    badge: '8',
    children: [
      { name: 'All Requests', href: '/admin/sample-requests', icon: Download },
      { name: 'Approved', href: '/admin/sample-requests/approved', icon: Download },
      { name: 'Pending', href: '/admin/sample-requests/pending', icon: Download }
    ]
  },
  {
    name: 'E-commerce',
    href: '/admin/ecommerce',
    icon: ShoppingCart,
    children: [
      { name: 'Orders', href: '/admin/ecommerce/orders', icon: ShoppingCart },
      { name: 'Products', href: '/admin/ecommerce/products', icon: ShoppingCart },
      { name: 'Pricing', href: '/admin/ecommerce/pricing', icon: CreditCard },
      { name: 'Refunds', href: '/admin/ecommerce/refunds', icon: CreditCard }
    ]
  },
  {
    name: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    children: [
      { name: 'Overview', href: '/admin/analytics', icon: BarChart3 },
      { name: 'Traffic', href: '/admin/analytics/traffic', icon: BarChart3 },
      { name: 'Conversions', href: '/admin/analytics/conversions', icon: BarChart3 },
      { name: 'Revenue', href: '/admin/analytics/revenue', icon: BarChart3 }
    ]
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    children: [
      { name: 'General', href: '/admin/settings', icon: Settings },
      { name: 'Security', href: '/admin/settings/security', icon: Settings },
      { name: 'Integrations', href: '/admin/settings/integrations', icon: Settings },
      { name: 'API Keys', href: '/admin/settings/api-keys', icon: Settings }
    ]
  }
]

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['Dashboard']))
  const pathname = usePathname()

  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName)
    } else {
      newExpanded.add(itemName)
    }
    setExpandedItems(newExpanded)
  }

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  const isParentActive = (item: MenuItem) => {
    return item.children?.some(child => isActive(child.href)) || isActive(item.href)
  }

  return (
    <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <div className={`w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full transition-transform ${
              collapsed ? 'rotate-90' : '-rotate-90'
            }`}></div>
          </button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0
          const isExpanded = expandedItems.has(item.name)
          const isActiveItem = isParentActive(item)

          return (
            <div key={item.name}>
              <div className="relative">
                <button
                  onClick={() => hasChildren ? toggleItem(item.name) : undefined}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActiveItem
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`h-4 w-4 ${isActiveItem ? 'text-blue-600' : 'text-gray-500'}`} />
                    {!collapsed && <span>{item.name}</span>}
                  </div>
                  
                  {!collapsed && (
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {hasChildren && (
                        <div className={`w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}></div>
                      )}
                    </div>
                  )}
                </button>
              </div>

              {/* Submenu */}
              {hasChildren && isExpanded && !collapsed && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.children!.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(child.href)
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <child.icon className={`h-4 w-4 ${isActive(child.href) ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span>{child.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="space-y-2">
          <Link
            href="/admin/help"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            {!collapsed && <span>Help & Support</span>}
          </Link>
          
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
