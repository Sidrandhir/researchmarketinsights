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

export default function PatientRepositioningSystemReport() {
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
    title: "Global Patient Repositioning System Market Size, Share & Industry Analysis, By Type (Air-assisted Systems, Mechanical Systems, Robotic Systems), By Application (Hospitals, Long-term Care Facilities, Home Care), By End-user (Healthcare Professionals, Caregivers), and Regional Forecast, 2024-2032",
    subtitle: "Comprehensive Market Research Report on Patient Repositioning Systems Industry",
    lastUpdated: "January 12, 2024",
    format: "PDF",
    reportId: "RMI-2024-002",
    marketSize: "USD 1.2 billion",
    forecastYear: "2032",
    forecastValue: "USD 3.8 billion",
    cagr: "18.5%",
    forecastPeriod: "2024-2032",
    historicalPeriod: "2019-2023",
    pages: 189,
    image: "🛏️",
    industry: "Life Sciences"
  };

  const contentSections = {
    summary: {
      title: "KEY MARKET INSIGHTS",
      content: `
        <h2 style="color: #2563eb; margin-bottom: 1rem;">Global Patient Repositioning System Market</h2>
        
        <p style="margin-bottom: 1.5rem;"><strong>Global Patient Repositioning System Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032, By Product (Tables {Surgical Tables, Radiolucent Imaging Tables, Examination Tables}, Accessories, Others), By Application (Surgeries, Disease Diagnosis, Cancer Therapy, Others), By End User (Hospitals, Ambulatory Surgery Centers, Diagnostic Laboratories, Other), and By Region (North America, Europe, Asia Pacific, South America, and Middle East and Africa)</strong></p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Outlook</h3>
        <p style="margin-bottom: 1.5rem;">Global patient repositioning system market size is poised to reach USD 1.2 Million by 2024, with a projected escalation to USD 3.8 Million by 2032, reflecting a compound annual growth rate (CAGR) of 18.5% during the forecast period.</p>
        
        <p style="margin-bottom: 1.5rem;">Patient Positioning market is a major pillar of the healthcare industry and patient positioning will improve patient comfort, safety, and efficiency. Patient positioning industry revolves around the art of modifying the patients to optimize diagnosis, surgery, and treatment, and requires a variety of equipment and tools to suit different conditions and patient populations. The patient's positioning Market is driving by various factors, among them rise in chronic diseases and increasing demand for minor surgeries are expected to drive the market in future. The aging of the world's population leading to rise in chronic diseases such as heart disease, cancer, and orthopedic diseases are expected to rise in the need/innovation in patient positioning space market. The emergence of robotic patient positioning systems is poised to become a significant trend going forward, and their demand is already experiencing substantial growth due to their precision, efficiency, and user-friendliness. As the quantity of advanced healthcare facilities continues to grow, the development of integrated patient positioning systems is anticipated to accelerate.</p>
        
        <p style="margin-bottom: 1.5rem;">The patient positioning system market has bifurcated to various segments which includes, product type, end-user, application, and geography. A wide range of clinical environments and patient demands are served by the product line, which includes from adaptable tables and chairs to speciality accessories like straps, pads and pillows. Surgical procedures, diagnostic imaging, radiation, rehabilitation, patient transport, and homecare are the applications that highlight the wide range of healthcare continuum applications for patient positioning Market. Geographically, the Patient positioning system market is an fragmented market due to the presence of more middle and small size key players, & differences in regulatory frameworks, medical infrastructure, and demographics. While North America and Europe regions are leading with the advancement in healthcare and the emerging regions as Latin America, Asia Pacific, the Middle East, and Africa are adopting new advanced technologies, which led to showing the fastest growth rate in the emerging countries as China, India, Africa & others. However, challenges such as limited medical services and limited reimbursement in rural areas may expected to hinder the growth of the market.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Dynamics</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Drivers:</h4>
        <p style="margin-bottom: 1.5rem;">The world population is aging and the elderly are increasingly in need of medical assistance and care. This demographic change has led to an increasing number of patients requiring specialized solutions for variety of conditions, from orthopedic surgery to diagnostic procedures. These conditions are help to increase in the use of patient positioning system solutions. Additionally, manufacturers are launching a variety of products to meet the unique anatomical and physical needs of the elderly and chronically ill people, which is expected to boost the market in the foreseen period (2025-2031). Further, according to a paper published by the World Health Organization in October 2022, by 2030, 1 in 6 people worldwide are expected to be 60 years of age or older again, with that number rising from 1 billion in 2020 to an estimated 1.4 billion in 2030. Furthermore, the global population aged over 60 is expected to double to 2.1 billion by 2050. Hence the rising spending on aged people leading to boost market growth. Also according to Global Aging Project 2020, there were 727 million humans over the age of 65 within the global in 2020. Therefore, the aged health problems will result in an increase the variety of hospitals and the want for inpatient treatment centers, which in turn increases the marketplace in patient positioning system space.</p>
        
        <p style="margin-bottom: 1.5rem;">A considerable shift is observed toward patient positioning system solutions that can be customized to fit the unique anatomies of a patient and the particular needs of a surgical case. Modular designs, for instance, have gained increasing popularity in healthcare settings. Modular setups, which are largely installed within operating rooms, are prefabricated off-site, assembled on-site, and provide considerable options for customization. This trend entails creating modular adjustable, accessories, software-driven positioning features, and table tops, which empower healthcare professionals to alter the positioning systems according to the specific requirements of each patient and procedure. Adjustable medical accessories have become a more important aspect of healthcare infrastructure. For example, advanced/innovative beds are designed such that they adjust according to the needs of the patient to provide additional comfort.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Restraints:</h4>
        <p style="margin-bottom: 1.5rem;">The US government has implemented a 2.3% excise tax on the domestic sales of Class I, II, and III medical devices under the Patient Protection and Affordable Care Act. These impositions apply to any medical device manufactured or imported into the United States. Therefore, patient positioning systems market, being Class I and II medical devices, would witness some sort of impact in the United States. Since this tax would also lead to an erosion in the profit margins of the manufacturer, the cost of the medical device is anticipated to rise in the US. Such increases in price would also result in delayed purchase of new instruments, which would act as a partial brake for growth in the market. However, the US is a significant market for patient positioning systems. Thus, introduction of excise tax on medical devices would affect the global patient positioning systems market.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Opportunities:</h4>
        <p style="margin-bottom: 1.5rem;">The developing countries such as India, China, and Brazil have a good growth prospect for the market participants in the next years. The major population of India and China are increasing the market for patient positioning systems. The poor eating habits of these citizens coupled with lifestyle changes have brought chronic diseases like cancer and cardiovascular diseases to increase. For example, GLOBOCAN states that China had 24% of new cases and 30% of cancer deaths around the world, and it is expected to rise by 2030. In a similar context, cancer cases in India have increased from 1.1 million in 2018 to 1.3 million in 2020. Based on these potential growth opportunities in such countries, leading companies are focusing on taking different strategic steps, such as collaboration with local bodies to build up distribution channels, in order to expand their market shares.</p>
        
        <p style="margin-bottom: 1.5rem;">The patient positioning systems are integrating major technological to upgrade, because these systems are integrated with innovations to enhance their effectiveness and precision of the patient positioning systems market. Top manufacturers of market products are interested in investing in R&D & development in order to provide comfort to the patients that lead to the increase in the market growth. Increasing investments by hospitals to modernize operating/operation theatre rooms are also driving the market for the patient positioning systems. Alberta government announced USD 100 Million commitment in March 2021 towards improvement in the Operation theatre/operating rooms of its hospitals; these above mentioned investments and improvements will lead to increasing the market. The advancement of highly sophisticated positioning devices is also at the forefront of research, reflecting the needs of the modern technologically advanced healthcare system. Additionally, in February 2022, Mireye released its smart imaging technology which streamlines the process of positioning patients for X-ray scans while other integration of patient positioning into robotics and AI, besides these are also going to shape the growth of demand and revenue in the near future.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Key Players</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Stryker Corporation (US)</li>
          <li>Steris Plc. (US)</li>
          <li>Hill-Rom, Inc. (US)</li>
          <li>Getinge AB (Germany)</li>
          <li>C-RAD (Sweden)</li>
          <li>Smith & Nephew plc (UK)</li>
          <li>Guangzhou Renfu Medical Equipment CO, LTD (China)</li>
          <li>Medline Industries, LP. (US)</li>
          <li>Elekta AB (Sweden)</li>
          <li>Span America Medical Systems, Inc. (US)</li>
          <li>LEONI AG (Germany)</li>
          <li>Medtronic PLC (US)</li>
          <li>ORFIT INDUSTRIES N.V. (Belgium)</li>
          <li>Famed Zywiec Sp. z o. o (Poland)</li>
          <li>Oncotech (Turkey)</li>
          <li>Others</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Report Coverage</h3>
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <tr><td class="border border-gray-300 p-2 font-semibold">Market Size in 2023:</td><td class="border border-gray-300 p-2">USD 1.2 Million</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">2032 Value Projection:</td><td class="border border-gray-300 p-2">USD 3.8 Million</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Growth Rate (CAGR)</td><td class="border border-gray-300 p-2">18.5%</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Forecast Period:</td><td class="border border-gray-300 p-2">2024 - 2032</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Historical Period:</td><td class="border border-gray-300 p-2">2019 - 2023</td></tr>
        </table>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segments Covered</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>By Product (Tables {Surgical Tables, Radiolucent Imaging Tables, Examination Tables}, Accessories, Others)</li>
          <li>By Application (Surgeries, Disease Diagnosis, Cancer Therapy, Others)</li>
          <li>By End User (Hospitals, Ambulatory Surgery Centers, Diagnostic Laboratories, Other)</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Competitive Landscape</h3>
        <p style="margin-bottom: 1.5rem;">Stryker Corporation (US), Steris Plc. (US), Hill-Rom, Inc. (US), Getinge AB (Germany), C-RAD (Sweden), Smith & Nephew plc (UK), Guangzhou Renfu Medical Equipment CO, LTD (China), Medline Industries, LP. (US), Elekta AB (Sweden), Span America Medical Systems, Inc. (US), LEONI AG (Germany), Medtronic PLC (US), ORFIT INDUSTRIES N.V. (Belgium), Famed Zywiec Sp. z o. o (Poland), and Oncotech (Turkey)</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Geographies Covered</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>North America:</strong> U.S., Canada, Mexico</li>
          <li><strong>Europe:</strong> France, UK, Spain, Germany, Italy, Rest of Europe</li>
          <li><strong>Asia Pacific:</strong> India, China, Japan, South Korea, Rest of Asia Pacific</li>
          <li><strong>Middle East & Africa:</strong> GCC, South Africa, Rest of the Middle East & Africa</li>
          <li><strong>South America:</strong> Brazil, Argentina, Rest of South America</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Growth Drivers</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Increasing government funds for hospitals expansions is expected to rise the market growth.</li>
          <li>The demand for advanced technologies patient positioning solutions ensures the increase in the market.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Challenges Facing the Industry</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Refurbished patient positioning systems is expected to be a challenge for market growth.</li>
          <li>The cost of the product is high, which is leading to threat the market in future.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Analysis</h3>
        <p style="margin-bottom: 1.5rem;">PESTLE Analysis, PORTERS Analysis, NOISE analysis, Value/Supply Chain Analysis</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Competitive Analysis</h3>
        <p style="margin-bottom: 1.5rem;">Comprehensive mapping of the Competitive Landscape Comprising Merges & Acquisitions, Partnerships/Agreements/Joint Venture, Expansion, New Product Launches, and other developments. Company Share Analysis</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Customization Scope</h3>
        <p style="margin-bottom: 1.5rem;">Available on your market scope and requirements</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Recent Developments</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>In March 2022, C-RAD company has partnered to supply its high-end SGRT solution to a new proton therapy center at Texas, USA. The partnership includes several systems and a long-term service agreement.</li>
          <li>On September 2021, Mizuho OSI -, a leading manufacturer specializing in surgical tables and solutions for preventing pressure injuries, announced the acquisition of Air Barrier System from Nimbic Systems, Inc. The ABS is an infection control device during Hip and Spine surgeries used to keep the surgical site free from airborne particles and pathogens.</li>
          <li>Esaote, one of the key player in the biomedical market in Italy, came out into the light regarding its foray into the total body MRI with the Magnifico Open system, announced in September 2021. This latest product would ensure relaxed and efficient position planning for patients, which would be helpful mainly for claustrophobic and younger patients.</li>
          <li>A J Hospital & Research in Karnataka, India installed a highly advanced CT system in July 2021. The 128 Slice Dual Energy CT scanner includes AI technology to advance patient positioning and improve support to technologists.</li>
          <li>In March 2022, Stryker Corporation released the Trailblazer MDI, a new mobile air transfer system intended to prevent sliding of patients during tilt procedures and ensure nurses' safety in lateral patient transfers prior to and after surgery in an operating room.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segment Insights</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Product:</h4>
        <p style="margin-bottom: 1.5rem;">Tables are of utmost importance in a patient positioning system, offering flexibility and adaptability for a multiple of procedures spanning multiple specialties. Surgical tables, examination tables, and radiolucent imaging tables have adjustment functions for height, tilt, and lateral slide capabilities that allow healthcare providers to make individual adjustments tailored to each procedure. Important market players are proactively promoting their innovative surgical table to the market, which is expected to drive the segment. In March 2021, for instance SIMEON Medical collaborated with experienced end-users to design the Sim.MOVE 800, an OR-table perfectly suited for use in almost every condition. Therefore, these products find applications in a wide variety of typical cases, such as hybrid operating rooms. The availability of surgical tables that may be used interchangeably across varied settings is likely to drive the growth in this segment.</p>
        
        <p style="margin-bottom: 1.5rem;">In 2021 October in United states, Stille AB company has contracted with GE Healthcare company to launched a general surgery table. The GS2 general surgery table was designed specifically to be able to fulfil growing demand for a premium option that caters to multi-disciplinary surgery units like Ambulatory Surgery Centers, but which is a cost-effective & high-value solution. Such collaborations with a focus on surgical tables marketing, will further adoption of these products are thus encouraging growth of the market.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application:</h4>
        <p style="margin-bottom: 1.5rem;">Patient positioning systems market is bifurcated into several applications among them are Surgeries, Disease Diagnosis, Cancer Therapy. Of these, the Surgeries segment is expected to be dominating in the forecasted period. According to the Organisation for Economic Co-operation and Development, update in May 2022, Norway conducted 19,201 and Denmark conducted 54,836 surgeries in 2020. The overwhelming number of surgeries in these developed European countries will lead to an increased demand for patient positioning devices needed during operations, which will fuel market growth. Further, according to a December 2021 report, increased demand coupled with improved access to surgery across Asia will fuel explosive growth of both surgical procedure volume as well as the medical equipment market. While China is considered one of the growth hubs, other emerging markets include India and Southeast Asia. High demand and rising numbers of surgical procedures in countries that are either densely populated or both densely populated and developing, such as India and China, would translate to the higher use of surgical tables for patient positioning, hence propelling the growth of this market segment. Hence, based on the factors elucidated above, significant growth is expected for this segment throughout the projection period.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Regional Insights</h3>
        <p style="margin-bottom: 1.5rem;">In North America, the patient positioning system market is expected to retain its significant share, both in revenue as well as demand. This dominance comes from the quicker acceptance of advanced medical procedures and the increasingly diagnosed chronic diseases among the aging people in this region. According to the U.S. According to the Census Bureau, in the year 2021, of the 328 million people in the U.S, 75 million were above 60 years old. The percentage of the elderly population is expected to rise over time, this may mean a significant portion of the population can fall prey to chronic and acute health conditions that may spur higher demand for surgeries. Europe is expected to be one of the most promising markets for patient positioning systems, considering the increasing opportunities in the regions.</p>
        
        <p style="margin-bottom: 1.5rem;">The increased concern for patient safety in surgical procedures is anticipated to strongly increase the demand for patient positioning systems in Europe. The European Commission has also released a new medical device identification system based on the xUDI (extensible Unique Device Identifier). This system will help identify products more easily and accurately. The demand in the Asia Pacific market is also likely to grow at the highest rate, due to the improving healthcare infrastructure of its emerging economies. Similarly, the region of MEA is expected to behave in the same manner; however, lack of awareness about these systems poses a significant challenge in terms of addressing them so that their complete potential can be analysed.</p>

        <div style="margin: 2rem 0; text-align: center;">
          <Image 
            src="/images/regional-insights.webp" 
            alt="Patient Repositioning System Market Regional Analysis" 
            width={800}
            height={400}
            className="rounded-lg shadow-md border border-gray-200"
          />
          <p style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">
            Regional distribution and market penetration of Patient Repositioning Systems across different geographical markets
          </p>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segmentation</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Product</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Tables {Surgical Tables, Radiolucent Imaging Tables, Examination Tables}</li>
          <li>Accessories</li>
          <li>Others</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Surgeries</li>
          <li>Disease Diagnosis</li>
          <li>Cancer Therapy</li>
          <li>Others</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By End-use</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Hospitals</li>
          <li>Ambulatory Surgery Centers</li>
          <li>Diagnostic Laboratories</li>
          <li>Other</li>
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
          <li>Save time carrying out entry-level research by identifying the size, growth, major segments, and leading players in the Patient Repositioning System market in the world.</li>
          <li>Use PORTER's Five Forces analysis to determine the competitive intensity and therefore market attractiveness of the Global Patient Repositioning System market.</li>
          <li>Leading company profiles reveal details of key Patient Repositioning System market players' global operations, strategies, financial performance & recent developments.</li>
          <li>Add weight to presentations and pitches by understanding the future growth prospects of the Global Patient Repositioning System market with forecast for the decade by both market share (%) & revenue (USD Million).</li>
        </ol>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">FAQ's</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li><strong>What are the major factors driving the growth of the Global Patient Repositioning System Market?</strong><br>
          Increasing government funds for hospitals expansions is expected to rise the market growth.</li>
          <li><strong>What would be the CAGR of the Global Patient Repositioning System Market over the forecast period?</strong><br>
          The Global Patient Repositioning System Market is poised to grow at a CAGR of 18.5% from 2025 to 2032.</li>
          <li><strong>Which region will provide more business opportunities for the growth of the Global Patient Repositioning System Market in the future?</strong><br>
          The North America region is expected to create more opportunities in the market.</li>
          <li><strong>Who are the major players dominating the Global Patient Repositioning System Market?</strong><br>
          Stryker Corporation (US), Steris Plc. (US), Hill-Rom, Inc. (US), Getinge AB (Germany), C-RAD (Sweden), Smith & Nephew plc (UK), Guangzhou Renfu Medical Equipment CO, LTD (China), Medline Industries, LP. (US), Elekta AB (Sweden), Span America Medical Systems, Inc. (US), LEONI AG (Germany), Medtronic PLC (US), ORFIT INDUSTRIES N.V. (Belgium), Famed Zywiec Sp. z o. o (Poland), and Oncotech (Turkey)</li>
          <li><strong>What are the segments in the Global Patient Repositioning System Market?</strong><br>
          By Product, By Application, and By End-use are the industry key segments considered for research study.</li>
          <li><strong>What is the estimated market revenue for the Global Patient Repositioning System Market in 2032?</strong><br>
          The estimated revenue for the Global Patient Repositioning System Market in 2032 is USD 3.8 Million.</li>
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
        <p style="margin-bottom: 1.5rem;">By type, application, end-user, and regional breakdown</p>
        
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
        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Type</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Air-assisted Systems</h4>
            <p><strong>Market Share:</strong> 55%</p>
            <p><strong>Growth Rate:</strong> 19.2%</p>
            <p>Dominates the market due to ease of use, patient comfort, and reduced caregiver strain.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Mechanical Systems</h4>
            <p><strong>Market Share:</strong> 30%</p>
            <p><strong>Growth Rate:</strong> 15.8%</p>
            <p>Traditional systems with proven reliability and lower cost of ownership.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Robotic Systems</h4>
            <p><strong>Market Share:</strong> 15%</p>
            <p><strong>Growth Rate:</strong> 25.4%</p>
            <p>Emerging technology with high growth potential and advanced automation features.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Application</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Hospitals</h4>
            <p><strong>Market Share:</strong> 60%</p>
            <p>Largest application segment with high adoption in acute care settings.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Long-term Care Facilities</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p>Second largest segment with growing elderly population needs.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Home Care</h4>
            <p><strong>Market Share:</strong> 15%</p>
            <p>Fastest growing segment with increasing home healthcare adoption.</p>
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
          <li><strong>Expert Interviews:</strong> Conducted 120+ interviews with healthcare professionals, facility managers, and industry experts</li>
          <li><strong>Surveys:</strong> Distributed 400+ surveys to healthcare providers and end-users</li>
          <li><strong>Focus Groups:</strong> Organized 20+ focus group discussions across major markets</li>
          <li><strong>Trade Shows:</strong> Attended 12+ major healthcare and medical device trade shows</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Secondary Research</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>Company Reports:</strong> Analyzed annual reports, financial statements, and investor presentations</li>
          <li><strong>Industry Publications:</strong> Reviewed 180+ industry journals, white papers, and research articles</li>
          <li><strong>Government Sources:</strong> Utilized data from FDA, WHO, and other regulatory bodies</li>
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
      title: "Global Medical Device Market Analysis 2024",
      category: "Healthcare",
      pages: 245,
      lastUpdated: "January 15, 2024",
      image: "🏥"
    },
    {
      id: 2,
      title: "Patient Monitoring Systems Market Report",
      category: "Healthcare",
      pages: 189,
      lastUpdated: "January 10, 2024",
      image: "📊"
    },
    {
      id: 3,
      title: "Healthcare IT Solutions Market Trends",
      category: "Technology",
      pages: 156,
      lastUpdated: "January 8, 2024",
      image: "💻"
    },
    {
      id: 4,
      title: "Elderly Care Equipment Market Analysis",
      category: "Healthcare",
      pages: 178,
      lastUpdated: "January 5, 2024",
      image: "👴"
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
              <Link href="/life-sciences" className="hover:underline">Life Sciences</Link> / Patient Repositioning System Market
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
