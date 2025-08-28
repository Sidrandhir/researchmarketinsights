"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  DollarSign, 
  ChevronRight,
  User as UserIcon
} from 'lucide-react';

// Country data with flags and codes
const countries = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
  { name: 'Latvia', code: '+371', flag: '🇱🇻' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'Malta', code: '+356', flag: '🇲🇹' },
  { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'UAE', code: '+971', flag: '🇦🇪' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Macau', code: '+853', flag: '🇲🇴' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'East Timor', code: '+670', flag: '🇹🇱' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯' },
  { name: 'Solomon Islands', code: '+677', flag: '🇸🇧' },
  { name: 'Vanuatu', code: '+678', flag: '🇻🇺' },
  { name: 'New Caledonia', code: '+687', flag: '🇳🇨' },
  { name: 'French Polynesia', code: '+689', flag: '🇵🇫' },
  { name: 'Samoa', code: '+685', flag: '🇼🇸' },
  { name: 'Tonga', code: '+676', flag: '🇹🇴' },
  { name: 'Kiribati', code: '+686', flag: '🇰🇮' },
  { name: 'Tuvalu', code: '+688', flag: '🇹🇻' },
  { name: 'Nauru', code: '+674', flag: '🇳🇷' },
  { name: 'Palau', code: '+680', flag: '🇵🇼' },
  { name: 'Marshall Islands', code: '+692', flag: '🇲🇭' },
  { name: 'Micronesia', code: '+691', flag: '🇫🇲' },
  { name: 'Northern Mariana Islands', code: '+1-670', flag: '🇲🇵' },
  { name: 'Guam', code: '+1-671', flag: '🇬🇺' },
  { name: 'American Samoa', code: '+1-684', flag: '🇦🇸' },
  { name: 'Puerto Rico', code: '+1-787', flag: '🇵🇷' },
  { name: 'U.S. Virgin Islands', code: '+1-340', flag: '🇻🇮' }
];

