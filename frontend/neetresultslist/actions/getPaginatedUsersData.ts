'use server';

import { NextResponse } from 'next/server';
import { userDataType } from '@/types/UserDataTypes';

export async function getTotalData(page = '1', limit = '10', search = '') {
  try {
    // Fetch all data from the API
    const res = await fetch('https://neet-orchestrator.100xdevs.com/total', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
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

    let filteredData = data.total;
    if (search) {
      filteredData = filteredData.filter((user: userDataType) =>
        user.candidateName.toLowerCase().includes(search.toLowerCase())
      );
    }

    const paginatedData = filteredData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredData.length / limitInt);
    const hasNextPage = pageInt < totalPages;

    return NextResponse.json({
      len: data.len,
      total: paginatedData,
      page: pageInt,
      limit: limitInt,
      hasNextPage,
      totalPages,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
