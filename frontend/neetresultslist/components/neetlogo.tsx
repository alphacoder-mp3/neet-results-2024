'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export const Neetlogo = () => {
  const router = useRouter();
  return (
    <label
      className="font-semibold text-2 text-white dark:text-black p-2 mb-10 text-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
      onClick={() => router.push('/')}
    >
      NEET CANDIDATE RESULTS
    </label>
  );
};
