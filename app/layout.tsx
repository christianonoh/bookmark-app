import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookmark app',
  description: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-32x32.png"
      />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
