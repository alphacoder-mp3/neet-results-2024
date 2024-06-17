'use server';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
};

export const Pagination = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  const getMobilePages = () => {
    let startPage = currentPage;
    let endPage = currentPage + 1;

    if (currentPage <= 1) {
      startPage = 1;
      endPage = 1;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const mobilePages = getMobilePages();

  return (
    <div className="flex items-center justify-center space-x-6 mt-8">
      <Link
        className={cn(
          'rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          currentPage === 1
            ? 'pointer-events-none bg-gray-100 dark:bg-gray-800'
            : ''
        )}
        href={`?page=${currentPage - 1}`}
      >
        Previous
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        {pages.map((p, i) => (
          <Link
            key={p}
            className={cn(
              'hidden relative sm:inline-flex items-center border border-gray-300 dark:border-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
              p === currentPage
                ? 'pointer-events-none bg-gray-200 dark:bg-gray-700'
                : '',
              i === 0 ? 'rounded-l-md' : '',
              i === pages.length - 1 ? 'rounded-r-md' : ''
            )}
            href={`?page=${p}`}
          >
            {p}
          </Link>
        ))}
        {mobilePages.map((p, i) => (
          <Link
            key={p}
            className={cn(
              'sm:hidden relative inline-flex items-center border border-gray-300 dark:border-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
              p === currentPage
                ? 'pointer-events-none bg-gray-200 dark:bg-gray-700'
                : '',
              i === 0 ? 'rounded-l-md' : '',
              i === pages.length - 1 ? 'rounded-r-md' : ''
            )}
            href={`?page=${p}`}
          >
            {p}
          </Link>
        ))}
      </nav>

      <Link
        className={cn(
          'rounded-md border border-gray-300 dark:border-gray-800 px-3 py-2 text-sm font-medium hover:bg-gray-50 hover:dark:bg-slate-800',
          !hasNextPage ? 'pointer-events-none bg-gray-100 dark:bg-gray-800' : ''
        )}
        href={`?page=${currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  );
};
