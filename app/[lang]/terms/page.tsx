import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Terms and Conditions - Market Research Insights' : 
           lang === 'zh' ? '条款和条件 - 市场研究洞察' :
           lang === 'ko' ? '이용약관 - 시장 조사 인사이트' :
           lang === 'ar' ? 'الشروط والأحكام - رؤى أبحاث السوق' :
           lang === 'fr' ? 'Conditions Générales - Insights de recherche de marché' :
           lang === 'es' ? 'Términos y Condiciones - Perspectivas de investigación de mercado' :
           lang === 'de' ? 'Allgemeine Geschäftsbedingungen - Marktforschung Einblicke' :
           lang === 'jp' ? '利用規約 - 市場調査インサイト' : 'Terms and Conditions - Market Research Insights',
    description: lang === 'en' ? 'Read our terms and conditions for using our market research services and platform.' :
                 lang === 'zh' ? '阅读我们使用市场研究服务和平台的条款和条件。' :
                 lang === 'ko' ? '시장 조사 서비스 및 플랫폼 사용을 위한 이용약관을 읽어보세요.' :
                 lang === 'ar' ? 'اقرأ شروطنا وأحكامنا لاستخدام خدمات أبحاث السوق ومنصتنا.' :
                 lang === 'fr' ? 'Lisez nos conditions générales pour utiliser nos services et plateforme de recherche de marché.' :
                 lang === 'es' ? 'Lea nuestros términos y condiciones para usar nuestros servicios y plataforma de investigación de mercado.' :
                 lang === 'de' ? 'Lesen Sie unsere Allgemeinen Geschäftsbedingungen für die Nutzung unserer Marktforschungsdienste und -plattform.' :
                 lang === 'jp' ? '市場調査サービスとプラットフォームの利用規約をお読みください。' : 'Read our terms and conditions for using our market research services and platform.',
  };
}

