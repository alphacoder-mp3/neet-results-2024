import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://neet-orchestrator.100xdevs.com/total', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
