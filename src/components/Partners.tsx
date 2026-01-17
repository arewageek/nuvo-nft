'use client'
import React from 'react'
import { motion } from 'framer-motion'

const partners = ['BINANCE', 'COINBASE', 'ETHEREUM', 'POLYGON', 'METAMASK', 'OPENSEA', 'FOUNDATION', 'SUPERRARE']

export const Partners: React.FC = () => {
    return (
        <section className="py-12 border-y border-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-16 font-display font-bold text-4xl md:text-6xl text-dim uppercase opacity-30 hover:opacity-100 hover:text-accent transition-all cursor-default"
                >
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <span key={i}>{partner}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}