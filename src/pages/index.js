import { Inter } from 'next/font/google';
import Button from '@/components/Button/index';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Button/>
    </>
  )
}
