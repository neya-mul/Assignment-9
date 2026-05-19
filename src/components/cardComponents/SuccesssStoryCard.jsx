import Image from 'next/image'
import React from 'react'

export default function SuccesssStoryCard({ storie }) {
    return (
        <div className="flex justify-center mx-auto items-center p-10 bg-[#F6F1E8] rounded-2xl min-h-[480px]">
            <div className="max-w-[340px] w-full bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#E2D8C5] shadow-[0_2px_16px_0_rgba(180,160,110,0.10)]">

                <figure className="m-0 overflow-hidden rounded-t-xl">
                    <Image
                        width={600}
                        height={200}
                        src={storie?.image}
                        alt={storie?.name}
                        className="h-60 "
                    />
                </figure>

                <div className="p-5 text-black">
                    <h2 className="text-3xl font-medium text-[#3B3120] mb-2">
                        {storie.name}    </h2>

                    <p className='text-xl'>{storie.title}</p>

                    <p className="text-sm leading-relaxed text-[#7A6A50] mb-5">
                        {storie.story}
                    </p>

                    <p>Location: {storie.location}</p>
                </div>

            </div>
        </div>
    )
}
