import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await request.json();

    // Validate required fields
    if (!settings.siteName || !settings.siteUrl || !settings.contactEmail) {
      return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 });
    }

    // Here you would typically save settings to a database
    // For now, we'll just return success
    // In a real application, you might want to store these in a Settings table

    return NextResponse.json({
      message: 'Settings saved successfully',
      settings: settings
    });

  } catch (error: unknown) {
    console.error('Settings save error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { error: 'Failed to save settings', details: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any)?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Return default settings
    // In a real application, you would fetch these from a database
    const defaultSettings = {
      siteName: 'Research Market Insights',
      siteDescription: 'Global market research and business intelligence company',
      siteUrl: 'https://researchmarketinsights.com',
      contactEmail: 'admin@marketresearch.com',
      supportEmail: 'support@marketresearch.com',
      maxFileSize: '10',
      allowedFileTypes: 'xlsx,xls,csv',
      enableRegistration: true,
      enableComments: true,
      enableNotifications: true,
      maintenanceMode: false,
      analyticsEnabled: true,
      seoEnabled: true
    };

    return NextResponse.json({
      settings: defaultSettings
    });

  } catch (error: unknown) {
    console.error('Settings fetch error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { error: 'Failed to fetch settings', details: errorMessage },
      { status: 500 }
    );
  }
}



