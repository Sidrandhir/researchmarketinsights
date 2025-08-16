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

interface ContentSections {
  [key: string]: {
    title: string;
    content: string;
  };
}

export default function ReportContent({ report, activeTab }: ReportContentProps) {
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'toc', label: 'Table of Contents' },
    { id: 'segmentation', label: 'Segmentation' },
    { id: 'methodology', label: 'Methodology' },
  ];

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