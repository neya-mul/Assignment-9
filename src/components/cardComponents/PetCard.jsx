import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function PetCard({ pet }) {
    console.log(pet);

    return (
        <div className="flex justify-center mx-auto items-center p-10 bg-[#F6F1E8] rounded-2xl min-h-[480px]">
            <div className="max-w-[340px] w-full bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#E2D8C5] shadow-[0_2px_16px_0_rgba(180,160,110,0.10)]">

                <figure className="m-0 overflow-hidden rounded-t-xl">
                    {/* FIXED: Changed pet?.image to pet?.imageUrl to match your data schema */}
                    {pet?.imageUrl && (
                        <Image
                            width={600}
                            height={200}
                            src={pet?.imageUrl}
                            alt={pet?.petName} /* FIXED: Changed pet?.name to pet?.petName */
                            className="w-full h-[220px] object-cover"
                        />
                    )}
                </figure>

                <div className="p-5">
                    <h2 className="text-[17px] font-medium text-[#3B3120] mb-2">
                        {pet?.petName}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#7A6A50] mb-5">
                        {pet?.description}
                    </p>

                    <div className="flex justify-end">
                        <Link className='w-full' href={`/${pet?._id}`}>                            <button className="bg-[#7C5C2E] hover:bg-[#5E4320] btn border-none text-[#F6F1E8] rounded-lg px-5 py-2 text-sm font-medium cursor-pointer w-full tracking-wide transition-colors duration-150">
                            View Details
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}