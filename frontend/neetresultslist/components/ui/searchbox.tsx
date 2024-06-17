'use client';
import { useState, ChangeEvent, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { CloseIcon } from '@/lib/common';

export default function Searchbox({ search }: { search?: string }) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [searchTerm, setSearchTerm] = useState<string>(search || '');

  const debounceSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search);
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      router.push(`?${params.toString()}`);
    },
    [router]
  );

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const handler = setTimeout(() => {
      debounceSearch(searchTerm);
    }, 500); // Debounce time of 500ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, debounceSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mb-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <CloseIcon
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer"
          onClick={() => setSearchTerm('')}
        />
      </div>
    </div>
  );
}
