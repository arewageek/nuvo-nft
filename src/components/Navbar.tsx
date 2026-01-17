'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-platinum drop-shadow-md">
            <Link href="/" className="font-display font-bold text-2xl tracking-tighter uppercase z-50">
                NUVO<span className="text-accent">.</span>
            </Link>

            <div className="hidden md:flex gap-12 font-body text-sm tracking-widest uppercase">
                {[
                    { label: 'Collection', href: '/collection' },
                    { label: 'Artists', href: '/artists' },
                    { label: 'About', href: '/about' },
                    { label: 'Journal', href: '/journal' }
                ].map(item => (
                    <Link key={item.label} href={item.href} className="hover:text-accent transition-colors">
                        {item.label}
                    </Link>
                ))}
            </div>

            <button 
                className="md:hidden z-50"
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ clipPath: "circle(0% at 100% 0)" }}
                        animate={{ clipPath: "circle(150% at 100% 0)" }}
                        exit={{ clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="fixed inset-0 bg-accent text-void flex flex-col items-center justify-center gap-8 font-display text-4xl font-bold uppercase z-40"
                    >
                        {[
                            { label: 'Collection', href: '/collection' },
                            { label: 'Artists', href: '/artists' },
                            { label: 'About', href: '/about' },
                            { label: 'Journal', href: '/journal' }
                        ].map(item => (
                            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar