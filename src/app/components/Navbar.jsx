import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full py-4 bg-blue-200/20 px-5 flex items-center md:justify-around justify-between fixed top-0 left-0 backdrop-blur-sm'>
            <div className='font-bold text-2xl cursor-pointer text-blue-400 font-rocksalt'>
                Nuvo
            </div>

            <div className='hidden md:flex justify-end items-center space-x-0 md:space-x-4 text-sm font-bold'>
                <Link href='/' className='hover:text-blue-400 transition navlink'>
                    Home
                </Link>

                <Link href="/about" className='hover:text-blue-400 transition navlink'>
                    About
                </Link>
            </div>
            
            <div>
                <button className='rounded-full px-4 py-2 text-xs bg-blue-400 text-black border-2 border-blue-400 transition hover:text-blue-400 hover:bg-transparent font-bold'>
                    <div>
                        Connect Wallet
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar