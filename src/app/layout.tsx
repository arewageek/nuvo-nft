import type { Metadata } from 'next'
import { Syne, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'NUVO | Digital Renaissance',
  description: 'A curated collection of digital artifacts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-void text-platinum antialiased font-body overflow-x-hidden selection:bg-accent selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
