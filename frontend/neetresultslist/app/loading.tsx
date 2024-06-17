import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <label className="font-semibold text-2 text-white dark:text-black p-2 mb-10 text-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        NEET CANDIDATE RESULTS
      </label>
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
              {Array.from({ length: 15 })?.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="border border-gray-800 px-4 py-2">
                      <Skeleton className="w-[250px] h-10" />
                    </TableCell>
                    <TableCell className="border border-gray-800 px-4 py-2">
                      <Skeleton className="w-[250px] h-10" />
                    </TableCell>
                    <TableCell className="border border-gray-800 px-4 py-2">
                      <Skeleton className="w-[250px] h-10" />
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
