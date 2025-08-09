import React from 'react';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { Users, Target, Award, Globe, TrendingUp, BarChart3, FileText } from 'lucide-react';

export default function AboutPage({ params }: PageProps) {
  const lang = params.lang;

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: lang === 'en' ? 'About Us - Market Research Insights' : '关于我们 - 市场研究洞察',
    description: lang === 'en' 
      ? 'Learn about Market Research Insights - your trusted partner for comprehensive market research, industry analysis, and strategic insights.'
      : '了解市场研究洞察 - 您值得信赖的市场研究、行业分析和战略洞察合作伙伴。',
  };
}

const AboutPage: React.FC<{ params: { lang: string } }> = ({ params }) => {
  const lang = params.lang;

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Reports Published' },
    { icon: Users, value: '50K+', label: 'Clients Served' },
    { icon: Globe, value: '25+', label: 'Countries Covered' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Target,
      title: lang === 'en' ? 'Excellence' : '卓越',
      description: lang === 'en' 
        ? 'We strive for excellence in every report, analysis, and insight we deliver.'
        : '我们努力在每份报告、分析和洞察中追求卓越。'
    },
    {
      icon: BarChart3,
      title: lang === 'en' ? 'Accuracy' : '准确性',
      description: lang === 'en'
        ? 'Our data-driven approach ensures accurate and reliable market intelligence.'
        : '我们以数据驱动的方法确保准确可靠的市场情报。'
    },
    {
      icon: Users,
      title: lang === 'en' ? 'Innovation' : '创新',
      description: lang === 'en'
        ? 'We continuously innovate our research methodologies and delivery platforms.'
        : '我们不断创新研究方法和交付平台。'
    },
    {
      icon: FileText,
      title: lang === 'en' ? 'Transparency' : '透明度',
      description: lang === 'en'
        ? 'We maintain complete transparency in our research processes and methodologies.'
        : '我们在研究过程和方法中保持完全透明。'
    }
  ];

  const team = [
    {
      name: lang === 'en' ? 'Dr. Sarah Johnson' : 'Sarah Johnson 博士',
      role: lang === 'en' ? 'Chief Research Officer' : '首席研究官',
      expertise: lang === 'en' ? 'Market Analysis & Strategy' : '市场分析与战略',
      experience: '15+ years'
    },
    {
      name: lang === 'en' ? 'Michael Chen' : 'Michael Chen',
      role: lang === 'en' ? 'Head of Data Analytics' : '数据分析主管',
      expertise: lang === 'en' ? 'Data Science & AI' : '数据科学与人工智能',
      experience: '12+ years'
    },
    {
      name: lang === 'en' ? 'Dr. Emily Rodriguez' : 'Emily Rodriguez 博士',
      role: lang === 'en' ? 'Industry Research Director' : '行业研究总监',
      expertise: lang === 'en' ? 'Healthcare & Life Sciences' : '医疗保健与生命科学',
      experience: '18+ years'
    },
    {
      name: lang === 'en' ? 'David Kim' : 'David Kim',
      role: lang === 'en' ? 'Technology Research Lead' : '技术研究主管',
      expertise: lang === 'en' ? 'Emerging Technologies' : '新兴技术',
      experience: '10+ years'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-responsive py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {lang === 'en' ? 'About Market Research Insights' : '关于市场研究洞察'}
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              {lang === 'en' 
                ? 'Empowering businesses with data-driven insights and strategic market intelligence for informed decision-making.'
                : '为商业决策提供数据驱动的洞察和战略性市场情报。'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === 'en' ? 'Our Mission' : '我们的使命'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {lang === 'en'
                  ? 'To provide comprehensive, accurate, and actionable market research insights that empower organizations to make strategic decisions and achieve sustainable growth in an ever-evolving global marketplace.'
                  : '提供全面、准确和可操作的市场研究洞察，使组织能够在不断发展的全球市场中做出战略决策并实现可持续增长。'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === 'en' ? 'Our Vision' : '我们的愿景'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {lang === 'en'
                  ? 'To be the global leader in market research and business intelligence, recognized for our innovative methodologies, exceptional quality, and unwavering commitment to client success.'
                  : '成为市场研究和商业智能领域的全球领导者，以我们的创新方法、卓越质量和坚定不移的客户成功承诺而闻名。'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Our Core Values' : '我们的核心价值观'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en'
                ? 'The principles that guide our work and define our relationship with clients and stakeholders.'
                : '指导我们工作并定义我们与客户和利益相关者关系的原则。'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Our Expert Team' : '我们的专家团队'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Meet the dedicated professionals who make our research excellence possible.'
                : '认识使我们的研究卓越成为可能的专业团队。'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary-600 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Ready to Get Started?' : '准备开始了吗？'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Discover how our market research insights can transform your business strategy and drive growth.'
              : '了解我们的市场研究洞察如何改变您的商业战略并推动增长。'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/reports`}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {lang === 'en' ? 'Browse Reports' : '浏览报告'}
            </a>
            <a
              href={`/${lang}/contact`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              {lang === 'en' ? 'Contact Us' : '联系我们'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;