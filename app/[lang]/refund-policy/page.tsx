import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Refund Policy - Market Research Insights' : 
           lang === 'zh' ? '退款政策 - 市场研究洞察' :
           lang === 'ko' ? '환불 정책 - 시장 조사 인사이트' :
           lang === 'ar' ? 'سياسة الاسترداد - رؤى أبحاث السوق' :
           lang === 'fr' ? 'Politique de Remboursement - Insights de recherche de marché' :
           lang === 'es' ? 'Política de Reembolso - Perspectivas de investigación de mercado' :
           lang === 'de' ? 'Rückerstattungsrichtlinie - Marktforschung Einblicke' :
           lang === 'jp' ? '返金ポリシー - 市場調査インサイト' : 'Refund Policy - Market Research Insights',
    description: lang === 'en' ? 'Learn about our refund and cancellation policy for market research reports and services.' :
                 lang === 'zh' ? '了解我们市场研究报告和服务的退款和取消政策。' :
                 lang === 'ko' ? '시장 조사 보고서 및 서비스에 대한 환불 및 취소 정책에 대해 알아보세요.' :
                 lang === 'ar' ? 'تعرف على سياسة الاسترداد والإلغاء لتقارير أبحاث السوق وخدماتنا.' :
                 lang === 'fr' ? 'Découvrez notre politique de remboursement et d\'annulation pour les rapports et services de recherche de marché.' :
                 lang === 'es' ? 'Conozca nuestra política de reembolso y cancelación para informes y servicios de investigación de mercado.' :
                 lang === 'de' ? 'Erfahren Sie mehr über unsere Rückerstattungs- und Stornierungsrichtlinie für Marktforschungsberichte und -dienste.' :
                 lang === 'jp' ? '市場調査レポートとサービスの返金・キャンセルポリシーについて学びましょう。' : 'Learn about our refund and cancellation policy for market research reports and services.',
  };
}

