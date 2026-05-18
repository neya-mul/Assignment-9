import Image from 'next/image';
import React from 'react'

export default function PetCard({ pet }) {
    return (

        <div className="flex justify-center mx-auto items-center p-10 bg-[#F6F1E8] rounded-2xl min-h-[480px]">
            <div className="max-w-[340px] w-full bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#E2D8C5] shadow-[0_2px_16px_0_rgba(180,160,110,0.10)]">

                <figure className="m-0 overflow-hidden rounded-t-xl">
                    <Image
                        width={600}
                        height={200}
                        src={pet.image}
                        alt={pet.name}
                        className=" "
                    />
                </figure>

                <div className="p-5">
                    <h2 className="text-[17px] font-medium text-[#3B3120] mb-2">
                        Card Title
                    </h2>

                    <p className="text-sm leading-relaxed text-[#7A6A50] mb-5">
                        A card component has a figure, a body part, and inside body there
                        are title and actions parts
                    </p>

                    <div className="flex justify-end">
                        <button className="bg-[#7C5C2E] hover:bg-[#5E4320] text-[#F6F1E8] rounded-lg px-5 py-2 text-sm font-medium cursor-pointer tracking-wide transition-colors duration-150">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}


