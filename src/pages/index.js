import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        <button class="btn-main">Teste Vercel</button>
        <button class="btn-main">Teste Vercel 2</button>
      </div>
    </main>
  )
}
