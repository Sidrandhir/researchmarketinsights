import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import * as XLSX from 'xlsx';

export async function GET() {
  try {
    // Check if user is admin
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Create template data
    const templateData = [
      {
        title: 'Global Patient Repositioning System Market',
        slug: 'global-patient-repositioning-system-market',
        industry: 'life-sciences',
        description: 'Comprehensive analysis of the global patient repositioning system market covering key trends, drivers, and opportunities',
        key_insights: 'Market growing at 5.2% CAGR from 2023-2030. Key drivers include aging population and increasing healthcare investments.',
        toc: '1. Executive Summary\n2. Market Overview\n3. Market Segmentation\n4. Regional Analysis\n5. Competitive Landscape\n6. Future Outlook',
        segmentation: 'By Product Type (Manual, Automated), By End User (Hospitals, Long-term Care), By Region (North America, Europe, Asia-Pacific)',
        methodology: 'Primary and Secondary Research, Expert Interviews, Market Modeling, Data Triangulation',
        study_period: '2023-2030',
        base_year: '2023',
        historical_data: '2018-2022',
        pages: '150',
        price: '4999',
        discount: '3999',
        report_code: 'GPRS-2024-001',
        meta_title: 'Global Patient Repositioning System Market Report 2024 | Market Research',
        meta_description: 'Comprehensive market research report on patient repositioning systems covering market size, trends, and forecasts through 2030',
        keywords: 'patient repositioning, healthcare, market research, medical devices, hospital equipment'
      },
      {
        title: 'Global AI in Healthcare Market Analysis',
        slug: 'global-ai-healthcare-market-analysis',
        industry: 'technology',
        description: 'In-depth analysis of artificial intelligence applications in healthcare sector',
        key_insights: 'AI healthcare market expected to reach $102.9 billion by 2030, driven by increasing adoption of AI-powered diagnostic tools.',
        toc: '1. Executive Summary\n2. AI in Healthcare Overview\n3. Market Segmentation\n4. Technology Trends\n5. Regional Analysis\n6. Future Prospects',
        segmentation: 'By Technology (Machine Learning, NLP, Computer Vision), By Application (Diagnostics, Treatment, Drug Discovery), By End User',
        methodology: 'Primary Research, Secondary Research, Market Sizing, Competitive Analysis',
        study_period: '2023-2030',
        base_year: '2023',
        historical_data: '2019-2022',
        pages: '200',
        price: '5999',
        discount: '4799',
        report_code: 'AIHC-2024-002',
        meta_title: 'Global AI in Healthcare Market Report 2024 | Technology Analysis',
        meta_description: 'Comprehensive analysis of AI in healthcare market covering technology trends, applications, and growth opportunities',
        keywords: 'AI healthcare, artificial intelligence, medical technology, healthcare innovation, machine learning'
      }
    ];

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(templateData);

    // Set column widths
    const columnWidths = [
      { wch: 30 }, // title
      { wch: 35 }, // slug
      { wch: 15 }, // industry
      { wch: 50 }, // description
      { wch: 60 }, // key_insights
      { wch: 40 }, // toc
      { wch: 50 }, // segmentation
      { wch: 40 }, // methodology
      { wch: 12 }, // study_period
      { wch: 10 }, // base_year
      { wch: 15 }, // historical_data
      { wch: 8 },  // pages
      { wch: 8 },  // price
      { wch: 10 }, // discount
      { wch: 15 }, // report_code
      { wch: 50 }, // meta_title
      { wch: 60 }, // meta_description
      { wch: 40 }  // keywords
    ];
    worksheet['!cols'] = columnWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reports');

    // Generate Excel file buffer
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Return Excel file as response
    return new NextResponse(excelBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="report-template.xlsx"',
        'Content-Length': excelBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error('Template generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate template' }, 
      { status: 500 }
    );
  }
}
