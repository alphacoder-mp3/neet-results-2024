import UserList from '@/components/UserList';
import { Pagination } from '@/components/pagination';
import { getTotalData } from '@/actions/getPaginatedUsersData';
import { Redirection } from '@/components/Redirection';
import Searchbox from '@/components/ui/searchbox';
import { randomUUID } from 'crypto';
import { Neetlogo } from '@/components/neetlogo';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams?.page || '1';
  const limit = '20';
  const search = searchParams?.search || '';

  const res = await getTotalData(page as string, limit, search as string);
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Neetlogo />
      <Searchbox search={search as string} key={randomUUID()} />
      <Redirection
        page={page as string}
        totalPages={data.totalPages}
        search={search as string}
      />
      <UserList usersData={data?.total} />
      <Pagination {...searchParams} {...data} />
    </main>
  );
}
