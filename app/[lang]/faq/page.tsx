import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Frequently Asked Questions - Market Research Insights' : 
           lang === 'zh' ? '常见问题 - 市场研究洞察' :
           lang === 'ko' ? '자주 묻는 질문 - 시장 조사 인사이트' :
           lang === 'ar' ? 'الأسئلة الشائعة - رؤى أبحاث السوق' :
           lang === 'fr' ? 'Questions Fréquemment Posées - Insights de recherche de marché' :
           lang === 'es' ? 'Preguntas Frecuentes - Perspectivas de investigación de mercado' :
           lang === 'de' ? 'Häufig Gestellte Fragen - Marktforschung Einblicke' :
           lang === 'jp' ? 'よくある質問 - 市場調査インサイト' : 'Frequently Asked Questions - Market Research Insights',
    description: lang === 'en' ? 'Find answers to frequently asked questions about our market research services, reports, and platform.' :
                 lang === 'zh' ? '查找有关我们市场研究服务、报告和平台的常见问题答案。' :
                 lang === 'ko' ? '시장 조사 서비스, 보고서 및 플랫폼에 대한 자주 묻는 질문에 대한 답변을 찾아보세요.' :
                 lang === 'ar' ? 'اعثر على إجابات للأسئلة الشائعة حول خدمات أبحاث السوق والتقارير والمنصة لدينا.' :
                 lang === 'fr' ? 'Trouvez des réponses aux questions fréquemment posées sur nos services de recherche de marché, rapports et plateforme.' :
                 lang === 'es' ? 'Encuentre respuestas a preguntas frecuentes sobre nuestros servicios de investigación de mercado, informes y plataforma.' :
                 lang === 'de' ? 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren Marktforschungsdiensten, Berichten und Plattform.' :
                 lang === 'jp' ? '市場調査サービス、レポート、プラットフォームに関するよくある質問の回答を見つけましょう。' : 'Find answers to frequently asked questions about our market research services, reports, and platform.',
  };
}

