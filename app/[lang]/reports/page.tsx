// file: app/[lang]/reports/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { FileText, TrendingUp, Search, Filter, ArrowRight, Download, Calendar, User } from 'lucide-react';
import StickyContactForm from '@/components/reports/StickyContactForm';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Market Research Reports - Market Research Insights' : 
           lang === 'zh' ? '市场研究报告 - 市场研究洞察' :
           lang === 'ko' ? '시장 조사 보고서 - 시장 조사 인사이트' :
           lang === 'ar' ? 'تقارير أبحاث السوق - رؤى أبحاث السوق' :
           lang === 'fr' ? 'Rapports de Recherche de Marché - Insights de recherche de marché' :
           lang === 'es' ? 'Informes de Investigación de Mercado - Perspectivas de investigación de mercado' :
           lang === 'de' ? 'Marktforschungsberichte - Marktforschung Einblicke' :
           lang === 'jp' ? '市場調査レポート - 市場調査インサイト' : 'Market Research Reports - Market Research Insights',
    description: lang === 'en' ? 'Browse comprehensive market research reports across all industries. Get detailed insights, market analysis, and strategic recommendations.' :
                 lang === 'zh' ? '浏览所有行业的综合市场研究报告。获取详细洞察、市场分析和战略建议。' :
                 lang === 'ko' ? '모든 산업 분야의 포괄적인 시장 조사 보고서를 둘러보세요. 상세한 인사이트, 시장 분석 및 전략적 권장사항을 얻으세요.' :
                 lang === 'ar' ? 'تصفح تقارير أبحاث السوق الشاملة عبر جميع الصناعات. احصل على رؤى مفصلة وتحليل السوق والتوصيات الاستراتيجية.' :
                 lang === 'fr' ? 'Parcourez des rapports complets de recherche de marché dans tous les secteurs. Obtenez des insights détaillés, des analyses de marché et des recommandations stratégiques.' :
                 lang === 'es' ? 'Explore informes completos de investigación de mercado en todas las industrias. Obtenga información detallada, análisis de mercado y recomendaciones estratégicas.' :
                 lang === 'de' ? 'Durchsuchen Sie umfassende Marktforschungsberichte in allen Branchen. Erhalten Sie detaillierte Einblicke, Marktanalysen und strategische Empfehlungen.' :
                 lang === 'jp' ? 'すべての業界の包括的な市場調査レポートを閲覧してください。詳細なインサイト、市場分析、戦略的推奨事項を取得します。' : 'Browse comprehensive market research reports across all industries. Get detailed insights, market analysis, and strategic recommendations.',
  };
}

