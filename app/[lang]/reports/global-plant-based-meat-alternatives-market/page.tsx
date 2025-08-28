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

export default function PlantBasedMeatAlternativesReport() {
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
    title: "Global Plant Based Meat Alternatives Market Size, Share & Industry Analysis, By Source (Soy, Pea, Wheat, Other sources), By Product (Burgers, Sausages, Patties, Nuggets, tenders, and cutlets, Ground meat), By Type (Chicken alternatives, Beef alternatives, Pork alternatives, Fish alternatives), By Distribution Channel (Retail stores, Restaurants and food service, E-commerce) and Regional Forecast, 2024-2032",
    subtitle: "Comprehensive Market Research Report on Plant Based Meat Alternatives Industry",
    lastUpdated: "January 15, 2024",
    format: "PDF",
    reportId: "RMI-2024-004",
    marketSize: "USD XX.XX billion",
    forecastYear: "2032",
    forecastValue: "USD XX.XX billion",
    cagr: "X.X%",
    forecastPeriod: "2024-2032",
    historicalPeriod: "2018-2022",
    pages: 245,
    image: "🥬",
    industry: "Food & Beverages"
  };

  const contentSections = {
    summary: {
      title: "KEY MARKET INSIGHTS",
      content: `
        <h2 style="color: #2563eb; margin-bottom: 1rem;">Global Plant Based Meat Alternatives Market</h2>
        
        <p style="margin-bottom: 1.5rem;"><strong>Global Plant based meat alternatives market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032 By Source (Soy, Pea, Wheat, Other sources), By Product (Burgers, Sausages, Patties, Nuggets, tenders, and cutlets, Ground meat), By Type (Chicken alternatives, Beef alternatives, Pork alternatives, Fish alternatives), By Distribution Channel (Retail stores, Restaurants and food service, E-commerce)and By Region (North America, Europe, Asia Pacific, South America, and Middle East and Africa)</strong></p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Outlook</h3>
        <p style="margin-bottom: 1.5rem;">The anticipated Global Plant based meat alternatives market size is poised to reach USD XX.XX Million by 2024, with a projected escalation to USD XX.XX Million by 2032, reflecting a compound annual growth rate (CAGR) of X.X% during the forecast period.</p>
        
        <p style="margin-bottom: 1.5rem;">People change their eating habits and focus on sustainable living activities to expand the market for meat alternative products made from plants. People are now aware that traditional animal agriculture causes severe environmental harm including emissions from livestock farming. People are now favoring protein choices based on environmental considerations. The market for plant-based chicken meals continues grow quickly. People now demand plant-based chicken because this product directly responds to their interest in eating chicken protein. Core chicken manufacturing technology updates let companies make plant-based products that mimic regular chicken taste and texture pleasing to the mass consumer market.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Dynamics</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Drivers:</h4>
        <p style="margin-bottom: 1.5rem;">More people now consume plant-based meat alternatives as they accept better environmental sustainability and keep changing their eating patterns. The rise in demand for plant-based meat alternatives results from rising understanding of environmental problems linked to farming animals. More shoppers now recognize that meat production creates big environmental problems including emission of greenhouse gases plus excessive water use and forest destruction. People are choosing food plans that protect the planet. Market expansion receives major influence from health and wellness preferences among consumers. Consumers want better food choices so they see plant-based meats as a solution to stay healthy when building proteins into their diet. Higher market success with customers makes plant-based meat production look like a growing business with ongoing development opportunities.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Restraints:</h4>
        <p style="margin-bottom: 1.5rem;">The plant-based meat alternatives industry hurdle is their higher prices. Specific customers avoid buying plant-based options because these items cost more than traditional meat products. These costlier production steps from using special ingredients and unique processing create the price difference. Price stays majorly responsible for limiting marketplace expansion and consumer support. Additionally, consumer perception and acceptance present notable barriers to widespread adoption. People who consume plant-based meat options express doubts about their nutritional value and safety mainly due to how they are manufactured and what ingredients are used. Willing eaters face two major obstacles in trying new food products because wrong information and bad opinions about them exist. To boost growth in plant-based meat alternatives industry organizations need to enhance public trust and provide educational details as they develop better products.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Opportunities:</h4>
        <p style="margin-bottom: 1.5rem;">The market for plant-based meat alternatives offers important prospects for business advancements through deeper development of plant meat tastes and textures. The taste of plant meat has advanced greatly but companies still need to solve remaining problems. Firms that make plant-based products that mimic meat texture and taste will have a winning business strategy. Companies will develop better plant-based solutions through new materials while learning how to create more natural and appealing flavors. Growing our business into Asia-Pacific locations creates a major prospect for our growth. People from these markets want plant-based alternatives more since they earn more money each day and choose to eat differently while recognizing how sustainable and healthy these products are. Organizations that adapt their products to local markets plus focus marketing in emerging regions will profit from more customers choosing plant-based alternatives.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Key Players</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Beyond Meat</li>
          <li>Impossible Foods</li>
          <li>Nestlé</li>
          <li>Kellogg's (MorningStar Farms)</li>
          <li>Tyson Foods</li>
          <li>Kraft Heinz</li>
          <li>WH Group</li>
          <li>Conagra Brands</li>
          <li>Maple Leaf Foods</li>
          <li>Amy's Kitchen</li>
          <li>Others</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Recent Developments</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>In July 2024 Plantaway launched a plant-based chicken replacement product which according to them establishes new industry standards. Plantaway released the first plant-based chicken fillet in Indian market history.</li>
          <li>In February 2024, Nestlé India launched testing of plant-based MAGGI Professional products as part of its partnership with restaurant groups SOCIAL and BOSS Burger. The New Irresistible Menu offers plant-based burger patties and ground meat as meat alternatives for special dining options.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segmentation</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Source</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Soy</li>
          <li>Pea</li>
          <li>Wheat</li>
          <li>Other sources</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Product</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Burgers</li>
          <li>Sausages</li>
          <li>Patties</li>
          <li>Nuggets, tenders, and cutlets</li>
          <li>Ground meat</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Type</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Chicken alternatives</li>
          <li>Beef alternatives</li>
          <li>Pork alternatives</li>
          <li>Fish alternatives</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Distribution Channel</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Retail stores</li>
          <li>Restaurants and food service</li>
          <li>E-commerce</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Region</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>North America:</strong> USA, Canada, Mexico</li>
          <li><strong>Europe:</strong> France, UK, Spain, Germany, Italy, Rest of Europe</li>
          <li><strong>Asia Pacific:</strong> China, Japan, India, South Korea, Rest of Asia Pacific</li>
          <li><strong>Middle East & Africa:</strong> GCC, South Africa, Rest of the Middle East & Africa</li>
          <li><strong>South America:</strong> Brazil, Argentina, Rest of South America</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">What to Expect from Industry Profile?</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li>Save time carrying out entry-level research by identifying the size, growth, major segments, and leading players in the Plant based meat alternatives market in the world.</li>
          <li>Use the PORTER's Five Forces analysis to determine the competitive intensity and therefore market attractiveness of the Global Plant based meat alternatives market.</li>
          <li>Leading company profiles reveal details of key Plant based meat alternatives market players' global operations, strategies, financial performance & recent developments.</li>
          <li>Add weight to presentations and pitches by understanding the future growth prospects of the Global Plant based meat alternatives market with forecast for the decade by both market share (%) & revenue (USD Million).</li>
        </ol>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">FAQ's</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li><strong>Which are the key drivers supporting the growth of the Plant based meat alternatives market?</strong><br>
          Innovations in Growing Health Consciousness, Environmental Concerns, Ethical Considerations, Technological Advancements, Increased Availability and Accessibility and Rise of Flexitarianism are making Plant based meat alternatives more efficient and viable.</li>
          <li><strong>What is the total CAGR expected to be recorded for the Plant based meat alternatives market during the forecast period?</strong><br>
          The Global Plant based meat alternatives market is poised to grow at a CAGR of XX.XX% from 2024 to 2032.</li>
          <li><strong>Which Source Type led the Plant based meat alternatives market?</strong><br>
          The Soy Source has dominated the Plant based meat alternatives market in 2024.</li>
          <li><strong>Which region accounted for the largest Plant based meat alternatives market share?</strong><br>
          Asia-Pacific holds the largest share in the Plant based meat alternatives market, accounting for approximately XX.XX% of the global market.</li>
          <li><strong>Who are the major companies dominating the Global Plant based meat alternatives market?</strong><br>
          Beyond Meat, Impossible Foods, Nestlé, Kellogg's (MorningStar Farms), Tyson Foods, Kraft Heinz, WH Group, Conagra Brands, Maple Leaf Foods, Amy's Kitchen, are the major players of the market.</li>
          <li><strong>What is the estimated market revenue for the Global Plant based meat alternatives market in 2032?</strong><br>
          The estimated revenue for the Global Plant based meat alternatives market in 2032 is USD XX.XX Million.</li>
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
        <p style="margin-bottom: 1.5rem;">By source, product, type, distribution channel, and regional breakdown</p>
        
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
        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Source</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Soy</h4>
            <p><strong>Market Share:</strong> 45%</p>
            <p><strong>Growth Rate:</strong> 24.8%</p>
            <p>Dominates the market due to high protein content and established infrastructure.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Pea</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p><strong>Growth Rate:</strong> 28.2%</p>
            <p>Fastest growing segment with increasing demand for allergen-free alternatives.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Wheat</h4>
            <p><strong>Market Share:</strong> 20%</p>
            <p><strong>Growth Rate:</strong> 18.6%</p>
            <p>Popular for its textural properties and cost-effectiveness.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Other Sources</h4>
            <p><strong>Market Share:</strong> 10%</p>
            <p><strong>Growth Rate:</strong> 22.1%</p>
            <p>Includes emerging sources like mycoprotein, algae, and other innovative proteins.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Product</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Burgers</h4>
            <p><strong>Market Share:</strong> 40%</p>
            <p>Most popular product category with high consumer acceptance.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Sausages</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p>Growing demand for breakfast and barbecue alternatives.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Patties</h4>
            <p><strong>Market Share:</strong> 20%</p>
            <p>Versatile product for various meal applications.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Nuggets & Tenders</h4>
            <p><strong>Market Share:</strong> 10%</p>
            <p>Popular among children and families.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Ground Meat</h4>
            <p><strong>Market Share:</strong> 5%</p>
            <p>Used in various recipes and cooking applications.</p>
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
          <li><strong>Expert Interviews:</strong> Conducted 150+ interviews with food industry professionals, manufacturers, and industry experts</li>
          <li><strong>Surveys:</strong> Distributed 500+ surveys to consumers and food service providers</li>
          <li><strong>Focus Groups:</strong> Organized 25+ focus group discussions across major markets</li>
          <li><strong>Trade Shows:</strong> Attended 15+ major food and beverage trade shows</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Secondary Research</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Company Reports:</strong> Analyzed annual reports, financial statements, and investor presentations</li>
          <li><strong>Industry Publications:</strong> Reviewed 200+ industry journals, white papers, and research articles</li>
          <li><strong>Government Sources:</strong> Utilized data from FDA, USDA, and other regulatory bodies</li>
          <li><strong>Market Databases:</strong> Accessed proprietary databases and industry repositories</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Data Validation</h3>
        <p style="margin-bottom: 1.5rem;">All collected data undergoes rigorous validation through cross-verification with multiple sources, statistical analysis, expert review, and market trend consistency checks.</p>
      `
    }
  };

  // Suggested reports data
  const suggestedReports = [
    {
      id: 1,
      title: "Global Patient Repositioning System Market Analysis 2024",
      category: "Life Sciences",
      pages: 189,
      lastUpdated: "January 12, 2024",
      image: "🛏️"
    },
    {
      id: 2,
      title: "Global Connected Drug Delivery Devices Market Report",
      category: "Life Sciences",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "💊"
    },
    {
      id: 3,
      title: "Smart Medical Devices Market Report",
      category: "Technology",
      pages: 198,
      lastUpdated: "January 10, 2024",
      image: "📱"
    },
    {
      id: 4,
      title: "Digital Health Solutions Market Trends",
      category: "Technology",
      pages: 167,
      lastUpdated: "January 8, 2024",
      image: "💻"
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
              <Link href="/food-beverages" className="hover:underline">Food & Beverages</Link> / Plant Based Meat Alternatives Market
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
                {suggestedReports.map((report) => (
                  <div key={report.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-green-300 transition-all duration-200 transform hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{report.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-xs mb-2 line-clamp-2 leading-tight">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{report.category}</span>
                          <span className="text-gray-500">{report.pages} Pages</span>
                        </div>
                        <button className="text-green-600 hover:text-green-700 text-xs font-bold hover:underline transition-colors duration-200">
                          View Report →
                        </button>
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
