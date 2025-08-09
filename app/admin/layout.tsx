import { Suspense } from 'react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export const metadata = {
  title: 'Admin Dashboard - Market Research Insights',
  description: 'Admin dashboard for managing market research reports, leads, and content',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Suspense fallback={<LoadingSpinner />}>
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  )
} 