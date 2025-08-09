// file: components/reports/StickySidebar.tsx
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface StickySidebarProps {
  reportCode: string;
}

export default function StickySidebar({ reportCode }: StickySidebarProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API endpoint
    console.log("Form Submitted:", { ...formData, reportCode });
    setIsSubmitted(true);
  };

  return (
    <div className="sticky top-24">
      <div className="bg-gray-50 rounded-lg shadow-lg p-6 border border-gray-200">
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-600">Our team will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Request a Sample</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Submit Enquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}