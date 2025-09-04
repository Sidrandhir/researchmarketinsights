import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import * as XLSX from 'xlsx';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Check if user is admin
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      return NextResponse.json({ error: 'Invalid file type. Please upload Excel or CSV file.' }, { status: 400 });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    // Save file temporarily
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `report-${Date.now()}.${file.name.split('.').pop()}`;
    const filePath = join(uploadsDir, fileName);
    
    await writeFile(filePath, buffer);

    // Parse Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    if (jsonData.length === 0) {
      return NextResponse.json({ error: 'No data found in Excel file' }, { status: 400 });
    }

    // Process each row as a report
    const results = [];
    for (const row of jsonData) {
      try {
        const report = await createReportFromRow(row, session.user.id);
        results.push({ success: true, report: report.title });
      } catch (error) {
        results.push({ 
          success: false, 
          error: error.message, 
          row: row.title || 'Unknown' 
        });
      }
    }

    // Clean up temporary file
    await unlink(filePath);

    return NextResponse.json({
      message: 'Reports processed successfully',
      results: results,
      total: jsonData.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process file' }, 
      { status: 500 }
    );
  }
}

async function createReportFromRow(row: any, authorId: string) {
  // Validate required fields
  const requiredFields = ['title', 'slug', 'industry', 'description'];
  for (const field of requiredFields) {
    if (!row[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Map industry to enum
  const industryMap: { [key: string]: string } = {
    'life-sciences': 'LIFE_SCIENCES',
    'healthcare': 'LIFE_SCIENCES',
    'medical': 'LIFE_SCIENCES',
    'pharmaceutical': 'LIFE_SCIENCES',
    'technology': 'TECHNOLOGY_MEDIA_TELECOMMUNICATIONS',
    'automotive': 'AUTOMOTIVE_TRANSPORTATION',
    'energy': 'ENERGY_POWER',
    'food': 'FOOD_BEVERAGES',
    'chemicals': 'CHEMICALS_MATERIALS',
    'aerospace': 'AEROSPACE_DEFENSE',
    'banking': 'BANKING_FINANCIAL_SERVICES_INSURANCE',
    'consumer': 'CONSUMER_GOODS',
    'electronics': 'ELECTRONICS_SEMICONDUCTOR'
  };

  const industry = industryMap[row.industry.toLowerCase()] || 'LIFE_SCIENCES';

  // Create report data
  const reportData = {
    title: row.title,
    slug: row.slug,
    description: row.description,
    reportCode: row.report_code || `RPT-${Date.now()}`,
    category: industry,
    price: parseFloat(row.price) || 0,
    discount: row.discount ? parseFloat(row.discount) : null,
    metaTitle: row.meta_title || row.title,
    metaDescription: row.meta_description || row.description,
    keywords: row.keywords || '',
    status: 'PUBLISHED' as const,
    authorId: authorId,
    content: {
      keyInsights: row.key_insights || '',
      toc: row.toc || '',
      segmentation: row.segmentation || '',
      methodology: row.methodology || '',
      studyPeriod: row.study_period || '',
      baseYear: row.base_year || '',
      historicalData: row.historical_data || '',
      pages: row.pages || '',
      downloadSample: row.download_sample || ''
    }
  };

  // Create report in database
  const report = await prisma.report.create({
    data: reportData
  });

  return report;
}