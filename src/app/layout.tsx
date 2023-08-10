import './globals.css'

// layouts
import { AuthLayout } from '@/layouts/AuthLayout';
import { GuestLayout } from '@/layouts/GuestLayout';

import { Barlow } from 'next/font/google'

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPrazos',
  description: '',
  icons: {
    icon: '/favicon.ico'
  }
}

const isAuth = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='antialiased'>
      <body className={barlow.className}>
        {isAuth ? <AuthLayout children={children} /> : <GuestLayout children={children} />}
      </body>
    </html>
  )
}
