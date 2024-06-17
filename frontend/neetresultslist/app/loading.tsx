import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CloseIcon } from '@/lib/common';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <label className="font-semibold text-2 text-white dark:text-black p-2 mb-10 text-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        NEET CANDIDATE RESULTS
      </label>
      <div className="max-w-md mx-auto mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search by name..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <CloseIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 cursor-pointer" />
        </div>
      </div>
      <section>
        <div className="overflow-x-auto">
          <Table className="table-auto border-collapse border border-gray-800">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-gray-800 px-4 py-2">
                  Name
                </TableHead>
                <TableHead className="border border-gray-800 px-4 py-2">
                  Rank
                </TableHead>
                <TableHead className="border border-gray-800 px-4 py-2">
                  Marks
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 20 })?.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[500px]">
                      <Skeleton className="h-5 w-[100px] sm:w-[120px] md:w-[400px]" />
                    </TableCell>
                    <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[150px]">
                      <Skeleton className="h-5 w-[70px] sm:w-[80px] md:w-[100px]" />
                    </TableCell>
                    <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[100px]">
                      <Skeleton className="h-5 w-[30px] sm:w-[40px] md:w-[60px]" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
