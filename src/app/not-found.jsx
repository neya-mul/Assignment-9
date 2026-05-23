import Link from 'next/link'
import React from 'react'
import { PiDogBold } from 'react-icons/pi'

export default function NotFound() {
    return (
        <div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center px-8 bg-[#F8F4EE] text-center'>

            <h1 className='text-7xl font-extrabold text-[#6B4226] drop-shadow-sm'>
                <PiDogBold />

            </h1>

            <h2 className='text-4xl md:text-5xl font-bold mt-4 text-[#8B5E3C]'>
                Ooppsss...
            </h2>

            <p className='text-lg md:text-xl text-[#A47551] mt-4 max-w-md leading-relaxed'>
                The page you are looking for doesn’t exist or may have been moved.
            </p>

            <Link href='/'>
                <button className='mt-8 px-8 py-3 rounded-full bg-[#8B5E3C] hover:bg-[#6B4226] text-white font-semibold transition-all duration-300 shadow-md hover:scale-105'>
                    Back To Home
                </button>
            </Link>
        </div>
    )
}