export default function TermsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {lang === 'en' ? 'Terms and Conditions' :
             lang === 'zh' ? '条款和条件' :
             lang === 'ko' ? '이용약관' :
             lang === 'ar' ? 'الشروط والأحكام' :
             lang === 'fr' ? 'Conditions Générales' :
             lang === 'es' ? 'Términos y Condiciones' :
             lang === 'de' ? 'Allgemeine Geschäftsbedingungen' :
             lang === 'jp' ? '利用規約' : 'Terms and Conditions'}
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
                {lang === 'en' ? '1. Acceptance of Terms' :
                 lang === 'zh' ? '1. 条款接受' :
                 lang === 'ko' ? '1. 약관 수락' :
                 lang === 'ar' ? '1. قبول الشروط' :
                 lang === 'fr' ? '1. Acceptation des conditions' :
                 lang === 'es' ? '1. Aceptación de términos' :
                 lang === 'de' ? '1. Annahme der Bedingungen' :
                 lang === 'jp' ? '1. 規約の承諾' : '1. Acceptance of Terms'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.' :
                 lang === 'zh' ? '通过访问和使用我们的网站和服务，您接受并同意受本协议条款和规定的约束。' :
                 lang === 'ko' ? '저희 웹사이트와 서비스를 이용함으로써 귀하는 본 계약의 조건과 조항에 구속되는 것에 동의합니다.' :
                 lang === 'ar' ? 'من خلال الوصول إلى موقعنا الإلكتروني واستخدام خدماتنا، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية.' :
                 lang === 'fr' ? 'En accédant et en utilisant notre site web et nos services, vous acceptez et acceptez d\'être lié par les termes et dispositions de cet accord.' :
                 lang === 'es' ? 'Al acceder y usar nuestro sitio web y servicios, acepta y acepta estar sujeto a los términos y disposiciones de este acuerdo.' :
                 lang === 'de' ? 'Durch den Zugriff auf und die Nutzung unserer Website und Dienste akzeptieren und stimmen Sie zu, an die Bedingungen und Bestimmungen dieser Vereinbarung gebunden zu sein.' :
                 lang === 'jp' ? '当社のウェブサイトとサービスにアクセスし、利用することで、本契約の条件と規定に拘束されることに同意します。' : 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '2. Use License' :
                 lang === 'zh' ? '2. 使用许可' :
                 lang === 'ko' ? '2. 사용 라이선스' :
                 lang === 'ar' ? '2. ترخيص الاستخدام' :
                 lang === 'fr' ? '2. Licence d\'utilisation' :
                 lang === 'es' ? '2. Licencia de uso' :
                 lang === 'de' ? '2. Nutzungslizenz' :
                 lang === 'jp' ? '2. 利用ライセンス' : '2. Use License'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Permission is granted to temporarily download one copy of the materials (information or software) on Market Research Insights website for personal, non-commercial transitory viewing only.' :
                 lang === 'zh' ? '允许临时下载市场研究洞察网站上材料（信息或软件）的一份副本，仅供个人、非商业临时查看。' :
                 lang === 'ko' ? '개인적이고 비상업적인 일시적 보기 목적으로만 시장 조사 인사이트 웹사이트의 자료(정보 또는 소프트웨어) 사본을 임시로 다운로드할 수 있는 권한이 부여됩니다.' :
                 lang === 'ar' ? 'يُمنح الإذن لتحميل نسخة واحدة مؤقتة من المواد (المعلومات أو البرامج) على موقع رؤى أبحاث السوق للعرض المؤقت الشخصي غير التجاري فقط.' :
                 lang === 'fr' ? 'L\'autorisation est accordée de télécharger temporairement une copie des matériaux (informations ou logiciels) sur le site web Market Research Insights pour un affichage transitoire personnel et non commercial uniquement.' :
                 lang === 'es' ? 'Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web Market Research Insights solo para visualización transitoria personal y no comercial.' :
                 lang === 'de' ? 'Die Erlaubnis wird erteilt, vorübergehend eine Kopie der Materialien (Informationen oder Software) auf der Market Research Insights Website nur für persönliche, nicht-kommerzielle vorübergehende Betrachtung herunterzuladen.' :
                 lang === 'jp' ? '個人の非商業的かつ一時的な閲覧のみを目的として、市場調査インサイトウェブサイトの資料（情報またはソフトウェア）のコピーを一時的にダウンロードする許可が与えられます。' : 'Permission is granted to temporarily download one copy of the materials (information or software) on Market Research Insights website for personal, non-commercial transitory viewing only.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '3. Disclaimer' :
                 lang === 'zh' ? '3. 免责声明' :
                 lang === 'ko' ? '3. 면책 조항' :
                 lang === 'ar' ? '3. إخلاء المسؤولية' :
                 lang === 'fr' ? '3. Clause de non-responsabilité' :
                 lang === 'es' ? '3. Descargo de responsabilidad' :
                 lang === 'de' ? '3. Haftungsausschluss' :
                 lang === 'jp' ? '3. 免責事項' : '3. Disclaimer'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'The materials on Market Research Insights website are provided on an \'as is\' basis. Market Research Insights makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.' :
                 lang === 'zh' ? '市场研究洞察网站上的材料按"原样"提供。市场研究洞察不提供明示或暗示的保证，特此否认和否定所有其他保证，包括但不限于适销性、特定用途适用性或知识产权不侵权或其他权利侵犯的默示保证或条件。' :
                 lang === 'ko' ? '시장 조사 인사이트 웹사이트의 자료는 \'있는 그대로\' 제공됩니다. 시장 조사 인사이트는 명시적이거나 묵시적인 보증을 제공하지 않으며, 이에 따라 상품성, 특정 목적에의 적합성, 지적 재산권의 비침해 또는 기타 권리 침해에 대한 묵시적 보증 또는 조건을 포함하여 모든 기타 보증을 부인하고 부정합니다.' :
                 lang === 'ar' ? 'يتم توفير المواد على موقع رؤى أبحاث السوق على أساس \'كما هي\'. لا تقدم رؤى أبحاث السوق أي ضمانات، صريحة أو ضمنية، وتنكر وتنفي جميع الضمانات الأخرى بما في ذلك، على سبيل المثال لا الحصر، الضمانات الضمنية أو شروط قابلية التسويق، والملاءمة لغرض معين، أو عدم انتهاك الملكية الفكرية أو انتهاك آخر للحقوق.' :
                 lang === 'fr' ? 'Les matériaux sur le site web Market Research Insights sont fournis sur une base \'tels quels\'. Market Research Insights ne fait aucune garantie, expresse ou implicite, et renonce par la présente et nie toutes les autres garanties, y compris, sans limitation, les garanties implicites ou conditions de commercialisation, d\'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation de droits.' :
                 lang === 'es' ? 'Los materiales en el sitio web Market Research Insights se proporcionan \'tal como están\'. Market Research Insights no hace garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.' :
                 lang === 'de' ? 'Die Materialien auf der Market Research Insights Website werden \'wie besehen\' bereitgestellt. Market Research Insights gibt keine Garantien, ausdrückliche oder stillschweigende, und lehnt hiermit alle anderen Garantien ab und verneint sie, einschließlich, aber nicht beschränkt auf, stillschweigende Garantien oder Bedingungen der Handelsüblichkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung geistigen Eigentums oder andere Verletzung von Rechten.' :
                 lang === 'jp' ? '市場調査インサイトウェブサイトの資料は「現状のまま」提供されます。市場調査インサイトは明示的または暗示的な保証を提供せず、これにより商品性、特定の目的への適合性、知的財産権の非侵害またはその他の権利侵害に関する暗示的保証または条件を含むすべてのその他の保証を否認し、否定します。' : 'The materials on Market Research Insights website are provided on an \'as is\' basis. Market Research Insights makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '4. Limitations' :
                 lang === 'zh' ? '4. 限制' :
                 lang === 'ko' ? '4. 제한' :
                 lang === 'ar' ? '4. القيود' :
                 lang === 'fr' ? '4. Limitations' :
                 lang === 'es' ? '4. Limitaciones' :
                 lang === 'de' ? '4. Einschränkungen' :
                 lang === 'jp' ? '4. 制限' : '4. Limitations'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'In no event shall Market Research Insights or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Market Research Insights website.' :
                 lang === 'zh' ? '在任何情况下，市场研究洞察或其供应商均不对因使用或无法使用市场研究洞察网站上的材料而造成的任何损害（包括但不限于数据或利润损失，或由于业务中断）承担责任。' :
                 lang === 'ko' ? '어떤 경우에도 시장 조사 인사이트 또는 그 공급업체는 시장 조사 인사이트 웹사이트의 자료 사용 또는 사용 불가능으로 인해 발생하는 모든 손해(데이터 또는 이익 손실, 또는 사업 중단으로 인한 손해 포함, 제한 없음)에 대해 책임을 지지 않습니다.' :
                 lang === 'ar' ? 'في أي حال من الأحوال، لن تكون رؤى أبحاث السوق أو مورديها مسؤولة عن أي أضرار (بما في ذلك، على سبيل المثال لا الحصر، الأضرار الناتجة عن فقدان البيانات أو الأرباح، أو بسبب انقطاع الأعمال) الناتجة عن استخدام أو عدم القدرة على استخدام المواد على موقع رؤى أبحاث السوق.' :
                 lang === 'fr' ? 'En aucun cas, Market Research Insights ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou dus à une interruption d\'activité) résultant de l\'utilisation ou de l\'impossibilité d\'utiliser les matériaux sur le site web Market Research Insights.' :
                 lang === 'es' ? 'En ningún caso, Market Research Insights o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web Market Research Insights.' :
                 lang === 'de' ? 'In keinem Fall haften Market Research Insights oder seine Lieferanten für Schäden (einschließlich, aber nicht beschränkt auf Schäden für Daten- oder Gewinnverlust oder aufgrund von Geschäftsunterbrechung), die sich aus der Nutzung oder Unfähigkeit zur Nutzung der Materialien auf der Market Research Insights Website ergeben.' :
                 lang === 'jp' ? 'いかなる場合においても、市場調査インサイトまたはその供給者は、市場調査インサイトウェブサイトの資料の使用または使用不能により生じるすべての損害（データまたは利益の損失、または事業中断による損害を含むがこれらに限定されない）について責任を負いません。' : 'In no event shall Market Research Insights or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Market Research Insights website.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '5. Revisions and Errata' :
                 lang === 'zh' ? '5. 修订和勘误' :
                 lang === 'ko' ? '5. 수정 및 오류' :
                 lang === 'ar' ? '5. المراجعات والأخطاء' :
                 lang === 'fr' ? '5. Révisions et erreurs' :
                 lang === 'es' ? '5. Revisiones y erratas' :
                 lang === 'de' ? '5. Überarbeitungen und Errata' :
                 lang === 'jp' ? '5. 改訂と正誤表' : '5. Revisions and Errata'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'The materials appearing on Market Research Insights website could include technical, typographical, or photographic errors. Market Research Insights does not warrant that any of the materials on its website are accurate, complete or current.' :
                 lang === 'zh' ? '出现在市场研究洞察网站上的材料可能包含技术、排版或摄影错误。市场研究洞察不保证其网站上的任何材料都是准确、完整或最新的。' :
                 lang === 'ko' ? '시장 조사 인사이트 웹사이트에 나타나는 자료에는 기술적, 인쇄 또는 사진 오류가 포함될 수 있습니다. 시장 조사 인사이트는 웹사이트의 모든 자료가 정확하고 완전하며 최신이라고 보장하지 않습니다.' :
                 lang === 'ar' ? 'قد تتضمن المواد التي تظهر على موقع رؤى أبحاث السوق أخطاء تقنية أو مطبعية أو فوتوغرافية. لا تضمن رؤى أبحاث السوق أن أيًا من المواد على موقعها الإلكتروني دقيقة أو كاملة أو حالية.' :
                 lang === 'fr' ? 'Les matériaux apparaissant sur le site web Market Research Insights pourraient inclure des erreurs techniques, typographiques ou photographiques. Market Research Insights ne garantit pas que l\'un des matériaux sur son site web soit exact, complet ou actuel.' :
                 lang === 'es' ? 'Los materiales que aparecen en el sitio web Market Research Insights podrían incluir errores técnicos, tipográficos o fotográficos. Market Research Insights no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.' :
                 lang === 'de' ? 'Die auf der Market Research Insights Website erscheinenden Materialien könnten technische, typografische oder fotografische Fehler enthalten. Market Research Insights garantiert nicht, dass eines der Materialien auf seiner Website genau, vollständig oder aktuell ist.' :
                 lang === 'jp' ? '市場調査インサイトウェブサイトに表示される資料には、技術的、印刷、または写真の誤りが含まれる可能性があります。市場調査インサイトは、そのウェブサイト上の資料が正確、完全、または最新であることを保証しません。' : 'The materials appearing on Market Research Insights website could include technical, typographical, or photographic errors. Market Research Insights does not warrant that any of the materials on its website are accurate, complete or current.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '6. Links' :
                 lang === 'zh' ? '6. 链接' :
                 lang === 'ko' ? '6. 링크' :
                 lang === 'ar' ? '6. الروابط' :
                 lang === 'fr' ? '6. Liens' :
                 lang === 'es' ? '6. Enlaces' :
                 lang === 'de' ? '6. Links' :
                 lang === 'jp' ? '6. リンク' : '6. Links'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Market Research Insights has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Market Research Insights of the site.' :
                 lang === 'zh' ? '市场研究洞察尚未审查链接到其网站的所有网站，不对任何此类链接网站的内容负责。包含任何链接并不意味着市场研究洞察对该网站的认可。' :
                 lang === 'ko' ? '시장 조사 인사이트는 웹사이트에 링크된 모든 사이트를 검토하지 않았으며 그러한 링크된 사이트의 내용에 대해 책임을 지지 않습니다. 링크의 포함은 시장 조사 인사이트가 해당 사이트를 보증한다는 것을 의미하지 않습니다.' :
                 lang === 'ar' ? 'لم تراجع رؤى أبحاث السوق جميع المواقع المرتبطة بموقعها الإلكتروني وليست مسؤولة عن محتويات أي موقع مرتبط من هذا القبيل. لا يعني تضمين أي رابط تأييد رؤى أبحاث السوق للموقع.' :
                 lang === 'fr' ? 'Market Research Insights n\'a pas examiné tous les sites liés à son site web et n\'est pas responsable du contenu de tout site lié de ce type. L\'inclusion d\'un lien n\'implique pas l\'approbation par Market Research Insights du site.' :
                 lang === 'es' ? 'Market Research Insights no ha revisado todos los sitios enlazados a su sitio web y no es responsable del contenido de cualquier sitio enlazado de este tipo. La inclusión de cualquier enlace no implica la aprobación por parte de Market Research Insights del sitio.' :
                 lang === 'de' ? 'Market Research Insights hat nicht alle mit seiner Website verlinkten Sites überprüft und ist nicht verantwortlich für den Inhalt solcher verlinkten Sites. Die Aufnahme eines Links bedeutet keine Befürwortung der Site durch Market Research Insights.' :
                 lang === 'jp' ? '市場調査インサイトは、そのウェブサイトにリンクされているすべてのサイトをレビューしておらず、そのようなリンクされたサイトの内容について責任を負いません。リンクの包含は、市場調査インサイトがそのサイトを推奨することを意味するものではありません。' : 'Market Research Insights has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Market Research Insights of the site.'}
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {lang === 'en' ? '7. Modifications' :
                 lang === 'zh' ? '7. 修改' :
                 lang === 'ko' ? '7. 수정' :
                 lang === 'ar' ? '7. التعديلات' :
                 lang === 'fr' ? '7. Modifications' :
                 lang === 'es' ? '7. Modificaciones' :
                 lang === 'de' ? '7. Änderungen' :
                 lang === 'jp' ? '7. 変更' : '7. Modifications'}
              </h2>
              <p className="text-gray-600 mb-4">
                {lang === 'en' ? 'Market Research Insights may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Service.' :
                 lang === 'zh' ? '市场研究洞察可以随时修改其网站的这些服务条款，恕不另行通知。通过使用本网站，您同意受当时有效的这些服务条款和条件的约束。' :
                 lang === 'ko' ? '시장 조사 인사이트는 사전 통지 없이 언제든지 웹사이트의 서비스 약관을 수정할 수 있습니다. 이 웹사이트를 사용함으로써 귀하는 당시 현재 버전의 서비스 약관에 구속되는 것에 동의합니다.' :
                 lang === 'ar' ? 'قد تنقح رؤى أبحاث السوق شروط الخدمة هذه لموقعها الإلكتروني في أي وقت دون إشعار. باستخدام هذا الموقع الإلكتروني، فإنك توافق على الالتزام بالنسخة الحالية من شروط وأحكام الخدمة هذه.' :
                 lang === 'fr' ? 'Market Research Insights peut réviser ces conditions de service pour son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d\'être lié par la version actuelle de ces Conditions Générales de Service.' :
                 lang === 'es' ? 'Market Research Insights puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones de Servicio.' :
                 lang === 'de' ? 'Market Research Insights kann diese Servicebedingungen für seine Website jederzeit ohne Vorankündigung überarbeiten. Durch die Nutzung dieser Website stimmen Sie zu, an die dann aktuelle Version dieser Allgemeinen Geschäftsbedingungen gebunden zu sein.' :
                 lang === 'jp' ? '市場調査インサイトは、事前通知なしにいつでもそのウェブサイトのサービス利用規約を改訂する場合があります。このウェブサイトを使用することで、当時のこれらのサービス利用規約の現在のバージョンに拘束されることに同意します。' : 'Market Research Insights may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Service.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
