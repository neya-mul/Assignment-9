import Image from 'next/image'
import React from 'react'
import cat from '../../public/cat.png'

export default function WhyAdopt() {
  return (
    <div className='text-black space-y-20 bg-[#918c3f] p-10'>
      <div>
        <h1 className='text-center text-5xl'>Why we should adopt pets? </h1>

      </div>
      <div className='max-w-[900px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10' >
        {/* image div */}
        <div className='flex-1'>
          <Image
            src={cat}
            alt="cat"
            width={300}
            height={300}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        {/* details div */}
        <div className='text-black flex-1 '>
          <ul className='ul-type-circle'>
            <li><strong>Save a Deserving Life:</strong> Opening your heart to a shelter pet gives a wonderful animal the second chance at the loving home they truly deserve.</li>
            <li><strong>Fight Against Puppy Mills:</strong> Adopting directly supports ethical animal welfare and reduces the demand for irresponsible, profit-driven commercial breeding practices.</li>
            <li><strong>Find Your Perfect Match:</strong> Shelters house pets of all ages, sizes, and personalities—including many house-trained adults—making it easy to find a companion that fits your lifestyle.</li>
            <li><strong>Create Space for Others:</strong> Every time a pet is adopted, a valuable spot opens up in the shelter, allowing rescuers to save another animal in urgent need.</li>
            <li><strong>Experience Unmatched Loyalty:</strong> Rescued pets often form incredibly deep, affectionate bonds with their new families, showing endless gratitude for their fresh start.</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
