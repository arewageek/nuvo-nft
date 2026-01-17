'use client'
import React from 'react'
import Image from 'next/image'
import { Filter, ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components'

const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `ARTIFACT_0${i + 1}`,
    price: `${(Math.random() * 5 + 0.5).toFixed(2)} ETH`,
    image: '/nft-art.png'
}))

export default function CollectionPage() {
    return (
        <main className="pt-32 min-h-screen bg-transparent">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-6 uppercase">
                    The Archive
                </h1>
                
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-6">
                    <p className="font-body text-dim max-w-xl">
                        Explore the complete Genesis collection. 3,333 unique items generated on the Ethereum blockchain.
                        Each artifact grants access to the Nuvo ecosystem.
                    </p>
                    
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white/5 border border-white/10 hover:border-accent text-white rounded-full flex items-center gap-2 transition-colors font-body text-sm uppercase tracking-widest">
                            <Filter className="w-4 h-4" /> Filter
                        </button>
                        <select className="bg-black border border-white/10 text-white rounded-full px-6 py-2 outline-none focus:border-accent font-body text-sm uppercase tracking-widest appearance-none cursor-pointer hover:bg-white/5">
                            <option>Recent</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
                {items.map((item) => (
                    <div key={item.id} className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <div className="aspect-square relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur rounded-full px-3 py-1 border border-white/10 text-xs font-bold text-white">
                                #0{item.id + 1}
                            </div>
                        </div>
                        
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors">{item.title}</h3>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-dim">Last Sale</span>
                                <span className="text-white font-bold">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Footer />
        </main>
    )
}
