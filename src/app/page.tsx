import Chat from '@/components/chat'
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
    {session?.user?.name ? (
      <div className="bg-slate-700 p-3 w-[1200px] h-[5ki00px] rounded-md text-white">
        <h2 className="text-2xl">I CHAT GPT-4</h2>
        <Chat />
      </div>
      ) : (
        <div>Not logged in</div>
      )}
    
    </>
  )
}
