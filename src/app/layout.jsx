import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'SaaS Platform - Enterprise Solutions',
  description: 'Modern SaaS platform with admin dashboard',
  keywords: 'saas, platform, enterprise, dashboard, analytics',
  authors: [{ name: 'SaaS Platform' }],
  openGraph: {
    title: 'SaaS Platform - Enterprise Solutions',
    description: 'Modern SaaS platform with admin dashboard',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${inter.variable} font-sans antialiased theme-transition`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}