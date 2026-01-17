import Hero from '@/components/Hero'
import { Partners, Trending, Footer, Mint } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-accent selection:text-black">
      <Hero />
      <Partners />
      <Mint />
      <Trending />
      <Footer />
    </main>
  )
}
