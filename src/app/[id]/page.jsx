import React from 'react'
import Image from 'next/image';
import PetDetails from '@/components/cardComponents/PetDetails';
import { notFound } from 'next/navigation';

export default async function Details({ params }) {

    const { id } = await params;
    // console.log("Current Pet ID:", id);

    // 1. Guard against static asset and auth layout requests
    if (
        id === 'favicon.ico' ||
        id === 'site.webmanifest' ||
        id.startsWith('api') ||
        id === 'my-requests'
    ) {
        notFound();
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}pets/${id}`, { cache: 'no-store' });

    // If API request fails
    if (!res.ok) {
        notFound();
    }

    const pet = await res.json();
    // console.log("Fetched Pet Data:", pet);

    // 2. CRITICAL FIX: Check if pet is null BEFORE destructuring properties from it!
    // If pet doesn't exist
    if (!pet) {
        notFound();
    }


    return (
        <PetDetails pet={pet}></PetDetails>
    )
}