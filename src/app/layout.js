import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Nuvo',
  description: 'Nuvo NFT Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
