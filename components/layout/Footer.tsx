'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Send } from 'lucide-react'
import { useTranslation, getLanguageFromPathname } from '@/lib/i18n'

const Footer: React.FC = () => {

  
  const pathname = usePathname()
  const currentLang = getLanguageFromPathname(pathname)
  const { t } = useTranslation(currentLang)

  const footerLinks = {
    company: [
      { name: t('about.title') || 'About Us', href: `/${currentLang}/about` },
      { name: 'Careers', href: `/${currentLang}/career` },
      { name: 'Press Releases', href: `/${currentLang}/press-releases` },
      { name: 'Contact Us', href: `/${currentLang}/contact` },
    ],
    legal: [
      { name: 'Privacy Policy', href: `/${currentLang}/privacy-policy` },
      { name: 'Terms & Conditions', href: `/${currentLang}/terms` },
      { name: 'Refund Policy', href: `/${currentLang}/refund-policy` },
      { name: 'FAQ', href: `/${currentLang}/faq` },
    ],
    resources: [
      { name: 'Market Reports', href: `/${currentLang}/reports` },
      { name: 'Industry Analysis', href: `/${currentLang}/industry` },
      { name: 'Sample Reports', href: `/${currentLang}/sample-request` },
      { name: 'Research Methodology', href: `/${currentLang}/methodology` },
    ],
    industries: [
      { name: 'Healthcare', href: `/${currentLang}/reports/healthcare` },
      { name: 'Technology', href: `/${currentLang}/reports/technology` },
      { name: 'Automotive', href: `/${currentLang}/reports/automotive` },
      { name: 'Energy', href: `/${currentLang}/reports/energy` },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400' },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'sales@researchmarketinsights.com',
      href: 'mailto:sales@researchmarketinsights.com',
    },
    {
      icon: Phone,
      text: '+1 (315) 908-8888',
      href: 'tel:+1 (315) 908-8888',
    },
    {
      icon: MapPin,
      text: 'Office No. 208,Vision Mall, Pune, Maharashtra, 411057',
      href: '#',
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/${currentLang}`} className="inline-block mb-6 group">
                <div className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-200">
                  Market Research Insights
                </div>
              </Link>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Leading provider of comprehensive market research reports, industry analysis, and business intelligence. 
                Empowering businesses with data-driven insights for informed decision-making and strategic growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.text}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600/40 transition-all duration-200">
                      <info.icon className="h-4 w-4 text-primary-400" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 capitalize text-white">
                {section === 'company' ? t('footer.company') || 'Company' : 
                 section === 'legal' ? t('footer.legal') || 'Legal' :
                 section === 'resources' ? t('footer.resources') || 'Resources' :
                 t('footer.industries') || 'Industries'}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (index * 0.05) }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-t border-gray-700/50 py-12">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {t('footer.newsletter.title') || 'Stay Updated'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('footer.newsletter.subtitle') || 'Get the latest market insights and industry reports delivered to your inbox.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder') || 'Enter your email address'}
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 backdrop-blur-sm"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-lg font-medium transition-all duration-200 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t('footer.newsletter.subscribe') || 'Subscribe'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700/50 py-8">
        <div className="container-responsive">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              {t('footer.copyright') || `© ${new Date().getFullYear()} Market Research Insights. All rights reserved.`}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`text-gray-400 transition-all duration-200 p-2 rounded-lg hover:bg-gray-700/50 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer