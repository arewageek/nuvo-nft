'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Gem } from 'lucide-react'

const cards = [
    { id: 1, title: 'ARTIFACT_01', price: '2.5', image: '/nft-art.png', rotate: -6, z: 10 },
    { id: 2, title: 'ARTIFACT_02', price: '4.2', image: '/nft-art.png', rotate: 6, z: 20 },
    { id: 3, title: 'ARTIFACT_00', price: '8.0', image: '/nft-art.png', rotate: 0, z: 30 },
]

const NFTCards: React.FC = () => {
    return (
        <div className="relative w-[320px] h-[450px]">
            {cards.map((card, i) => (
                <motion.div
                    key={card.id}
                    initial={{ rotate: 0, y: 100, opacity: 0 }}
                    animate={{ rotate: card.rotate, y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    className="absolute inset-0 glass-panel lg:hover:scale-105 transition-transform duration-500"
                    style={{ zIndex: card.z }}
                >
                    <div className="relative w-full h-[75%] bg-black overflow-hidden group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-500 border-b border-white/10">
                        <Image 
                            src={card.image} 
                            alt={card.title} 
                            fill 
                            className="object-cover transition-transform duration-700 hover:scale-110" 
                        />
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white font-bold font-display tracking-widest text-xs px-3 py-1 border border-white/20">
                            GEN_1
                        </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-end font-body">
                        <div>
                            <h3 className="text-lg font-bold uppercase tracking-wide">{card.title}</h3>
                            <p className="text-xs text-dim">Nuvo Genesis</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Gem className="w-4 h-4 text-accent" />
                            <span className="font-bold">{card.price} ETH</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default NFTCards