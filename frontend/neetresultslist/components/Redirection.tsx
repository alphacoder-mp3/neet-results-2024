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
    if (Number(page) < 0 || Number(page) > totalPages) {
      router.push(`?page=1`);
    }
  }, [router]);

  if (Number(page) < 0 || Number(page) > totalPages) {
    return <h1> There's no data for the given page range. Redirecting...</h1>;
  }

  return null;
};
