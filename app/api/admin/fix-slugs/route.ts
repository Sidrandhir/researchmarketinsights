import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

// Helper function to clean and generate proper slugs
function cleanSlug(input: string): string {
  if (!input) return '';
  
  // Remove URLs and clean the input
  const cleaned = input
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

export async function POST() {
  try {
    // Check if user is admin
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all reports with problematic slugs
    const reports = await prisma.report.findMany({
      where: {
        OR: [
          { slug: { contains: 'http' } },
          { slug: { contains: 'www.' } },
          { slug: { contains: '/' } },
          { slug: { contains: '.' } }
        ]
      }
    });

    console.log(`Found ${reports.length} reports with problematic slugs`);

    const results = [];

    for (const report of reports) {
      try {
        // Generate new slug
        let newSlug = cleanSlug(report.slug);
        
        // If slug is still empty or invalid, generate from title
        if (!newSlug) {
          newSlug = generateSlugFromTitle(report.title);
        }
        
        // Ensure slug is unique
        let finalSlug = newSlug;
        let counter = 1;
        while (true) {
          const existingReport = await prisma.report.findUnique({
            where: { slug: finalSlug }
          });
          
          if (!existingReport || existingReport.id === report.id) {
            break;
          }
          
          finalSlug = `${newSlug}-${counter}`;
          counter++;
        }

        // Update the report with new slug
        await prisma.report.update({
          where: { id: report.id },
          data: { slug: finalSlug }
        });

        results.push({
          id: report.id,
          title: report.title,
          oldSlug: report.slug,
          newSlug: finalSlug,
          success: true
        });

        console.log(`Fixed slug for "${report.title}": ${report.slug} -> ${finalSlug}`);

      } catch (error) {
        results.push({
          id: report.id,
          title: report.title,
          oldSlug: report.slug,
          error: error instanceof Error ? error.message : 'Unknown error',
          success: false
        });
      }
    }

    return NextResponse.json({
      message: `Processed ${reports.length} reports`,
      results: results,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    });

  } catch (error) {
    console.error('Fix slugs error:', error);
    return NextResponse.json(
      { error: 'Failed to fix slugs', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}


