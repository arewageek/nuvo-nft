'use client'
import CountUp from 'react-countup'

const Count = ({ number, suffix, label }) => {
    return (
        <div className='font-bold hero-counter p-2'>
            <div className='text-xl'>
                <CountUp
                    start={0}
                    end={number}
                    delay={1}
                    suffix={suffix}
                >
                    { 
                        ({ countUpRef }) => (
                            <span ref={ countUpRef } />
                        )
                    }
                </CountUp>
            </div>
            <div className='text-blue-400 uppercase counter-text'>
                {label}
            </div>
        </div>
    )
}

export default Count