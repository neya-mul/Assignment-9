'use client'
import PetCard from '@/components/cardComponents/PetCard'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'

export default function AllPets() {
  const [pets, setPets] = useState([])
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const petCategory = ['All Species', 'Dog', 'Cat', 'Bird', 'Rabbit', 'Hamster', 'Fish', 'Turtle', 'Other']



  useEffect(() => {
    fetch(`http://localhost:5000/pets?searchName=${name}&species=${species}`)
      .then(res => res.json())
      .then(data => setPets(data))



  }, [name, species])

  const search = (e) => {
    setName(e.target.value)

  }

  const handleSpecies = (e) => {
    setSpecies(e.target.value)
  }
 


  return (
    <div className='mt-30 text-black min-h-screen'>
      <div>
        <h1 className='text-center text-4xl'>Adopt your new family member</h1>

        {/* Search Bar */}
        <div className='flex flex-col sm:flex-row justify-center mt-6 max-w-[800px] mx-auto gap-4 px-4 relative z-0'>
          <input
            onChange={search}
            value={name}
            type='text'
            placeholder='Search pets...'
            className='w-full sm:flex-[3] p-3 text-black bg-white border border-gray-300 rounded-lg outline-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100' />



          <div className='relative w-full sm:flex-1'>
            <button onClick={() => setIsOpen(!isOpen)} className='w-full max-w-[140px] flex gap-3 items-center justify-center h-12 px-4 bg-white border border-gray-200 rounded-lg text-sm text-left'>
              {species || 'All Species'} <FaArrowAltCircleDown />

            </button>
            {isOpen && (
              <ul className='absolute  w-full bg-white border rounded-lg shadow z-[9999]'>
                {petCategory.map(c => (
                  <li key={c} className='px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer' onClick={() => { setSpecies(c === 'All Species' ? '' : c); setIsOpen(false) }}>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>


        </div>
      </div>


      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          pets.map((pet, ind) => (
            <PetCard pet={pet} key={ind}></PetCard>
          ))
        }
      </div>
    </div>
  )
}