'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export const Redirection = ({
  page,
  totalPages,
}: {
  page: string;
  totalPages: number;
}) => {
  const router = useRouter();

  useEffect(() => {
    const pageNumber = Number(page);
    if (
      !page ||
      isNaN(pageNumber) ||
      pageNumber < 1 ||
      pageNumber > totalPages
    ) {
      router.push(`?page=1`);
    }
  }, [page, totalPages, router]);

  const pageNumber = Number(page);
  if (!page || isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    return (
      <h1> There&apos;s no data for the given page range. Redirecting...</h1>
    );
  }

  return null;
};
