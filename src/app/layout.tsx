import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getServerSession } from "next-auth";

import SessionProvider from "../components/SessionProvider";
import NavMenu from "../components/NavMenu";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I CHAT',
  description: 'GPT-4 Streaming Chat Application',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>        
        <SessionProvider session={session}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
