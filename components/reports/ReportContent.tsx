// file: components/reports/ReportContent.tsx
'use client';

import { useState } from 'react';
import { Report } from '@prisma/client';

interface ReportContentProps {
  report: Report & { content: any, faqs: any }; // Use 'any' for flexible JSON
}

export default function ReportContent({ report }: ReportContentProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'toc', label: 'Table of Contents' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'faq', label: `FAQ's` },
  ];

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="prose prose-lg max-w-none">
        {activeTab === 'description' && (
          <div>
            <h2>Market Outlook</h2>
            <p>{report.content?.marketOutlook}</p>
            
            <h2>Market Dynamics</h2>
            {report.content?.marketDynamics?.map((dynamic: any, index: number) => (
              <div key={index}>
                <h3>{dynamic.heading}</h3>
                <p>{dynamic.body}</p>
              </div>
            ))}

            <h2>Key Players</h2>
            <ul>
              {report.content?.keyPlayers?.map((player: string, index: number) => (
                <li key={index}>{player}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'toc' && (
          <div>
            <h2>Table of Contents</h2>
            <p>A detailed Table of Contents is available in the sample report. Please fill out the form to request a sample.</p>
            {/* You could render a simplified TOC from report.toc if available */}
          </div>
        )}
        {activeTab === 'methodology' && (
          <div>
            <h2>Research Methodology</h2>
            <p>Our research methodology combines primary and secondary research, including interviews with key industry stakeholders, analysis of proprietary data, and a review of published sources to provide a comprehensive market view.</p>
          </div>
        )}
        {activeTab === 'faq' && (
          <div>
            <h2>Frequently Asked Questions</h2>
            {report.faqs?.map((faq: any, index: number) => (
                <div key={index} className="mt-4">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}