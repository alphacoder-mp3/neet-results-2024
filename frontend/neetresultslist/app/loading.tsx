import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <section>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="border border-gray-800 px-4 py-2">Name</th>
                <th className="border border-gray-800 px-4 py-2">Rank</th>
                <th className="border border-gray-800 px-4 py-2">Marks</th>
              </tr>
            </thead>
            <tbody>
              {/* {usersData?.map((item: userDataType) => {
              return (
                <tr key={item.id}>
                  <td className="border border-gray-800 px-4 py-2">
                    {item.candidateName}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {item.allIndiaRank}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {match ? parseInt(match[0]) : ''}
                  </td>
                </tr>
              );
            })} */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
