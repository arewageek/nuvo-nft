'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const items = [
    { id: 1, title: 'VOID_WALKER', price: '2.5 ETH', image: '/nft-art.png', col: 'col-span-1 md:col-span-2', aspect: 'aspect-video' },
    { id: 2, title: 'CYBER_FLORA', price: '1.8 ETH', image: '/nft-art.png', col: 'col-span-1', aspect: 'aspect-square' },
    { id: 3, title: 'NEON_GHOST', price: '3.2 ETH', image: '/nft-art.png', col: 'col-span-1', aspect: 'aspect-square' },
    { id: 4, title: 'DATA_SHARD', price: '0.9 ETH', image: '/nft-art.png', col: 'col-span-1 md:col-span-2', aspect: 'aspect-video' },
]

const Trending: React.FC = () => {
    return (
        <section className="py-32 px-6 md:px-12">
            <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
                <h2 className="font-display font-bold text-5xl md:text-8xl uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    Premium <br /> Index
                </h2>
                <span className="font-body text-accent text-sm tracking-widest mb-2 border border-accent/30 px-4 py-1 rounded-full bg-accent/10">LIVE FEED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div key={item.id} className={`group relative rounded-3xl overflow-hidden ${item.col} ${item.aspect} border border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] bg-surface`}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="font-display font-bold text-2xl text-white mb-1 drop-shadow-md">{item.title}</h3>
                                    <p className="font-body text-accent font-bold bg-black/50 px-2 py-1 rounded inline-block backdrop-blur">{item.price}</p>
                                </div>
                                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <ArrowUpRight />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trending
