import React from 'react'
import {  PropagateLoader } from 'react-spinners'

export default function loder() {
    return (
        <div className='flex justify-center items-center min-h-screen 
        '>
            <span><PropagateLoader className='text-[#3D2B1F]'/>

            </span>
        </div>
    )
}
