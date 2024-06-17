'use server';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
  search?: string;
};

export const Pagination = ({
  page = '1',
  totalPages,
  hasNextPage,
  search = '',
}: PaginationProps) => {
  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(5, totalPages); // Ensure not to exceed totalPages
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1); // Ensure not to go below page 1
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  const buildUrl = (pageNumber: number) => {
    const queryParams = new URLSearchParams();
    queryParams.set('page', pageNumber.toString());
    if (search) queryParams.set('search', search);
    return `?${queryParams.toString()}`;
  };

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-6 mt-8">
      <Link
        className={cn(
          'hidden sm:block rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          currentPage === 1
            ? 'pointer-events-none bg-gray-100 dark:bg-gray-800'
            : ''
        )}
        href={buildUrl(currentPage - 1)}
      >
        Previous
      </Link>

      <Link
        className={cn(
          'block sm:hidden rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-xs font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          currentPage === 1
            ? 'pointer-events-none bg-gray-100 dark:bg-gray-800'
            : ''
        )}
        href={buildUrl(currentPage - 1)}
      >
        &lt;
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        {pages.map((p, i) => (
          <Link
            key={p}
            className={cn(
              'relative inline-flex items-center border border-gray-300 dark:border-gray-800 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
              p === currentPage
                ? 'pointer-events-none bg-gray-200 dark:bg-gray-700'
                : '',
              i === 0 ? 'rounded-l-md' : '',
              i === pages.length - 1 ? 'rounded-r-md' : ''
            )}
            href={buildUrl(p)}
          >
            {p}
          </Link>
        ))}
      </nav>

      <Link
        className={cn(
          'block sm:hidden rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-xs font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          currentPage === 1
            ? 'pointer-events-none bg-gray-100 dark:bg-gray-800'
            : ''
        )}
        href={buildUrl(currentPage - 1)}
      >
        &gt;
      </Link>

      <Link
        className={cn(
          'hidden sm:block rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          !hasNextPage ? 'pointer-events-none bg-gray-100 dark:bg-gray-800' : ''
        )}
        href={buildUrl(currentPage + 1)}
      >
        Next
      </Link>
    </div>
  );
};
