'use client';
//import { Metadata } from 'next';
import Link from 'next/link';

// export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
//   const lang = params.lang;
  
//   return {
//     title: lang === 'en' ? 'Press Releases - Market Research Insights' : 
//            lang === 'zh' ? '新闻稿 - 市场研究洞察' :
//            lang === 'ko' ? '보도자료 - 시장 조사 인사이트' :
//            lang === 'ar' ? 'البيانات الصحفية - رؤى أبحاث السوق' :
//            lang === 'fr' ? 'Communiqués de Presse - Insights de recherche de marché' :
//            lang === 'es' ? 'Comunicados de Prensa - Perspectivas de investigación de mercado' :
//            lang === 'de' ? 'Pressemitteilungen - Marktforschung Einblicke' :
//            lang === 'jp' ? 'プレスリリース - 市場調査インサイト' : 'Press Releases - Market Research Insights',
//     description: lang === 'en' ? 'Latest press releases and industry news from Market Research Insights. Stay updated with market trends and company announcements.' :
//                  lang === 'zh' ? '来自市场研究洞察的最新新闻稿和行业新闻。及时了解市场趋势和公司公告。' :
//                  lang === 'ko' ? '시장 조사 인사이트의 최신 보도자료 및 업계 뉴스. 시장 동향 및 회사 발표를 최신 상태로 유지하세요.' :
//                  lang === 'ar' ? 'أحدث البيانات الصحفية والأخبار الصناعية من رؤى أبحاث السوق. ابق على اطلاع بآخر اتجاهات السوق وإعلانات الشركة.' :
//                  lang === 'fr' ? 'Derniers communiqués de presse et actualités sectorielles de Market Research Insights. Restez informé des tendances du marché et des annonces de l\'entreprise.' :
//                  lang === 'es' ? 'Últimos comunicados de prensa y noticias de la industria de Market Research Insights. Manténgase actualizado con las tendencias del mercado y anuncios de la empresa.' :
//                  lang === 'de' ? 'Neueste Pressemitteilungen und Branchennachrichten von Market Research Insights. Bleiben Sie über Markttrends und Unternehmensankündigungen auf dem Laufenden.' :
//                  lang === 'jp' ? '市場調査インサイトからの最新プレスリリースと業界ニュース。市場トレンドと企業発表を最新の状態に保ちましょう。' : 'Latest press releases and industry news from Market Research Insights. Stay updated with market trends and company announcements.',
//   };
// }

