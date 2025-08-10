import React from 'react';
import { Metadata } from 'next';
import { Shield, Eye, Lock, Users, Database, Globe, FileText, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    title: lang === 'en' ? 'Privacy Policy - Market Research Insights' : '隐私政策 - 市场研究洞察',
    description: lang === 'en' 
      ? 'Learn how we collect, use, and protect your personal information. Our privacy policy ensures transparency and data security.'
      : '了解我们如何收集、使用和保护您的个人信息。我们的隐私政策确保透明度和数据安全。',
  };
}

const PrivacyPolicyPage: React.FC<{ params: Promise<{ lang: string }> }> = async ({ params }) => {
  const { lang } = await params;

  const lastUpdated = '2024-01-15';

  const sections = [
    {
      icon: Eye,
      title: lang === 'en' ? 'Information We Collect' : '我们收集的信息',
      content: lang === 'en' ? [
        'Personal identification information (name, email address, phone number)',
        'Professional information (company name, job title, industry)',
        'Usage data (website interactions, report downloads, search queries)',
        'Technical data (IP address, browser type, device information)',
        'Communication preferences and marketing consent'
      ] : [
        '个人身份信息（姓名、电子邮件地址、电话号码）',
        '专业信息（公司名称、职位、行业）',
        '使用数据（网站交互、报告下载、搜索查询）',
        '技术数据（IP地址、浏览器类型、设备信息）',
        '通信偏好和营销同意'
      ]
    },
    {
      icon: Database,
      title: lang === 'en' ? 'How We Use Your Information' : '我们如何使用您的信息',
      content: lang === 'en' ? [
        'Provide and maintain our market research services',
        'Process your orders and deliver purchased reports',
        'Send you relevant industry insights and updates',
        'Improve our website functionality and user experience',
        'Respond to your inquiries and provide customer support',
        'Comply with legal obligations and enforce our terms'
      ] : [
        '提供和维护我们的市场研究服务',
        '处理您的订单并交付购买的报告',
        '向您发送相关的行业洞察和更新',
        '改善我们的网站功能和用户体验',
        '回应您的咨询并提供客户支持',
        '遵守法律义务并执行我们的条款'
      ]
    },
    {
      icon: Users,
      title: lang === 'en' ? 'Information Sharing and Disclosure' : '信息共享和披露',
      content: lang === 'en' ? [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'Information may be disclosed if required by law or to protect our rights',
        'Aggregated, anonymized data may be used for research and analytics purposes',
        'Your information is protected by strict confidentiality agreements'
      ] : [
        '我们不会向第三方出售、交易或出租您的个人信息',
        '我们可能与协助我们运营的可信服务提供商共享信息',
        '如果法律要求或保护我们的权利，可能会披露信息',
        '汇总的匿名数据可能用于研究和分析目的',
        '您的信息受到严格保密协议的保护'
      ]
    },
    {
      icon: Lock,
      title: lang === 'en' ? 'Data Security and Protection' : '数据安全和保护',
      content: lang === 'en' ? [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and vulnerability assessments are conducted',
        'We maintain backup and disaster recovery procedures',
        'Your data is stored in secure, monitored facilities'
      ] : [
        '我们实施行业标准的安全措施来保护您的数据',
        '所有数据传输都使用SSL/TLS协议加密',
        '对个人信息的访问仅限于授权人员',
        '定期进行安全审计和漏洞评估',
        '我们维护备份和灾难恢复程序',
        '您的数据存储在安全、受监控的设施中'
      ]
    },
    {
      icon: Globe,
      title: lang === 'en' ? 'International Data Transfers' : '国际数据传输',
      content: lang === 'en' ? [
        'Your information may be transferred to and processed in countries other than your own',
        'We ensure adequate protection through appropriate safeguards and agreements',
        'All transfers comply with applicable data protection laws and regulations',
        'We maintain the same level of protection regardless of where your data is processed',
        'You have the right to know where your data is being processed'
      ] : [
        '您的信息可能会被转移到您所在国家以外的国家并进行处理',
        '我们通过适当的保障措施和协议确保充分保护',
        '所有传输都符合适用的数据保护法律和法规',
        '无论您的数据在哪里处理，我们都保持相同级别的保护',
        '您有权知道您的数据正在哪里处理'
      ]
    },
    {
      icon: FileText,
      title: lang === 'en' ? 'Your Rights and Choices' : '您的权利和选择',
      content: lang === 'en' ? [
        'Access and review your personal information',
        'Request correction of inaccurate or incomplete data',
        'Request deletion of your personal information',
        'Object to processing of your data for certain purposes',
        'Withdraw consent for marketing communications',
        'Request data portability in a structured format',
        'Lodge a complaint with supervisory authorities'
      ] : [
        '访问和审查您的个人信息',
        '请求更正不准确或不完整的数据',
        '请求删除您的个人信息',
        '反对为某些目的处理您的数据',
        '撤回对营销通信的同意',
        '请求以结构化格式进行数据可移植性',
        '向监管机构提出投诉'
      ]
    }
  ];

  const cookies = [
    {
      type: lang === 'en' ? 'Essential Cookies' : '必要Cookie',
      description: lang === 'en' ? 'Required for basic website functionality' : '网站基本功能所必需',
      examples: lang === 'en' ? 'Authentication, security, shopping cart' : '身份验证、安全、购物车'
    },
    {
      type: lang === 'en' ? 'Analytics Cookies' : '分析Cookie',
      description: lang === 'en' ? 'Help us understand how visitors use our website' : '帮助我们了解访问者如何使用我们的网站',
      examples: lang === 'en' ? 'Page views, user behavior, performance metrics' : '页面浏览量、用户行为、性能指标'
    },
    {
      type: lang === 'en' ? 'Marketing Cookies' : '营销Cookie',
      description: lang === 'en' ? 'Used to deliver relevant advertisements and content' : '用于投放相关广告和内容',
      examples: lang === 'en' ? 'Targeted ads, social media integration' : '定向广告、社交媒体集成'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-responsive py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {lang === 'en' ? 'Privacy Policy' : '隐私政策'}
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              {lang === 'en' 
                ? 'Your privacy is our priority. Learn how we protect and handle your personal information.'
                : '您的隐私是我们的首要任务。了解我们如何保护和处理您的个人信息。'
              }
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-primary-200">
              <Calendar className="h-4 w-4" />
              <span>
                {lang === 'en' ? 'Last Updated:' : '最后更新：'} {new Date(lastUpdated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Introduction' : '介绍'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {lang === 'en'
                ? 'Market Research Insights ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, purchase our reports, or interact with our services.'
                : '市场研究洞察（"我们"、"我们的"或"我们"）致力于保护您的隐私并确保您个人信息的安全。本隐私政策解释了当您访问我们的网站、购买我们的报告或与我们的服务互动时，我们如何收集、使用、披露和保护您的信息。'
              }
            </p>
            <p className="text-gray-700 leading-relaxed">
              {lang === 'en'
                ? 'By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.'
                : '通过使用我们的服务，您同意根据本政策收集和使用信息。如果您不同意我们的政策和做法，请不要使用我们的服务。'
              }
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cookies Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === 'en' ? 'Cookies and Tracking Technologies' : 'Cookie和跟踪技术'}
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              {lang === 'en'
                ? 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from.'
                : '我们使用Cookie和类似的跟踪技术来增强您的浏览体验、分析网站流量并了解我们的访问者来自哪里。'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cookies.map((cookie, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{cookie.type}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cookie.description}</p>
                  <p className="text-xs text-gray-500">{cookie.examples}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {lang === 'en'
                  ? 'You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.'
                  : '您可以通过浏览器设置控制和管理Cookie。但是，禁用某些Cookie可能会影响我们网站的功能。'
                }
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {lang === 'en' ? 'Data Retention and Deletion' : '数据保留和删除'}
            </h2>
            <p className="text-gray-700 mb-4">
              {lang === 'en'
                ? 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.'
                : '我们仅在实现本隐私政策中概述的目的所必需的时间内保留您的个人信息，除非法律要求或允许更长的保留期。'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {lang === 'en' ? 'Account Information' : '账户信息'}
                </h3>
                <p className="text-sm text-gray-600">
                  {lang === 'en' ? 'Retained while your account is active and for 3 years after deactivation' : '在您的账户处于活动状态期间保留，停用后保留3年'}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {lang === 'en' ? 'Purchase Records' : '购买记录'}
                </h3>
                <p className="text-sm text-gray-600">
                  {lang === 'en' ? 'Retained for 7 years for tax and accounting purposes' : '出于税务和会计目的保留7年'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl mt-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              {lang === 'en' ? 'Contact Us' : '联系我们'}
            </h2>
            <p className="text-primary-800 mb-6">
              {lang === 'en'
                ? 'If you have any questions about this Privacy Policy or our data practices, please contact us:'
                : '如果您对本隐私政策或我们的数据做法有任何疑问，请联系我们：'
              }
            </p>
            <div className="space-y-3 text-primary-800">
              <p><strong>{lang === 'en' ? 'Email:' : '邮箱：'}</strong> sales@researchmarketinsights.com</p>
              <p><strong>{lang === 'en' ? 'Phone:' : '电话：'}</strong> +1 (315) 908-8888</p>
              <p><strong>{lang === 'en' ? 'Address:' : '地址：'}</strong> Office no 208, Vision Mall, India, Maharashtra, Pune 411057
              </p>
            </div>
          </div>

          {/* Updates Notice */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mt-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">
                  {lang === 'en' ? 'Policy Updates' : '政策更新'}
                </h3>
                <p className="text-yellow-700 text-sm">
                  {lang === 'en'
                    ? 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.'
                    : '我们可能会不时更新本隐私政策。我们将通过在此页面上发布新的隐私政策并更新"最后更新"日期来通知您任何变更。我们鼓励您定期查看本隐私政策的任何变更。'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
