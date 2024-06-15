'use server';

import { NextResponse } from 'next/server';

export async function getTotalData() {
  try {
    const res = await fetch('https://neet-orchestrator.100xdevs.com/total', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
