import UserList from '@/components/UserList';
import { Pagination } from '@/components/pagination';
import { ModeToggle } from '@/components/ui/modetoggle';
import { getTotalData } from '@/actions/getPaginatedUsersData';
import { Redirection } from '@/components/Redirection';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams?.page || '1';
  const limit = '20';

  const res = await getTotalData(page as string, limit);
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <label className="font-semibold text-2 text-white dark:text-black p-2 mb-10 text-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        NEET CANDIDATE RESULTS
      </label>
      <Redirection page={page as string} totalPages={data.totalPages} />
      <UserList usersData={data?.total} />
      <Pagination {...searchParams} {...data} />
    </main>
  );
}