export default function PressReleasesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  
  const categories = [
    {
      name: lang === 'en' ? 'Aerospace & Defense' :
            lang === 'zh' ? '航空航天与国防' :
            lang === 'ko' ? '항공우주 및 방위' :
            lang === 'ar' ? 'الفضاء والدفاع' :
            lang === 'fr' ? 'Aérospatiale et Défense' :
            lang === 'es' ? 'Aeroespacial y Defensa' :
            lang === 'de' ? 'Luft- und Raumfahrt & Verteidigung' :
            lang === 'jp' ? '航空宇宙・防衛' : 'Aerospace & Defense',
      slug: 'aerospace-defense',
      count: 23
    },
    {
      name: lang === 'en' ? 'Automotive & Transportation' :
            lang === 'zh' ? '汽车与运输' :
            lang === 'ko' ? '자동차 및 교통' :
            lang === 'ar' ? 'السيارات والنقل' :
            lang === 'fr' ? 'Automobile et Transport' :
            lang === 'es' ? 'Automotriz y Transporte' :
            lang === 'de' ? 'Automobil & Transport' :
            lang === 'jp' ? '自動車・運輸' : 'Automotive & Transportation',
      slug: 'automotive-transportation',
      count: 34
    },
    {
      name: lang === 'en' ? 'Banking, Financial Services & Insurance' :
            lang === 'zh' ? '银行、金融服务与保险' :
            lang === 'ko' ? '은행, 금융 서비스 및 보험' :
            lang === 'ar' ? 'الخدمات المصرفية والمالية والتأمين' :
            lang === 'fr' ? 'Banque, Services Financiers et Assurance' :
            lang === 'es' ? 'Banca, Servicios Financieros y Seguros' :
            lang === 'de' ? 'Bankwesen, Finanzdienstleistungen & Versicherung' :
            lang === 'jp' ? '銀行・金融サービス・保険' : 'Banking, Financial Services & Insurance',
      slug: 'banking-financial-services-insurance',
      count: 28
    },
    {
      name: lang === 'en' ? 'Chemicals & Materials' :
            lang === 'zh' ? '化学品与材料' :
            lang === 'ko' ? '화학 및 소재' :
            lang === 'ar' ? 'المواد الكيميائية والمواد' :
            lang === 'fr' ? 'Produits Chimiques et Matériaux' :
            lang === 'es' ? 'Productos Químicos y Materiales' :
            lang === 'de' ? 'Chemikalien & Materialien' :
            lang === 'jp' ? '化学品・材料' : 'Chemicals & Materials',
      slug: 'chemicals-materials',
      count: 19
    },
    {
      name: lang === 'en' ? 'Consumer Goods' :
            lang === 'zh' ? '消费品' :
            lang === 'ko' ? '소비재' :
            lang === 'ar' ? 'السلع الاستهلاكية' :
            lang === 'fr' ? 'Biens de Consommation' :
            lang === 'es' ? 'Bienes de Consumo' :
            lang === 'de' ? 'Konsumgüter' :
            lang === 'jp' ? '消費財' : 'Consumer Goods',
      slug: 'consumer-goods',
      count: 31
    },
    {
      name: lang === 'en' ? 'Electronics & Semiconductor' :
            lang === 'zh' ? '电子与半导体' :
            lang === 'ko' ? '전자 및 반도체' :
            lang === 'ar' ? 'الإلكترونيات وأشباه الموصلات' :
            lang === 'fr' ? 'Électronique et Semi-conducteurs' :
            lang === 'es' ? 'Electrónica y Semiconductores' :
            lang === 'de' ? 'Elektronik & Halbleiter' :
            lang === 'jp' ? '電子・半導体' : 'Electronics & Semiconductor',
      slug: 'electronics-semiconductor',
      count: 42
    },
    {
      name: lang === 'en' ? 'Energy & Power' :
            lang === 'zh' ? '能源与电力' :
            lang === 'ko' ? '에너지 및 전력' :
            lang === 'ar' ? 'الطاقة والطاقة الكهربائية' :
            lang === 'fr' ? 'Énergie et Électricité' :
            lang === 'es' ? 'Energía y Energía Eléctrica' :
            lang === 'de' ? 'Energie & Strom' :
            lang === 'jp' ? 'エネルギー・電力' : 'Energy & Power',
      slug: 'energy-power',
      count: 26
    },
    {
      name: lang === 'en' ? 'Food & Beverages' :
            lang === 'zh' ? '食品与饮料' :
            lang === 'ko' ? '식품 및 음료' :
            lang === 'ar' ? 'الأغذية والمشروبات' :
            lang === 'fr' ? 'Alimentation et Boissons' :
            lang === 'es' ? 'Alimentos y Bebidas' :
            lang === 'de' ? 'Lebensmittel & Getränke' :
            lang === 'jp' ? '食品・飲料' : 'Food & Beverages',
      slug: 'food-beverages',
      count: 29
    },
    {
      name: lang === 'en' ? 'Life Sciences' :
            lang === 'zh' ? '生命科学' :
            lang === 'ko' ? '생명 과학' :
            lang === 'ar' ? 'علوم الحياة' :
            lang === 'fr' ? 'Sciences de la Vie' :
            lang === 'es' ? 'Ciencias de la Vida' :
            lang === 'de' ? 'Biowissenschaften' :
            lang === 'jp' ? 'ライフサイエンス' : 'Life Sciences',
      slug: 'life-sciences',
      count: 38
    },
    {
      name: lang === 'en' ? 'Technology, Media & Telecommunications' :
            lang === 'zh' ? '技术、媒体与电信' :
            lang === 'ko' ? '기술, 미디어 및 통신' :
            lang === 'ar' ? 'التكنولوجيا والإعلام والاتصالات' :
            lang === 'fr' ? 'Technologie, Médias et Télécommunications' :
            lang === 'es' ? 'Tecnología, Medios y Telecomunicaciones' :
            lang === 'de' ? 'Technologie, Medien & Telekommunikation' :
            lang === 'jp' ? '技術・メディア・通信' : 'Technology, Media & Telecommunications',
      slug: 'technology-media-telecommunications',
      count: 45
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {lang === 'en' ? 'Press Releases' :
               lang === 'zh' ? '新闻稿' :
               lang === 'ko' ? '보도자료' :
               lang === 'ar' ? 'البيانات الصحفية' :
               lang === 'fr' ? 'Communiqués de Presse' :
               lang === 'es' ? 'Comunicados de Prensa' :
               lang === 'de' ? 'Pressemitteilungen' :
               lang === 'jp' ? 'プレスリリース' : 'Press Releases'}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {lang === 'en' ? 'Latest industry news and company announcements' :
               lang === 'zh' ? '最新行业新闻和公司公告' :
               lang === 'ko' ? '최신 업계 뉴스 및 회사 발표' :
               lang === 'ar' ? 'أحدث الأخبار الصناعية وإعلانات الشركة' :
               lang === 'fr' ? 'Dernières actualités sectorielles et annonces de l\'entreprise' :
               lang === 'es' ? 'Últimas noticias de la industria y anuncios de la empresa' :
               lang === 'de' ? 'Neueste Branchennachrichten und Unternehmensankündigungen' :
               lang === 'jp' ? '最新の業界ニュースと企業発表' : 'Latest industry news and company announcements'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Browse by Industry' :
               lang === 'zh' ? '按行业浏览' :
               lang === 'ko' ? '산업별 둘러보기' :
               lang === 'ar' ? 'تصفح حسب الصناعة' :
               lang === 'fr' ? 'Parcourir par Industrie' :
               lang === 'es' ? 'Explorar por Industria' :
               lang === 'de' ? 'Nach Branche Durchsuchen' :
               lang === 'jp' ? '業界別に閲覧' : 'Browse by Industry'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en' ? 'Stay updated with the latest press releases and news from your industry' :
               lang === 'zh' ? '及时了解您所在行业的最新新闻稿和新闻' :
               lang === 'ko' ? '귀하의 업계에서 최신 보도자료 및 뉴스를 최신 상태로 유지하세요' :
               lang === 'ar' ? 'ابق على اطلاع بآخر البيانات الصحفية والأخبار من صناعتك' :
               lang === 'fr' ? 'Restez informé des derniers communiqués de presse et actualités de votre secteur' :
               lang === 'es' ? 'Manténgase actualizado con los últimos comunicados de prensa y noticias de su industria' :
               lang === 'de' ? 'Bleiben Sie über die neuesten Pressemitteilungen und Nachrichten aus Ihrer Branche auf dem Laufenden' :
               lang === 'jp' ? 'お客様の業界からの最新プレスリリースとニュースを最新の状態に保ちましょう' : 'Stay updated with the latest press releases and news from your industry'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} href={`/${lang}/press-releases/${category.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {category.count} {lang === 'en' ? 'Releases' :
                                         lang === 'zh' ? '发布' :
                                         lang === 'ko' ? '발표' :
                                         lang === 'ar' ? 'إصدار' :
                                         lang === 'fr' ? 'Communiqués' :
                                         lang === 'es' ? 'Comunicados' :
                                         lang === 'de' ? 'Mitteilungen' :
                                         lang === 'jp' ? 'リリース' : 'Releases'}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {lang === 'en' ? 'Stay Connected' :
             lang === 'zh' ? '保持联系' :
             lang === 'ko' ? '연결 유지' :
             lang === 'ar' ? 'ابق متصلاً' :
             lang === 'fr' ? 'Restez Connecté' :
             lang === 'es' ? 'Manténgase Conectado' :
             lang === 'de' ? 'Bleiben Sie Verbunden' :
             lang === 'jp' ? 'つながりを保つ' : 'Stay Connected'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {lang === 'en' ? 'Subscribe to our newsletter for the latest industry updates and press releases' :
             lang === 'zh' ? '订阅我们的新闻通讯，获取最新的行业更新和新闻稿' :
             lang === 'ko' ? '최신 업계 업데이트 및 보도자료를 위해 저희 뉴스레터를 구독하세요' :
             lang === 'ar' ? 'اشترك في النشرة الإخبارية لدينا للحصول على أحدث تحديثات الصناعة والبيانات الصحفية' :
             lang === 'fr' ? 'Abonnez-vous à notre newsletter pour les dernières actualités sectorielles et communiqués de presse' :
             lang === 'es' ? 'Suscríbase a nuestro boletín para las últimas actualizaciones de la industria y comunicados de prensa' :
             lang === 'de' ? 'Abonnieren Sie unseren Newsletter für die neuesten Branchenupdates und Pressemitteilungen' :
             lang === 'jp' ? '最新の業界アップデートとプレスリリースのためにニュースレターを購読してください' : 'Subscribe to our newsletter for the latest industry updates and press releases'}
          </p>
          <a href={`/${lang}/contact`} className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {lang === 'en' ? 'Subscribe Now' :
             lang === 'zh' ? '立即订阅' :
             lang === 'ko' ? '지금 구독하기' :
             lang === 'ar' ? 'اشترك الآن' :
             lang === 'fr' ? 'S\'abonner Maintenant' :
             lang === 'es' ? 'Suscribirse Ahora' :
             lang === 'de' ? 'Jetzt Abonnieren' :
             lang === 'jp' ? '今すぐ購読' : 'Subscribe Now'}
          </a>
        </div>
      </section>
    </div>
  );
}
