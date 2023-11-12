import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'
import Navbar from './components/Navbar'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prakash Blogs',
  description: 'This is the page where you can find the blogs written by Prakash Banjade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader height={3} />
          <Navbar />
          <main className='mx-auto max-w-maxW px-3 py-2'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
