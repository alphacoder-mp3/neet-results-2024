import UserList from '@/components/UserList';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <label className="text-bold mb-10"> NEET CANDIDATE DATA </label>
      <UserList />
    </main>
  );
}
