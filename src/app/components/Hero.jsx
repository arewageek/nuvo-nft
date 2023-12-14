import React from 'react'
import NFTCards from './NFTCards'

const Hero = () => {
    return (
        <div className='w-full min-h-screen hero-section p-5 py-[100pt] flex space-y-10 md:space-y-0 items-center justify-around flex-wrap flex-col md:flex-row'>
            <div className='w-full md:w-2/5'>
                <div className='text-4xl md:text-6xl mini-neon-text-blue text-center md:text-left'>
                    <h2 className='font-bold my-3 md:text-6xl'>
                        Nate Hallinan's 
                    </h2>

                    <h2 className='font-bold my-3 text-7xl md:text-[80pt] text-black neon-text-blue'>
                        Genesis
                    </h2>

                    <h2 className='font-bold my-3 text-7xl md:text-[80pt] text-black neon-text-blue'>
                        NFT
                    </h2>

                    <h2 className='font-bold my-3 md:text-6xl'>
                        Collection
                    </h2>
                </div>

                <div className='w-full mt-10 flex space-x-7 items-center text-center'>
                    <div className='font-bold hero-counter p-2'>
                        <div className='text-xl'>
                            100k
                        </div>
                        <div className='text-blue-400 uppercase counter-text'>
                            Owners
                        </div>
                    </div>
                    <div className='font-bold hero-counter p-2'>
                        <div className='text-xl'>
                            100k
                        </div>
                        <div className='text-blue-400 uppercase counter-text'>
                            Owners
                        </div>
                    </div>
                    <div className='font-bold hero-counter p-2'>
                        <div className='text-xl'>
                            100k
                        </div>
                        <div className='text-blue-400 uppercase counter-text'>
                            Owners
                        </div>
                    </div>
                </div>

                
            </div>

            <div className='w-2/3 md:w-2/5 h-full md:h-auto'>
                <div className='art w-1/3'>
                    <NFTCards />
                </div>
            </div>
        </div>
    )
}

export default Hero