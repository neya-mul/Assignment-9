import PetCard from '@/components/cardComponents/PetCard'
import React from 'react'


export default async function AllPets({ params }) {
  const res = await fetch('http://localhost:5000/pets')
  const pets = await res.json()

  return (
    <div className='mt-10 text-black min-h-screen'>
      <div>
        <h1 className='text-center text-4xl'>Adopt your new family member</h1>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          pets.map((pet, ind) => <PetCard pet={pet} key={ind}></PetCard>)
        }
      </div>

    </div>
  )
}
