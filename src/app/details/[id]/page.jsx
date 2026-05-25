import React from 'react'
import PetDetails from '@/components/cardComponents/PetDetails';
import { notFound } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';


export default async function Details({ params }) {

    const { id } = await params;

    // if (
    //     id === 'favicon.ico' ||
    //     id === 'site.webmanifest' ||
    //     id.startsWith('api') ||
    //     id === 'my-requests'
    // ) {
    //     notFound();
    // }


    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);
    


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}pets/${id}`, {
        headers:{
            authorization: `Beared ${token}`
        }

    });


    if (!res.ok) {
        notFound();
    }

    const pet = await res.json();
    // console.log(pet);


    if (!pet) {
        notFound();
    }


    return (
        <PetDetails pet={pet}></PetDetails>
    )
}