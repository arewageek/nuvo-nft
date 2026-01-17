'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components'

const posts = [
    { category: 'Update', date: 'MAR 12, 2024', title: 'The Genesis Mint: What to Expect' },
    { category: 'Technology', date: 'FEB 28, 2024', title: 'Exploring the ERC-721A Standard Optimization' },
    { category: 'Community', date: 'FEB 15, 2024', title: 'Welcoming our First Artist-in-Residence' },
    { category: 'Event', date: 'JAN 30, 2024', title: 'NYC Popup Gallery: Post-Mortem' },
]

export default function JournalPage() {
    return (
        <main className="pt-32 min-h-screen bg-transparent">
            <div className="container mx-auto px-6 md:px-12 pb-24">
                <div className="mb-20">
                    <h1 className="font-display font-bold text-6xl md:text-9xl text-white uppercase mb-8">
                        Journal
                    </h1>
                </div>

                <div className="border-t border-white/10">
                    {posts.map((post, i) => (
                        <div key={i} className="group border-b border-white/10 py-12 flex flex-col md:flex-row gap-8 items-baseline hover:bg-white/5 transition-colors px-4 -mx-4 cursor-pointer">
                            <div className="md:w-1/4 flex gap-4 font-mono text-sm tracking-widest uppercase">
                                <span className="text-accent">{post.category}</span>
                                <span className="text-dim">{post.date}</span>
                            </div>
                            
                            <div className="md:w-3/4 flex justify-between items-center">
                                <h2 className="font-display font-bold text-2xl md:text-4xl text-white group-hover:translate-x-4 transition-transform duration-300">
                                    {post.title}
                                </h2>
                                <ArrowRight className="text-dim group-hover:text-accent group-hover:-rotate-45 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    )
}
