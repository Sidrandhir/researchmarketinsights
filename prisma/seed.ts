import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@marketresearch.com' },
    update: {},
    create: {
      email: 'admin@marketresearch.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin user created:', adminUser.email)

  // Create sample reports
  const reports = [
    {
      title: 'Global Patient Repositioning System Market',
      slug: 'global-patient-repositioning-system-market',
      description: 'Comprehensive analysis of the global patient repositioning system market, including market size, growth trends, and competitive landscape.',
      content: {
        executiveSummary: 'The global patient repositioning system market is expected to reach $2.5 billion by 2030...',
        marketOverview: 'Patient repositioning systems are essential medical devices used in healthcare facilities...',
        methodology: 'This report is based on extensive primary and secondary research...',
      },
      price: 2999.00,
      reportCode: 'MR-001-2024',
      category: 'LIFE_SCIENCES' as const,
      subcategory: 'Medical Devices',
      status: 'PUBLISHED' as const,
      featured: true,
      authorId: adminUser.id,
      metaTitle: 'Global Patient Repositioning System Market Report 2024',
      metaDescription: 'Comprehensive market research report on patient repositioning systems with detailed analysis and forecasts.',
      keywords: 'patient repositioning, medical devices, healthcare, market research',
    },
    {
      title: 'Global Connected Drug Delivery Devices Market',
      slug: 'global-connected-drug-delivery-devices-market',
      description: 'In-depth analysis of connected drug delivery devices market, including IoT integration and smart healthcare solutions.',
      content: {
        executiveSummary: 'The connected drug delivery devices market is witnessing rapid growth...',
        marketOverview: 'Connected drug delivery devices represent the future of personalized medicine...',
        methodology: 'Comprehensive market research including primary interviews and secondary data analysis...',
      },
      price: 3499.00,
      reportCode: 'MR-002-2024',
      category: 'LIFE_SCIENCES' as const,
      subcategory: 'Pharmaceuticals',
      status: 'PUBLISHED' as const,
      featured: true,
      authorId: adminUser.id,
      metaTitle: 'Global Connected Drug Delivery Devices Market Report 2024',
      metaDescription: 'Market research report on connected drug delivery devices with IoT integration analysis.',
      keywords: 'drug delivery, IoT, connected devices, pharmaceuticals, smart healthcare',
    },
    {
      title: 'Global Pharmaceutical Packaging Market',
      slug: 'global-pharmaceutical-packaging-market',
      description: 'Analysis of pharmaceutical packaging market trends, materials, and sustainability initiatives.',
      content: {
        executiveSummary: 'The pharmaceutical packaging market is evolving with sustainability focus...',
        marketOverview: 'Packaging plays a crucial role in pharmaceutical product safety and compliance...',
        methodology: 'Extensive research including industry expert interviews and market data analysis...',
      },
      price: 2499.00,
      reportCode: 'MR-003-2024',
      category: 'LIFE_SCIENCES' as const,
      subcategory: 'Packaging',
      status: 'PUBLISHED' as const,
      featured: false,
      authorId: adminUser.id,
      metaTitle: 'Global Pharmaceutical Packaging Market Report 2024',
      metaDescription: 'Comprehensive analysis of pharmaceutical packaging market with sustainability focus.',
      keywords: 'pharmaceutical packaging, sustainability, materials, compliance',
    },
  ]

  for (const reportData of reports) {
    const report = await prisma.report.upsert({
      where: { slug: reportData.slug },
      update: {},
      create: reportData,
    })
    console.log('✅ Report created:', report.title)
  }

  // Create press releases
  const pressReleases = [
    {
      title: 'Market Research Insights Launches New Life Sciences Division',
      slug: 'life-sciences-division-launch',
      content: 'Market Research Insights is excited to announce the launch of our new Life Sciences division...',
      excerpt: 'Expanding our expertise in healthcare, pharmaceuticals, and biotechnology market research.',
      category: 'LIFE_SCIENCES' as const,
      status: 'PUBLISHED' as const,
      featured: true,
      authorId: adminUser.id,
      publishedAt: new Date(),
      metaTitle: 'Life Sciences Division Launch - Market Research Insights',
      metaDescription: 'Market Research Insights expands into life sciences market research.',
      keywords: 'life sciences, market research, healthcare, pharmaceuticals',
    },
  ]

  for (const prData of pressReleases) {
    const pressRelease = await prisma.pressRelease.upsert({
      where: { slug: prData.slug },
      update: {},
      create: prData,
    })
    console.log('✅ Press release created:', pressRelease.title)
  }

  // Create sample leads
  const leads = [
    {
      name: 'John Smith',
      email: 'john.smith@healthcare.com',
      company: 'Healthcare Solutions Inc.',
      phone: '+1-555-0123',
      country: 'United States',
      subject: 'Patient Monitoring Report Inquiry',
      message: 'Interested in detailed analysis of patient monitoring devices market.',
      source: 'Website Contact Form',
      status: 'NEW' as const,
    },
  ]

  for (const leadData of leads) {
    // Check if lead exists by email
    const existingLead = await prisma.lead.findFirst({
      where: { email: leadData.email },
    })
    
    if (existingLead) {
      console.log('✅ Lead already exists:', existingLead.name)
    } else {
      const lead = await prisma.lead.create({
        data: leadData,
      })
      console.log('✅ Lead created:', lead.name)
    }
  }

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
