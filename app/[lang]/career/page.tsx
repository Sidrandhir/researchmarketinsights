import { Metadata } from 'next';

// Define the correct type for Next.js 15
type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  
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
                 lang === 'ko' ? '시장 조사 전문가 팀에 합류하여 비즈니스 인텔리전스의 미래를 형성하는 데 기여하세요.' :
                 lang === 'ar' ? 'انضم إلى فريق خبراء أبحاث السوق لدينا وساهم في تشكيل مستقبل ذكاء الأعمال.' :
                 lang === 'fr' ? 'Rejoignez notre équipe d\'experts en recherche de marché et contribuez à façonner l\'avenir de l\'intelligence commerciale.' :
                 lang === 'es' ? 'Únase a nuestro equipo de expertos en investigación de mercado y contribuya a dar forma al futuro de la inteligencia comercial.' :
                 lang === 'de' ? 'Werden Sie Teil unseres Teams von Marktforschungsexperten und tragen Sie zur Gestaltung der Zukunft der Geschäftsintelligenz bei.' :
                 lang === 'jp' ? '市場調査専門家チームに参加し、ビジネスインテリジェンスの未来を形作ることに貢献しましょう。' : 'Join our team of market research experts and contribute to shaping the future of business intelligence.',
  };
}

export default async function CareerPage({ params }: PageProps) {
  const { lang } = await params;
  
  const positions = [
    {
      title: lang === 'en' ? 'Senior Market Research Analyst' :
             lang === 'zh' ? '高级市场研究分析师' :
             lang === 'ko' ? '시니어 시장 조사 분석가' :
             lang === 'ar' ? 'محلل أبحاث السوق الأول' :
             lang === 'fr' ? 'Analyste Senior de Recherche de Marché' :
             lang === 'es' ? 'Analista Senior de Investigación de Mercado' :
             lang === 'de' ? 'Senior Marktforschungsanalyst' :
             lang === 'jp' ? 'シニア市場調査アナリスト' : 'Senior Market Research Analyst',
      location: lang === 'en' ? 'Remote / New York' :
                lang === 'zh' ? '远程/纽约' :
                lang === 'ko' ? '원격 / 뉴욕' :
                lang === 'ar' ? 'عن بُعد / نيويورك' :
                lang === 'fr' ? 'Télétravail / New York' :
                lang === 'es' ? 'Remoto / Nueva York' :
                lang === 'de' ? 'Remote / New York' :
                lang === 'jp' ? 'リモート / ニューヨーク' : 'Remote / New York',
      type: lang === 'en' ? 'Full-time' :
            lang === 'zh' ? '全职' :
            lang === 'ko' ? '정규직' :
            lang === 'ar' ? 'دوام كامل' :
            lang === 'fr' ? 'Temps plein' :
            lang === 'es' ? 'Tiempo completo' :
            lang === 'de' ? 'Vollzeit' :
            lang === 'jp' ? '正社員' : 'Full-time',
      description: lang === 'en' ? 'Lead comprehensive market research projects and provide strategic insights to clients across various industries.' :
                   lang === 'zh' ? '领导综合市场研究项目，为各行业客户提供战略洞察。' :
                   lang === 'ko' ? '포괄적인 시장 조사 프로젝트를 주도하고 다양한 산업의 고객에게 전략적 인사이트를 제공합니다.' :
                   lang === 'ar' ? 'قيادة مشاريع أبحاث السوق الشاملة وتقديم رؤى استراتيجية للعملاء عبر مختلف الصناعات.' :
                   lang === 'fr' ? 'Diriger des projets de recherche de marché complets et fournir des insights stratégiques aux clients de diverses industries.' :
                   lang === 'es' ? 'Dirigir proyectos completos de investigación de mercado y proporcionar información estratégica a clientes de diversas industrias.' :
                   lang === 'de' ? 'Umfassende Marktforschungsprojekte leiten und strategische Einblicke für Kunden aus verschiedenen Branchen bereitstellen.' :
                   lang === 'jp' ? '包括的な市場調査プロジェクトを主導し、様々な業界のクライアントに戦略的インサイトを提供します。' : 'Lead comprehensive market research projects and provide strategic insights to clients across various industries.'
    },
    {
      title: lang === 'en' ? 'Data Scientist' :
             lang === 'zh' ? '数据科学家' :
             lang === 'ko' ? '데이터 과학자' :
             lang === 'ar' ? 'عالم البيانات' :
             lang === 'fr' ? 'Scientifique de Données' :
             lang === 'es' ? 'Científico de Datos' :
             lang === 'de' ? 'Datenwissenschaftler' :
             lang === 'jp' ? 'データサイエンティスト' : 'Data Scientist',
      location: lang === 'en' ? 'Remote / San Francisco' :
                lang === 'zh' ? '远程/旧金山' :
                lang === 'ko' ? '원격 / 샌프란시스코' :
                lang === 'ar' ? 'عن بُعد / سان فرانسيسكو' :
                lang === 'fr' ? 'Télétravail / San Francisco' :
                lang === 'es' ? 'Remoto / San Francisco' :
                lang === 'de' ? 'Remote / San Francisco' :
                lang === 'jp' ? 'リモート / サンフランシスコ' : 'Remote / San Francisco',
      type: lang === 'en' ? 'Full-time' :
            lang === 'zh' ? '全职' :
            lang === 'ko' ? '정규직' :
            lang === 'ar' ? 'دوام كامل' :
            lang === 'fr' ? 'Temps plein' :
            lang === 'es' ? 'Tiempo completo' :
            lang === 'de' ? 'Vollzeit' :
            lang === 'jp' ? '正社員' : 'Full-time',
      description: lang === 'en' ? 'Develop advanced analytics models and machine learning solutions to enhance our market research capabilities.' :
                   lang === 'zh' ? '开发高级分析模型和机器学习解决方案，以增强我们的市场研究能力。' :
                   lang === 'ko' ? '고급 분석 모델과 머신러닝 솔루션을 개발하여 시장 조사 역량을 향상시킵니다.' :
                   lang === 'ar' ? 'تطوير نماذج تحليل متقدمة وحلول تعلم الآلة لتعزيز قدرات أبحاث السوق لدينا.' :
                   lang === 'fr' ? 'Développer des modèles d\'analyse avancés et des solutions d\'apprentissage automatique pour améliorer nos capacités de recherche de marché.' :
                   lang === 'es' ? 'Desarrollar modelos de análisis avanzados y soluciones de aprendizaje automático para mejorar nuestras capacidades de investigación de mercado.' :
                   lang === 'de' ? 'Entwicklung fortschrittlicher Analysemodelle und Machine-Learning-Lösungen zur Verbesserung unserer Marktforschungsfähigkeiten.' :
                   lang === 'jp' ? '高度な分析モデルと機械学習ソリューションを開発し、市場調査能力を向上させます。' : 'Develop advanced analytics models and machine learning solutions to enhance our market research capabilities.'
    },
    {
      title: lang === 'en' ? 'Business Development Manager' :
             lang === 'zh' ? '业务发展经理' :
             lang === 'ko' ? '비즈니스 개발 매니저' :
             lang === 'ar' ? 'مدير تطوير الأعمال' :
             lang === 'fr' ? 'Responsable du Développement Commercial' :
             lang === 'es' ? 'Gerente de Desarrollo de Negocios' :
             lang === 'de' ? 'Business Development Manager' :
             lang === 'jp' ? 'ビジネス開発マネージャー' : 'Business Development Manager',
      location: lang === 'en' ? 'Hybrid / London' :
                lang === 'zh' ? '混合/伦敦' :
                lang === 'ko' ? '하이브리드 / 런던' :
                lang === 'ar' ? 'هجين / لندن' :
                lang === 'fr' ? 'Hybride / Londres' :
                lang === 'es' ? 'Híbrido / Londres' :
                lang === 'de' ? 'Hybrid / London' :
                lang === 'jp' ? 'ハイブリッド / ロンドン' : 'Hybrid / London',
      type: lang === 'en' ? 'Full-time' :
            lang === 'zh' ? '全职' :
            lang === 'ko' ? '정규직' :
            lang === 'ar' ? 'دوام كامل' :
            lang === 'fr' ? 'Temps plein' :
            lang === 'es' ? 'Tiempo completo' :
            lang === 'de' ? 'Vollzeit' :
            lang === 'jp' ? '正社員' : 'Full-time',
      description: lang === 'en' ? 'Drive business growth through strategic partnerships and client acquisition in the European market.' :
                   lang === 'zh' ? '通过战略合作伙伴关系和欧洲市场的客户获取来推动业务增长。' :
                   lang === 'ko' ? '유럽 시장에서 전략적 파트너십과 고객 확보를 통해 비즈니스 성장을 주도합니다.' :
                   lang === 'ar' ? 'دفع نمو الأعمال من خلال الشراكات الاستراتيجية واكتساب العملاء في السوق الأوروبية.' :
                   lang === 'fr' ? 'Développer la croissance commerciale grâce à des partenariats stratégiques et à l\'acquisition de clients sur le marché européen.' :
                   lang === 'es' ? 'Impulsar el crecimiento empresarial a través de asociaciones estratégicas y adquisición de clientes en el mercado europeo.' :
                   lang === 'de' ? 'Geschäftswachstum durch strategische Partnerschaften und Kundenakquise im europäischen Markt vorantreiben.' :
                   lang === 'jp' ? '戦略的パートナーシップとヨーロッパ市場での顧客獲得を通じてビジネス成長を推進します。' : 'Drive business growth through strategic partnerships and client acquisition in the European market.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {lang === 'en' ? 'Join Our Team' :
               lang === 'zh' ? '加入我们的团队' :
               lang === 'ko' ? '저희 팀에 합류하세요' :
               lang === 'ar' ? 'انضم إلى فريقنا' :
               lang === 'fr' ? 'Rejoignez Notre Équipe' :
               lang === 'es' ? 'Únase a Nuestro Equipo' :
               lang === 'de' ? 'Werden Sie Teil Unseres Teams' :
               lang === 'jp' ? '私たちのチームに参加しましょう' : 'Join Our Team'}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {lang === 'en' ? 'Shape the future of market research and business intelligence' :
               lang === 'zh' ? '塑造市场研究和商业智能的未来' :
               lang === 'ko' ? '시장 조사와 비즈니스 인텔리전스의 미래를 형성하세요' :
               lang === 'ar' ? 'شكل مستقبل أبحاث السوق وذكاء الأعمال' :
               lang === 'fr' ? 'Façonnez l\'avenir de la recherche de marché et de l\'intelligence commerciale' :
               lang === 'es' ? 'Dé forma al futuro de la investigación de mercado y la inteligencia comercial' :
               lang === 'de' ? 'Gestalten Sie die Zukunft der Marktforschung und Geschäftsintelligenz' :
               lang === 'jp' ? '市場調査とビジネスインテリジェンスの未来を形作りましょう' : 'Shape the future of market research and business intelligence'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Why Work With Us?' :
               lang === 'zh' ? '为什么与我们合作？' :
               lang === 'ko' ? '왜 저희와 함께 일해야 할까요?' :
               lang === 'ar' ? 'لماذا تعمل معنا؟' :
               lang === 'fr' ? 'Pourquoi Travailler Avec Nous ?' :
               lang === 'es' ? '¿Por Qué Trabajar Con Nosotros?' :
               lang === 'de' ? 'Warum Mit Uns Arbeiten?' :
               lang === 'jp' ? 'なぜ私たちと働くのか？' : 'Why Work With Us?'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? 'Innovation' :
                 lang === 'zh' ? '创新' :
                 lang === 'ko' ? '혁신' :
                 lang === 'ar' ? 'الابتكار' :
                 lang === 'fr' ? 'Innovation' :
                 lang === 'es' ? 'Innovación' :
                 lang === 'de' ? 'Innovation' :
                 lang === 'jp' ? 'イノベーション' : 'Innovation'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en' ? 'Work with cutting-edge technology and methodologies in market research' :
                 lang === 'zh' ? '在市场研究中使用尖端技术和方法' :
                 lang === 'ko' ? '시장 조사에서 최첨단 기술과 방법론으로 일하세요' :
                 lang === 'ar' ? 'العمل مع أحدث التقنيات والمنهجيات في أبحاث السوق' :
                 lang === 'fr' ? 'Travaillez avec des technologies et méthodologies de pointe en recherche de marché' :
                 lang === 'es' ? 'Trabaje con tecnología y metodologías de vanguardia en investigación de mercado' :
                 lang === 'de' ? 'Arbeiten Sie mit modernster Technologie und Methoden in der Marktforschung' :
                 lang === 'jp' ? '市場調査における最先端技術と方法論で働く' : 'Work with cutting-edge technology and methodologies in market research'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? 'Growth' :
                 lang === 'zh' ? '成长' :
                 lang === 'ko' ? '성장' :
                 lang === 'ar' ? 'النمو' :
                 lang === 'fr' ? 'Croissance' :
                 lang === 'es' ? 'Crecimiento' :
                 lang === 'de' ? 'Wachstum' :
                 lang === 'jp' ? '成長' : 'Growth'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en' ? 'Continuous learning and career development opportunities' :
                 lang === 'zh' ? '持续学习和职业发展机会' :
                 lang === 'ko' ? '지속적인 학습과 경력 개발 기회' :
                 lang === 'ar' ? 'فرص التعلم المستمر والتطوير المهني' :
                 lang === 'fr' ? 'Opportunités d\'apprentissage continu et de développement de carrière' :
                 lang === 'es' ? 'Oportunidades de aprendizaje continuo y desarrollo profesional' :
                 lang === 'de' ? 'Kontinuierliche Lern- und Karriereentwicklungsmöglichkeiten' :
                 lang === 'jp' ? '継続的な学習とキャリア開発の機会' : 'Continuous learning and career development opportunities'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? 'Impact' :
                 lang === 'zh' ? '影响' :
                 lang === 'ko' ? '영향' :
                 lang === 'ar' ? 'التأثير' :
                 lang === 'fr' ? 'Impact' :
                 lang === 'es' ? 'Impacto' :
                 lang === 'de' ? 'Einfluss' :
                 lang === 'jp' ? 'インパクト' : 'Impact'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en' ? 'Make a real difference in business decisions worldwide' :
                 lang === 'zh' ? '在全球商业决策中产生真正的影响' :
                 lang === 'ko' ? '전 세계 비즈니스 결정에 실제적인 차이를 만드세요' :
                 lang === 'ar' ? 'أحدث فرقًا حقيقيًا في قرارات الأعمال في جميع أنحاء العالم' :
                 lang === 'fr' ? 'Faites une vraie différence dans les décisions commerciales mondiales' :
                 lang === 'es' ? 'Marque una diferencia real en las decisiones comerciales mundiales' :
                 lang === 'de' ? 'Bewirken Sie echte Veränderungen in weltweiten Geschäftsentscheidungen' :
                 lang === 'jp' ? '世界中のビジネス決定に真の影響を与える' : 'Make a real difference in business decisions worldwide'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Open Positions' :
               lang === 'zh' ? '空缺职位' :
               lang === 'ko' ? '채용 포지션' :
               lang === 'ar' ? 'الوظائف الشاغرة' :
               lang === 'fr' ? 'Postes Ouverts' :
               lang === 'es' ? 'Posiciones Abiertas' :
               lang === 'de' ? 'Offene Positionen' :
               lang === 'jp' ? '募集職位' : 'Open Positions'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      {position.description}
                    </p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {lang === 'en' ? 'Apply Now' :
                     lang === 'zh' ? '立即申请' :
                     lang === 'ko' ? '지금 지원하기' :
                     lang === 'ar' ? 'تقدم الآن' :
                     lang === 'fr' ? 'Postuler Maintenant' :
                     lang === 'es' ? 'Aplicar Ahora' :
                     lang === 'de' ? 'Jetzt Bewerben' :
                     lang === 'jp' ? '今すぐ応募' : 'Apply Now'}
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
          <h2 className="text-4xl font-bold mb-6">
            {lang === 'en' ? 'Ready to Join Us?' :
             lang === 'zh' ? '准备加入我们了吗？' :
             lang === 'ko' ? '저희와 함께할 준비가 되셨나요?' :
             lang === 'ar' ? 'هل أنت مستعد للانضمام إلينا؟' :
             lang === 'fr' ? 'Prêt à Nous Rejoindre ?' :
             lang === 'es' ? '¿Listo para Unirse a Nosotros?' :
             lang === 'de' ? 'Bereit, Sich Uns Anzuschließen?' :
             lang === 'jp' ? '参加する準備はできましたか？' : 'Ready to Join Us?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {lang === 'en' ? 'Send us your resume and cover letter to start your journey with us' :
             lang === 'zh' ? '向我们发送您的简历和求职信，开始与我们合作的旅程' :
             lang === 'ko' ? '이력서와 자기소개서를 보내주시면 저희와 함께하는 여정을 시작하세요' :
             lang === 'ar' ? 'أرسل لنا سيرتك الذاتية وخطاب التقديم لبدء رحلتك معنا' :
             lang === 'fr' ? 'Envoyez-nous votre CV et lettre de motivation pour commencer votre voyage avec nous' :
             lang === 'es' ? 'Envíenos su currículum y carta de presentación para comenzar su viaje con nosotros' :
             lang === 'de' ? 'Senden Sie uns Ihren Lebenslauf und Anschreiben, um Ihre Reise mit uns zu beginnen' :
             lang === 'jp' ? '履歴書とカバーレターを送って、私たちとの旅を始めましょう' : 'Send us your resume and cover letter to start your journey with us'}
          </p>
          <a href={`/${lang}/contact`} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {lang === 'en' ? 'Contact Us' :
             lang === 'zh' ? '联系我们' :
             lang === 'ko' ? '문의하기' :
             lang === 'ar' ? 'اتصل بنا' :
             lang === 'fr' ? 'Contactez-nous' :
             lang === 'es' ? 'Contáctenos' :
             lang === 'de' ? 'Kontaktieren Sie uns' :
             lang === 'jp' ? 'お問い合わせ' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
}
