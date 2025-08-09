import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'Contact Us - Research Market Insights' : '联系我们 - 市场研究洞察',
    description: lang === 'en' 
      ? 'Get in touch with our team for market research inquiries, report purchases, or business partnerships. We\'re here to help you succeed.'
      : '联系我们的团队进行市场研究咨询、报告购买或商业合作。我们随时为您提供帮助。',
  };
}

const ContactPage: React.FC<{ params: { lang: string } }> = ({ params }) => {
  const lang = params.lang;

  const contactInfo = [
    {
      icon: Phone,
      title: lang === 'en' ? 'Phone' : '电话',
      details: [
        { label: lang === 'en' ? 'Sales' : '销售', value: '+1 (315) 908-8888' },
        { label: lang === 'en' ? 'Support' : '支持', value: '+1 (315) 908-8889' }
      ],
      color: 'blue'
    },
    {
      icon: Mail,
      title: lang === 'en' ? 'Email' : '邮箱',
      details: [
        { label: lang === 'en' ? 'General' : '一般', value: 'info@researchmarketinsights.com' },
        { label: lang === 'en' ? 'Sales' : '销售', value: 'sales@researchmarketinsights.com' }
      ],
      color: 'green'
    },
    {
      icon: MapPin,
      title: lang === 'en' ? 'Office' : '办公室',
      details: [
        { label: lang === 'en' ? 'Address' : '地址', value: 'Office No. 208,Vision Mall,' },
        { label: lang === 'en' ? 'City' : '城市', value: 'India, Maharashtra, Pune 411057' }
      ],
      color: 'purple'
    },
    {
      icon: Clock,
      title: lang === 'en' ? 'Hours' : '工作时间',
      details: [
        { label: lang === 'en' ? 'Monday-Friday' : '周一至周五', value: '9:00 AM - 7:00 PM EST' },
        { label: lang === 'en' ? 'Weekend' : '周末', value: '10:00 AM - 4:00 PM EST' }
      ],
      color: 'orange'
    }
  ];

  const offices = [
    {
      city: lang === 'en' ? 'Pune' : '浦那',
      country: lang === 'en' ? 'India' : '印度',
      address: 'Office No. 208,Vision Mall, Pune, Maharashtra, 411057',
      phone: '+1 (315) 908-8888',
      email: 'sales@researchmarketinsights.com'
    },
    // {
    //   city: lang === 'en' ? 'London' : '伦敦',
    //   country: lang === 'en' ? 'United Kingdom' : '英国',
    //   address: '456 Market Street, London, EC1A 1BB',
    //   phone: '+44 20 1234 5678',
    //   email: 'london@marketresearchinsights.com'
    // },
    // {
    //   city: lang === 'en' ? 'Singapore' : '新加坡',
    //   country: lang === 'en' ? 'Singapore' : '新加坡',
    //   address: '789 Business Hub, Singapore 018956',
    //   phone: '+65 6123 4567',
    //   email: 'singapore@marketresearchinsights.com'
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-responsive py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {lang === 'en' ? 'Get in Touch' : '联系我们'}
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              {lang === 'en' 
                ? 'Ready to transform your business with data-driven insights? Let\'s start a conversation.'
                : '准备用数据驱动的洞察来改变您的业务吗？让我们开始对话。'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Contact Information' : '联系信息'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Multiple ways to reach our team. We\'re here to help you succeed.'
                : '多种方式联系我们的团队。我们随时为您提供帮助。'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`h-8 w-8 text-${info.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <div className="text-sm text-gray-500">{detail.label}</div>
                      <div className="text-gray-900 font-medium">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Office Locations */}
      <div className="py-16 bg-gray-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {lang === 'en' ? 'Send us a Message' : '发送消息'}
                </h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'First Name' : '名字'}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Last Name' : '姓氏'}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Email' : '邮箱'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'en' ? 'Phone' : '电话'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'en' ? 'Company' : '公司'}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'en' ? 'Subject' : '主题'}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">{lang === 'en' ? 'Select a subject' : '选择主题'}</option>
                    <option value="general">{lang === 'en' ? 'General Inquiry' : '一般咨询'}</option>
                    <option value="sales">{lang === 'en' ? 'Sales Question' : '销售问题'}</option>
                    <option value="support">{lang === 'en' ? 'Technical Support' : '技术支持'}</option>
                    <option value="partnership">{lang === 'en' ? 'Partnership' : '合作'}</option>
                    <option value="other">{lang === 'en' ? 'Other' : '其他'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang === 'en' ? 'Message' : '消息'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={lang === 'en' ? 'Tell us how we can help you...' : '告诉我们我们如何帮助您...'}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  {lang === 'en' ? 'Send Message' : '发送消息'}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {lang === 'en' ? 'Our Offices' : '我们的办公室'}
                </h2>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{office.address}</p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  {lang === 'en' ? 'Need Immediate Assistance?' : '需要立即帮助？'}
                </h3>
                <p className="text-primary-800 text-sm mb-4">
                  {lang === 'en'
                    ? 'Our customer support team is available 24/7 to help you with urgent inquiries.'
                    : '我们的客户支持团队全天候为您提供紧急咨询帮助。'
                  }
                </p>
                <div className="flex items-center gap-2 text-primary-700">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {lang === 'en' ? '24/7 Support Available' : '24/7 全天候支持'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Frequently Asked Questions' : '常见问题'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Quick answers to common questions about our services and support.'
                : '关于我们服务和支持的常见问题的快速答案。'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: lang === 'en' ? 'How quickly will I receive a response?' : '我多久能收到回复？',
                answer: lang === 'en' ? 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.' : '我们通常在营业日24小时内回复所有咨询。对于紧急事项，请致电我们的支持热线。'
              },
              {
                question: lang === 'en' ? 'Can I schedule a consultation call?' : '我可以安排咨询电话吗？',
                answer: lang === 'en' ? 'Absolutely! We offer free consultation calls to discuss your research needs. Contact us to schedule a convenient time.' : '当然可以！我们提供免费咨询电话来讨论您的研究需求。联系我们安排一个方便的时间。'
              },
              {
                question: lang === 'en' ? 'Do you offer custom research services?' : '您提供定制研究服务吗？',
                answer: lang === 'en' ? 'Yes, we provide custom research services tailored to your specific business needs. Our team will work closely with you to deliver actionable insights.' : '是的，我们提供根据您的具体业务需求定制的定制研究服务。我们的团队将与您密切合作，提供可操作的见解。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 