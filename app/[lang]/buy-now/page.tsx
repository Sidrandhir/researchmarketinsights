'use client';

import { useState, use } from 'react';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default function BuyNowPage({ params }: PageProps) {
  // For client components, use the 'use' hook to unwrap the Promise
  const { lang } = use(params);
  const [selectedLicense, setSelectedLicense] = useState('single');

  const licenses = [
    {
      id: 'single',
      name: lang === 'en' ? 'Single User License' :
             lang === 'zh' ? '单用户许可证' :
             lang === 'ko' ? '단일 사용자 라이선스' :
             lang === 'ar' ? 'ترخيص مستخدم واحد' :
             lang === 'fr' ? 'Licence Utilisateur Unique' :
             lang === 'es' ? 'Licencia de Usuario Único' :
             lang === 'de' ? 'Einzellizenz' :
             lang === 'jp' ? 'シングルユーザーライセンス' : 'Single User License',
      price: 2999,
      description: lang === 'en' ? 'Access for one user within your organization' :
                   lang === 'zh' ? '组织内一个用户的访问权限' :
                   lang === 'ko' ? '조직 내 한 명의 사용자 액세스' :
                   lang === 'ar' ? 'الوصول لمستخدم واحد داخل مؤسستك' :
                   lang === 'fr' ? 'Accès pour un utilisateur au sein de votre organisation' :
                   lang === 'es' ? 'Acceso para un usuario dentro de su organización' :
                   lang === 'de' ? 'Zugang für einen Benutzer innerhalb Ihrer Organisation' :
                   lang === 'jp' ? '組織内の1人のユーザーがアクセス可能' : 'Access for one user within your organization',
      features: [
        lang === 'en' ? 'PDF Report' :
        lang === 'zh' ? 'PDF报告' :
        lang === 'ko' ? 'PDF 보고서' :
        lang === 'ar' ? 'تقرير PDF' :
        lang === 'fr' ? 'Rapport PDF' :
        lang === 'es' ? 'Informe PDF' :
        lang === 'de' ? 'PDF-Bericht' :
        lang === 'jp' ? 'PDFレポート' : 'PDF Report',
        lang === 'en' ? 'Excel Data' :
        lang === 'zh' ? 'Excel数据' :
        lang === 'ko' ? 'Excel 데이터' :
        lang === 'ar' ? 'بيانات Excel' :
        lang === 'fr' ? 'Données Excel' :
        lang === 'es' ? 'Datos de Excel' :
        lang === 'de' ? 'Excel-Daten' :
        lang === 'jp' ? 'Excelデータ' : 'Excel Data',
        lang === 'en' ? '1 Year Support' :
        lang === 'zh' ? '1年支持' :
        lang === 'ko' ? '1년 지원' :
        lang === 'ar' ? 'دعم لمدة سنة واحدة' :
        lang === 'fr' ? 'Support 1 an' :
        lang === 'es' ? 'Soporte 1 año' :
        lang === 'de' ? '1 Jahr Support' :
        lang === 'jp' ? '1年間サポート' : '1 Year Support'
      ]
    },
    {
      id: 'multi',
      name: lang === 'en' ? 'Multi-User License' :
             lang === 'zh' ? '多用户许可证' :
             lang === 'ko' ? '다중 사용자 라이선스' :
             lang === 'ar' ? 'ترخيص متعدد المستخدمين' :
             lang === 'fr' ? 'Licence Multi-Utilisateurs' :
             lang === 'es' ? 'Licencia Multi-Usuario' :
             lang === 'de' ? 'Mehrfachlizenz' :
             lang === 'jp' ? 'マルチユーザーライセンス' : 'Multi-User License',
      price: 5999,
      description: lang === 'en' ? 'Access for up to 5 users within your organization' :
                   lang === 'zh' ? '组织内最多5个用户的访问权限' :
                   lang === 'ko' ? '조직 내 최대 5명의 사용자 액세스' :
                   lang === 'ar' ? 'الوصول لما يصل إلى 5 مستخدمين داخل مؤسستك' :
                   lang === 'fr' ? 'Accès pour jusqu\'à 5 utilisateurs au sein de votre organisation' :
                   lang === 'es' ? 'Acceso para hasta 5 usuarios dentro de su organización' :
                   lang === 'de' ? 'Zugang für bis zu 5 Benutzer innerhalb Ihrer Organisation' :
                   lang === 'jp' ? '組織内の最大5人のユーザーがアクセス可能' : 'Access for up to 5 users within your organization',
      features: [
        lang === 'en' ? 'PDF Report' :
        lang === 'zh' ? 'PDF报告' :
        lang === 'ko' ? 'PDF 보고서' :
        lang === 'ar' ? 'تقرير PDF' :
        lang === 'fr' ? 'Rapport PDF' :
        lang === 'es' ? 'Informe PDF' :
        lang === 'de' ? 'PDF-Bericht' :
        lang === 'jp' ? 'PDFレポート' : 'PDF Report',
        lang === 'en' ? 'Excel Data' :
        lang === 'zh' ? 'Excel数据' :
        lang === 'ko' ? 'Excel 데이터' :
        lang === 'ar' ? 'بيانات Excel' :
        lang === 'fr' ? 'Données Excel' :
        lang === 'es' ? 'Datos de Excel' :
        lang === 'de' ? 'Excel-Daten' :
        lang === 'jp' ? 'Excelデータ' : 'Excel Data',
        lang === 'en' ? 'PowerPoint Presentation' :
        lang === 'zh' ? 'PowerPoint演示文稿' :
        lang === 'ko' ? 'PowerPoint 프레젠테이션' :
        lang === 'ar' ? 'عرض تقديمي PowerPoint' :
        lang === 'fr' ? 'Présentation PowerPoint' :
        lang === 'es' ? 'Presentación PowerPoint' :
        lang === 'de' ? 'PowerPoint-Präsentation' :
        lang === 'jp' ? 'PowerPointプレゼンテーション' : 'PowerPoint Presentation',
        lang === 'en' ? '2 Years Support' :
        lang === 'zh' ? '2年支持' :
        lang === 'ko' ? '2년 지원' :
        lang === 'ar' ? 'دعم لمدة سنتين' :
        lang === 'fr' ? 'Support 2 ans' :
        lang === 'es' ? 'Soporte 2 años' :
        lang === 'de' ? '2 Jahre Support' :
        lang === 'jp' ? '2年間サポート' : '2 Years Support'
      ]
    },
    {
      id: 'enterprise',
      name: lang === 'en' ? 'Enterprise License' :
             lang === 'zh' ? '企业许可证' :
             lang === 'ko' ? '엔터프라이즈 라이선스' :
             lang === 'ar' ? 'ترخيص المؤسسة' :
             lang === 'fr' ? 'Licence Entreprise' :
             lang === 'es' ? 'Licencia Empresarial' :
             lang === 'de' ? 'Unternehmenslizenz' :
             lang === 'jp' ? 'エンタープライズライセンス' : 'Enterprise License',
      price: 9999,
      description: lang === 'en' ? 'Unlimited access for your entire organization' :
                   lang === 'zh' ? '整个组织的无限访问权限' :
                   lang === 'ko' ? '전체 조직의 무제한 액세스' :
                   lang === 'ar' ? 'وصول غير محدود لمؤسستك بأكملها' :
                   lang === 'fr' ? 'Accès illimité pour toute votre organisation' :
                   lang === 'es' ? 'Acceso ilimitado para toda su organización' :
                   lang === 'de' ? 'Unbegrenzter Zugang für Ihre gesamte Organisation' :
                   lang === 'jp' ? '組織全体の無制限アクセス' : 'Unlimited access for your entire organization',
      features: [
        lang === 'en' ? 'PDF Report' :
        lang === 'zh' ? 'PDF报告' :
        lang === 'ko' ? 'PDF 보고서' :
        lang === 'ar' ? 'تقرير PDF' :
        lang === 'fr' ? 'Rapport PDF' :
        lang === 'es' ? 'Informe PDF' :
        lang === 'de' ? 'PDF-Bericht' :
        lang === 'jp' ? 'PDFレポート' : 'PDF Report',
        lang === 'en' ? 'Excel Data' :
        lang === 'zh' ? 'Excel数据' :
        lang === 'ko' ? 'Excel 데이터' :
        lang === 'ar' ? 'بيانات Excel' :
        lang === 'fr' ? 'Données Excel' :
        lang === 'es' ? 'Datos de Excel' :
        lang === 'de' ? 'Excel-Daten' :
        lang === 'jp' ? 'Excelデータ' : 'Excel Data',
        lang === 'en' ? 'PowerPoint Presentation' :
        lang === 'zh' ? 'PowerPoint演示文稿' :
        lang === 'ko' ? 'PowerPoint 프레젠테이션' :
        lang === 'ar' ? 'عرض تقديمي PowerPoint' :
        lang === 'fr' ? 'Présentation PowerPoint' :
        lang === 'es' ? 'Presentación PowerPoint' :
        lang === 'de' ? 'PowerPoint-Präsentation' :
        lang === 'jp' ? 'PowerPointプレゼンテーション' : 'PowerPoint Presentation',
        lang === 'en' ? 'Custom Analysis' :
        lang === 'zh' ? '定制分析' :
        lang === 'ko' ? '맞춤형 분석' :
        lang === 'ar' ? 'تحليل مخصص' :
        lang === 'fr' ? 'Analyse Personnalisée' :
        lang === 'es' ? 'Análisis Personalizado' :
        lang === 'de' ? 'Maßgeschneiderte Analyse' :
        lang === 'jp' ? 'カスタム分析' : 'Custom Analysis',
        lang === 'en' ? 'Lifetime Support' :
        lang === 'zh' ? '终身支持' :
        lang === 'ko' ? '평생 지원' :
        lang === 'ar' ? 'دعم مدى الحياة' :
        lang === 'fr' ? 'Support à Vie' :
        lang === 'es' ? 'Soporte de Por Vida' :
        lang === 'de' ? 'Lebenslanger Support' :
        lang === 'jp' ? 'ライフタイムサポート' : 'Lifetime Support'
      ]
    }
  ];

  const selectedLicenseData = licenses.find(license => license.id === selectedLicense);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'Select Your License' :
             lang === 'zh' ? '选择您的许可证' :
             lang === 'ko' ? '라이선스 선택' :
             lang === 'ar' ? 'اختر ترخيصك' :
             lang === 'fr' ? 'Sélectionnez Votre Licence' :
             lang === 'es' ? 'Seleccione Su Licencia' :
             lang === 'de' ? 'Wählen Sie Ihre Lizenz' :
             lang === 'jp' ? 'ライセンスを選択' : 'Select Your License'}
          </h1>
          <p className="text-xl text-gray-600">
            {lang === 'en' ? 'Choose the license that best fits your organization\'s needs' :
             lang === 'zh' ? '选择最适合您组织需求的许可证' :
             lang === 'ko' ? '조직의 요구사항에 가장 적합한 라이선스를 선택하세요' :
             lang === 'ar' ? 'اختر الترخيص الذي يناسب احتياجات مؤسستك' :
             lang === 'fr' ? 'Choisissez la licence qui correspond le mieux aux besoins de votre organisation' :
             lang === 'es' ? 'Elija la licencia que mejor se adapte a las necesidades de su organización' :
             lang === 'de' ? 'Wählen Sie die Lizenz, die am besten zu den Bedürfnissen Ihrer Organisation passt' :
             lang === 'jp' ? '組織のニーズに最も適したライセンスを選択してください' : 'Choose the license that best fits your organization\'s needs'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {licenses.map((license) => (
            <div
              key={license.id}
              className={`bg-white rounded-lg shadow-lg p-6 border-2 cursor-pointer transition-all ${
                selectedLicense === license.id
                  ? 'border-blue-500 shadow-xl'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedLicense(license.id)}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{license.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${license.price.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm">{license.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {license.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  selectedLicense === license.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedLicense === license.id ? (
                  lang === 'en' ? 'Selected' :
                  lang === 'zh' ? '已选择' :
                  lang === 'ko' ? '선택됨' :
                  lang === 'ar' ? 'محدد' :
                  lang === 'fr' ? 'Sélectionné' :
                  lang === 'es' ? 'Seleccionado' :
                  lang === 'de' ? 'Ausgewählt' :
                  lang === 'jp' ? '選択済み' : 'Selected'
                ) : (
                  lang === 'en' ? 'Select' :
                  lang === 'zh' ? '选择' :
                  lang === 'ko' ? '선택' :
                  lang === 'ar' ? 'اختر' :
                  lang === 'fr' ? 'Sélectionner' :
                  lang === 'es' ? 'Seleccionar' :
                  lang === 'de' ? 'Auswählen' :
                  lang === 'jp' ? '選択' : 'Select'
                )}
              </button>
            </div>
          ))}
        </div>

        {selectedLicenseData && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? 'Complete Your Purchase' :
                 lang === 'zh' ? '完成您的购买' :
                 lang === 'ko' ? '구매 완료' :
                 lang === 'ar' ? 'أكمل مشترياتك' :
                 lang === 'fr' ? 'Finalisez Votre Achat' :
                 lang === 'es' ? 'Complete Su Compra' :
                 lang === 'de' ? 'Vervollständigen Sie Ihren Kauf' :
                 lang === 'jp' ? '購入を完了' : 'Complete Your Purchase'}
              </h2>
              <div className="text-2xl font-bold text-blue-600">
                {selectedLicenseData.name} - ${selectedLicenseData.price.toLocaleString()}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {lang === 'en' ? 'Contact Information' :
                   lang === 'zh' ? '联系信息' :
                   lang === 'ko' ? '연락처 정보' :
                   lang === 'ar' ? 'معلومات الاتصال' :
                   lang === 'fr' ? 'Informations de Contact' :
                   lang === 'es' ? 'Información de Contacto' :
                   lang === 'de' ? 'Kontaktinformationen' :
                   lang === 'jp' ? '連絡先情報' : 'Contact Information'}
                </h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {lang === 'en' ? 'First Name *' :
                         lang === 'zh' ? '名字 *' :
                         lang === 'ko' ? '이름 *' :
                         lang === 'ar' ? 'الاسم الأول *' :
                         lang === 'fr' ? 'Prénom *' :
                         lang === 'es' ? 'Nombre *' :
                         lang === 'de' ? 'Vorname *' :
                         lang === 'jp' ? '名 *' : 'First Name *'}
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {lang === 'en' ? 'Last Name *' :
                         lang === 'zh' ? '姓氏 *' :
                         lang === 'ko' ? '성 *' :
                         lang === 'ar' ? 'اسم العائلة *' :
                         lang === 'fr' ? 'Nom de Famille *' :
                         lang === 'es' ? 'Apellido *' :
                         lang === 'de' ? 'Nachname *' :
                         lang === 'jp' ? '姓 *' : 'Last Name *'}
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Email Address *' :
                       lang === 'zh' ? '电子邮件地址 *' :
                       lang === 'ko' ? '이메일 주소 *' :
                       lang === 'ar' ? 'عنوان البريد الإلكتروني *' :
                       lang === 'fr' ? 'Adresse E-mail *' :
                       lang === 'es' ? 'Dirección de Correo Electrónico *' :
                       lang === 'de' ? 'E-Mail-Adresse *' :
                       lang === 'jp' ? 'メールアドレス *' : 'Email Address *'}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Company/Organization *' :
                       lang === 'zh' ? '公司/组织 *' :
                       lang === 'ko' ? '회사/조직 *' :
                       lang === 'ar' ? 'الشركة/المنظمة *' :
                       lang === 'fr' ? 'Entreprise/Organisation *' :
                       lang === 'es' ? 'Empresa/Organización *' :
                       lang === 'de' ? 'Unternehmen/Organisation *' :
                       lang === 'jp' ? '会社/組織 *' : 'Company/Organization *'}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {lang === 'en' ? 'Report Information' :
                   lang === 'zh' ? '报告信息' :
                   lang === 'ko' ? '보고서 정보' :
                   lang === 'ar' ? 'معلومات التقرير' :
                   lang === 'fr' ? 'Informations du Rapport' :
                   lang === 'es' ? 'Información del Informe' :
                   lang === 'de' ? 'Berichtsinformationen' :
                   lang === 'jp' ? 'レポート情報' : 'Report Information'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="reportTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Report Title' :
                       lang === 'zh' ? '报告标题' :
                       lang === 'ko' ? '보고서 제목' :
                       lang === 'ar' ? 'عنوان التقرير' :
                       lang === 'fr' ? 'Titre du Rapport' :
                       lang === 'es' ? 'Título del Informe' :
                       lang === 'de' ? 'Berichtstitel' :
                       lang === 'jp' ? 'レポートタイトル' : 'Report Title'}
                    </label>
                    <input
                      id="reportTitle"
                      name="reportTitle"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reportCode" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Report Code' :
                       lang === 'zh' ? '报告代码' :
                       lang === 'ko' ? '보고서 코드' :
                       lang === 'ar' ? 'رمز التقرير' :
                       lang === 'fr' ? 'Code du Rapport' :
                       lang === 'es' ? 'Código del Informe' :
                       lang === 'de' ? 'Berichtscode' :
                       lang === 'jp' ? 'レポートコード' : 'Report Code'}
                    </label>
                    <input
                      id="reportCode"
                      name="reportCode"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Additional Requirements' :
                       lang === 'zh' ? '附加要求' :
                       lang === 'ko' ? '추가 요구사항' :
                       lang === 'ar' ? 'متطلبات إضافية' :
                       lang === 'fr' ? 'Exigences Supplémentaires' :
                       lang === 'es' ? 'Requisitos Adicionales' :
                       lang === 'de' ? 'Zusätzliche Anforderungen' :
                       lang === 'jp' ? '追加要件' : 'Additional Requirements'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                {lang === 'en' ? 'Proceed to Payment' :
                 lang === 'zh' ? '继续付款' :
                 lang === 'ko' ? '결제 진행' :
                 lang === 'ar' ? 'المتابعة إلى الدفع' :
                 lang === 'fr' ? 'Procéder au Paiement' :
                 lang === 'es' ? 'Proceder al Pago' :
                 lang === 'de' ? 'Zur Zahlung Fortfahren' :
                 lang === 'jp' ? '決済に進む' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}