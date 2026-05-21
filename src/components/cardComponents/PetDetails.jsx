'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function PetDetails({ pet }) {



    const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user
    const {
        _id,
        petName,
        species,
        gender,
        healthStatus,
        vaccinationStatus,
        adoptionFee,
        location,
        ownerEmail,
        ownerName,
        ownerId
    } = pet;


    const adoptButton = async (e) => {

      
        e.preventDefault()

        if (user?.id != ownerId ) {
            const formData = new FormData(e.currentTarget)
            const res = await fetch('http://localhost:5000/adoption-requests', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    petId: _id,
                    petName: petName,
                    ownerId: ownerId,
                    adopterId: user?.id,
                    adopterName: user?.name,
                    adopterEmail: user?.email,
                    pickupDate: formData.get('pickupDate'),
                    message: formData.get('message'),
                    status: 'pending',
                    createdAt: new Date()

                })
            })
            const data = await res.json()

            if (data.insertedId) {
                alert('success')
            }

        }
        else {
            alert('This pet has added by you')

        }
        router.push('/')


    }
    return (
        <div className='text-black mt-2 lg:mt-20 flex justify-center items-center min-h-screen p-4 md:p-8 bg-gray-50/50'>
            <div className='flex flex-col md:flex-row justify-center gap-6 lg:gap-8 items-stretch w-full max-w-6xl mx-auto mt-30 md:mt-0'>

                {/* Left Side: Pet Card Details */}
                <div className='p-6 md:p-8 flex-1 w-full bg-white rounded-3xl shadow-sm flex flex-col justify-between'>
                    <div className="w-full flex flex-col gap-6">

                        {/* Pet Image Container */}
                        <div className="relative h-[210px] w-full shrink-0 overflow-hidden rounded-2xl shadow-inner mx-auto sm:mx-0">
                            {pet?.imageUrl ? (
                                <Image
                                    alt={petName || 'Pet Image'}
                                    className="object-cover w-full h-full"
                                    src={pet.imageUrl}
                                    width={400}
                                    height={400}
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-sm text-gray-400">
                                    No Image Available
                                </div>
                            )}
                        </div>

                        {/* Pet Details Container */}
                        <div className="flex flex-1 flex-col gap-4">
                            {/* Header & Description */}
                            <div className="flex flex-col gap-1 border-b pb-3">
                                <h2 className="font-bold text-2xl text-gray-800">{petName}</h2>
                                <p className="text-sm text-gray-500 leading-relaxed mt-1">{pet?.description || 'No description provided.'}</p>
                            </div>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-b pb-4">
                                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Species:</span> {species}</p>
                                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Breed:</span> {pet?.breed || 'Unknown'}</p>
                                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Age:</span> {pet?.age || 'N/A'}</p>
                                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Gender:</span> {gender}</p>
                            </div>

                            {/* Health & Medical Status */}
                            <div className="bg-gray-50 p-4 rounded-xl space-y-1.5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Health Profile</h3>
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium text-gray-900">Health Status:</span> {healthStatus}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium text-gray-900">Vaccine Status:</span> {vaccinationStatus}
                                </p>
                            </div>

                            {/* Logistics & Adoption Details */}
                            <div className="pt-2 space-y-1">
                                <p className="text-sm text-gray-700 flex items-center gap-1">
                                    <span className="font-medium text-gray-900">Location:</span> {location}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium text-gray-900">Adoption Fee:</span>
                                    <span className="ml-1 font-semibold text-emerald-600">
                                        {adoptionFee === 0 || adoptionFee === '0' ? 'Free' : `$${adoptionFee}`}
                                    </span>
                                </p>
                                {ownerName && (
                                    <p className="text-sm text-gray-500 pt-1">
                                        <span className="font-medium">Listed by:</span> {ownerName}
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side: Adoption Request Form */}
                <div className='flex-1 w-full rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between'>
                    <form className="space-y-4 text-sm w-full" onSubmit={adoptButton}>

                        {/* Hidden Field for tracking the Pet Owner ID inside form submissions */}
                        <input type="hidden" name="ownerId" value={ownerId || ""} />

                        {/* 1. Pet Name Field (READ ONLY) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#7A6A50] uppercase tracking-wide mb-1">Pet Name</label>
                            <input
                                value={petName || ""}
                                type="text"
                                name="petName"
                                readOnly
                                className="w-full h-11 bg-[#F6F1E8] border border-[#E2D8C5] rounded-xl px-4 font-medium text-[#3B3120] cursor-not-allowed outline-none select-none"
                            />
                        </div>

                        {/* 2. User Name Field (READ ONLY) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#7A6A50] uppercase tracking-wide mb-1">Applicant Name</label>
                            <input
                                value={ownerName}
                                type="text"
                                name="userName"
                                readOnly
                                className="w-full h-11 bg-[#F6F1E8] border border-[#E2D8C5] rounded-xl px-4 font-medium text-[#3B3120] cursor-not-allowed outline-none select-none"
                            />
                        </div>

                        {/* 3. User Email Field (READ ONLY) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#7A6A50] uppercase tracking-wide mb-1">Applicant Email</label>
                            <input
                                value={ownerEmail}
                                type="email"
                                name="userEmail"
                                readOnly
                                className="w-full h-11 bg-[#F6F1E8] border border-[#E2D8C5] rounded-xl px-4 font-medium text-[#3B3120] cursor-not-allowed outline-none select-none"
                            />
                        </div>

                        {/* 4. Pickup Date Field (EDITABLE) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#3B3120] uppercase tracking-wide mb-1">Pickup / Visit Date</label>
                            <input
                                type="date"
                                name="pickupDate"
                                required
                                className="w-full h-11 bg-white border border-[#CBD5E1] rounded-xl px-4 text-[#3B3120] focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* 5. Message Field (EDITABLE) */}
                        <div>
                            <label className="block text-xs font-semibold text-[#3B3120] uppercase tracking-wide mb-1">Message to Shelter</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                placeholder="Describe your living setup, pet experience, or any questions for the shelter..."
                                className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-[#3B3120] placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition resize-none"
                            />
                        </div>

                        {/* 6. Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-12 mt-2 rounded-xl bg-[#7C5C2E] hover:bg-[#5E4320] text-white font-medium tracking-wide shadow-md active:scale-[0.98] transition-all duration-150 cursor-pointer"
                        >
                            🐾 Submit Adoption Request
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
