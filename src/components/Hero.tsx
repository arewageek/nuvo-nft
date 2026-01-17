'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import NFTCards from './NFTCards'

const Hero: React.FC = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <section className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                
                <div className="relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display font-bold text-6xl md:text-9xl leading-[0.85] tracking-tighter uppercase mb-8 drop-shadow-2xl"
                    >
                        <span className="text-white">Digital</span> <br />
                        <span className="text-transparent text-stroke-white hover:text-accent transition-colors duration-500 hover:drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">Artifacts</span>
                    </motion.h1>

                    <div className="md:pl-2 flex flex-col md:flex-row gap-8 md:items-end">
                        <p className="font-body text-dim max-w-sm text-sm md:text-base text-justify">
                            We are archiving the future. A collection of 3,333 unique data-fragments living on the blockchain. 
                            <span className="text-accent"> Curated for the vanguards.</span>
                        </p>
                        
                        <button className="group flex items-center gap-4 font-display font-bold text-lg uppercase text-white hover:text-accent transition-colors">
                            Start Collecting
                            <div className="w-12 h-12 border border-white/20 bg-white/5 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 group-hover:rotate-45 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <ArrowDownRight />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end relative">
                    {/* Decorative elements behind cards */}
                    <motion.div style={{ y }} className="absolute inset-0 bg-accent/5 blur-3xl -z-10 rounded-full" />
                    <NFTCards />
                </div>
            </div>

            <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex justify-between items-end font-body text-xs font-bold tracking-widest uppercase text-dim">
                <div>
                    SCROLL TO EXPLORE
                </div>
                <div className="text-right">
                    EST. 2024 <br />
                    ETH MAINNET
                </div>
            </div>
        </section>
    )
}

export default Hero