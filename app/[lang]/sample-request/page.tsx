'use client';

import { useState } from 'react';

export default function SampleRequestPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    reportTitle: '',
    reportCode: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          reportTitle: '',
          reportCode: '',
          message: ''
        });
      } else {
        setError(data.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Request Submitted Successfully!' :
               lang === 'zh' ? '请求提交成功！' :
               lang === 'ko' ? '요청이 성공적으로 제출되었습니다!' :
               lang === 'ar' ? 'تم إرسال الطلب بنجاح!' :
               lang === 'fr' ? 'Demande Soumise avec Succès !' :
               lang === 'es' ? '¡Solicitud Enviada Exitosamente!' :
               lang === 'de' ? 'Anfrage Erfolgreich Übermittelt!' :
               lang === 'jp' ? 'リクエストが正常に送信されました！' : 'Request Submitted Successfully!'}
            </h1>
            <p className="text-gray-600 mb-6">
              {lang === 'en' ? 'Thank you for your sample request. We will review your request and send you the sample report within 24 hours.' :
               lang === 'zh' ? '感谢您的样本请求。我们将审查您的请求并在24小时内发送样本报告。' :
               lang === 'ko' ? '샘플 요청을 해주셔서 감사합니다. 귀하의 요청을 검토하고 24시간 이내에 샘플 보고서를 보내드리겠습니다.' :
               lang === 'ar' ? 'شكرًا لك على طلب العينة. سنراجع طلبك ونرسل لك تقرير العينة في غضون 24 ساعة.' :
               lang === 'fr' ? 'Merci pour votre demande d\'échantillon. Nous examinerons votre demande et vous enverrons le rapport d\'échantillon dans les 24 heures.' :
               lang === 'es' ? 'Gracias por su solicitud de muestra. Revisaremos su solicitud y le enviaremos el informe de muestra dentro de las 24 horas.' :
               lang === 'de' ? 'Vielen Dank für Ihre Beispielanfrage. Wir werden Ihre Anfrage prüfen und Ihnen den Beispielbericht innerhalb von 24 Stunden zusenden.' :
               lang === 'jp' ? 'サンプルリクエストをありがとうございます。リクエストを確認し、24時間以内にサンプルレポートをお送りします。' : 'Thank you for your sample request. We will review your request and send you the sample report within 24 hours.'}
            </p>
            <a href={`/${lang}`} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {lang === 'en' ? 'Back to Home' :
               lang === 'zh' ? '返回首页' :
               lang === 'ko' ? '홈으로 돌아가기' :
               lang === 'ar' ? 'العودة إلى الصفحة الرئيسية' :
               lang === 'fr' ? 'Retour à l\'Accueil' :
               lang === 'es' ? 'Volver al Inicio' :
               lang === 'de' ? 'Zurück zur Startseite' :
               lang === 'jp' ? 'ホームに戻る' : 'Back to Home'}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {lang === 'en' ? 'Request Free Sample Report' :
               lang === 'zh' ? '申请免费样本报告' :
               lang === 'ko' ? '무료 샘플 보고서 요청' :
               lang === 'ar' ? 'طلب تقرير عينة مجاني' :
               lang === 'fr' ? 'Demander un Rapport d\'Échantillon Gratuit' :
               lang === 'es' ? 'Solicitar Informe de Muestra Gratuito' :
               lang === 'de' ? 'Kostenlosen Beispielbericht Anfordern' :
               lang === 'jp' ? '無料サンプルレポートをリクエスト' : 'Request Free Sample Report'}
            </h1>
            <p className="text-xl text-gray-600">
              {lang === 'en' ? 'Get a free sample of our market research reports to evaluate the quality and depth of our analysis' :
               lang === 'zh' ? '获取我们市场研究报告的免费样本，以评估我们分析的质量和深度' :
               lang === 'ko' ? '분석의 품질과 깊이를 평가하기 위해 시장 조사 보고서의 무료 샘플을 받으세요' :
               lang === 'ar' ? 'احصل على عينة مجانية من تقارير أبحاث السوق لدينا لتقييم جودة وعمق تحليلنا' :
               lang === 'fr' ? 'Obtenez un échantillon gratuit de nos rapports de recherche de marché pour évaluer la qualité et la profondeur de notre analyse' :
               lang === 'es' ? 'Obtenga una muestra gratuita de nuestros informes de investigación de mercado para evaluar la calidad y profundidad de nuestro análisis' :
               lang === 'de' ? 'Erhalten Sie eine kostenlose Probe unserer Marktforschungsberichte, um die Qualität und Tiefe unserer Analyse zu bewerten' :
               lang === 'jp' ? '分析の品質と深さを評価するために、市場調査レポートの無料サンプルを入手してください' : 'Get a free sample of our market research reports to evaluate the quality and depth of our analysis'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === 'en' ? 'Phone Number' :
                   lang === 'zh' ? '电话号码' :
                   lang === 'ko' ? '전화번호' :
                   lang === 'ar' ? 'رقم الهاتف' :
                   lang === 'fr' ? 'Numéro de Téléphone' :
                   lang === 'es' ? 'Número de Teléfono' :
                   lang === 'de' ? 'Telefonnummer' :
                   lang === 'jp' ? '電話番号' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  type="text"
                  name="reportTitle"
                  value={formData.reportTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  type="text"
                  name="reportCode"
                  value={formData.reportCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {lang === 'en' ? 'Additional Message' :
                 lang === 'zh' ? '附加信息' :
                 lang === 'ko' ? '추가 메시지' :
                 lang === 'ar' ? 'رسالة إضافية' :
                 lang === 'fr' ? 'Message Supplémentaire' :
                 lang === 'es' ? 'Mensaje Adicional' :
                 lang === 'de' ? 'Zusätzliche Nachricht' :
                 lang === 'jp' ? '追加メッセージ' : 'Additional Message'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={lang === 'en' ? 'Please specify which report you would like to sample or any other requirements...' :
                           lang === 'zh' ? '请指定您想要采样的报告或任何其他要求...' :
                           lang === 'ko' ? '어떤 보고서를 샘플링하고 싶은지 또는 기타 요구사항을 지정해 주세요...' :
                           lang === 'ar' ? 'يرجى تحديد التقرير الذي تريد عينته أو أي متطلبات أخرى...' :
                           lang === 'fr' ? 'Veuillez spécifier quel rapport vous souhaitez échantillonner ou toute autre exigence...' :
                           lang === 'es' ? 'Por favor, especifique qué informe le gustaría muestrear o cualquier otro requisito...' :
                           lang === 'de' ? 'Bitte geben Sie an, welchen Bericht Sie probieren möchten oder andere Anforderungen...' :
                           lang === 'jp' ? 'どのレポートをサンプリングしたいか、またはその他の要件を指定してください...' : 'Please specify which report you would like to sample or any other requirements...'}
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                {lang === 'en' ? 'By submitting this form, you agree to receive the sample report and may be contacted by our team for follow-up discussions about our research services.' :
                 lang === 'zh' ? '提交此表单即表示您同意接收样本报告，我们的团队可能会联系您进行关于我们研究服务的后续讨论。' :
                 lang === 'ko' ? '이 양식을 제출하면 샘플 보고서를 받는 것에 동의하며, 저희 연구 서비스에 대한 후속 논의를 위해 저희 팀이 연락할 수 있습니다.' :
                 lang === 'ar' ? 'بإرسال هذا النموذج، فإنك توافق على استلام تقرير العينة وقد يتم الاتصال بك من قبل فريقنا للمناقشات المتابعة حول خدمات البحث لدينا.' :
                 lang === 'fr' ? 'En soumettant ce formulaire, vous acceptez de recevoir le rapport d\'échantillon et pouvez être contacté par notre équipe pour des discussions de suivi sur nos services de recherche.' :
                 lang === 'es' ? 'Al enviar este formulario, acepta recibir el informe de muestra y puede ser contactado por nuestro equipo para discusiones de seguimiento sobre nuestros servicios de investigación.' :
                 lang === 'de' ? 'Durch das Absenden dieses Formulars stimmen Sie zu, den Beispielbericht zu erhalten und können von unserem Team für Nachfolgediskussionen über unsere Forschungsdienste kontaktiert werden.' :
                 lang === 'jp' ? 'このフォームを送信することで、サンプルレポートの受信に同意し、当社の研究サービスに関するフォローアップディスカッションのために当社チームから連絡を受ける可能性があります。' : 'By submitting this form, you agree to receive the sample report and may be contacted by our team for follow-up discussions about our research services.'}
              </p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                lang === 'en' ? 'Submitting...' :
                lang === 'zh' ? '提交中...' :
                lang === 'ko' ? '제출 중...' :
                lang === 'ar' ? 'جاري الإرسال...' :
                lang === 'fr' ? 'Envoi en cours...' :
                lang === 'es' ? 'Enviando...' :
                lang === 'de' ? 'Wird übermittelt...' :
                lang === 'jp' ? '送信中...' : 'Submitting...'
              ) : (
                lang === 'en' ? 'Request Sample Report' :
                lang === 'zh' ? '请求样本报告' :
                lang === 'ko' ? '샘플 보고서 요청' :
                lang === 'ar' ? 'طلب تقرير عينة' :
                lang === 'fr' ? 'Demander un Rapport d\'Échantillon' :
                lang === 'es' ? 'Solicitar Informe de Muestra' :
                lang === 'de' ? 'Beispielbericht Anfordern' :
                lang === 'jp' ? 'サンプルレポートをリクエスト' : 'Request Sample Report'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
