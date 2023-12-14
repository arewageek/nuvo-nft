import Image from 'next/image'
import Hero from '@/components/Hero'
import { Partners } from '@/components'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Partners />
    </main>
  )
}
