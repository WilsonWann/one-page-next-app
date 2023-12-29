import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Promotion, Navbar, FixedButtons, Footer } from '@/lib/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '陌聲一頁式廣告',
  description: 'Generated by create next app'
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} pt-12 pb-0`}>
        <Header />
        <Promotion
          title={
            '🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!'
          }
        />
        <Navbar />
        {props.children}
        <FixedButtons />
        <Footer />
      </body>
    </html>
  )
}