export default function GlobalAgenticAISystemsReport() {
  const [activeTab, setActiveTab] = useState('summary');
  const [sampleFormData, setSampleFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSampleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sample requested:', sampleFormData);
    setShowSuccessMessage(true);
    // Reset form
    setSampleFormData({
      fullName: '',
      email: '',
      phone: '',
      company: ''
    });
    // Hide message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleBuyNow = () => {
    window.open('/pricing', '_blank');
  };

  const reportData = {
    title: "Global Agentic AI Systems Market Size, Share & Industry Analysis, By Component (Software, Services, Hardware), By Deployment Type (Cloud-based, On-premises), By Application (Autonomous Systems, Customer Service Automation, Predictive Analytics, Fraud Detection, Personal Assistants), By Industry Vertical (Healthcare, Finance (BFSI), Manufacturing, Automotive, Retail) and Regional Forecast, 2024-2032",
    subtitle: "Comprehensive Market Research Report on Agentic AI Systems Industry",
    lastUpdated: "January 15, 2024",
    format: "PDF",
    reportId: "RMI-2024-006",
    marketSize: "USD 8.45 billion",
    forecastYear: "2032",
    forecastValue: "USD 32.18 billion",
    cagr: "18.7%",
    forecastPeriod: "2024-2032",
    historicalPeriod: "2018-2022",
    pages: 245,
    image: "🤖",
    industry: "Technology & Media"
  };

  const contentSections = {
    summary: {
      title: "KEY MARKET INSIGHTS",
      content: `
        <h2 style="color: #2563eb; margin-bottom: 1rem;">Global Agentic AI Systems Market</h2>
        
        <p style="margin-bottom: 1.5rem;"><strong>Global Agentic AI Systems Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032, By Component (Software, Services, Hardware), By Deployment Type (Cloud-based, On-premises), By Application (Autonomous Systems, Customer Service Automation, Predictive Analytics, Fraud Detection, Personal Assistants), By Industry Vertical (Healthcare, Finance (BFSI), Manufacturing, Automotive, Retail) and By Region (North America, Europe, Asia Pacific, South America, and Middle East and Africa)</strong></p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Overview</h3>
        <p style="margin-bottom: 1.5rem;">The Global Agentic AI Systems Market is experiencing rapid growth driven by the increasing demand for automation and the advancement of artificial intelligence technologies. Agentic AI systems represent a revolutionary advancement in AI, offering autonomous decision-making capabilities and the ability to perform complex tasks without human intervention.</p>
        
        <p style="margin-bottom: 1.5rem;">These systems utilize advanced AI algorithms including deep learning, reinforcement learning, and natural language processing to perceive their environment, make intelligent decisions, and execute actions autonomously. The market is characterized by continuous technological innovations, with key players focusing on developing sophisticated AI agents for various industry applications.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Segmentation</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Component</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Software:</strong> AI algorithms, platforms, and development tools for agentic AI systems</li>
          <li><strong>Services:</strong> Consulting, implementation, and maintenance services</li>
          <li><strong>Hardware:</strong> Computing infrastructure and specialized processors for AI workloads</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Deployment Type</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Cloud-based:</strong> Scalable AI solutions hosted on cloud platforms</li>
          <li><strong>On-premises:</strong> AI systems deployed within organizational infrastructure</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Autonomous Systems:</strong> Self-driving vehicles, drones, and industrial robots</li>
          <li><strong>Customer Service Automation:</strong> AI-powered chatbots and virtual assistants</li>
          <li><strong>Predictive Analytics:</strong> Data-driven forecasting and decision support</li>
          <li><strong>Fraud Detection:</strong> Real-time security and risk assessment</li>
          <li><strong>Personal Assistants:</strong> AI-powered productivity and lifestyle tools</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Industry Vertical</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Healthcare:</strong> Medical diagnosis, drug discovery, and patient care</li>
          <li><strong>Finance (BFSI):</strong> Risk management, trading, and customer service</li>
          <li><strong>Manufacturing:</strong> Process optimization and quality control</li>
          <li><strong>Automotive:</strong> Autonomous driving and vehicle safety</li>
          <li><strong>Retail:</strong> Customer experience and inventory management</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Key Players</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Microsoft Corporation</li>
          <li>Amazon.com, Inc. (AWS)</li>
          <li>Google LLC</li>
          <li>NVIDIA Corporation</li>
          <li>IBM Corporation</li>
          <li>Siemens Healthineers</li>
          <li>GE Healthcare</li>
          <li>Salesforce</li>
          <li>SAP SE</li>
          <li>OpenAI</li>
          <li>Others</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Drivers</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Increasing demand for automation across industries</li>
          <li>Advancements in AI technologies (deep learning, reinforcement learning)</li>
          <li>Growing availability of big data and computing power</li>
          <li>Rising adoption of AI-powered solutions</li>
          <li>Enhanced customer experience requirements</li>
          <li>Investment in AI research and development</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Regional Analysis</h3>
        <p style="margin-bottom: 1.5rem;">The market is segmented into key regions including North America, Europe, Asia Pacific, South America, and Middle East & Africa. North America currently dominates the market due to advanced technology infrastructure, strong presence of key market players, and early adoption of AI technologies. Asia Pacific is expected to witness the fastest growth during the forecast period, driven by increasing digital transformation initiatives and government support for AI development.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">What to Expect from Industry Profile?</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li>Save time carrying out entry-level research by identifying the size, growth, major segments, and leading players in the Agentic AI Systems market in the world.</li>
          <li>Use PORTER's Five Forces analysis to determine the competitive intensity and therefore market attractiveness of the Global Agentic AI Systems market.</li>
          <li>Leading company profiles reveal details of key Agentic AI Systems market players' global operations, strategies, financial performance & recent developments.</li>
          <li>Add weight to presentations and pitches by understanding the future growth prospects of the Global Agentic AI Systems market with forecast for the decade by both market share (%) & revenue (USD Million).</li>
        </ol>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">FAQ's</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li><strong>What are the major factors driving the growth of the Global Agentic AI Systems Market?</strong><br>
          Increasing demand for automation, advancements in AI technologies, growing availability of data, rising adoption of AI-powered solutions, enhanced customer experience, and investment in AI research and development are the major factors driving market growth.</li>
          <li><strong>What would be the CAGR of the Global Agentic AI Systems Market over the forecast period?</strong><br>
          The Global Agentic AI Systems Market is poised to grow at a CAGR of 18.7% from 2024 to 2032.</li>
          <li><strong>Which component led the Global Agentic AI Systems Market?</strong><br>
          The software component has dominated the Agentic AI Systems market in 2024.</li>
          <li><strong>Which region will provide more business opportunities for the growth of the Global Agentic AI Systems Market in the future?</strong><br>
          The Asia Pacific region is expected to create more opportunities in the market due to increasing digital transformation initiatives and government support for AI development.</li>
          <li><strong>Who are the major companies dominating the Global Agentic AI Systems Market?</strong><br>
          Microsoft Corporation, Amazon.com, Inc. (AWS), Google LLC, NVIDIA Corporation, IBM Corporation, Siemens Healthineers, GE Healthcare, Salesforce, SAP SE, OpenAI, and Others are the major players of the market.</li>
          <li><strong>What are the segments in the Global Agentic AI Systems Market?</strong><br>
          By Component, By Deployment Type, By Application, and By Industry Vertical are the industry key segments considered for research study.</li>
          <li><strong>What is the estimated market revenue for the Global Agentic AI Systems Market in 2032?</strong><br>
          The estimated revenue for the Global Agentic AI Systems Market in 2032 is USD 32.18 billion.</li>
        </ol>
      `
    },
    toc: {
      title: "TOC",
      content: `
        <h3 style="color: #2563eb; margin-bottom: 1rem;">1. Executive Summary</h3>
        <p style="margin-bottom: 1.5rem;">Market overview, key findings, and strategic recommendations</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">2. Market Introduction</h3>
        <p style="margin-bottom: 1.5rem;">Market definition, scope, and research methodology</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">3. Market Dynamics</h3>
        <p style="margin-bottom: 1.5rem;">Drivers, restraints, opportunities, and challenges analysis</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">4. Market Segmentation</h3>
        <p style="margin-bottom: 1.5rem;">By component, deployment type, application, industry vertical, and regional breakdown</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">5. Regional Analysis</h3>
        <p style="margin-bottom: 1.5rem;">North America, Europe, Asia Pacific, and other regions</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">6. Competitive Landscape</h3>
        <p style="margin-bottom: 1.5rem;">Key players, market share, and strategic analysis</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">7. Company Profiles</h3>
        <p style="margin-bottom: 1.5rem;">Detailed analysis of major market players</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">8. Market Forecast</h3>
        <p style="margin-bottom: 1.5rem;">Future projections and growth opportunities</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">9. Methodology</h3>
        <p style="margin-bottom: 1.5rem;">Research approach, data sources, and validation</p>
        
        <h3 style="color: #2563eb; margin-bottom: 1rem;">10. Appendix</h3>
        <p style="margin-bottom: 1.5rem;">Additional data, charts, and supporting information</p>
      `
    },
    segmentation: {
      title: "SEGMENTATION",
      content: `
        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Component</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Software</h4>
            <p><strong>Market Share:</strong> 65%</p>
            <p><strong>Growth Rate:</strong> 22.3%</p>
            <p>AI algorithms, platforms, and development tools that enable agentic AI functionality.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Services</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p><strong>Growth Rate:</strong> 19.8%</p>
            <p>Consulting, implementation, and maintenance services for AI systems.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Hardware</h4>
            <p><strong>Market Share:</strong> 10%</p>
            <p><strong>Growth Rate:</strong> 15.2%</p>
            <p>Computing infrastructure and specialized processors for AI workloads.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Deployment Type</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Cloud-based</h4>
            <p><strong>Market Share:</strong> 75%</p>
            <p><strong>Growth Rate:</strong> 24.1%</p>
            <p>Scalable AI solutions hosted on cloud platforms with flexible resource allocation.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">On-premises</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p><strong>Growth Rate:</strong> 12.8%</p>
            <p>AI systems deployed within organizational infrastructure for enhanced security.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Application</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Autonomous Systems</h4>
            <p><strong>Market Share:</strong> 30%</p>
            <p><strong>Growth Rate:</strong> 28.5%</p>
            <p>Self-driving vehicles, drones, and industrial robots with AI decision-making.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Customer Service Automation</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p><strong>Growth Rate:</strong> 26.2%</p>
            <p>AI-powered chatbots and virtual assistants for enhanced customer experience.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Predictive Analytics</h4>
            <p><strong>Market Share:</strong> 20%</p>
            <p><strong>Growth Rate:</strong> 23.8%</p>
            <p>Data-driven forecasting and decision support systems.</p>
          </div>
        </div>
      `
    },
    methodology: {
      title: "METHODOLOGY",
      content: `
        <h3 style="color: #2563eb; margin-bottom: 1rem;">Research Approach</h3>
        <p style="margin-bottom: 1.5rem;">This comprehensive market research report employs a multi-faceted research methodology combining primary and secondary research approaches to ensure accuracy, reliability, and comprehensiveness.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Primary Research</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Expert Interviews:</strong> Conducted 200+ interviews with AI professionals, technology experts, and industry leaders</li>
          <li><strong>Surveys:</strong> Distributed 800+ surveys to technology companies and end-users</li>
          <li><strong>Focus Groups:</strong> Organized 35+ focus group discussions across major markets</li>
          <li><strong>Trade Shows:</strong> Attended 20+ major technology and AI trade shows</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Secondary Research</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Company Reports:</strong> Analyzed annual reports, financial statements, and investor presentations</li>
          <li><strong>Industry Publications:</strong> Reviewed 300+ industry journals, white papers, and research articles</li>
          <li><strong>Government Sources:</strong> Utilized data from regulatory bodies and technology agencies</li>
          <li><strong>Market Databases:</strong> Accessed proprietary databases and industry repositories</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Data Validation</h3>
        <p style="margin-bottom: 1.5rem;">All collected data undergoes rigorous validation through cross-verification with multiple sources, statistical analysis, expert review, and market trend consistency checks.</p>
      `
    }
  };

  const suggestedReports = [
    {
      title: "Global Plant Based Meat Alternatives Market",
      description: "Comprehensive analysis of plant-based meat alternatives market including market size, trends, and forecast 2024-2032",
      price: "$4,999",
      reportCode: "RMI-2024-004",
      features: ["Market Size & Forecast", "Source Analysis", "Product Segmentation", "Regional Insights"],
      image: "🥬",
      slug: "global-plant-based-meat-alternatives-market"
    },
    {
      title: "Global Polymer Encapsulated Brachytherapy Devices Market",
      description: "Comprehensive analysis of polymer encapsulated brachytherapy devices market including market size, trends, and forecast 2024-2032",
      price: "$4,999",
      reportCode: "RMI-2024-005",
      features: ["Market Size & Forecast", "Product Analysis", "Application Insights", "Regional Forecast"],
      image: "🏥",
      slug: "polymer-encapsulated-brachytherapy-devices-market"
    },
    {
      title: "Global Patient Repositioning System Market",
      description: "Analysis of patient positioning systems including market size, trends, and forecast 2024-2032",
      price: "$4,999",
      reportCode: "RPT-PRS-001",
      features: ["Market Size & Forecast", "Competitive Analysis", "Regional Insights", "Technology Trends"],
      image: "🛏️",
      slug: "global-patient-repositioning-system-market"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center max-w-md mx-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
            <p className="text-gray-600 mb-6">We will contact you soon.</p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Breadcrumb Banner */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <Link href="/technology-media" className="hover:underline">Technology & Media</Link> / Agentic AI Systems Market
            </div>
            <div className="text-sm italic">
              &ldquo;Designing Growth Strategies is in our DNA&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Content Area */}
          <div className="lg:col-span-2">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 mb-6 border-l-4 border-blue-500">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight tracking-wide">
                {reportData.title}
              </h1>
              <p className="text-xs text-gray-600 mb-4 font-medium">
                Last Updated: {reportData.lastUpdated} | Format: {reportData.format} | Report ID: {reportData.reportId}
              </p>
              
              {/* Report Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-6">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-200">
                  <div className="font-bold text-blue-900 text-xs uppercase tracking-wider">Study Period</div>
                  <div className="text-blue-700 font-semibold">{reportData.historicalPeriod}-{reportData.forecastYear}</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all duration-200">
                  <div className="font-bold text-green-900 text-xs uppercase tracking-wider">Base Year</div>
                  <div className="text-green-700 font-semibold">2024</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200">
                  <div className="font-bold text-purple-900 text-xs uppercase tracking-wider">Historical Data</div>
                  <div className="text-purple-700 font-semibold">{reportData.historicalPeriod}</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-200">
                  <div className="font-bold text-orange-900 text-xs uppercase tracking-wider">Pages</div>
                  <div className="text-orange-700 font-semibold">{reportData.pages}</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-sm p-4 mb-6 border border-gray-100">
              <div className="flex flex-wrap gap-3 justify-center">
                {Object.keys(contentSections).map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 ${
                      activeTab === tabKey
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-105'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200'
                    }`}
                  >
                    {contentSections[tabKey as keyof typeof contentSections].title}
                  </button>
                ))}
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-xs hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Request a FREE Sample Copy
                </button>
              </div>
            </div>

            {/* Content Sections */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="prose prose-sm max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: contentSections[activeTab as keyof typeof contentSections].content 
                  }} 
                />
              </div>
            </div>

            {/* Suggested Reports Section */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">📊</span>
                Suggested Reports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedReports.map((report, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-green-300 transition-all duration-200 transform hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{report.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-xs mb-2 line-clamp-2 leading-tight">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {report.title.includes("Plant Based") ? "Food & Beverages" : report.title.includes("Brachytherapy") ? "Life Sciences" : "Technology & Media"}
                          </span>
                          <span className="text-gray-500">245 Pages</span>
                        </div>
                        <Link href={`/reports/${report.slug}`} className="text-green-600 hover:text-green-700 text-xs font-bold hover:underline transition-colors duration-200">
                          View Report →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Form that scrolls with content */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              
              {/* Report Package Info */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-sm p-4 text-center border border-blue-100">
                <div className="text-4xl mb-3">{reportData.image}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {reportData.title.split(' ').slice(0, 8).join(' ')}...
                </h3>
                <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span className="font-medium">Last Updated: {reportData.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <DollarSign className="w-3 h-3" />
                    <span className="text-gray-700 font-semibold">{reportData.pages} Pages</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <UserIcon className="w-3 h-3" />
                    <span className="font-medium">{reportData.industry}</span>
                  </div>
                </div>
                
                {/* Buy Now Button */}
                <div className="mb-2">
                  <button
                    onClick={handleBuyNow}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg font-bold text-sm hover:from-green-600 hover:to-emerald-700 transition-all duration-200 w-full transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    🛒 Buy Now
                  </button>
                </div>

                {/* Download Sample Button */}
                <div className="mb-2">
                  <button
                    onClick={() => console.log('Download sample clicked')}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-bold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 w-full transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    📥 Download Sample
                  </button>
                </div>
              </div>

              {/* Growth Advisory Services */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-sm p-4 border border-purple-100">
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">💡</span>
                  Growth Advisory Services
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  How can we help you uncover new opportunities and drive sustainable growth?
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-xs transform hover:scale-105 shadow-lg">
                    🎯 Speak to Analyst
                  </button>
                  <Link href="/contact" className="w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-lg font-bold hover:bg-purple-50 transition-all duration-200 text-xs hover:border-purple-700 block text-center">
                    📞 Contact Us
                  </Link>
                </div>
              </div>

              {/* Sample Request Form */}
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-sm p-4 border border-orange-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3 text-center flex items-center justify-center gap-2">
                  <span className="text-orange-600">🎁</span>
                  GET A FREE SAMPLE
                </h3>
                
                <form onSubmit={handleSampleRequest} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                      value={sampleFormData.fullName}
                      onChange={(e) => setSampleFormData({...sampleFormData, fullName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter your business email"
                      value={sampleFormData.email}
                      onChange={(e) => setSampleFormData({...sampleFormData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code Dropdown */}
                      <div className="relative flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center gap-2 px-2.5 py-1.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-w-[90px]"
                        >
                          <span className="text-lg">{selectedCountry.flag}</span>
                          <span className="text-gray-700">{selectedCountry.code}</span>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </button>
                        
                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            <div className="p-2">
                              <input
                                type="text"
                                placeholder="Search countries..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2"
                                onKeyUp={() => {
                                  // You can implement search filtering here
                                }}
                              />
                            </div>
                            <div className="max-h-48 overflow-y-auto">
                              {countries.map((country) => (
                                <button
                                  key={country.code + country.name}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsCountryDropdownOpen(false);
                                  }}
                                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 text-sm"
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span className="text-gray-700">{country.name}</span>
                                  <span className="text-gray-500 ml-auto">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Phone Input */}
                      <input
                        type="tel"
                        required
                        className="flex-1 px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Enter phone number"
                        value={sampleFormData.phone}
                        onChange={(e) => setSampleFormData({...sampleFormData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Enter company name (optional)"
                      value={sampleFormData.company}
                      onChange={(e) => setSampleFormData({...sampleFormData, company: e.target.value})}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 text-xs transform hover:scale-105 shadow-lg"
                  >
                    🚀 Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
