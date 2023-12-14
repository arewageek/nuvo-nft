import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Nuvo',
  description: 'Nuvo NFT Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Rock+Salt&display=swap" rel="stylesheet" /> */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
