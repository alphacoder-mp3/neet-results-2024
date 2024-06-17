import { userDataType } from '@/types/UserDataTypes';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function UserList({ usersData }: { usersData: userDataType[] }) {
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
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[500px]">
                    {item.candidateName}
                  </TableCell>
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[150px]">
                    {item.allIndiaRank}
                  </TableCell>
                  <TableCell className="border border-gray-800 px-4 py-2 h-10 w-[100px]">
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
