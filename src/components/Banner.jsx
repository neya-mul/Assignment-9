import React from 'react'
import hero from '../../public/hero.png'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='bg-[#fcf0de]'>
            <div className="min-h-screen text-center lg:text-left py-10 lg:py-0 flex flex-col lg:flex-row gap-20 justify-around container mx-auto items-center "   >

                <div className="space-y-5 text-[#3E2C20] max-w-[600px]">
                    <h1 className="text-6xl font-bold ">Find Your Forever Companion</h1>
                    <p className="max-w-4xl">Thousands of lovable pets are waiting for a place to call home. Connect with local shelters and open your heart to a lifetime of unconditional love.</p>
                    <button className="btn bg-[#6B4226] border-none">Adopt Now</button>
                </div>
                <div className="relative w-[550px] h-[550px] rounded-full overflow-hidden border-8 border-white shadow-2xl ">

                    <div className="absolute inset-0 bg-[#FFD8A8] blur-3xl opacity-40 rounded-full"></div>

                    <Image
                        src={hero}
                        alt="Cute pets"
                        fill
                        className="object-cover "
                        priority
                    />
                </div>
            </div>
        </div>


    )
}
