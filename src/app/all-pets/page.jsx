'use client'
import PetCard from '@/components/cardComponents/PetCard'
import React, { useEffect, useState } from 'react'

export default function AllPets() {
const [pets, setPets] = useState([])

useEffect(()=>{
  fetch('http://localhost:5000/pets')
  .then(res=> res.json())
  .then(data=> setPets(data))

},[])

  // const res = await fetch('http://localhost:5000/pets')
  // const pets = await res.json()
  const [name, setName] = useState('')


  const search = (e) => {
    setName(e.target.value)

  }
  console.log(name);
  console.log(pets);
  

// This converts both names to lowercase and checks if the search string is inside the pet's name
const expectedPet = pets.filter(p => 
  p.petName.toLowerCase().includes(name.toLowerCase())
)  

  return (
    <div className='mt-30 text-black min-h-screen'>
      <div>
        <h1 className='text-center text-4xl'>Adopt your new family member</h1>

        {/* Search Bar */}
        <div className='flex justify-center mt-6'>
          <input
            onChange={search}
            type='text'
            placeholder='Search pets...'
            className='w-1/2 p-3 text-black bg-white border border-gray-300 rounded-lg outline-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100' />
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          expectedPet.map((pet, ind) => (
            <PetCard pet={pet} key={ind}></PetCard>
          ))
        }
      </div>
    </div>
  )
}