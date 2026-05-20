import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EditModal from '../EditModal'

export default function MyPet({ pet }) {

    return (
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={pet.imageUrl}
                    alt={pet.petName}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Status */}
                <div className="absolute top-4 right-4">
                    {
                        pet.adopted ? (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700">
                                Adopted
                            </span>
                        ) : (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                Available
                            </span>
                        )
                    }
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title + Price */}
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            {pet.petName}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {pet.species} • {pet.breed}
                        </p>
                    </div>

                    <h3 className="text-lg font-bold text-emerald-600">
                        ৳{pet.adoptionFee}
                    </h3>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 mt-4 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        {pet.gender}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        Age {pet.age}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                        📍 {pet.location}
                    </span>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Requests */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-sm font-medium transition">
                        Requests
                    </button>

                    {/* Edit */}
                    <EditModal></EditModal>

                    {/* View */}
                    <Link href={`/${pet?._id}`}>
                        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl text-sm font-medium transition">
                            View
                        </button>
                    </Link>

                    {/* Delete */}
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-medium transition">
                        Delete
                    </button>

                </div>

            </div>
        </div>
    )
}