'use client'
import React from 'react'
import Image from 'next/image'
import { Twitter, Instagram, Globe } from 'lucide-react'
import { Footer } from '@/components'

const artists = [
    { name: 'ALEXI_V', role: 'Digital Architect', bio: 'Creating void-structures since 2018. Featured in SuperRare.', image: '/nft-art.png' },
    { name: 'KAIRO', role: 'Sound Designer', bio: 'Sonic landscapes that traverse the digital ether.', image: '/nft-art.png' },
    { name: 'ECHO_Z', role: 'Concept Artist', bio: 'Visualizing the unseen layers of the metaverse.', image: '/nft-art.png' },
]

export default function ArtistsPage() {
    return (
        <main className="pt-32 min-h-screen bg-transparent">
            <div className="container mx-auto px-6 md:px-12 mb-20">
                <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-6 uppercase">
                    The <span className="text-stroke-accent text-transparent">Vanguards</span>
                </h1>
                <p className="font-body text-dim max-w-xl text-lg">
                    Meet the visionaries behind the Nuvo Genesis collection.
                </p>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
                {artists.map((artist, i) => (
                    <div key={i} className="group relative h-[500px] border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-500">
                        <Image
                            src={artist.image}
                            alt={artist.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block px-3 py-1 mb-4 border border-accent/20 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
                                {artist.role}
                            </span>
                            
                            <h2 className="font-display font-bold text-4xl text-white mb-2 uppercase">{artist.name}</h2>
                            <p className="font-body text-dim mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {artist.bio}
                            </p>
                            
                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <button className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white text-dim transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white text-dim transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </button>
                                <button className="p-2 bg-white/5 rounded-full hover:bg-white/20 hover:text-white text-dim transition-colors">
                                    <Globe className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Footer />
        </main>
    )
}
