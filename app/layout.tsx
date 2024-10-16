import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Delivery',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