export default function FAQPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  
  const faqs = [
    {
      question: lang === 'en' ? 'What types of market research reports do you offer?' :
                lang === 'zh' ? '您提供哪些类型的市场研究报告？' :
                lang === 'ko' ? '어떤 유형의 시장 조사 보고서를 제공하나요?' :
                lang === 'ar' ? 'ما أنواع تقارير أبحاث السوق التي تقدمونها؟' :
                lang === 'fr' ? 'Quels types de rapports de recherche de marché proposez-vous ?' :
                lang === 'es' ? '¿Qué tipos de informes de investigación de mercado ofrecen?' :
                lang === 'de' ? 'Welche Arten von Marktforschungsberichten bieten Sie an?' :
                lang === 'jp' ? 'どのような種類の市場調査レポートを提供していますか？' : 'What types of market research reports do you offer?',
      answer: lang === 'en' ? 'We offer comprehensive market research reports across various industries including healthcare, automotive, technology, energy, consumer goods, and more. Our reports include market size analysis, competitive landscape, growth trends, and future forecasts.' :
               lang === 'zh' ? '我们提供涵盖医疗保健、汽车、技术、能源、消费品等各种行业的综合市场研究报告。我们的报告包括市场规模分析、竞争格局、增长趋势和未来预测。' :
               lang === 'ko' ? '헬스케어, 자동차, 기술, 에너지, 소비재 등 다양한 산업 분야의 포괄적인 시장 조사 보고서를 제공합니다. 저희 보고서에는 시장 규모 분석, 경쟁 환경, 성장 동향 및 미래 전망이 포함됩니다.' :
               lang === 'ar' ? 'نحن نقدم تقارير شاملة لأبحاث السوق عبر مختلف الصناعات بما في ذلك الرعاية الصحية والسيارات والتكنولوجيا والطاقة والسلع الاستهلاكية والمزيد. تتضمن تقاريرنا تحليل حجم السوق والمناظر الطبيعية التنافسية واتجاهات النمو والتنبؤات المستقبلية.' :
               lang === 'fr' ? 'Nous proposons des rapports complets de recherche de marché dans diverses industries, y compris les soins de santé, l\'automobile, la technologie, l\'énergie, les biens de consommation, et plus encore. Nos rapports incluent l\'analyse de la taille du marché, le paysage concurrentiel, les tendances de croissance et les prévisions futures.' :
               lang === 'es' ? 'Ofrecemos informes completos de investigación de mercado en diversas industrias, incluyendo atención médica, automotriz, tecnología, energía, bienes de consumo y más. Nuestros informes incluyen análisis del tamaño del mercado, panorama competitivo, tendencias de crecimiento y pronósticos futuros.' :
               lang === 'de' ? 'Wir bieten umfassende Marktforschungsberichte in verschiedenen Branchen, einschließlich Gesundheitswesen, Automobil, Technologie, Energie, Konsumgüter und mehr. Unsere Berichte umfassen Marktgrößenanalyse, Wettbewerbslandschaft, Wachstumstrends und zukünftige Prognosen.' :
               lang === 'jp' ? 'ヘルスケア、自動車、技術、エネルギー、消費財など、様々な業界の包括的な市場調査レポートを提供しています。当社のレポートには、市場規模分析、競争環境、成長トレンド、将来予測が含まれています。' : 'We offer comprehensive market research reports across various industries including healthcare, automotive, technology, energy, consumer goods, and more. Our reports include market size analysis, competitive landscape, growth trends, and future forecasts.'
    },
    {
      question: lang === 'en' ? 'How can I download a sample report?' :
                lang === 'zh' ? '如何下载样本报告？' :
                lang === 'ko' ? '샘플 보고서를 어떻게 다운로드할 수 있나요?' :
                lang === 'ar' ? 'كيف يمكنني تنزيل تقرير عينة؟' :
                lang === 'fr' ? 'Comment puis-je télécharger un rapport d\'échantillon ?' :
                lang === 'es' ? '¿Cómo puedo descargar un informe de muestra?' :
                lang === 'de' ? 'Wie kann ich einen Beispielbericht herunterladen?' :
                lang === 'jp' ? 'サンプルレポートはどのようにダウンロードできますか？' : 'How can I download a sample report?',
      answer: lang === 'en' ? 'You can request a free sample report by filling out our sample request form. Simply select the report you\'re interested in and provide your contact information. We\'ll send you a sample version within 24 hours.' :
               lang === 'zh' ? '您可以通过填写我们的样本请求表单来请求免费样本报告。只需选择您感兴趣的报告并提供您的联系信息。我们将在24小时内向您发送样本版本。' :
               lang === 'ko' ? '샘플 요청 양식을 작성하여 무료 샘플 보고서를 요청할 수 있습니다. 관심 있는 보고서를 선택하고 연락처 정보를 제공하기만 하면 됩니다. 24시간 이내에 샘플 버전을 보내드리겠습니다.' :
               lang === 'ar' ? 'يمكنك طلب تقرير عينة مجاني عن طريق ملء نموذج طلب العينة الخاص بنا. ما عليك سوى اختيار التقرير الذي تهتم به وتقديم معلومات الاتصال الخاصة بك. سنرسل لك نسخة عينة في غضون 24 ساعة.' :
               lang === 'fr' ? 'Vous pouvez demander un rapport d\'échantillon gratuit en remplissant notre formulaire de demande d\'échantillon. Sélectionnez simplement le rapport qui vous intéresse et fournissez vos informations de contact. Nous vous enverrons une version échantillon dans les 24 heures.' :
               lang === 'es' ? 'Puede solicitar un informe de muestra gratuito completando nuestro formulario de solicitud de muestra. Simplemente seleccione el informe que le interesa y proporcione su información de contacto. Le enviaremos una versión de muestra dentro de las 24 horas.' :
               lang === 'de' ? 'Sie können einen kostenlosen Beispielbericht anfordern, indem Sie unser Beispielanforderungsformular ausfüllen. Wählen Sie einfach den Bericht aus, der Sie interessiert, und geben Sie Ihre Kontaktinformationen an. Wir senden Ihnen innerhalb von 24 Stunden eine Beispielversion.' :
               lang === 'jp' ? 'サンプルリクエストフォームに記入して、無料のサンプルレポートをリクエストできます。興味のあるレポートを選択し、連絡先情報を提供するだけです。24時間以内にサンプル版をお送りします。' : 'You can request a free sample report by filling out our sample request form. Simply select the report you\'re interested in and provide your contact information. We\'ll send you a sample version within 24 hours.'
    },
    {
      question: lang === 'en' ? 'What payment methods do you accept?' :
                lang === 'zh' ? '您接受哪些付款方式？' :
                lang === 'ko' ? '어떤 결제 방법을 받나요?' :
                lang === 'ar' ? 'ما طرق الدفع التي تقبلونها؟' :
                lang === 'fr' ? 'Quelles méthodes de paiement acceptez-vous ?' :
                lang === 'es' ? '¿Qué métodos de pago aceptan?' :
                lang === 'de' ? 'Welche Zahlungsmethoden akzeptieren Sie?' :
                lang === 'jp' ? 'どのような支払い方法を受け入れていますか？' : 'What payment methods do you accept?',
      answer: lang === 'en' ? 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway. For enterprise customers, we also offer invoice-based payment terms.' :
               lang === 'zh' ? '我们接受主要信用卡（Visa、MasterCard、American Express）、PayPal和银行转账。所有付款都通过我们的支付网关安全处理。对于企业客户，我们还提供基于发票的付款条件。' :
               lang === 'ko' ? '주요 신용카드(Visa, MasterCard, American Express), PayPal 및 은행 송금을 받습니다. 모든 결제는 저희 결제 게이트웨이를 통해 안전하게 처리됩니다. 기업 고객의 경우 인보이스 기반 결제 조건도 제공합니다.' :
               lang === 'ar' ? 'نحن نقبل بطاقات الائتمان الرئيسية (فيزا وماستر كارد وأمريكان إكسبريس) وباي بال والتحويلات المصرفية. تتم معالجة جميع المدفوعات بأمان من خلال بوابة الدفع الخاصة بنا. بالنسبة للعملاء المؤسسيين، نقدم أيضًا شروط دفع قائمة على الفواتير.' :
               lang === 'fr' ? 'Nous acceptons les principales cartes de crédit (Visa, MasterCard, American Express), PayPal et les virements bancaires. Tous les paiements sont traités en toute sécurité via notre passerelle de paiement. Pour les clients entreprise, nous proposons également des conditions de paiement basées sur facture.' :
               lang === 'es' ? 'Aceptamos las principales tarjetas de crédito (Visa, MasterCard, American Express), PayPal y transferencias bancarias. Todos los pagos se procesan de forma segura a través de nuestra pasarela de pago. Para clientes empresariales, también ofrecemos condiciones de pago basadas en factura.' :
               lang === 'de' ? 'Wir akzeptieren die wichtigsten Kreditkarten (Visa, MasterCard, American Express), PayPal und Banküberweisungen. Alle Zahlungen werden sicher über unser Zahlungsgateway abgewickelt. Für Unternehmenskunden bieten wir auch rechnungsbasierte Zahlungsbedingungen an.' :
               lang === 'jp' ? '主要なクレジットカード（Visa、MasterCard、American Express）、PayPal、銀行振込を受け付けています。すべての支払いは当社の決済ゲートウェイを通じて安全に処理されます。企業顧客には、請求書ベースの支払い条件も提供しています。' : 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway. For enterprise customers, we also offer invoice-based payment terms.'
    },
    {
      question: lang === 'en' ? 'Do you offer custom research services?' :
                lang === 'zh' ? '您提供定制研究服务吗？' :
                lang === 'ko' ? '맞춤형 연구 서비스를 제공하나요?' :
                lang === 'ar' ? 'هل تقدمون خدمات بحث مخصصة؟' :
                lang === 'fr' ? 'Proposez-vous des services de recherche personnalisés ?' :
                lang === 'es' ? '¿Ofrecen servicios de investigación personalizados?' :
                lang === 'de' ? 'Bieten Sie maßgeschneiderte Forschungsdienste an?' :
                lang === 'jp' ? 'カスタム研究サービスを提供していますか？' : 'Do you offer custom research services?',
      answer: lang === 'en' ? 'Yes, we provide custom market research services tailored to your specific needs. Our team of experts can conduct primary and secondary research, competitive analysis, and provide detailed insights for your business requirements. Contact us for a consultation.' :
               lang === 'zh' ? '是的，我们提供根据您的特定需求定制的市场研究服务。我们的专家团队可以进行一手和二手研究、竞争分析，并为您的业务需求提供详细见解。请联系我们进行咨询。' :
               lang === 'ko' ? '네, 귀하의 특정 요구사항에 맞춤화된 맞춤형 시장 조사 서비스를 제공합니다. 저희 전문가 팀은 1차 및 2차 연구, 경쟁 분석을 수행하고 귀하의 비즈니스 요구사항에 대한 상세한 인사이트를 제공할 수 있습니다. 상담을 위해 문의해 주세요.' :
               lang === 'ar' ? 'نعم، نحن نقدم خدمات أبحاث السوق المخصصة المصممة خصيصًا لاحتياجاتك المحددة. يمكن لفريق الخبراء لدينا إجراء بحث أساسي وثانوي وتحليل تنافسي وتقديم رؤى مفصلة لمتطلبات عملك. اتصل بنا للحصول على استشارة.' :
               lang === 'fr' ? 'Oui, nous proposons des services de recherche de marché personnalisés adaptés à vos besoins spécifiques. Notre équipe d\'experts peut mener des recherches primaires et secondaires, des analyses concurrentielles et fournir des insights détaillés pour vos besoins commerciaux. Contactez-nous pour une consultation.' :
               lang === 'es' ? 'Sí, ofrecemos servicios de investigación de mercado personalizados adaptados a sus necesidades específicas. Nuestro equipo de expertos puede realizar investigaciones primarias y secundarias, análisis competitivo y proporcionar información detallada para sus requisitos comerciales. Contáctenos para una consulta.' :
               lang === 'de' ? 'Ja, wir bieten maßgeschneiderte Marktforschungsdienste, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Unser Expertenteam kann Primär- und Sekundärforschung, Wettbewerbsanalyse durchführen und detaillierte Einblicke für Ihre Geschäftsanforderungen bieten. Kontaktieren Sie uns für eine Beratung.' :
               lang === 'jp' ? 'はい、お客様の特定のニーズに合わせたカスタム市場調査サービスを提供しています。当社の専門家チームは、一次・二次調査、競合分析を実施し、お客様のビジネス要件に対する詳細なインサイトを提供できます。コンサルテーションについてはお問い合わせください。' : 'Yes, we provide custom market research services tailored to your specific needs. Our team of experts can conduct primary and secondary research, competitive analysis, and provide detailed insights for your business requirements. Contact us for a consultation.'
    },
    {
      question: lang === 'en' ? 'How often do you update your reports?' :
                lang === 'zh' ? '您多久更新一次报告？' :
                lang === 'ko' ? '보고서를 얼마나 자주 업데이트하나요?' :
                lang === 'ar' ? 'كم مرة تقومون بتحديث تقاريركم؟' :
                lang === 'fr' ? 'À quelle fréquence mettez-vous à jour vos rapports ?' :
                lang === 'es' ? '¿Con qué frecuencia actualizan sus informes?' :
                lang === 'de' ? 'Wie oft aktualisieren Sie Ihre Berichte?' :
                lang === 'jp' ? 'レポートはどのくらいの頻度で更新していますか？' : 'How often do you update your reports?',
      answer: lang === 'en' ? 'Our reports are updated annually or biannually depending on the industry and market dynamics. We also provide quarterly updates for high-demand sectors. You can check the publication date on each report page to see when it was last updated.' :
               lang === 'zh' ? '我们的报告根据行业和市场动态每年或每半年更新一次。我们还为高需求行业提供季度更新。您可以在每个报告页面上查看发布日期，了解最后更新时间。' :
               lang === 'ko' ? '저희 보고서는 산업 및 시장 역학에 따라 매년 또는 반년마다 업데이트됩니다. 또한 수요가 높은 부문에 대해서는 분기별 업데이트를 제공합니다. 각 보고서 페이지에서 발행일을 확인하여 마지막 업데이트 시기를 볼 수 있습니다.' :
               lang === 'ar' ? 'يتم تحديث تقاريرنا سنويًا أو نصف سنويًا حسب الصناعة وديناميكيات السوق. نقدم أيضًا تحديثات ربع سنوية للقطاعات عالية الطلب. يمكنك التحقق من تاريخ النشر في كل صفحة تقرير لمعرفة آخر تحديث لها.' :
               lang === 'fr' ? 'Nos rapports sont mis à jour annuellement ou semestriellement selon l\'industrie et la dynamique du marché. Nous fournissons également des mises à jour trimestrielles pour les secteurs à forte demande. Vous pouvez vérifier la date de publication sur chaque page de rapport pour voir quand il a été mis à jour pour la dernière fois.' :
               lang === 'es' ? 'Nuestros informes se actualizan anualmente o semestralmente según la industria y la dinámica del mercado. También proporcionamos actualizaciones trimestrales para sectores de alta demanda. Puede verificar la fecha de publicación en cada página de informe para ver cuándo se actualizó por última vez.' :
               lang === 'de' ? 'Unsere Berichte werden je nach Branche und Marktdynamik jährlich oder halbjährlich aktualisiert. Wir bieten auch vierteljährliche Updates für hochgefragte Sektoren. Sie können das Veröffentlichungsdatum auf jeder Berichtsseite überprüfen, um zu sehen, wann sie zuletzt aktualisiert wurde.' :
               lang === 'jp' ? '当社のレポートは、業界と市場動向に応じて年次または半年ごとに更新されます。また、需要の高いセクターには四半期ごとの更新も提供しています。各レポートページで発行日を確認して、最後の更新時期を確認できます。' : 'Our reports are updated annually or biannually depending on the industry and market dynamics. We also provide quarterly updates for high-demand sectors. You can check the publication date on each report page to see when it was last updated.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {lang === 'en' ? 'Frequently Asked Questions' :
             lang === 'zh' ? '常见问题' :
             lang === 'ko' ? '자주 묻는 질문' :
             lang === 'ar' ? 'الأسئلة الشائعة' :
             lang === 'fr' ? 'Questions Fréquemment Posées' :
             lang === 'es' ? 'Preguntas Frecuentes' :
             lang === 'de' ? 'Häufig Gestellte Fragen' :
             lang === 'jp' ? 'よくある質問' : 'Frequently Asked Questions'}
          </h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Still Have Questions?' :
               lang === 'zh' ? '还有问题吗？' :
               lang === 'ko' ? '아직 질문이 있나요?' :
               lang === 'ar' ? 'هل لا تزال لديك أسئلة؟' :
               lang === 'fr' ? 'Vous avez encore des questions ?' :
               lang === 'es' ? '¿Aún tiene preguntas?' :
               lang === 'de' ? 'Haben Sie noch Fragen?' :
               lang === 'jp' ? 'まだ質問がありますか？' : 'Still Have Questions?'}
            </h2>
            <p className="text-gray-600 mb-4">
              {lang === 'en' ? 'If you couldn\'t find the answer you were looking for, please don\'t hesitate to contact our support team. We\'re here to help!' :
               lang === 'zh' ? '如果您找不到您要找的答案，请随时联系我们的支持团队。我们随时为您提供帮助！' :
               lang === 'ko' ? '찾고 계신 답변을 찾지 못하셨다면 언제든지 저희 지원팀에 문의해 주세요. 저희가 도움을 드리겠습니다!' :
               lang === 'ar' ? 'إذا لم تجد الإجابة التي كنت تبحث عنها، فلا تتردد في الاتصال بفريق الدعم لدينا. نحن هنا للمساعدة!' :
               lang === 'fr' ? 'Si vous n\'avez pas trouvé la réponse que vous cherchiez, n\'hésitez pas à contacter notre équipe de support. Nous sommes là pour vous aider !' :
               lang === 'es' ? 'Si no encontró la respuesta que estaba buscando, no dude en contactar a nuestro equipo de soporte. ¡Estamos aquí para ayudar!' :
               lang === 'de' ? 'Wenn Sie die gesuchte Antwort nicht gefunden haben, zögern Sie nicht, unser Support-Team zu kontaktieren. Wir sind hier, um zu helfen!' :
               lang === 'jp' ? 'お探しの答えが見つからない場合は、お気軽にサポートチームまでお問い合わせください。お手伝いいたします！' : 'If you couldn\'t find the answer you were looking for, please don\'t hesitate to contact our support team. We\'re here to help!'}
            </p>
            <a href={`/${lang}/contact`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
        </div>
      </div>
    </div>
  );
}
