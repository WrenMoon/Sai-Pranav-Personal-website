
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Pranav Gandhi - Student Innovator & Robotics Champion',
  description: 'Portfolio of Sai Pranav Gandhi, National Bebras Champion, robotics competitor, and founder of empowerED initiative. Turning curiosity into meaningful action through technology.',
  keywords: ['Sai Pranav Gandhi', 'robotics', 'student innovator', 'computational thinking', 'Bebras champion', 'empowerED', 'FIRST Robotics', 'technology education'],
  authors: [{ name: 'Sai Pranav Gandhi' }],
  creator: 'Sai Pranav Gandhi',
  openGraph: {
    title: 'Sai Pranav Gandhi - Student Innovator & Robotics Champion',
    description: 'National Bebras Champion, robotics competitor, and founder of empowerED initiative',
    url: 'https://saipranav.in',
    siteName: 'Sai Pranav Gandhi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Pranav Gandhi - Student Innovator',
    description: 'National Bebras Champion and robotics innovator',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
