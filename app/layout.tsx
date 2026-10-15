import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const nunito = localFont({
  src: [
    { path: './fonts/Nunito-Variable.ttf', weight: '200 900', style: 'normal' },
    { path: './fonts/Nunito-Italic-Variable.ttf', weight: '200 900', style: 'italic' },
  ],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dansran — Жаргалтайн дэлгэр',
  description: 'Mongolian cultural ceramic accessories for considered spaces, tables and gifts.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className={nunito.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CustomCursor />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
