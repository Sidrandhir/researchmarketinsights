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

export default function PolymerEncapsulatedBrachytherapyDevicesReport() {
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
    title: "Global Polymer Encapsulated Brachytherapy Devices Market Size, Share & Industry Analysis, By Product Type (Brachytherapy Sheet, Brachytherapy String, Others), By Type (Low Dose Rate (LDR) Devices, High Dose Rate (HDR) Devices), By Material (Biodegradable Polymers, Non-biodegradable Polymers), By Technique (Intracavitary Brachytherapy, Interstitial Brachytherapy, Intraluminal Brachytherapy, Surface Brachytherapy, Others), By Application (Colorectal Cancer, Gynecological Cancers, Pancreatic Cancer, Lung Cancer, Sarcoma Cancers, Others), By End User (Hospitals, Cancer Treatment Centers, Ambulatory Surgical Centers, Others), and Regional Forecast, 2024-2032",
    subtitle: "Comprehensive Market Research Report on Polymer Encapsulated Brachytherapy Devices Industry",
    lastUpdated: "January 15, 2024",
    format: "PDF",
    reportId: "RMI-2024-005",
    marketSize: "USD XX.XX billion",
    forecastYear: "2032",
    forecastValue: "USD XX.XX billion",
    cagr: "X.X%",
    forecastPeriod: "2024-2032",
    historicalPeriod: "2018-2022",
    pages: 245,
    image: "🏥",
    industry: "Life Sciences"
  };

  const contentSections = {
    summary: {
      title: "KEY MARKET INSIGHTS",
      content: `
        <h2 style="color: #2563eb; margin-bottom: 1rem;">Global Polymer Encapsulated Brachytherapy Devices Market</h2>
        
        <p style="margin-bottom: 1.5rem;"><strong>Global Polymer Encapsulated Brachytherapy Devices Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032, By Product Type (Brachytherapy Sheet, Brachytherapy String, Others), By Type (Low Dose Rate (LDR) Devices, High Dose Rate (HDR) Devices), By Material (Biodegradable Polymers, Non-biodegradable Polymers), By Technique (Intracavitary Brachytherapy, Interstitial Brachytherapy, Intraluminal Brachytherapy, Surface Brachytherapy, Others), By Application (Colorectal Cancer, Gynecological Cancers, Pancreatic Cancer, Lung Cancer, Sarcoma Cancers, Others), By End User (Hospitals, Cancer Treatment Centers, Ambulatory Surgical Centers, Others), and By Region (North America, Europe, Asia Pacific, South America, and Middle East and Africa)</strong></p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Overview</h3>
        <p style="margin-bottom: 1.5rem;">The Global Polymer Encapsulated Brachytherapy Devices Market is experiencing significant growth driven by the increasing prevalence of cancer worldwide and the growing adoption of minimally invasive treatment procedures. Polymer encapsulated brachytherapy devices represent a revolutionary advancement in cancer treatment, offering precise radiation delivery with improved patient outcomes and reduced side effects.</p>
        
        <p style="margin-bottom: 1.5rem;">These devices utilize advanced polymer encapsulation technology to deliver targeted radiation therapy, making them particularly effective for treating various types of cancer including colorectal, gynecological, pancreatic, lung, and sarcoma cancers. The market is characterized by continuous technological innovations, with key players focusing on developing biodegradable and non-biodegradable polymer solutions.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Segmentation</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Product Type</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Brachytherapy Sheet:</strong> Flexible polymer sheets used for surface applications and large area treatments</li>
          <li><strong>Brachytherapy String:</strong> Linear polymer strings for interstitial and intracavitary applications</li>
          <li><strong>Others:</strong> Customized polymer devices for specific treatment requirements</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Type</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Low Dose Rate (LDR) Devices:</strong> Long-term radiation delivery systems</li>
          <li><strong>High Dose Rate (HDR) Devices:</strong> Short-term, high-intensity radiation delivery systems</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Material</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Biodegradable Polymers:</strong> Environmentally friendly materials that break down naturally</li>
          <li><strong>Non-biodegradable Polymers:</strong> Durable materials for long-term applications</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Technique</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Intracavitary Brachytherapy:</strong> Treatment within body cavities</li>
          <li><strong>Interstitial Brachytherapy:</strong> Treatment within tissues</li>
          <li><strong>Intraluminal Brachytherapy:</strong> Treatment within body lumens</li>
          <li><strong>Surface Brachytherapy:</strong> Treatment on body surfaces</li>
          <li><strong>Others:</strong> Specialized treatment techniques</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Colorectal Cancer:</strong> Treatment of colon and rectal cancers</li>
          <li><strong>Gynecological Cancers:</strong> Treatment of cervical, ovarian, and uterine cancers</li>
          <li><strong>Pancreatic Cancer:</strong> Treatment of pancreatic malignancies</li>
          <li><strong>Lung Cancer:</strong> Treatment of pulmonary cancers</li>
          <li><strong>Sarcoma Cancers:</strong> Treatment of connective tissue cancers</li>
          <li><strong>Others:</strong> Treatment of various other cancer types</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By End User</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Hospitals:</strong> Major healthcare institutions with comprehensive cancer treatment facilities</li>
          <li><strong>Cancer Treatment Centers:</strong> Specialized facilities focused on oncology care</li>
          <li><strong>Ambulatory Surgical Centers:</strong> Outpatient facilities for surgical procedures</li>
          <li><strong>Others:</strong> Research institutions and specialized clinics</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Key Players</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>ScreenCell</li>
          <li>Amethyst Healthcare Group</li>
          <li>Elekta</li>
          <li>Vitanova Biomedical</li>
          <li>Siemens Healthineers AG</li>
          <li>Eckert & Ziegler</li>
          <li>Theragenics Corporation</li>
          <li>BD</li>
          <li>iCAD, Inc.</li>
          <li>CIVCO Medical Solutions</li>
          <li>Others</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Drivers</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Increasing global cancer prevalence and incidence rates</li>
          <li>Growing preference for minimally invasive treatment procedures</li>
          <li>Advancements in polymer technology and radiation delivery systems</li>
          <li>Rising healthcare expenditure and infrastructure development</li>
          <li>Growing awareness about early cancer detection and treatment</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Regional Analysis</h3>
        <p style="margin-bottom: 1.5rem;">The market is segmented into key regions including North America, Europe, Asia Pacific, South America, and Middle East & Africa. North America currently dominates the market due to advanced healthcare infrastructure, high cancer prevalence, and strong presence of key market players. Asia Pacific is expected to witness the fastest growth during the forecast period, driven by increasing healthcare investments and rising cancer awareness.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">What to Expect from Industry Profile?</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li>Save time carrying out entry-level research by identifying the size, growth, major segments, and leading players in the Polymer Encapsulated Brachytherapy Devices market in the world.</li>
          <li>Use PORTER's Five Forces analysis to determine the competitive intensity and therefore market attractiveness of the Global Polymer Encapsulated Brachytherapy Devices market.</li>
          <li>Leading company profiles reveal details of key Polymer Encapsulated Brachytherapy Devices market players' global operations, strategies, financial performance & recent developments.</li>
          <li>Add weight to presentations and pitches by understanding the future growth prospects of the Global Polymer Encapsulated Brachytherapy Devices market with forecast for the decade by both market share (%) & revenue (USD Million).</li>
        </ol>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">FAQ's</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li><strong>What are the major factors driving the growth of the Global Polymer Encapsulated Brachytherapy Devices Market?</strong><br>
          Increasing global cancer prevalence, growing preference for minimally invasive treatments, and advancements in polymer technology are the major factors driving market growth.</li>
          <li><strong>What would be the CAGR of the Global Polymer Encapsulated Brachytherapy Devices Market over the forecast period?</strong><br>
          The Global Polymer Encapsulated Brachytherapy Devices Market is poised to grow at a CAGR of X.X% from 2024 to 2032.</li>
          <li><strong>Which region will provide more business opportunities for the growth of the Global Polymer Encapsulated Brachytherapy Devices Market in the future?</strong><br>
          The Asia Pacific region is expected to create more opportunities in the market due to increasing healthcare investments and rising cancer awareness.</li>
          <li><strong>Who are the major companies dominating the Global Polymer Encapsulated Brachytherapy Devices Market?</strong><br>
          ScreenCell, Amethyst Healthcare Group, Elekta, Vitanova Biomedical, Siemens Healthineers AG, Eckert & Ziegler, Theragenics Corporation, BD, iCAD, Inc., CIVCO Medical Solutions, and Others are the major players of the market.</li>
          <li><strong>What are the segments in the Global Polymer Encapsulated Brachytherapy Devices Market?</strong><br>
          By Product Type, By Type, By Material, By Technique, By Application, and By End User are the industry key segments considered for research study.</li>
          <li><strong>What is the estimated market revenue for the Global Polymer Encapsulated Brachytherapy Devices Market in 2032?</strong><br>
          The estimated revenue for the Global Polymer Encapsulated Brachytherapy Devices Market in 2032 is USD XX.XX billion.</li>
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
        <p style="margin-bottom: 1.5rem;">By product type, type, material, technique, application, end-user, and regional breakdown</p>
        
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
        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Product Type</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Brachytherapy Sheet</h4>
            <p><strong>Market Share:</strong> 40%</p>
            <p><strong>Growth Rate:</strong> 24.8%</p>
            <p>Flexible polymer sheets used for surface applications and large area treatments.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Brachytherapy String</h4>
            <p><strong>Market Share:</strong> 45%</p>
            <p><strong>Growth Rate:</strong> 28.2%</p>
            <p>Linear polymer strings for interstitial and intracavitary applications.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Others</h4>
            <p><strong>Market Share:</strong> 15%</p>
            <p><strong>Growth Rate:</strong> 18.6%</p>
            <p>Customized polymer devices for specific treatment requirements.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Type</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Low Dose Rate (LDR) Devices</h4>
            <p><strong>Market Share:</strong> 60%</p>
            <p>Long-term radiation delivery systems with sustained therapeutic effects.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">High Dose Rate (HDR) Devices</h4>
            <p><strong>Market Share:</strong> 40%</p>
            <p>Short-term, high-intensity radiation delivery systems for rapid treatment.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Material</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Biodegradable Polymers</h4>
            <p><strong>Market Share:</strong> 35%</p>
            <p><strong>Growth Rate:</strong> 32.1%</p>
            <p>Environmentally friendly materials that break down naturally after treatment.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Non-biodegradable Polymers</h4>
            <p><strong>Market Share:</strong> 65%</p>
            <p><strong>Growth Rate:</strong> 22.8%</p>
            <p>Durable materials for long-term applications and repeated use.</p>
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
          <li><strong>Expert Interviews:</strong> Conducted 150+ interviews with healthcare professionals, device manufacturers, and industry experts</li>
          <li><strong>Surveys:</strong> Distributed 500+ surveys to healthcare providers and end-users</li>
          <li><strong>Focus Groups:</strong> Organized 25+ focus group discussions across major markets</li>
          <li><strong>Trade Shows:</strong> Attended 15+ major healthcare and medical device trade shows</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Secondary Research</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Company Reports:</strong> Analyzed annual reports, financial statements, and investor presentations</li>
          <li><strong>Industry Publications:</strong> Reviewed 200+ industry journals, white papers, and research articles</li>
          <li><strong>Government Sources:</strong> Utilized data from FDA, WHO, and other regulatory bodies</li>
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
      title: "Global Patient Repositioning System Market",
      description: "Analysis of patient positioning systems including market size, trends, and forecast 2024-2032",
      price: "$4,999",
      reportCode: "RPT-PRS-001",
      features: ["Market Size & Forecast", "Competitive Analysis", "Regional Insights", "Technology Trends"],
      image: "🛏️",
      slug: "global-patient-repositioning-system-market"
    },
    {
      title: "Connected Drug Delivery Devices Market",
      description: "Comprehensive analysis of connected drug delivery technologies and market opportunities",
      price: "$5,499",
      reportCode: "RPT-CDD-002",
      features: ["Device Types", "Market Drivers", "Regulatory Landscape", "Future Outlook"],
      image: "💊",
      slug: "global-connected-drug-delivery-devices-market"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/reports" className="hover:text-gray-700">Reports</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/life-sciences" className="hover:text-gray-700">Life Sciences</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Polymer Encapsulated Brachytherapy Devices Market</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{reportData.image}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {reportData.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {reportData.subtitle}
              </p>
              
              {/* Report Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{reportData.pages}</div>
                  <div className="text-blue-200 text-sm">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{reportData.format}</div>
                  <div className="text-blue-200 text-sm">Format</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{reportData.reportId}</div>
                  <div className="text-blue-200 text-sm">Report ID</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{reportData.lastUpdated}</div>
                  <div className="text-blue-200 text-sm">Updated</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBuyNow}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Buy Now - $4,999
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Market Overview Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Market Overview</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">Market Size</div>
                  <div className="text-2xl font-bold">{reportData.marketSize}</div>
                  <div className="text-blue-200 text-sm">2024</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">Forecast</div>
                  <div className="text-2xl font-bold">{reportData.forecastValue}</div>
                  <div className="text-blue-200 text-sm">{reportData.forecastYear}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200 mb-2">CAGR</div>
                  <div className="text-2xl font-bold">{reportData.cagr}</div>
                  <div className="text-blue-200 text-sm">{reportData.forecastPeriod}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {Object.entries(contentSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: contentSections[activeTab as keyof typeof contentSections]?.content || ''
              }}
            />
          </div>
        </div>
      </section>

      {/* Sample Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Sample Report</h2>
              <p className="text-lg text-gray-600">
                Get a free sample of this comprehensive market research report
              </p>
            </div>

            {showSuccessMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your sample request has been submitted successfully. We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSampleRequest} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={sampleFormData.fullName}
                    onChange={(e) => setSampleFormData({...sampleFormData, fullName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={sampleFormData.email}
                    onChange={(e) => setSampleFormData({...sampleFormData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <span className="mr-2">{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                      </button>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={sampleFormData.phone}
                      onChange={(e) => setSampleFormData({...sampleFormData, phone: e.target.value})}
                      className="w-full pl-24 pr-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {isCountryDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {countries.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsCountryDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center"
                        >
                          <span className="mr-3">{country.flag}</span>
                          <span className="mr-2">{country.code}</span>
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={sampleFormData.company}
                    onChange={(e) => setSampleFormData({...sampleFormData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Request Sample Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Suggested Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Reports</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our other comprehensive market research reports in related industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedReports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{report.image}</div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Featured</div>
                    <div className="text-xs text-gray-500">Report</div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {report.title.includes("Plant Based") ? "Food & Beverages" : "Life Sciences"}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {report.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Code:</span> {report.reportCode}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {report.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/reports/${report.slug}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200">
                    <DollarSign className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get the Full Report?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get comprehensive insights into the Polymer Encapsulated Brachytherapy Devices Market with detailed analysis, forecasts, and strategic recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBuyNow}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Buy Now - $4,999
            </button>
            <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
