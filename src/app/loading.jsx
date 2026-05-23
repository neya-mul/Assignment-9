import React from 'react'
import { PropagateLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <PropagateLoader color="#3D2B1F" size={15} />
        </div>
    )
}