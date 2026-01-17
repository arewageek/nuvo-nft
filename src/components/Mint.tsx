'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus, Zap, Check } from 'lucide-react'

const Mint: React.FC = () => {
    const [count, setCount] = useState(1)
    const price = 0.08
    
    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[100px] -z-10" />

            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Info Side */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        <span className="font-body text-accent font-bold tracking-widest text-sm uppercase">Public Sale Live</span>
                    </div>

                    <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 uppercase text-shadow-glow">
                        Secure Your <br />
                        <span className="text-stroke-white text-transparent">Legacy</span>
                    </h2>

                    <div className="space-y-6 mb-12 font-body text-dim">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span>Supply</span>
                            <span className="text-white font-bold">3,333</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span>Price</span>
                            <span className="text-white font-bold">{price} ETH</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                            <span>Max per Wallet</span>
                            <span className="text-white font-bold">5</span>
                        </div>
                    </div>

                    <div className="bg-surface/50 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
                        <div className="flex justify-between text-xs uppercase tracking-widest text-dim mb-2">
                            <span>Total Minted</span>
                            <span>84%</span>
                        </div>
                        <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '84%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-accent to-purple-500" 
                            />
                        </div>
                        <div className="text-right mt-2 font-mono text-xs text-accent">2,800 / 3,333</div>
                    </div>
                </div>

                {/* Interaction Side */}
                <div className="relative">
                    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10">
                        <h3 className="font-display font-bold text-2xl uppercase mb-8 text-center text-white">Mint Artifact</h3>

                        <div className="flex items-center justify-between bg-black/40 rounded-xl p-2 mb-8 border border-white/5">
                            <button 
                                onClick={() => setCount(Math.max(1, count - 1))}
                                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors text-white"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <span className="font-display font-bold text-3xl text-white w-12 text-center">{count}</span>
                            <button 
                                onClick={() => setCount(Math.min(5, count + 1))}
                                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors text-white"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm text-dim">
                                <span>Total Price</span>
                                <span className="text-white font-bold">{(price * count).toFixed(2)} ETH</span>
                            </div>
                            <div className="flex justify-between text-sm text-dim">
                                <span>Gas (Est.)</span>
                                <span className="text-white font-bold">~0.004 ETH</span>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-accent hover:bg-accent/90 text-black font-display font-bold text-xl uppercase rounded-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-3">
                            <Zap className="fill-black" />
                            Mint Now
                        </button>
                        
                        <p className="text-center text-xs text-dim mt-6 uppercase tracking-widest">
                            Official Smart Contract
                        </p>
                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/20 rounded-full animate-spin-slow -z-0 border-dashed" />
                </div>
            </div>
        </section>
    )
}

export default Mint
