'use client'
import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-6 md:px-12 bg-black/20 backdrop-blur-lg border-t border-white/5 font-body text-sm uppercase tracking-widest text-dim">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                <div>
                    <h4 className="text-white mb-6 font-bold">Platform</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-accent">Collection</Link></li>
                        <li><Link href="#" className="hover:text-accent">Artists</Link></li>
                        <li><Link href="#" className="hover:text-accent">About</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white mb-6 font-bold">Social</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-accent">Twitter</Link></li>
                        <li><Link href="#" className="hover:text-accent">Instagram</Link></li>
                        <li><Link href="#" className="hover:text-accent">Discord</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white mb-6 font-bold">Legal</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-accent">Terms</Link></li>
                        <li><Link href="#" className="hover:text-accent">Privacy</Link></li>
                    </ul>
                </div>
                <div className="md:text-right">
                    <h4 className="text-white mb-6 font-bold">Newsletter</h4>
                    <div className="border-b border-dim py-2 flex justify-between">
                        <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent outline-none w-full placeholder:text-dim" />
                        <button className="hover:text-accent">→</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <h1 className="font-display font-bold text-[10vw] leading-none text-surface select-none">
                    NUVO
                </h1>
                <p className="mb-4">© 2024</p>
            </div>
        </footer>
    )
}

export default Footer
