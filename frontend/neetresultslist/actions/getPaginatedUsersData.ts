'use server';

import { NextResponse } from 'next/server';

export async function getTotalData(page = '1', limit = '10') {
  try {
    // Fetch all data from the API
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

    // Pagination logic
    const pageInt = parseInt(page, 10);
    const limitInt = parseInt(limit, 10);
    const startIndex = (pageInt - 1) * limitInt;
    const endIndex = startIndex + limitInt;

    const paginatedData = data.total.slice(startIndex, endIndex);

    return NextResponse.json({
      len: data.len,
      total: paginatedData,
      page: pageInt,
      limit: limitInt,
      hasNextPage: page + limit < data.total.length,
      totalPages: Math.ceil(data.total.length / Number(page)),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
