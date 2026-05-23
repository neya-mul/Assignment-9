import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

export default function PetCard({ pet }) {
    // console.log(pet);


    return (
        <div className="flex justify-center max-w-[480px] w-full mx-auto items-center p-12 bg-[#F6F1E8] rounded-3xl min-h-[580px] transition-all duration-500 hover:bg-[#F0E8D8]">
            <div className="group max-w-[420px] w-full bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#E2D8C5] shadow-[0_2px_16px_0_rgba(180,160,110,0.10)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(196,132,74,0.18)] hover:border-[#C4844A]/40">

                {/* Image */}
                <figure className="m-0 overflow-hidden rounded-t-xl relative">
                    {pet?.imageUrl && (
                        <>
                            <Image
                                width={600}
                                height={200}
                                src={pet?.imageUrl}
                                alt={pet?.petName}
                                className="w-full h-[270px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay shimmer on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Floating badge that appears on hover */}
                            <div className="absolute top-3 right-3 bg-[#C4844A] text-[#FDF6EC] text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-lg">
                                🐾 Available
                            </div>
                        </>
                    )}
                </figure>

                <div className="p-7">

                    {/* Pet name */}
                    <h2 className="text-[19px] font-medium text-[#3B3120] mb-2 transition-all duration-300 group-hover:text-[#C4844A] group-hover:translate-x-1">
                        {pet?.petName}
                    </h2>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#7A6A50] mb-6 transition-all duration-300 group-hover:text-[#5A4A30]">
                        {pet?.description}
                    </p>

                    {/* Animated divider */}
                    <div className="h-px bg-[#E2D8C5] mb-6 transition-all duration-500 group-hover:bg-[#C4844A]/40 group-hover:scale-x-110 origin-left" />

                    {/* Button */}
                    <div className="flex justify-end">
                        <Link className="w-full" href={`details/${pet?._id}`}>
                            <button className="relative w-full overflow-hidden bg-[#7C5C2E] hover:bg-[#C4844A] btn border-none text-[#F6F1E8] rounded-lg px-5 py-3 text-sm font-medium cursor-pointer tracking-wide transition-all duration-300 group/btn hover:shadow-[0_8px_20px_rgba(196,132,74,0.35)] hover:scale-[1.02] active:scale-95">

                                {/* Shine sweep */}
                                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out" />

                                {/* Ripple glow */}
                                <span className="absolute inset-0 rounded-lg bg-[#E8A94F]/0 group-hover/btn:bg-[#E8A94F]/10 transition-all duration-300" />

                                <span className="relative flex items-center justify-center gap-2">
                                    View Details
                                    <span className="transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:text-[#F2C4A0]"> <FaArrowRightLong />
 </span>
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}