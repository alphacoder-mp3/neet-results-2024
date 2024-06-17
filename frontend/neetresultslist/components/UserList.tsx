import { userDataType } from '@/types/UserDataTypes';
import { getTotalData } from '@/actions/getUsersData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function UserList(): Promise<JSX.Element> {
  const res = await getTotalData();
  const data = await res.json();
  const usersData = await data?.total;
  return (
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
            {usersData?.map((item: userDataType) => {
              const string = item.marks;
              const match = string.match(/\d+/);
              return (
                <TableRow key={item.id}>
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 min-w-3.5">
                    {item.candidateName}
                  </TableCell>
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 min-w-1.5">
                    {item.allIndiaRank}
                  </TableCell>
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 min-w-0.5">
                    {match ? parseInt(match[0]) : ''}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
