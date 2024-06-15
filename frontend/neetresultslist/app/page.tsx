import UserList from '@/components/UserList';
import { ModeToggle } from '@/components/ui/modetoggle';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <label className="font-semibold text-2 p-2 mb-10 text-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        NEET CANDIDATE RESULTS
      </label>
      <UserList />
    </main>
  );
}
