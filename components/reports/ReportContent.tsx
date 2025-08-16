// file: components/reports/ReportContent.tsx
'use client';

import React from 'react';

interface ReportContentProps {
  report: {
    id: string;
    title: string;
    category: string;
    content: Record<string, string>;
  };
  activeTab: string;
}

export default function ReportContent({ report, activeTab }: ReportContentProps) {
  const renderContent = () => {
    const content = report.content[activeTab];
    if (!content) return <p>Content not available for this tab.</p>;
    
    return (
      <div 
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="prose prose-sm max-w-none">
        {renderContent()}
      </div>
    </div>
  );
}