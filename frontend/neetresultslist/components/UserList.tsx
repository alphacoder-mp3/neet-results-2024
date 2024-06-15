import { userDataType } from '@/types/UserDataTypes';
import { getTotalData } from '@/actions/getUsersData';

export default async function UserList() {
  const res = await getTotalData();
  const data = await res.json();
  const usersData = await data?.total;
  return (
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
            {usersData?.map((item: userDataType) => {
              const string = item.marks;
              const match = string.match(/\d+/);
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
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