async function getReports() {
  try {
    const reports = await prisma.report.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        author: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 12
    });
    return reports;
  } catch (error) {
    console.error('Error fetching reports:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const categories = await prisma.report.groupBy({
      by: ['category'],
      where: { status: 'PUBLISHED' },
      _count: { category: true }
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

type PageProps = {
  params: { lang: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

const ReportsPage: React.FC<PageProps> = async ({ params }) => {
  const lang = params.lang;
  const reports = await getReports();
  const categories = await getCategories();
  
  const industryCategories = [
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
      count: categories.find(c => c.category === 'AEROSPACE_DEFENSE')?._count.category || 0,
      color: 'from-blue-500 to-blue-600',
      icon: '✈️'
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
      count: categories.find(c => c.category === 'LIFE_SCIENCES')?._count.category || 0,
      color: 'from-red-500 to-red-600',
      icon: '🏥'
    },
    {
      name: lang === 'en' ? 'Technology & Media' :
            lang === 'zh' ? '技术与媒体' :
            lang === 'ko' ? '기술 및 미디어' :
            lang === 'ar' ? 'التكنولوجيا والإعلام' :
            lang === 'fr' ? 'Technologie et Médias' :
            lang === 'es' ? 'Tecnología y Medios' :
            lang === 'de' ? 'Technologie & Medien' :
            lang === 'jp' ? '技術・メディア' : 'Technology & Media',
      slug: 'technology-media-telecommunications',
      count: categories.find(c => c.category === 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS')?._count.category || 0,
      color: 'from-teal-500 to-teal-600',
      icon: '📱'
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
      count: categories.find(c => c.category === 'ENERGY_POWER')?._count.category || 0,
      color: 'from-yellow-500 to-yellow-600',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-dots-pattern"></div>
        </div>

        <div className="relative container-responsive py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              {lang === 'en' ? 'Market Research Reports' :
               lang === 'zh' ? '市场研究报告' :
               lang === 'ko' ? '시장 조사 보고서' :
               lang === 'ar' ? 'تقارير أبحاث السوق' :
               lang === 'fr' ? 'Rapports de Recherche de Marché' :
               lang === 'es' ? 'Informes de Investigación de Mercado' :
               lang === 'de' ? 'Marktforschungsberichte' :
               lang === 'jp' ? '市場調査レポート' : 'Market Research Reports'}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {lang === 'en' ? 'Market Research Reports' :
               lang === 'zh' ? '市场研究报告' :
               lang === 'ko' ? '시장 조사 보고서' :
               lang === 'ar' ? 'تقارير أبحاث السوق' :
               lang === 'fr' ? 'Rapports de Recherche de Marché' :
               lang === 'es' ? 'Informes de Investigación de Mercado' :
               lang === 'de' ? 'Marktforschungsberichte' :
               lang === 'jp' ? '市場調査レポート' : 'Market Research Reports'}
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              {lang === 'en' ? 'Comprehensive insights across all industries to drive informed business decisions' :
               lang === 'zh' ? '涵盖所有行业的综合洞察，推动明智的商业决策' :
               lang === 'ko' ? '정보에 입각한 비즈니스 결정을 주도하는 모든 산업 분야의 포괄적 인사이트' :
               lang === 'ar' ? 'رؤى شاملة عبر جميع الصناعات لدفع قرارات الأعمال المدروسة' :
               lang === 'fr' ? 'Insights complets dans tous les secteurs pour stimuler les décisions commerciales éclairées' :
               lang === 'es' ? 'Perspectivas completas en todas las industrias para impulsar decisiones comerciales informadas' :
               lang === 'de' ? 'Umfassende Einblicke in alle Branchen für fundierte Geschäftsentscheidungen' :
               lang === 'jp' ? '情報に基づくビジネス決定を推進する全業界の包括的インサイト' : 'Comprehensive insights across all industries to drive informed business decisions'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-3">
            
            {/* Industry Categories */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {lang === 'en' ? 'Browse by Industry' :
                   lang === 'zh' ? '按行业浏览' :
                   lang === 'ko' ? '산업별 둘러보기' :
                   lang === 'ar' ? 'تصفح حسب الصناعة' :
                   lang === 'fr' ? 'Parcourir par Industrie' :
                   lang === 'es' ? 'Explorar por Industria' :
                   lang === 'de' ? 'Nach Branche Durchsuchen' :
                   lang === 'jp' ? '業界別に閲覧' : 'Browse by Industry'}
                </h2>
                <Link 
                  href={`/${lang}/industry`}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
                >
                  {lang === 'en' ? 'View All' :
                   lang === 'zh' ? '查看全部' :
                   lang === 'ko' ? '모두 보기' :
                   lang === 'ar' ? 'عرض الكل' :
                   lang === 'fr' ? 'Voir Tout' :
                   lang === 'es' ? 'Ver Todo' :
                   lang === 'de' ? 'Alle Anzeigen' :
                   lang === 'jp' ? 'すべて表示' : 'View All'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industryCategories.map((category, index) => (
                  <Link 
                    key={index}
                    href={`/${lang}/reports/${category.slug}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary-200">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-2xl`}>
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {category.count} {lang === 'en' ? 'Reports' :
                                           lang === 'zh' ? '报告' :
                                           lang === 'ko' ? '보고서' :
                                           lang === 'ar' ? 'تقرير' :
                                           lang === 'fr' ? 'Rapports' :
                                           lang === 'es' ? 'Informes' :
                                           lang === 'de' ? 'Berichte' :
                                           lang === 'jp' ? 'レポート' : 'Reports'}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Featured Reports */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {lang === 'en' ? 'Latest Reports' :
                   lang === 'zh' ? '最新报告' :
                   lang === 'ko' ? '최신 보고서' :
                   lang === 'ar' ? 'أحدث التقارير' :
                   lang === 'fr' ? 'Derniers Rapports' :
                   lang === 'es' ? 'Últimos Informes' :
                   lang === 'de' ? 'Neueste Berichte' :
                   lang === 'jp' ? '最新レポート' : 'Latest Reports'}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={lang === 'en' ? 'Search reports...' :
                                 lang === 'zh' ? '搜索报告...' :
                                 lang === 'ko' ? '보고서 검색...' :
                                 lang === 'ar' ? 'البحث في التقارير...' :
                                 lang === 'fr' ? 'Rechercher des rapports...' :
                                 lang === 'es' ? 'Buscar informes...' :
                                 lang === 'de' ? 'Berichte suchen...' :
                                 lang === 'jp' ? 'レポートを検索...' : 'Search reports...'}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reports.map((report) => (
                  <article key={report.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {report.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                        {report.featured && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                        <Link href={`/${lang}/reports/${report.slug}`}>
                          {report.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {report.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {report.author?.name || 'Anonymous'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(report.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <span className="font-semibold text-primary-600">
                          ${report.price.toString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/${lang}/reports/${report.slug}`}
                          className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors"
                        >
                          {lang === 'en' ? 'View Report' :
                           lang === 'zh' ? '查看报告' :
                           lang === 'ko' ? '보고서 보기' :
                           lang === 'ar' ? 'عرض التقرير' :
                           lang === 'fr' ? 'Voir le Rapport' :
                           lang === 'es' ? 'Ver Informe' :
                           lang === 'de' ? 'Bericht Anzeigen' :
                           lang === 'jp' ? 'レポートを見る' : 'View Report'}
                        </Link>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          <Download className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {reports.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {lang === 'en' ? 'No reports available' :
                     lang === 'zh' ? '暂无报告' :
                     lang === 'ko' ? '사용 가능한 보고서 없음' :
                     lang === 'ar' ? 'لا توجد تقارير متاحة' :
                     lang === 'fr' ? 'Aucun rapport disponible' :
                     lang === 'es' ? 'No hay informes disponibles' :
                     lang === 'de' ? 'Keine Berichte verfügbar' :
                     lang === 'jp' ? 'レポートがありません' : 'No reports available'}
                  </h3>
                  <p className="text-gray-600">
                    {lang === 'en' ? 'Check back later for new reports' :
                     lang === 'zh' ? '稍后再查看新报告' :
                     lang === 'ko' ? '나중에 새로운 보고서를 확인하세요' :
                     lang === 'ar' ? 'عد لاحقاً للتحقق من التقارير الجديدة' :
                     lang === 'fr' ? 'Revenez plus tard pour de nouveaux rapports' :
                     lang === 'es' ? 'Vuelva más tarde para nuevos informes' :
                     lang === 'de' ? 'Schauen Sie später nach neuen Berichten' :
                     lang === 'jp' ? '後で新しいレポートを確認してください' : 'Check back later for new reports'}
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Right Column: Sticky Contact Form */}
          <div className="lg:col-span-1">
            <StickyContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
