// SuccessStories.jsx
import React from 'react'
import SuccesssStoryCard from './cardComponents/SuccesssStoryCard'
import { MdOutlinePets } from 'react-icons/md'
// import SuccessStoryCard from './cardComponents/SuccessStoryCard'

export default async function SuccessStories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}success-storie`)
    const stories = await res.json()

    return (
        <div className="bg-[#FDF6EC] py-24 px-6">

            {/* Header */}
            <div className="text-center mb-16">
                <span className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F] mb-6">
                    ❤️ Happy Endings
                </span>
                <h1 className="text-5xl font-black text-[#3D2B1F] tracking-tight">
                    Our Successful Stories
                </h1>
                <p className="mt-4 text-lg text-[#9E7E6A] max-w-xl mx-auto">
                    Every adoption is a new beginning. Here are some of our most heartwarming ones.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                    <span className="text-[#C4844A] text-lg"> <MdOutlinePets />
 </span>
                    <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {stories.map((storie, ind) => (
                    <SuccesssStoryCard key={ind} storie={storie} />
                ))}
            </div>

        </div>
    )
}