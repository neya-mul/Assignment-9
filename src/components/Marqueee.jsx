import React from 'react'
import Marquee from 'react-fast-marquee'
import { MdOutlinePets } from 'react-icons/md'

export default function Marqueee() {
    return (
        <Marquee className='mt-[97px] py-2 text-black flex  items-center gap-10'>
            <span className='mx-10'> Thousands of happy tails started at PetNest </span>
            <MdOutlinePets />
            <span className='mx-10'>Adopt responsibly</span>
            <MdOutlinePets />
            <span className='mx-10'> Rescue with love</span>
            <MdOutlinePets />
            <span className='mx-10'>Give a pet the forever home they deserve  </span>
        </Marquee>
    )
}
