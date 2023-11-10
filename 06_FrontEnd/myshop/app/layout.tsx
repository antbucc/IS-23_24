import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './providers/ThemeProvider'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'My Shop app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
