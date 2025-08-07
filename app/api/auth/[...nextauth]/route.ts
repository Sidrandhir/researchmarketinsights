import { NextResponse } from 'next/server';

// This is a dummy handler to allow the build to pass for the frontend preview.
export async function GET() {
  return NextResponse.json({ message: "Auth endpoint is disabled for this preview." });
}

export async function POST() {
  return NextResponse.json({ message: "Auth endpoint is disabled for this preview." });
}