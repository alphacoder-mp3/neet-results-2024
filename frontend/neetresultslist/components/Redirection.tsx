'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export const Redirection = ({
  page,
  totalPages,
  search,
}: {
  page: string;
  totalPages: number;
  search: string;
}) => {
  const router = useRouter();
  const pageNumber = Number(page);

  useEffect(() => {
    if (
      !page ||
      isNaN(pageNumber) ||
      pageNumber < 1 ||
      pageNumber > totalPages
    ) {
      router.push(`/`);
    }
  }, [pageNumber, totalPages, router, search]);

  if (!page || isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    return (
      <h1> There&apos;s no data for the given page range. Redirecting...</h1>
    );
  }

  return null;
};
