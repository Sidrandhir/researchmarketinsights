import { Metadata } from 'next';

// This is the correct, simplified type for Server Component pages
type PageProps = {
  params: { lang: string };
};

// CORRECT: generateMetadata now uses the simple PageProps type
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Careers - Market Research Insights' : 
           lang === 'zh' ? '职业机会 - 市场研究洞察' :
           lang === 'ko' ? '채용 정보 - 시장 조사 인사이트' :
           lang === 'ar' ? 'الوظائف - رؤى أبحاث السوق' :
           lang === 'fr' ? 'Carrières - Insights de recherche de marché' :
           lang === 'es' ? 'Carreras - Perspectivas de investigación de mercado' :
           lang === 'de' ? 'Karriere - Marktforschung Einblicke' :
           lang === 'jp' ? '採用情報 - 市場調査インサイト' : 'Careers - Market Research Insights',
    description: lang === 'en' ? 'Join our team of market research experts and contribute to shaping the future of business intelligence.' :
                 lang === 'zh' ? '加入我们的市场研究专家团队，为塑造商业智能的未来做出贡献。' :
                 // ... (add other languages if needed)
                 'Join our team of market research experts and contribute to shaping the future of business intelligence.',
  };
}

// CORRECT: The main component now uses the simple PageProps type
export default function CareerPage({ params }: PageProps) {
  const lang = params.lang;
  
  const positions = [
    {
      title: lang === 'en' ? 'Senior Market Research Analyst' : '高级市场研究分析师',
      location: lang === 'en' ? 'Remote / New York' : '远程/纽约',
      type: lang === 'en' ? 'Full-time' : '全职',
      description: lang === 'en' ? 'Lead comprehensive market research projects and provide strategic insights to clients across various industries.' : '领导综合市场研究项目，为各行业客户提供战略洞察。'
    },
    {
      title: lang === 'en' ? 'Data Scientist' : '数据科学家',
      location: lang === 'en' ? 'Remote / San Francisco' : '远程/旧金山',
      type: lang === 'en' ? 'Full-time' : '全职',
      description: lang === 'en' ? 'Develop advanced analytics models and machine learning solutions to enhance our market research capabilities.' : '开发高级分析模型和机器学习解决方案，以增强我们的市场研究能力。'
    },
    {
      title: lang === 'en' ? 'Business Development Manager' : '业务发展经理',
      location: lang === 'en' ? 'Hybrid / London' : '混合/伦敦',
      type: lang === 'en' ? 'Full-time' : '全职',
      description: lang === 'en' ? 'Drive business growth through strategic partnerships and client acquisition in the European market.' : '通过战略合作伙伴关系和欧洲市场的客户获取来推动业务增长。'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {lang === 'en' ? 'Join Our Team' : '加入我们的团队'}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {lang === 'en' ? 'Shape the future of market research and business intelligence' : '塑造市场研究和商业智能的未来'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Why Work With Us?' : '为什么与我们合作？'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* ... your JSX for "Why Work With Us" section ... */}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Open Positions' : '空缺职位'}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{position.description}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {lang === 'en' ? 'Apply Now' : '立即申请'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
           {/* ... your JSX for the CTA section ... */}
        </div>
      </section>
    </div>
  );
}