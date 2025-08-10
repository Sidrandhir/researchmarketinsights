// file: app/[lang]/reports/global-patient-repositioning-system-market/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Share2, 
  Calendar, 
  User, 
  DollarSign,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart3,
  Users,
  Globe
} from 'lucide-react';
import StickyContactForm from '@/components/reports/StickyContactForm';
import ReportContent from '@/components/reports/ReportContent';

// Fixed: Updated type definition to use Promise<{ lang: string }>
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  // Get the report data for metadata
  const report = await prisma.report.findUnique({
    where: { slug: 'global-patient-repositioning-system-market' },
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  if (!report) {
    return {
      title: 'Report Not Found',
      description: 'The requested report could not be found.'
    };
  }
  
  return {
    title: lang === 'en' ? `${report.title} - Market Research Insights` : 
           lang === 'zh' ? `${report.title} - 市场研究洞察` :
           lang === 'ko' ? `${report.title} - 시장 조사 인사이트` :
           lang === 'ar' ? `${report.title} - رؤى أبحاث السوق` :
           lang === 'fr' ? `${report.title} - Insights de recherche de marché` :
           lang === 'es' ? `${report.title} - Perspectivas de investigación de mercado` :
           lang === 'de' ? `${report.title} - Marktforschung Einblicke` :
           lang === 'jp' ? `${report.title} - 市場調査インサイト` : `${report.title} - Market Research Insights`,
    description: report.description,
    openGraph: {
      title: report.title,
      description: report.description,
      type: 'article',
      publishedTime: report.createdAt.toISOString(),
      modifiedTime: report.updatedAt.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: report.description,
    }
  };
}

async function getReport() {
  try {
    const report = await prisma.report.findUnique({
      where: { 
        slug: 'global-patient-repositioning-system-market',
        status: 'PUBLISHED'
      },
      include: {
        author: {
          select: { 
            name: true,
            email: true
          }
        }
      }
    });
    return report;
  } catch (error) {
    console.error('Error fetching report:', error);
    return null;
  }
}

async function getRelatedReports() {
  try {
    const reports = await prisma.report.findMany({
      where: { 
        status: 'PUBLISHED',
        category: 'LIFE_SCIENCES',
        slug: {
          not: 'global-patient-repositioning-system-market'
        }
      },
      include: {
        author: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 3
    });
    return reports;
  } catch (error) {
    console.error('Error fetching related reports:', error);
    return [];
  }
}

// Fixed: Updated component type definition to use Promise<{ lang: string }>
const GlobalPatientRepositioningSystemMarketPage: React.FC<{ params: Promise<{ lang: string }> }> = async ({ params }) => {
  const { lang } = await params; // Fixed: Added await to destructure params
  const report = await getReport();
  const relatedReports = await getRelatedReports();

  if (!report) {
    notFound();
  }

  const reportHighlights = [
    {
      icon: BarChart3,
      title: lang === 'en' ? 'Market Size' :
             lang === 'zh' ? '市场规模' :
             lang === 'ko' ? '시장 규모' :
             lang === 'ar' ? 'حجم السوق' :
             lang === 'fr' ? 'Taille du marché' :
             lang === 'es' ? 'Tamaño del mercado' :
             lang === 'de' ? 'Marktgröße' :
             lang === 'jp' ? '市場規模' : 'Market Size',
      value: '$2.1B',
      description: lang === 'en' ? '2024 Global Market Value' :
                   lang === 'zh' ? '2024年全球市场价值' :
                   lang === 'ko' ? '2024년 글로벌 시장 가치' :
                   lang === 'ar' ? 'قيمة السوق العالمية 2024' :
                   lang === 'fr' ? 'Valeur du marché mondial 2024' :
                   lang === 'es' ? 'Valor del mercado global 2024' :
                   lang === 'de' ? 'Globaler Marktwert 2024' :
                   lang === 'jp' ? '2024年のグローバル市場価値' : '2024 Global Market Value'
    },
    {
      icon: TrendingUp,
      title: 'CAGR',
      value: '6.8%',
      description: lang === 'en' ? 'Expected Growth Rate (2024-2030)' :
                   lang === 'zh' ? '预期增长率 (2024-2030)' :
                   lang === 'ko' ? '예상 성장률 (2024-2030)' :
                   lang === 'ar' ? 'معدل النمو المتوقع (2024-2030)' :
                   lang === 'fr' ? 'Taux de croissance attendu (2024-2030)' :
                   lang === 'es' ? 'Tasa de crecimiento esperada (2024-2030)' :
                   lang === 'de' ? 'Erwartete Wachstumsrate (2024-2030)' :
                   lang === 'jp' ? '期待成長率 (2024-2030)' : 'Expected Growth Rate (2024-2030)'
    },
    {
      icon: Users,
      title: lang === 'en' ? 'Key Players' :
             lang === 'zh' ? '主要参与者' :
             lang === 'ko' ? '주요 참가자' :
             lang === 'ar' ? 'اللاعبون الرئيسيون' :
             lang === 'fr' ? 'Acteurs clés' :
             lang === 'es' ? 'Jugadores clave' :
             lang === 'de' ? 'Hauptakteure' :
             lang === 'jp' ? '主要プレーヤー' : 'Key Players',
      value: '25+',
      description: lang === 'en' ? 'Major Companies Analyzed' :
                   lang === 'zh' ? '分析的主要公司' :
                   lang === 'ko' ? '분석된 주요 기업' :
                   lang === 'ar' ? 'الشركات الكبرى المحللة' :
                   lang === 'fr' ? 'Grandes entreprises analysées' :
                   lang === 'es' ? 'Grandes empresas analizadas' :
                   lang === 'de' ? 'Analysierte Großunternehmen' :
                   lang === 'jp' ? '分析された主要企業' : 'Major Companies Analyzed'
    },
    {
      icon: Globe,
      title: lang === 'en' ? 'Regional Coverage' :
             lang === 'zh' ? '区域覆盖' :
             lang === 'ko' ? '지역 커버리지' :
             lang === 'ar' ? 'التغطية الإقليمية' :
             lang === 'fr' ? 'Couverture régionale' :
             lang === 'es' ? 'Cobertura regional' :
             lang === 'de' ? 'Regionale Abdeckung' :
             lang === 'jp' ? '地域カバレッジ' : 'Regional Coverage',
      value: '6',
      description: lang === 'en' ? 'Major Regions Covered' :
                   lang === 'zh' ? '主要覆盖地区' :
                   lang === 'ko' ? '주요 커버 지역' :
                   lang === 'ar' ? 'المناطق الرئيسية المغطاة' :
                   lang === 'fr' ? 'Principales régions couvertes' :
                   lang === 'es' ? 'Principales regiones cubiertas' :
                   lang === 'de' ? 'Hauptregionen abgedeckt' :
                   lang === 'jp' ? 'カバーされる主要地域' : 'Major Regions Covered'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-responsive py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${lang}`} className="hover:text-primary-600">
              {lang === 'en' ? 'Home' :
               lang === 'zh' ? '首页' :
               lang === 'ko' ? '홈' :
               lang === 'ar' ? 'الرئيسية' :
               lang === 'fr' ? 'Accueil' :
               lang === 'es' ? 'Inicio' :
               lang === 'de' ? 'Startseite' :
               lang === 'jp' ? 'ホーム' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/reports`} className="hover:text-primary-600">
              {lang === 'en' ? 'Reports' :
               lang === 'zh' ? '报告' :
               lang === 'ko' ? '보고서' :
               lang === 'ar' ? 'التقارير' :
               lang === 'fr' ? 'Rapports' :
               lang === 'es' ? 'Informes' :
               lang === 'de' ? 'Berichte' :
               lang === 'jp' ? 'レポート' : 'Reports'}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/reports/life-sciences`} className="hover:text-primary-600">
              {lang === 'en' ? 'Life Sciences' :
               lang === 'zh' ? '生命科学' :
               lang === 'ko' ? '생명과학' :
               lang === 'ar' ? 'علوم الحياة' :
               lang === 'fr' ? 'Sciences de la vie' :
               lang === 'es' ? 'Ciencias de la vida' :
               lang === 'de' ? 'Biowissenschaften' :
               lang === 'jp' ? 'ライフサイエンス' : 'Life Sciences'}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">
              {lang === 'en' ? 'Patient Repositioning System' :
               lang === 'zh' ? '患者重新定位系统' :
               lang === 'ko' ? '환자 재배치 시스템' :
               lang === 'ar' ? 'نظام إعادة تموضع المريض' :
               lang === 'fr' ? 'Système de repositionnement des patients' :
               lang === 'es' ? 'Sistema de reposicionamiento de pacientes' :
               lang === 'de' ? 'Patientenpositionierungssystem' :
               lang === 'jp' ? '患者再配置システム' : 'Patient Repositioning System'}
            </span>
          </nav>
        </div>
      </div>

      {/* Report Header */}
      <div className="bg-white">
        <div className="container-responsive py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Column - Report Details */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <Link 
                  href={`/${lang}/reports`}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {lang === 'en' ? 'Back to Reports' :
                   lang === 'zh' ? '返回报告' :
                   lang === 'ko' ? '보고서로 돌아가기' :
                   lang === 'ar' ? 'العودة إلى التقارير' :
                   lang === 'fr' ? 'Retour aux rapports' :
                   lang === 'es' ? 'Volver a los informes' :
                   lang === 'de' ? 'Zurück zu Berichten' :
                   lang === 'jp' ? 'レポートに戻る' : 'Back to Reports'}
                </Link>

                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {report.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  {report.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  )}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {lang === 'en' ? 'Published' :
                     lang === 'zh' ? '已发布' :
                     lang === 'ko' ? '발행됨' :
                     lang === 'ar' ? 'منشور' :
                     lang === 'fr' ? 'Publié' :
                     lang === 'es' ? 'Publicado' :
                     lang === 'de' ? 'Veröffentlicht' :
                     lang === 'jp' ? '公開済み' : 'Published'}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {report.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {report.description}
                </p>

                {/* Report Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{report.author?.name || 'Market Research Team'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {lang === 'en' ? 'Last updated' :
                       lang === 'zh' ? '最后更新' :
                       lang === 'ko' ? '마지막 업데이트' :
                       lang === 'ar' ? 'آخر تحديث' :
                       lang === 'fr' ? 'Dernière mise à jour' :
                       lang === 'es' ? 'Última actualización' :
                       lang === 'de' ? 'Zuletzt aktualisiert' :
                       lang === 'jp' ? '最終更新' : 'Last updated'}: {new Date(report.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{report.pages} {lang === 'en' ? 'pages' : lang === 'zh' ? '页' : lang === 'ko' ? '페이지' : lang === 'ar' ? 'صفحة' : lang === 'fr' ? 'pages' : lang === 'es' ? 'páginas' : lang === 'de' ? 'Seiten' : lang === 'jp' ? 'ページ' : 'pages'}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    {lang === 'en' ? 'Download Sample' :
                     lang === 'zh' ? '下载样本' :
                     lang === 'ko' ? '샘플 다운로드' :
                     lang === 'ar' ? 'تحميل عينة' :
                     lang === 'fr' ? 'Télécharger l\'échantillon' :
                     lang === 'es' ? 'Descargar muestra' :
                     lang === 'de' ? 'Probe herunterladen' :
                     lang === 'jp' ? 'サンプルをダウンロード' : 'Download Sample'}
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    {lang === 'en' ? 'Share Report' :
                     lang === 'zh' ? '分享报告' :
                     lang === 'ko' ? '보고서 공유' :
                     lang === 'ar' ? 'مشاركة التقرير' :
                     lang === 'fr' ? 'Partager le rapport' :
                     lang === 'es' ? 'Compartir informe' :
                     lang === 'de' ? 'Bericht teilen' :
                     lang === 'jp' ? 'レポートを共有' : 'Share Report'}
                  </button>
                  <div className="text-2xl font-bold text-primary-600 flex items-center gap-1">
                    <DollarSign className="h-6 w-6" />
                    {report.price.toString()}
                  </div>
                </div>

                {/* Report Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {reportHighlights.map((highlight, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                      <highlight.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{highlight.value}</div>
                      <div className="text-sm font-medium text-gray-700 mb-1">{highlight.title}</div>
                      <div className="text-xs text-gray-500">{highlight.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Report Content */}
              <ReportContent report={report} lang={lang} />

              {/* Related Reports */}
              {relatedReports.length > 0 && (
                <section className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {lang === 'en' ? 'Related Reports' :
                     lang === 'zh' ? '相关报告' :
                     lang === 'ko' ? '관련 보고서' :
                     lang === 'ar' ? 'التقارير ذات الصلة' :
                     lang === 'fr' ? 'Rapports connexes' :
                     lang === 'es' ? 'Informes relacionados' :
                     lang === 'de' ? 'Verwandte Berichte' :
                     lang === 'jp' ? '関連レポート' : 'Related Reports'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedReports.map((relatedReport) => (
                      <Link
                        key={relatedReport.id}
                        href={`/${lang}/reports/${relatedReport.slug}`}
                        className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                              {relatedReport.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedReport.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {relatedReport.description}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{new Date(relatedReport.createdAt).toLocaleDateString()}</span>
                            <span className="font-semibold text-primary-600">
                              ${relatedReport.price.toString()}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column - Sticky Contact Form */}
            <div className="lg:col-span-1">
              <StickyContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPatientRepositioningSystemMarketPage;