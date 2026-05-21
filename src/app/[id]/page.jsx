import React from 'react'
import Image from 'next/image';
import PetDetails from '@/components/cardComponents/PetDetails';

export default async function Details({ params }) {

    const { id } = await params;
    // console.log("Current Pet ID:", id);

    // 1. Guard against static asset and auth layout requests
    if (id === 'favicon.ico' || id === 'site.webmanifest' || id.startsWith('api') || id === 'my-requests'){
        return null;
    }

    const res = await fetch(`http://localhost:5000/pets/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        return (
            <div className="min-h-screen flex items-center justify-center text-black">
                <p className="text-gray-500">Failed to load pet data (Status: {res.status})</p>
            </div>
        );
    }

    const pet = await res.json();
    // console.log("Fetched Pet Data:", pet);

    // 2. CRITICAL FIX: Check if pet is null BEFORE destructuring properties from it!
    if (!pet) {
        return (
            <div className="min-h-screen flex items-center justify-center text-black">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Pet Not Found </h2>
                    <p className="text-gray-500 mt-2">We couldn't find a pet matching that ID.</p>
                </div>
            </div>
        );
    }

    // 3. Destructure safely now that we are 100% sure 'pet' exists. Added ownerId.
    // const {
    //     petName,
    //     species,
    //     gender,
    //     healthStatus,
    //     vaccinationStatus,
    //     adoptionFee,
    //     location,
    //     ownerEmail,
    //     ownerName,
    //     ownerId
    // } = pet;


  

    return (
        <PetDetails pet={pet}></PetDetails>
    )
}