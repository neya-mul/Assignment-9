import React from 'react'
import PetCard from './cardComponents/PetCard'

export default async function FeaturedPets() {
    const res = await fetch('http://localhost:5000/pets')
    const pets = await res.json()
    // console.log(pets);

    return (
        <div className='py-20'>
            <div className='text-center text-gray-800'>
                <h1 className='text-5xl'>Meet Our Featured Pets of the Week!</h1>
                <p className='text-2xl'>Looking for a new best friend? These wonderful animals are ready to find their forever homes. Could it be with you?</p>
            </div>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    pets.slice(0,6).map((pet, ind) => <PetCard pet={pet} key={ind}></PetCard>)
                }
            </div>

        </div>
    )
}
