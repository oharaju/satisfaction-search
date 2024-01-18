import '@/styles/global.css';
import React from "react";
import { Poppins} from '@next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins'
})

export default function App({ Component, pageProps }) {
  return(
    <main className={`${poppins.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
