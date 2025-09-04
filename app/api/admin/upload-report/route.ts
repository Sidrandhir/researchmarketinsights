import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { PrismaClient, Category } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    console.log('Upload request received');
    
    // Check if user is admin
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    console.log('Admin session verified:', session.user.email);

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const industry = formData.get('industry') as string;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      return NextResponse.json({ error: 'Invalid file type. Please upload Excel or CSV file.' }, { status: 400 });
    }

    // Get file buffer directly without saving to disk
    console.log('Processing file:', file.name, 'Size:', file.size);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Parse Excel file directly from buffer
    console.log('Parsing Excel file...');
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log('Found', jsonData.length, 'rows in Excel file');

    if (jsonData.length === 0) {
      return NextResponse.json({ error: 'No data found in Excel file' }, { status: 400 });
    }

    // Process each row as a report
    const results = [];
    for (const row of jsonData) {
      try {
        const report = await createReportFromRow(row, (session.user as any).id, industry);
        results.push({ success: true, report: report.title, slug: report.slug });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        results.push({ 
          success: false, 
          error: errorMessage, 
          row: (row as any).title || 'Unknown' 
        });
      }
    }

    // No need to clean up since we're not saving files to disk

    return NextResponse.json({
      message: 'Reports processed successfully',
      results: results,
      total: jsonData.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process file', details: error.message },
      { status: 500 }
    );
  }
}

// Helper function to clean and generate proper slugs
function cleanSlug(input: string): string {
  if (!input) return '';
  
  // Remove URLs and clean the input
  let cleaned = input
    .replace(/^https?:\/\//, '') // Remove http:// or https://
    .replace(/^www\./, '') // Remove www.
    .replace(/\/$/, '') // Remove trailing slash
    .replace(/^[^\/]*\//, '') // Remove domain part (everything before first slash)
    .toLowerCase()
    .trim();
  
  // If it's still empty or looks like a URL, generate from title
  if (!cleaned || cleaned.includes('.')) {
    return '';
  }
  
  // Clean up the slug
  return cleaned
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Helper function to generate slug from title
function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .substring(0, 100); // Limit length
}

async function createReportFromRow(row: any, authorId: string, selectedIndustry: string) {
  // Validate required fields (industry is now provided via dropdown)
  const requiredFields = ['title', 'description'];
  for (const field of requiredFields) {
    if (!row[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Generate or clean the slug
  let slug = '';
  if (row.slug) {
    slug = cleanSlug(row.slug);
  }
  
  // If slug is still empty or invalid, generate from title
  if (!slug) {
    slug = generateSlugFromTitle(row.title);
  }
  
  // Ensure slug is unique
  let finalSlug = slug;
  let counter = 1;
  while (true) {
    const existingReport = await prisma.report.findUnique({
      where: { slug: finalSlug }
    });
    
    if (!existingReport) {
      break;
    }
    
    finalSlug = `${slug}-${counter}`;
    counter++;
  }

  // Map selected industry to enum value
  const industryMap: { [key: string]: Category } = {
    'life-sciences': Category.LIFE_SCIENCES,
    'technology': Category.TECHNOLOGY_MEDIA_TELECOMMUNICATIONS,
    'automotive': Category.AUTOMOTIVE_TRANSPORTATION,
    'energy': Category.ENERGY_POWER,
    'food': Category.FOOD_BEVERAGES,
    'chemicals': Category.CHEMICALS_MATERIALS,
    'aerospace': Category.AEROSPACE_DEFENSE,
    'banking': Category.BANKING_FINANCIAL_SERVICES_INSURANCE,
    'consumer': Category.CONSUMER_GOODS,
    'electronics': Category.ELECTRONICS_SEMICONDUCTOR
  };

  const industry = industryMap[selectedIndustry] || Category.LIFE_SCIENCES;

  // Create report data with proper typing
  const reportData = {
    title: String(row.title),
    slug: finalSlug,
    description: String(row.description),
    reportCode: String(row.report_code || `RPT-${Date.now()}`),
    category: industry,
    price: parseFloat(row.price) || 0,
    discount: row.discount ? parseFloat(row.discount) : null,
    metaTitle: String(row.meta_title || row.title),
    metaDescription: String(row.meta_description || row.description),
    keywords: String(row.keywords || ''),
    status: 'PUBLISHED' as const,
    authorId: authorId,
    content: {
      keyInsights: String(row.key_insights || ''),
      toc: String(row.toc || ''),
      segmentation: String(row.segmentation || ''),
      methodology: String(row.methodology || ''),
      studyPeriod: String(row.study_period || ''),
      baseYear: String(row.base_year || ''),
      historicalData: String(row.historical_data || ''),
      pages: String(row.pages || ''),
      downloadSample: String(row.download_sample || '')
    }
  };

  const report = await prisma.report.create({
    data: reportData
  });

  return report;
}