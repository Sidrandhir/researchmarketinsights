'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { useTranslation, getLanguageFromPathname } from '@/lib/i18n'

const Footer = () => {
  const pathname = usePathname()
  const currentLang = getLanguageFromPathname(pathname)
  const { t } = useTranslation(currentLang)

  const footerLinks = {
    company: [
      { name: t('about.title'), href: `/${currentLang}/about` },
      { name: 'Careers', href: `/${currentLang}/careers` },
      { name: 'Press Releases', href: `/${currentLang}/press-release` },
      { name: 'Contact Us', href: `/${currentLang}/contact` },
    ],
    legal: [
      { name: 'Privacy Policy', href: `/${currentLang}/privacy` },
      { name: 'Terms of Service', href: `/${currentLang}/terms` },
      { name: 'Refund Policy', href: `/${currentLang}/refund` },
      { name: 'Cookie Policy', href: `/${currentLang}/cookies` },
    ],
    resources: [
      { name: 'Blog', href: `/${currentLang}/blog` },
      { name: 'Research Methodology', href: `/${currentLang}/methodology` },
      { name: 'Case Studies', href: `/${currentLang}/case-studies` },
      { name: 'White Papers', href: `/${currentLang}/white-papers` },
    ],
    industries: [
      { name: t('industry.categories.healthcare'), href: `/${currentLang}/industry/healthcare` },
      { name: t('industry.categories.technology'), href: `/${currentLang}/industry/technology` },
      { name: t('industry.categories.automotive'), href: `/${currentLang}/industry/automotive` },
      { name: t('industry.categories.energy'), href: `/${currentLang}/industry/energy` },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'info@marketresearchinsights.com',
      href: 'mailto:info@marketresearchinsights.com',
    },
    {
      icon: Phone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      text: '123 Research Street, New York, NY 10001',
      href: '#',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/${currentLang}`} className="inline-block mb-6">
                <div className="text-2xl font-bold text-white">
                  Market Research Insights
                </div>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of comprehensive market research reports, industry analysis, and business intelligence. 
                Empowering businesses with data-driven insights for informed decision-making.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.text}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <info.icon className="h-4 w-4 mr-3 text-primary-400" />
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
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {section === 'company' ? t('footer.company') : 
                 section === 'legal' ? t('footer.legal') :
                 section === 'resources' ? t('footer.resources') :
                 t('footer.industries')}
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
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
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
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {t('footer.newsletter.title')}
              </h3>
              <p className="text-gray-300">
                {t('footer.newsletter.subtitle')}
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
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-200">
                  {t('footer.newsletter.subscribe')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              {t('footer.copyright')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6"
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
                  className="text-gray-400 hover:text-white transition-colors duration-200"
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