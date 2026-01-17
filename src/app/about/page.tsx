'use client'
import React from 'react'
import { Footer } from '@/components'

const manifesto = [
    { title: 'The Vision', text: 'Nuvo is not just a collection; it is a declaration of digital sovereignty. We believe in the power of immutable art to shape future narratives.' },
    { title: 'The Craft', text: 'Every artifact is generated through a complex algorithm that balances chaos and order, resulting in 3,333 unique expressions of mathematical beauty.' },
    { title: 'The Community', text: 'We are gathering the dreamers, the builders, and the disruptors. Access to the Nuvo ecosystem grants you a seat at the table of the new web.' },
]

export default function AboutPage() {
    return (
        <main className="pt-32 min-h-screen bg-transparent">
            <div className="container mx-auto px-6 md:px-12 pb-24">
                <div className="border-b border-white/10 pb-12 mb-20">
                    <span className="font-mono text-accent text-sm tracking-widest block mb-4">/// MANIFESTO_2024</span>
                    <h1 className="font-display font-bold text-5xl md:text-8xl text-white uppercase leading-[0.9]">
                        Building the <br />
                        <span className="text-stroke-white text-transparent">Digital Sublime</span>
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto space-y-20">
                    {manifesto.map((item, i) => (
                        <div key={i} className="grid md:grid-cols-12 gap-8 group">
                            <div className="md:col-span-2 font-mono text-dim text-xl md:text-3xl opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all">
                                0{i + 1}
                            </div>
                            <div className="md:col-span-10 border-l border-white/10 pl-8 md:pl-16 py-2 group-hover:border-accent transition-colors duration-500">
                                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 uppercase">{item.title}</h3>
                                <p className="font-body text-dim text-lg md:text-xl leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    )
}
