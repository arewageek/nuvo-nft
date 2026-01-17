'use client'
import React from 'react'
import CountUp from 'react-countup'

interface CountProps {
    number: number;
    suffix: string;
    label: string;
}

const Count: React.FC<CountProps> = ({ number, suffix, label }) => {
    return (
        <div className='flex flex-col items-start'>
            <div className='text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                <CountUp
                    start={0}
                    end={number}
                    duration={2.5}
                    suffix={suffix}
                    enableScrollSpy
                />
            </div>
            <div className='text-sm text-gray-400 font-medium tracking-wider uppercase mt-1'>
                {label}
            </div>
        </div>
    )
}

export default Count