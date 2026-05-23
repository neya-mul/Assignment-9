import Image from 'next/image'
import React from 'react'
import cat from '../../public/cat.png'
import { MdDisabledByDefault, MdOutlinePets } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { FaHandHoldingHeart, FaHome } from 'react-icons/fa'

const reasons = [
  {
    emoji: <MdOutlinePets className='text-black'  />,
    title: 'Save a Deserving Life',
    desc: 'Opening your heart to a shelter pet gives a wonderful animal the second chance at the loving home they truly deserve.',
  },
  {
    emoji: <MdDisabledByDefault  className='text-black' />,
    title: 'Fight Against Puppy Mills',
    desc: 'Adopting directly supports ethical animal welfare and reduces the demand for irresponsible, profit-driven commercial breeding practices.',
  },
  {
    emoji: <CiSearch className='text-black'  />,
    title: 'Find Your Perfect Match',
    desc: 'Shelters house pets of all ages, sizes, and personalities—including many house-trained adults—making it easy to find your ideal companion.',
  },
  {
    emoji: <FaHome  className='text-black' />
    ,
    title: 'Create Space for Others',
    desc: 'Every time a pet is adopted, a valuable spot opens up in the shelter, allowing rescuers to save another animal in urgent need.',
  },
  {
    emoji: <FaHandHoldingHeart  className='text-black' />
    ,
    title: 'Experience Unmatched Loyalty',
    desc: 'Rescued pets often form incredibly deep, affectionate bonds with their new families, showing endless gratitude for their fresh start.',
  },
]

export default function WhyAdopt() {
  return (
    <div className="relative overflow-hidden bg-[#FDF6EC] py-24 px-6">

      {/* Background glows */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#F2C4A0]/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#C8DFC9]/20 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20">
        <span className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F] mb-6">
          Make a Difference
        </span>
        <h1 className="text-5xl font-black text-[#3D2B1F] tracking-tight">
          Why Should We Adopt Pets?
        </h1>
        <p className="mt-4 text-lg text-[#9E7E6A] max-w-xl mx-auto">
          Adopting a pet is one of the most rewarding decisions you'll ever make — for both of you.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
          <span className="text-[#C4844A] text-lg"> <MdOutlinePets /> </span>
          <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[960px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">

        {/* Image side */}
        <div className="flex-1 flex justify-center">
          <div className="group relative">

            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C4844A] to-[#E8A94F] opacity-20 blur-xl scale-110 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700" />

            {/* Decorative outer ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#C4844A]/30 animate-spin" style={{ animationDuration: '12s' }} />

            {/* Image */}
            <Image
              src={cat}
              alt="cat"
              width={300}
              height={300}
              className="relative rounded-full object-cover border-4 border-[#F2C4A0] shadow-[0_8px_40px_rgba(196,132,74,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#C4844A] group-hover:shadow-[0_16px_60px_rgba(196,132,74,0.35)]"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-3 flex   gap-2 left-1/2 -translate-x-1/2 bg-[#C4844A] text-[#FDF6EC] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-bounce">
              <FaHome />
              Ready for Adoption
            </div>

          </div>
        </div>

        {/* Reasons list */}
        <div className="flex-1 flex flex-col gap-5">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl p-5 shadow-[0_2px_16px_rgba(180,160,110,0.08)] transition-all duration-300 hover:-translate-x-1 hover:shadow-[0_8px_24px_rgba(196,132,74,0.12)] hover:border-[#C4844A]/40 cursor-default"
            >
              {/* Emoji icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#F2C4A0]/40 border border-[#F2C4A0] flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-[#C4844A] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(196,132,74,0.3)]">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-bold text-[#3D2B1F] mb-1 transition-colors duration-300 group-hover:text-[#C4844A]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7A6A50] transition-colors duration-300 group-hover:text-[#5A4A30]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}