export default function RefundPolicyPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {lang === 'en' ? 'Refund & Cancellation Policy' :
             lang === 'zh' ? '退款和取消政策' :
             lang === 'ko' ? '환불 및 취소 정책' :
             lang === 'ar' ? 'سياسة الاسترداد والإلغاء' :
             lang === 'fr' ? 'Politique de Remboursement et d\'Annulation' :
             lang === 'es' ? 'Política de Reembolso y Cancelación' :
             lang === 'de' ? 'Rückerstattungs- und Stornierungsrichtlinie' :
             lang === 'jp' ? '返金・キャンセルポリシー' : 'Refund & Cancellation Policy'}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              {lang === 'en' ? 'Last updated: January 2024' :
               lang === 'zh' ? '最后更新：2024年1月' :
               lang === 'ko' ? '최종 업데이트: 2024년 1월' :
               lang === 'ar' ? 'آخر تحديث: يناير 2024' :
               lang === 'fr' ? 'Dernière mise à jour : Janvier 2024' :
               lang === 'es' ? 'Última actualización: Enero 2024' :
               lang === 'de' ? 'Zuletzt aktualisiert: Januar 2024' :
               lang === 'jp' ? '最終更新：2024年1月' : 'Last updated: January 2024'}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '1. Digital Product Policy' :
                 lang === 'zh' ? '1. 数字产品政策' :
                 lang === 'ko' ? '1. 디지털 제품 정책' :
                 lang === 'ar' ? '1. سياسة المنتج الرقمي' :
                 lang === 'fr' ? '1. Politique des Produits Numériques' :
                 lang === 'es' ? '1. Política de Productos Digitales' :
                 lang === 'de' ? '1. Digitale Produktrichtlinie' :
                 lang === 'jp' ? '1. デジタル製品ポリシー' : '1. Digital Product Policy'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Due to the digital nature of our market research reports, we generally do not offer refunds once the report has been downloaded or accessed. This policy protects our intellectual property and ensures fair use of our research materials.' :
                 lang === 'zh' ? '由于我们的市场研究报告的数字性质，一旦报告被下载或访问，我们通常不提供退款。此政策保护我们的知识产权并确保公平使用我们的研究材料。' :
                 lang === 'ko' ? '시장 조사 보고서의 디지털 특성으로 인해 보고서가 다운로드되거나 접근되면 일반적으로 환불을 제공하지 않습니다. 이 정책은 저희 지적 재산권을 보호하고 연구 자료의 공정한 사용을 보장합니다.' :
                 lang === 'ar' ? 'نظرًا للطبيعة الرقمية لتقارير أبحاث السوق لدينا، فإننا لا نقدم عمومًا استردادًا بمجرد تنزيل التقرير أو الوصول إليه. تحمي هذه السياسة الملكية الفكرية لدينا وتضمن الاستخدام العادل لمواد البحث لدينا.' :
                 lang === 'fr' ? 'En raison de la nature numérique de nos rapports de recherche de marché, nous n\'offrons généralement pas de remboursements une fois que le rapport a été téléchargé ou consulté. Cette politique protège notre propriété intellectuelle et assure une utilisation équitable de nos matériaux de recherche.' :
                 lang === 'es' ? 'Debido a la naturaleza digital de nuestros informes de investigación de mercado, generalmente no ofrecemos reembolsos una vez que el informe ha sido descargado o accedido. Esta política protege nuestra propiedad intelectual y asegura el uso justo de nuestros materiales de investigación.' :
                 lang === 'de' ? 'Aufgrund der digitalen Natur unserer Marktforschungsberichte bieten wir im Allgemeinen keine Rückerstattungen an, sobald der Bericht heruntergeladen oder darauf zugegriffen wurde. Diese Richtlinie schützt unser geistiges Eigentum und stellt eine faire Nutzung unserer Forschungsmaterialien sicher.' :
                 lang === 'jp' ? '市場調査レポートのデジタル性質により、レポートがダウンロードまたはアクセスされた後は、通常返金を提供しません。このポリシーは当社の知的財産を保護し、研究資料の公正な使用を確保します。' : 'Due to the digital nature of our market research reports, we generally do not offer refunds once the report has been downloaded or accessed. This policy protects our intellectual property and ensures fair use of our research materials.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '2. Refund Eligibility' :
                 lang === 'zh' ? '2. 退款资格' :
                 lang === 'ko' ? '2. 환불 자격' :
                 lang === 'ar' ? '2. أهلية الاسترداد' :
                 lang === 'fr' ? '2. Éligibilité au Remboursement' :
                 lang === 'es' ? '2. Elegibilidad de Reembolso' :
                 lang === 'de' ? '2. Rückerstattungsberechtigung' :
                 lang === 'jp' ? '2. 返金対象' : '2. Refund Eligibility'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Refunds may be considered in the following circumstances: Technical issues preventing access, duplicate purchases, or if the report does not match the description provided. All refund requests must be submitted within 7 days of purchase.' :
                 lang === 'zh' ? '在以下情况下可能会考虑退款：技术问题阻止访问、重复购买，或报告与提供的描述不符。所有退款请求必须在购买后7天内提交。' :
                 lang === 'ko' ? '다음과 같은 상황에서 환불이 고려될 수 있습니다: 접근을 방해하는 기술적 문제, 중복 구매, 또는 보고서가 제공된 설명과 일치하지 않는 경우. 모든 환불 요청은 구매 후 7일 이내에 제출되어야 합니다.' :
                 lang === 'ar' ? 'يمكن النظر في الاسترداد في الحالات التالية: مشاكل تقنية تمنع الوصول، أو مشتريات مكررة، أو إذا كان التقرير لا يتطابق مع الوصف المقدم. يجب تقديم جميع طلبات الاسترداد في غضون 7 أيام من الشراء.' :
                 lang === 'fr' ? 'Les remboursements peuvent être envisagés dans les circonstances suivantes : Problèmes techniques empêchant l\'accès, achats en double, ou si le rapport ne correspond pas à la description fournie. Toutes les demandes de remboursement doivent être soumises dans les 7 jours suivant l\'achat.' :
                 lang === 'es' ? 'Los reembolsos pueden ser considerados en las siguientes circunstancias: Problemas técnicos que impiden el acceso, compras duplicadas, o si el informe no coincide con la descripción proporcionada. Todas las solicitudes de reembolso deben presentarse dentro de los 7 días posteriores a la compra.' :
                 lang === 'de' ? 'Rückerstattungen können in den folgenden Umständen in Betracht gezogen werden: Technische Probleme, die den Zugriff verhindern, doppelte Käufe oder wenn der Bericht nicht mit der bereitgestellten Beschreibung übereinstimmt. Alle Rückerstattungsanträge müssen innerhalb von 7 Tagen nach dem Kauf eingereicht werden.' :
                 lang === 'jp' ? '以下の状況で返金が検討される場合があります：アクセスを妨げる技術的問題、重複購入、またはレポートが提供された説明と一致しない場合。すべての返金リクエストは購入後7日以内に提出する必要があります。' : 'Refunds may be considered in the following circumstances: Technical issues preventing access, duplicate purchases, or if the report does not match the description provided. All refund requests must be submitted within 7 days of purchase.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '3. Cancellation Policy' :
                 lang === 'zh' ? '3. 取消政策' :
                 lang === 'ko' ? '3. 취소 정책' :
                 lang === 'ar' ? '3. سياسة الإلغاء' :
                 lang === 'fr' ? '3. Politique d\'Annulation' :
                 lang === 'es' ? '3. Política de Cancelación' :
                 lang === 'de' ? '3. Stornierungsrichtlinie' :
                 lang === 'jp' ? '3. キャンセルポリシー' : '3. Cancellation Policy'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Orders can be cancelled before the report is downloaded or accessed. Once access is granted, the order cannot be cancelled. For custom research projects, cancellation terms will be specified in the project agreement.' :
                 lang === 'zh' ? '在报告被下载或访问之前可以取消订单。一旦授予访问权限，订单就无法取消。对于定制研究项目，取消条款将在项目协议中指定。' :
                 lang === 'ko' ? '보고서가 다운로드되거나 접근되기 전에 주문을 취소할 수 있습니다. 접근이 허용되면 주문을 취소할 수 없습니다. 맞춤형 연구 프로젝트의 경우 취소 조건은 프로젝트 계약에 명시됩니다.' :
                 lang === 'ar' ? 'يمكن إلغاء الطلبات قبل تنزيل التقرير أو الوصول إليه. بمجرد منح الوصول، لا يمكن إلغاء الطلب. بالنسبة لمشاريع البحث المخصصة، سيتم تحديد شروط الإلغاء في اتفاقية المشروع.' :
                 lang === 'fr' ? 'Les commandes peuvent être annulées avant que le rapport ne soit téléchargé ou consulté. Une fois l\'accès accordé, la commande ne peut pas être annulée. Pour les projets de recherche personnalisés, les conditions d\'annulation seront spécifiées dans l\'accord de projet.' :
                 lang === 'es' ? 'Los pedidos se pueden cancelar antes de que se descargue o acceda al informe. Una vez que se otorga el acceso, el pedido no se puede cancelar. Para proyectos de investigación personalizados, los términos de cancelación se especificarán en el acuerdo del proyecto.' :
                 lang === 'de' ? 'Bestellungen können storniert werden, bevor der Bericht heruntergeladen oder darauf zugegriffen wird. Sobald der Zugriff gewährt wird, kann die Bestellung nicht storniert werden. Für maßgeschneiderte Forschungsprojekte werden die Stornierungsbedingungen in der Projektvereinbarung angegeben.' :
                 lang === 'jp' ? 'レポートがダウンロードまたはアクセスされる前に注文をキャンセルできます。アクセスが許可されると、注文をキャンセルすることはできません。カスタム研究プロジェクトの場合、キャンセル条件はプロジェクト契約で指定されます。' : 'Orders can be cancelled before the report is downloaded or accessed. Once access is granted, the order cannot be cancelled. For custom research projects, cancellation terms will be specified in the project agreement.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '4. Processing Time' :
                 lang === 'zh' ? '4. 处理时间' :
                 lang === 'ko' ? '4. 처리 시간' :
                 lang === 'ar' ? '4. وقت المعالجة' :
                 lang === 'fr' ? '4. Délai de Traitement' :
                 lang === 'es' ? '4. Tiempo de Procesamiento' :
                 lang === 'de' ? '4. Bearbeitungszeit' :
                 lang === 'jp' ? '4. 処理時間' : '4. Processing Time'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Approved refunds will be processed within 5-10 business days. The refund will be issued to the original payment method used for the purchase. Processing times may vary depending on your bank or payment processor.' :
                 lang === 'zh' ? '批准的退款将在5-10个工作日内处理。退款将发放到用于购买的原付款方式。处理时间可能因您的银行或支付处理商而异。' :
                 lang === 'ko' ? '승인된 환불은 5-10 영업일 내에 처리됩니다. 환불은 구매에 사용된 원래 결제 방법으로 발급됩니다. 처리 시간은 귀하의 은행 또는 결제 처리업체에 따라 다를 수 있습니다.' :
                 lang === 'ar' ? 'سيتم معالجة الاستردادات المعتمدة في غضون 5-10 أيام عمل. سيتم إصدار الاسترداد إلى طريقة الدفع الأصلية المستخدمة للشراء. قد تختلف أوقات المعالجة حسب البنك أو معالج الدفع الخاص بك.' :
                 lang === 'fr' ? 'Les remboursements approuvés seront traités dans les 5 à 10 jours ouvrables. Le remboursement sera émis sur la méthode de paiement originale utilisée pour l\'achat. Les délais de traitement peuvent varier selon votre banque ou processeur de paiement.' :
                 lang === 'es' ? 'Los reembolsos aprobados se procesarán dentro de 5-10 días hábiles. El reembolso se emitirá al método de pago original utilizado para la compra. Los tiempos de procesamiento pueden variar según su banco o procesador de pagos.' :
                 lang === 'de' ? 'Genehmigte Rückerstattungen werden innerhalb von 5-10 Werktagen bearbeitet. Die Rückerstattung wird auf die ursprüngliche Zahlungsmethode ausgegeben, die für den Kauf verwendet wurde. Die Bearbeitungszeiten können je nach Ihrer Bank oder Ihrem Zahlungsabwickler variieren.' :
                 lang === 'jp' ? '承認された返金は5-10営業日以内に処理されます。返金は購入に使用された元の支払い方法に発行されます。処理時間は銀行または決済処理業者によって異なる場合があります。' : 'Approved refunds will be processed within 5-10 business days. The refund will be issued to the original payment method used for the purchase. Processing times may vary depending on your bank or payment processor.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '5. Contact Information' :
                 lang === 'zh' ? '5. 联系信息' :
                 lang === 'ko' ? '5. 연락처 정보' :
                 lang === 'ar' ? '5. معلومات الاتصال' :
                 lang === 'fr' ? '5. Informations de Contact' :
                 lang === 'es' ? '5. Información de Contacto' :
                 lang === 'de' ? '5. Kontaktinformationen' :
                 lang === 'jp' ? '5. 連絡先情報' : '5. Contact Information'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'For refund requests or questions about our policy, please contact our customer support team at support@marketresearchinsights.com or call us at +1-555-123-4567.' :
                 lang === 'zh' ? '如需退款请求或对我们的政策有疑问，请联系我们的客户支持团队：support@marketresearchinsights.com 或致电 +1-555-123-4567。' :
                 lang === 'ko' ? '환불 요청이나 정책에 대한 질문이 있으시면 고객 지원팀에 문의하세요: support@marketresearchinsights.com 또는 +1-555-123-4567로 전화하세요.' :
                 lang === 'ar' ? 'لطلبات الاسترداد أو الأسئلة حول سياستنا، يرجى الاتصال بفريق دعم العملاء لدينا على support@marketresearchinsights.com أو اتصل بنا على +1-555-123-4567.' :
                 lang === 'fr' ? 'Pour les demandes de remboursement ou les questions sur notre politique, veuillez contacter notre équipe de support client à support@marketresearchinsights.com ou appelez-nous au +1-555-123-4567.' :
                 lang === 'es' ? 'Para solicitudes de reembolso o preguntas sobre nuestra política, contáctenos en support@marketresearchinsights.com o llámenos al +1-555-123-4567.' :
                 lang === 'de' ? 'Für Rückerstattungsanträge oder Fragen zu unserer Richtlinie kontaktieren Sie bitte unser Kundensupport-Team unter support@marketresearchinsights.com oder rufen Sie uns unter +1-555-123-4567 an.' :
                 lang === 'jp' ? '返金リクエストやポリシーに関するご質問は、カスタマーサポートチームまでお問い合わせください：support@marketresearchinsights.com または +1-555-123-4567 までお電話ください。' : 'For refund requests or questions about our policy, please contact our customer support team at support@marketresearchinsights.com or call us at +1-555-123-4567.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
