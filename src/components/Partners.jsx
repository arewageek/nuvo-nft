import React from 'react'

const sponsors = [
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/2048px-Binance_Logo.svg.png',
        title: 'Binance'
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/2048px-Binance_Logo.svg.png',
        title: 'Coinbase'
    }
]

export const Partners = () => {
    return (
        <div className='w-full px-7 py-7 bg-gray-700/30 flex flex-wrap space-x-3 md:space-x-5 justify-center shadow-lg'>
            {
                sponsors.map(brand => (
                    <div key={brand.title} className='w-16 md:w-28 h-16 md:h-28 bg-gray-700/30 p-4 md:mx-5 shadow-inner grayscale hover:grayscale-0 transition cursor-pointer rounded-3xl flex justify-center items-center'>
                        <img src={brand.logo} alt="Binance" />
                    </div>
                ))
            }
        </div>
    )
}