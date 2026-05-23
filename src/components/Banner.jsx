import React from 'react'
import hero from '../../public/hero.png'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='bg-[#fcf0de] px-4 md:px-8'> {/* Added horizontal padding to prevent text touching screen edges on mobile */}
            <div className="min-h-screen text-center lg:text-left py-10 lg:py-0 flex flex-col lg:flex-row gap-10 lg:gap-20 w-full justify-around container mx-auto items-center">

                <div className="space-y-5 text-[#3E2C20] max-w-[600px]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Find Your Forever Companion</h1> {/* Responsive text sizing */}
                    <p className="max-w-4xl text-sm md:text-base">Thousands of lovable pets are waiting for a place to call home. Connect with local shelters and open your heart to a lifetime of unconditional love.</p>
                    <button className="btn bg-[#6B4226] border-none text-white">Adopt Now</button>
                </div>

                {/* Fixed: Container now scales safely on mobile and reaches 550px on desktop */}
                <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] aspect-square rounded-full overflow-hidden border-4 md:border-8  border-white shadow-2xl">

                    <div className="absolute inset-0 bg-[#FFD8A8] blur-3xl opacity-40 rounded-full "></div>

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