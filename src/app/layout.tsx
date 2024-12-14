import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { PostProvider } from '@/context/post-context'
import { appName } from '@/lib/data/metadata'
import './globals.css'

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: `${appName}`,
  description:
    'Explore small yet impactful coding tips, tricks, and insights on Syntaxia, a fun and creative blog for web developers. From JavaScript ecosystems to full-stack development, find your coding inspiration here!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${instrumentSans.variable}`}>
      <body className='font-[family-name:var(--font-instrument-sans)] antialiased'>
        <PostProvider>{children}</PostProvider>
      </body>
    </html>
  )
}
