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

export default function ConnectedDrugDeliveryDevicesReport() {
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
    title: "Global Connected Drug Delivery Devices Market Size, Share & Industry Analysis, By Type (Parental Devices, Inhalation Devices & Others), By Technology (Bluetooth, NFC, and Others), By Application (Asthma, COPD, Diabetes Management, Others), By End User (Homecare, Hospitals), and Regional Forecast, 2024-2032",
    subtitle: "Comprehensive Market Research Report on Connected Drug Delivery Devices Industry",
    lastUpdated: "January 15, 2024",
    format: "PDF",
    reportId: "RMI-2024-003",
    marketSize: "USD 2.8 billion",
    forecastYear: "2032",
    forecastValue: "USD 8.5 billion",
    cagr: "22.4%",
    forecastPeriod: "2024-2032",
    historicalPeriod: "2018-2022",
    pages: 245,
    image: "💊",
    industry: "Life Sciences"
  };

  const contentSections = {
    summary: {
      title: "KEY MARKET INSIGHTS",
      content: `
        <h2 style="color: #2563eb; margin-bottom: 1rem;">Global Connected Drug Delivery Devices Market</h2>
        
        <p style="margin-bottom: 1.5rem;"><strong>Global Connected Drug Delivery Devices Market, Analysis, Size, Share, Trends, COVID-19 Impact, and Forecast 2024-2032, By Type (Parental Devices, Inhalation Devices & Others), By Technology (Bluetooth, NFC, and Others), By Application (Asthma, COPD, Diabetes Management, Others), By End User (Homecare, Hospitals), and By Region (North America, Europe, Asia Pacific, South America, and Middle East and Africa)</strong></p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Outlook</h3>
        <p style="margin-bottom: 1.5rem;">Global connected drug delivery devices market size is poised to reach USD 3.2 Million by 2024, with a projected escalation to USD 8.5 Million by 2032, reflecting a compound annual growth rate (CAGR) of 22.4% during the forecast period.</p>
        
        <p style="margin-bottom: 1.5rem;">The connected drug delivery devices market includes medical smart device types that are intended to deliver well-defined forms of medication but also can allow connectivity meaning they can be used in track, monitor and manage patient adherence and treatment outcomes. These devices use cutting-edge technologies like sensors, wireless communication, and data analysis to deliver immediate feedback to healthcare providers and patients. Connected drug delivery devices are the backbone of modern healthcare ecosystems, increasing medication adherence, chronic disease management and remote monitoring.</p>
        
        <p style="margin-bottom: 1.5rem;">Connected drug delivery devices are integrated to various digital services. These devices are manufactured by several key players across the globe to promote better counselling and patient care. These connected drug delivery devices have features as dosing remainders, trackers, and patient records to collect information about the health update. The devices are primarily used to treat chronic obstructive pulmonary disease, asthma, diabetes, and other heart diseases.</p>
        
        <p style="margin-bottom: 1.5rem;">Increasing use of electronic devices in medical devices and optimization of drug delivery during treatment is expected to drive the growth of drug delivery devices market during the forecast period. This, coupled with increasing cases of COPD, diabetes and asthma, is expected to rise continued adoption of drug delivery devices in the foreseen period. In 2016, for example according to Centers for Disease Control and Prevention (CDC), analysis approximately 26.5 million people are suffered from asthma in united states. Therefore, the increasing utilization and advantages of these devices is expected to grow at a lucrative growth over the period.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Dynamics</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Drivers:</h4>
        <p style="margin-bottom: 1.5rem;">The occurrence of cancer, diabetes, asthma, and other such chronic diseases will increase the usage of connected drug delivery devices which is driving the growth of the market during the forecast period. Chronic diseases are a concern for the elderly, as they are more likely to be obese and suffer from diabetes. According Global Burden of Disease Association (GBDA) study the incidence of COPD has increased around 14.7 percent from 1990 and 2015. These diseases require accurate and continuous medication management, such as diabetes, asthma, cardiovascular diseases etc. connected device helps in addressing the possibilities of enhancing treatment adherence and outcomes.</p>
        
        <p style="margin-bottom: 1.5rem;">The devices offer real-time monitoring and feedback, allowing patients and health care providers to monitor medication adherence or treatment efficacy and adjust therapy accordingly. Readily, the increasing global burden of chronic diseases over the next 50 years poses a real straining effect on healthcare systems forcing them to seek solutions that will present both patient engagement and value in care and reported that during 2014-2015 around 84.0% adoption of smart inhalers in New Zealand for asthmatic children's, published by The Lancet Respiratory Medicine. With this in turn driving an ongoing need for innovative and effective drug delivery technologies.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Restraints:</h4>
        <p style="margin-bottom: 1.5rem;">High development and deployment costs related to connected devices are a concern, especially for SME healthcare providers. In addition, the adoption of advanced technologies in the form of sensors and wireless communication does demand significant investments in research and development that might limit new market entrants.</p>
        
        <p style="margin-bottom: 1.5rem;">Digital illiteracy among patients and healthcare providers in some regions can obstruct the smooth usage of the devices. Technicalities related to the working and maintenance of the devices are likely to cause resistance from end users, especially among seniors. Lesser reimbursement policies for connected healthcare devices in many countries also form a barrier as patients may not be able to afford the high-end solutions.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">Opportunities:</h4>
        <p style="margin-bottom: 1.5rem;">Telemedicine and remote patient monitoring are accredited to increasing lucrative opportunities for increasing the connected drug delivery devices market. Increasing adoption of telemedicine platforms has created demand for smart devices, which can make seamless integration possible within the digital health ecosystem. The use of smart drug delivery devices enables monitoring in real-time a patient's adherence to dosages as well as the outcome of their treatment, which is an aim of telemedicine to ensure effective and remote delivery of health services.</p>
        
        <p style="margin-bottom: 1.5rem;">With ever-increasing chronic diseases, which have now proliferated and require multiple long-term medication management operations, the need for searching for solutions supporting constant patient monitoring while also promoting therapy compliance is further amplified. These technologies in remote patient monitoring have been instrumental in improving the management of patients by health care providers, and this is another factor that eliminates the need for in-person visits, which has been an even more critical factor since the COVID-19 outbreak. The above combined functionalities result in supporting individualized treatment plans, lowering health costs, and enhancing patient results. Their adoption in different therapeutic areas is further propelling market growth.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Key Players</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Proteus Digital Health</li>
          <li>Ypsomed Holding</li>
          <li>F. Hoffmann-La Roche Ltd</li>
          <li>BD</li>
          <li>West Pharmaceutical Services</li>
          <li>Propeller Health (A ResMed Company)</li>
          <li>Adherium</li>
          <li>Cohero Health, Inc.</li>
          <li>Teva Respiratory, LLC</li>
          <li>Novo Nordisk A/S</li>
          <li>Phillips-Medisize, LLC</li>
          <li>Medtronic</li>
          <li>Adherium Limited</li>
          <li>Tandem Diabetes Care, Inc.</li>
          <li>Biocorp</li>
          <li>Propeller health</li>
          <li>Aptar Pharma</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Report Coverage</h3>
        <table class="w-full border-collapse border border-gray-300 mb-4">
          <tr><td class="border border-gray-300 p-2 font-semibold">Market Size in 2023:</td><td class="border border-gray-300 p-2">USD 2.8 Million</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">2032 Value Projection:</td><td class="border border-gray-300 p-2">USD 8.5 Million</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Growth Rate (CAGR)</td><td class="border border-gray-300 p-2">22.4%</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Forecast Period:</td><td class="border border-gray-300 p-2">2024 - 2032</td></tr>
          <tr><td class="border border-gray-300 p-2 font-semibold">Historical Period:</td><td class="border border-gray-300 p-2">2018 - 2022</td></tr>
        </table>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segments Covered</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>By Type (Parental Devices, Inhalation Devices & Others)</li>
          <li>By Technology (Bluetooth, NFC, and Others)</li>
          <li>By Application (Asthma, COPD, Diabetes Management, Others)</li>
          <li>By End User (Homecare, Hospitals)</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Competitive Landscape</h3>
        <p style="margin-bottom: 1.5rem;">Proteus Digital Health, Ypsomed Holding, F. Hoffmann-La Roche Ltd, BD, West Pharmaceutical Services, Propeller Health (A ResMed Company), Adherium, Cohero Health, Inc., Teva Respiratory, LLC, Novo Nordisk A/S, Phillips-Medisize,LLC, Medtronic, Adherium Limited, Tandem Diabetes Care, Inc., Biocorp, Propeller health, Aptar Pharma</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Geographies Covered</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li><strong>North America:</strong> U.S., Canada, Mexico</li>
          <li><strong>Europe:</strong> Germany, France, UK, Italy, Spain, Russia, and Rest of Europe</li>
          <li><strong>Asia Pacific:</strong> India, China, Japan, South Korea, and the Rest of Asia Pacific</li>
          <li><strong>Middle East & Africa:</strong> GCC, South Africa, and the Rest of MEA</li>
          <li><strong>South America:</strong> Brazil, Argentina, and Rest of South America</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Growth Drivers</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Drug delivery in nanotechnology is being extensively researched and is expected to lead to new drug delivery methods.</li>
          <li>Implementation of the integration of telemedicine platforms with AR/VR technology.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Challenges Facing the Industry</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Concerns over security of medical information may hinder business growth</li>
          <li>Advanced products which are costs high.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Market Analysis</h3>
        <p style="margin-bottom: 1.5rem;">PESTLE Analysis, PORTERS Analysis, NOISE analysis, Value/Supply Chain Analysis</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Competitive Analysis</h3>
        <p style="margin-bottom: 1.5rem;">Comprehensive mapping of the Competitive Landscape Comprising Merges & Acquisitions, Partnerships/Agreements/Joint Venture, Expansion, New Product Launches, and other developments. Company Share Analysis</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Customization Scope</h3>
        <p style="margin-bottom: 1.5rem;">Available on your market scope and requirements</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Recent Developments</h3>
        <ul style="margin-bottom: 1.5rem;">
          <li>Nemera company has done expansion during 2022 September that a new factory in Lyon, France, this expansion is expected to increase company's output of the products and revenue.</li>
          <li>In 2021, Ypsomed is partnering with CamDiab and Abbott to develop and market new automated insulin delivery systems. Due to this partnership, Ypsomed's YpsoPump has integrated with Abbott's FreeStyle Libre sensor and CamAPS FX app of CamDiab's and The companies are planned to complete the final product by the end of 2022.</li>
          <li>2021 June, Aderium Limited announced that it has filed a 510(k) application with the U.S. FDA for marketing its first-generation Hailie sensor, which includes physical measurements to track the use of asthma medications and COPD.</li>
          <li>2019 November, Lupin has launched smart connected device, ADHERO, a inhaler for people with chronic respiratory diseases. This device can help patients track their MDI use and increase compliance.</li>
        </ul>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segment Insights</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Type:</h4>
        <p style="margin-bottom: 1.5rem;">The parental device segment is expected to hold the highest market share in 2023 due to the many advantages of the smart connected device over the conventional devices. The increasing predominance of chronic diseases such as cancer, neurological diseases, diabetes, and others are boosting the growth of this segment in foreseen period. For example, Biocorp company has launched an new product: Mallya in 2020 November. It is a smart cap that automatically captures data as time, injection, etc. for and the data sends through the software partner via real-time Bluetooth.</p>
        
        <p style="margin-bottom: 1.5rem;">Inhalation device segment is expected to grow fastest during the 2024-2032. The rise in respiratory diseases such as COPD, asthma, and other respiratory diseases, which is expected to increase the growth of the segment. For example, according to the Centers for Disease Control and Prevention (CDC), the prevalence of asthma in the United States is estimated to be 25 million people in 2020. Further, R&D projects and product launches by large companies are also expected to help grow the segment in the coming years.</p>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application:</h4>
        <p style="margin-bottom: 1.5rem;">Diabetes management application segment holds the highest growth rate among others during the foreseen period. For example, the International Diabetes Federation estimates that approximately 537 million adults will have diabetes by 2021. This growth has the potential to change the way diabetes is managed. Furthermore, in 2019, the autoimmune diseases such as osteoporosis, sclerosis has raised, which is also showing the growth of the market in the next foreseen period. The Asahi Kasei Pharmaceuticals & other company has partnered and has launched new innovative product autoinjector in Japan. The prefilled autoinjector of Ypsomed's YpsoMate has, combined PLAJEX syringe with the osteoporosis drug Teribone. Similar partnerships and collaborations are expected to support growth in this area. These developments/ new inventions will contribute to the growth of the connected dug delivery devices market in the coming years.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Regional Insights</h3>
        <p style="margin-bottom: 1.5rem;">North America leads the global market with more than 40% revenue in 2023. The increasing per capita spending's on healthcare, rise in technological advancement in healthcare devices, also key players are inventing the new technologies and rising the adoption of medication adherence with remote monitoring. For example, US-based Cognita Labs, LLC has developed CapMedic (Class II device), which can be used as an MDI inhaler accessory. It measures the accuracy, frequency, and duration of inhaler use and provides interactive audio-visual guidance on proper use.</p>
        
        <p style="margin-bottom: 1.5rem;">The increasing rapid adoption of healthcare technologies in connected drug delivery devices in Asia Pacific region, leading to hold the fasted growth rate of the market. The countries such as China, India, and Japan experience significant investments in healthcare infrastructure and an increase in middle-class populations that improve access to advanced medical technologies. One of the most important factors is cost-effectiveness and patient adherence, which the connected drug delivery devices offer, primarily in a home care environment. Such devices facilitate remote monitoring, real time data transmission and treatment customization which is in line with the increasing telehealth and digital health platforms in the Asia pacific region. Government initiatives for improving healthcare access and uptake of technologies in public health services have also been a driver to this expansion driving factors fuelling further dentiversegent growth in the market. Increasing implementation of wearables and implantable combined with applications of Artificial Intelligence and Machine Learning algorithms for personalized medicine technologies are rising the adoption of these technologies among Asia-pacific countries.</p>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">Segmentation</h3>
        
        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Type</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Parental Devices</li>
          <li>Inhalation Devices</li>
          <li>Others</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Technology</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Bluetooth</li>
          <li>NFC</li>
          <li>Others</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By End-use</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Homecare</li>
          <li>Hospitals</li>
        </ul>

        <h4 style="color: #1d4ed8; margin-bottom: 0.75rem;">By Application</h4>
        <ul style="margin-bottom: 1.5rem;">
          <li>Asthma</li>
          <li>COPD</li>
          <li>Diabetes Management</li>
          <li>Others</li>
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
          <li>Save time carrying out entry-level research by identifying the size, growth, major segments, and leading players in the Connected Drug Delivery Devices market in the world.</li>
          <li>Use PORTER's Five Forces analysis to determine the competitive intensity and therefore market attractiveness of the Global Connected Drug Delivery Devices market.</li>
          <li>Leading company profiles reveal details of key Connected Drug Delivery Devices market players' global operations, strategies, financial performance & recent developments.</li>
          <li>Add weight to presentations and pitches by understanding the future growth prospects of the Global Connected Drug Delivery Devices market with forecast for the decade by both market share (%) & revenue (USD Million).</li>
        </ol>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">FAQ's</h3>
        <ol style="margin-bottom: 1.5rem;">
          <li><strong>What are the major factors driving the growth of the Global Connected Drug Delivery Devices Market?</strong><br>
          Drug delivery in nanotechnology is being extensively researched and is expected to lead to new drug delivery methods, are the major factors driving the growth of the Global Connected Drug Delivery Devices Market.</li>
          <li><strong>What would be the CAGR of the Global Connected Drug Delivery Devices Market over the forecast period?</strong><br>
          The Global Connected Drug Delivery Devices Market is poised to grow at a CAGR of 22.4% from 2025 to 2032.</li>
          <li><strong>Which region will provide more business opportunities for the growth of the Global Connected Drug Delivery Devices Market in the future?</strong><br>
          The North America region is expected to create more opportunities in the market.</li>
          <li><strong>Who are the major players dominating the Global Connected Drug Delivery Devices Market?</strong><br>
          Proteus Digital Health, Ypsomed Holding, F. Hoffmann-La Roche Ltd, BD, West Pharmaceutical Services, Propeller Health (A ResMed Company), Adherium, Cohero Health, Inc., Teva Respiratory, LLC, Novo Nordisk A/S, Phillips-Medisize,LLC, Medtronic, Adherium Limited, Tandem Diabetes Care, Inc., Biocorp, Propeller health, Aptar Pharma and Others.</li>
          <li><strong>What are the segments in the Global Connected Drug Delivery Devices Market?</strong><br>
          By Type, By Technology, By End-use, and By Application are the industry key segments considered for research study.</li>
          <li><strong>What is the estimated market revenue for the Global Connected Drug Delivery Devices Market in 2032?</strong><br>
          The estimated revenue for the Global Connected Drug Delivery Devices Market in 2032 is USD 8.5 Million.</li>
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
        <p style="margin-bottom: 1.5rem;">By type, technology, application, end-user, and regional breakdown</p>
        
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
            <h4 style="color: #1d4ed8;">Parental Devices</h4>
            <p><strong>Market Share:</strong> 45%</p>
            <p><strong>Growth Rate:</strong> 24.8%</p>
            <p>Dominates the market due to high adoption in chronic disease management and diabetes care.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Inhalation Devices</h4>
            <p><strong>Market Share:</strong> 35%</p>
            <p><strong>Growth Rate:</strong> 28.2%</p>
            <p>Fastest growing segment with increasing respiratory disease prevalence.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Others</h4>
            <p><strong>Market Share:</strong> 20%</p>
            <p><strong>Growth Rate:</strong> 18.6%</p>
            <p>Includes transdermal and other emerging drug delivery technologies.</p>
          </div>
        </div>

        <h3 style="color: #2563eb; margin-bottom: 1rem;">By Technology</h3>
        <div class="segmentation-grid">
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Bluetooth</h4>
            <p><strong>Market Share:</strong> 60%</p>
            <p>Most widely adopted connectivity technology for medical devices.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">NFC</h4>
            <p><strong>Market Share:</strong> 25%</p>
            <p>Growing adoption for secure data transmission and authentication.</p>
          </div>
          <div class="segment-card">
            <h4 style="color: #1d4ed8;">Others</h4>
            <p><strong>Market Share:</strong> 15%</p>
            <p>Includes Wi-Fi, cellular, and other emerging connectivity solutions.</p>
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
      title: "Smart Medical Devices Market Report",
      category: "Technology",
      pages: 198,
      lastUpdated: "January 10, 2024",
      image: "📱"
    },
    {
      id: 3,
      title: "Digital Health Solutions Market Trends",
      category: "Technology",
      pages: 167,
      lastUpdated: "January 8, 2024",
      image: "💻"
    },
    {
      id: 4,
      title: "Pharmaceutical Technology Market Analysis",
      category: "Life Sciences",
      pages: 178,
      lastUpdated: "January 5, 2024",
      image: "🔬"
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
              <Link href="/life-sciences" className="hover:underline">Life Sciences</Link> / Connected Drug Delivery Devices Market
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
                                 onKeyUp={(e) => {
                                   const searchTerm = e.currentTarget.value.toLowerCase();
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
