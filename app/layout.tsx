import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CDPProvider } from '@/components/cdp-provider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CDP Onramp Guest Checkout',
  description: 'Buy crypto instantly with debit cards or Apple Pay. No Coinbase account required. Secure guest checkout with $5-$500 limits.',
  keywords: ['crypto', 'onramp', 'guest checkout', 'debit card', 'Apple Pay', 'USDC', 'Ethereum', 'Base', 'Coinbase'],
  authors: [{ name: 'CDP Onramp' }],
  creator: 'CDP Onramp',
  publisher: 'CDP Onramp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onramp-demo-app.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CDP Onramp Guest Checkout',
    description: 'Buy crypto instantly with debit cards or Apple Pay. No Coinbase account required.',
    url: 'https://onramp-demo-app.vercel.app',
    siteName: 'CDP Onramp Guest Checkout',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'CDP Onramp Guest Checkout',
      },
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CDP Onramp Guest Checkout',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDP Onramp Guest Checkout',
    description: 'Buy crypto instantly with debit cards or Apple Pay. No Coinbase account required.',
    images: ['/og.png'],
    creator: '@coinbase',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#222222]">
      <body className={`${inter.className} bg-[#222222] min-h-screen`}>
        <CDPProvider>
          {children}
        </CDPProvider>
        <Analytics />
      </body>
    </html>
  )
}