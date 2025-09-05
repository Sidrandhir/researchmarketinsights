'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminHelpPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('getting-started');

  if (!session || (session.user as any)?.role !== 'ADMIN') {
    router.push('/admin');
    return null;
  }

  const tabs = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'upload-guide', name: 'Upload Guide', icon: '📤' },
    { id: 'reports', name: 'Reports', icon: '📊' },
    { id: 'users', name: 'User Management', icon: '👥' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' }
  ];

  const faqs = [
    {
      question: "How do I upload reports in bulk?",
      answer: "Go to Reports > Upload Reports, download the Excel template, fill it with your data, and upload the file. The system will automatically process all reports."
    },
    {
      question: "What file formats are supported?",
      answer: "We support Excel files (.xlsx, .xls) and CSV files. The maximum file size is 10MB."
    },
    {
      question: "How do I manage user permissions?",
      answer: "Navigate to Users > User Roles to assign different permission levels to users. You can create custom roles with specific access rights."
    },
    {
      question: "Can I schedule automatic backups?",
      answer: "Yes, go to Settings > System to configure automatic database backups. You can set daily, weekly, or monthly schedules."
    },
    {
      question: "How do I enable maintenance mode?",
      answer: "In Settings > General, toggle the 'Maintenance Mode' option. This will show a maintenance page to all visitors except admins."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'getting-started':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Welcome to Admin Panel</h3>
              <p className="text-blue-800 mb-4">
                This admin panel gives you complete control over your market research platform. Here&apos;s how to get started:
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Upload reports using the Excel template</li>
                <li>Manage users and their permissions</li>
                <li>Configure system settings</li>
                <li>Monitor analytics and performance</li>
                <li>Handle customer inquiries and leads</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => router.push('/admin/upload-reports')}
                    className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <div className="font-medium text-blue-900">Upload Reports</div>
                    <div className="text-sm text-blue-700">Bulk upload reports via Excel</div>
                  </button>
                  <button 
                    onClick={() => router.push('/admin/reports')}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <div className="font-medium text-green-900">Manage Reports</div>
                    <div className="text-sm text-green-700">View and edit existing reports</div>
                  </button>
                  <button 
                    onClick={() => router.push('/admin/users')}
                    className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                  >
                    <div className="font-medium text-purple-900">User Management</div>
                    <div className="text-sm text-purple-700">Add and manage users</div>
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Database</span>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">File Storage</span>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">Available</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email Service</span>
                    <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Last Backup</span>
                    <span className="text-gray-600 text-sm">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'upload-guide':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">📤 Report Upload Guide</h3>
              <p className="text-green-800 mb-4">
                Follow these steps to successfully upload reports in bulk:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download Template</h4>
                  <p className="text-gray-600">Go to Upload Reports page and download the Excel template with sample data.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fill Required Fields</h4>
                  <p className="text-gray-600">Complete all required fields: title, slug, industry, and description.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Choose Industry Category</h4>
                  <p className="text-gray-600">Select from: life-sciences, technology, automotive, energy, food, chemicals, aerospace, banking, consumer, electronics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Upload File</h4>
                  <p className="text-gray-600">Upload your Excel file and wait for processing. Check results for any errors.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important Notes</h4>
              <ul className="list-disc list-inside space-y-1 text-yellow-800">
                <li>File size must be under 10MB</li>
                <li>Use unique slugs for each report</li>
                <li>Industry categories are case-sensitive</li>
                <li>Check upload results for any failed entries</li>
              </ul>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">📊 Reports Management</h3>
              <p className="text-purple-800">
                Learn how to effectively manage your market research reports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Report Status</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Published - Visible to users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Draft - Not visible to users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Archived - Hidden from users</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Bulk Actions</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Select multiple reports to perform bulk operations</p>
                  <p>• Change status of multiple reports at once</p>
                  <p>• Delete multiple reports simultaneously</p>
                  <p>• Export selected reports to Excel</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">👥 User Management</h3>
              <p className="text-indigo-800">
                Manage user accounts, roles, and permissions effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">User Roles</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-900">Admin</div>
                    <div className="text-sm text-blue-700">Full access to all features</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-900">Editor</div>
                    <div className="text-sm text-green-700">Can create and edit reports</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="font-medium text-yellow-900">Viewer</div>
                    <div className="text-sm text-yellow-700">Read-only access</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">User Actions</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Create new user accounts</p>
                  <p>• Assign roles and permissions</p>
                  <p>• Reset user passwords</p>
                  <p>• Deactivate user accounts</p>
                  <p>• View user activity logs</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">⚙️ System Settings</h3>
              <p className="text-orange-800">
                Configure your application settings and preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">General Settings</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Site name and description</p>
                  <p>• Contact email addresses</p>
                  <p>• File upload limits</p>
                  <p>• Allowed file types</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Feature Toggles</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• User registration</p>
                  <p>• Comments system</p>
                  <p>• Email notifications</p>
                  <p>• Maintenance mode</p>
                  <p>• Analytics tracking</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">🔧 Troubleshooting</h3>
              <p className="text-red-800">
                Common issues and their solutions.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Need More Help?</h4>
              <p className="text-blue-800 mb-4">
                If you can&apos;t find the answer to your question, please contact our support team.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">❓ Help & Support</h1>
            <p className="text-gray-600">Get help with using the admin panel and managing your platform</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              📚 Documentation
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics</h3>
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}



