'use client'
import PetCard from '@/components/cardComponents/PetCard'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { MdOutlinePets } from 'react-icons/md'

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

  const search = (e) => setName(e.target.value)

  return (
    <div className="relative min-h-screen bg-[#FDF6EC] pt-32 pb-20 overflow-x-hidden">

      {/* Background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F2C4A0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 -right-20 w-80 h-80 bg-[#C8DFC9]/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Header ── */}
      <div className="text-center px-4 mb-12">
        <span className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F] mb-5">
          🐾 Find Your Match
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-[#3D2B1F] tracking-tight leading-tight">
          Adopt Your New
          <span className="text-[#C4844A] italic font-serif"> Family Member</span>
        </h1>
        <p className="mt-4 text-base text-[#9E7E6A] max-w-md mx-auto leading-relaxed">
          Hundreds of loving pets are waiting for a forever home just like yours.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
          <span className="text-[#C4844A]"> <MdOutlinePets /> </span>
          <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
        </div>
      </div>

      {/* ── Search Bar ── */}
      <div className="flex flex-col sm:flex-row justify-center max-w-[680px] mx-auto gap-3 px-4 mb-14 relative z-10">

        {/* Search input */}
        <div className="relative flex-[3]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-lg pointer-events-none" />
          <input
            onChange={search}
            value={name}
            type="text"
            placeholder="Search by name..."
            className="w-full h-12 pl-11 pr-4 bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl text-[#3D2B1F] placeholder:text-[#9E7E6A] text-sm font-medium outline-none focus:ring-2 focus:ring-[#C4844A]/40 focus:border-[#C4844A] transition-all duration-200 shadow-[0_2px_8px_rgba(196,132,74,0.06)]"
          />
        </div>

        {/* Species dropdown */}
        <div className="relative flex-1 min-w-[148px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-12 px-4 bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl text-sm font-semibold text-[#3D2B1F] flex items-center justify-between gap-2 outline-none hover:border-[#C4844A] transition-all duration-200 shadow-[0_2px_8px_rgba(196,132,74,0.06)]"
          >
            <span className="truncate">{species || 'All Species'}</span>
            <FaChevronDown className={`text-[#C4844A] text-xs flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <ul className="absolute top-14 left-0 right-0 bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl shadow-[0_8px_32px_rgba(196,132,74,0.15)] z-50 overflow-hidden">
              {petCategory.map(c => (
                <li
                  key={c}
                  onClick={() => { setSpecies(c === 'All Species' ? '' : c); setIsOpen(false) }}
                  className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors duration-150
                    ${(species === c || (c === 'All Species' && !species))
                      ? 'bg-[#F2C4A0]/50 text-[#C4844A]'
                      : 'text-[#3D2B1F] hover:bg-[#F6F1E8] hover:text-[#C4844A]'
                    }`}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* ── Results count ── */}
      {pets.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-sm text-[#9E7E6A] font-medium">
            Showing <span className="text-[#C4844A] font-bold">{pets.length}</span> pets
            {species && <span> in <span className="text-[#C4844A] font-bold">{species}</span></span>}
            {name && <span> matching <span className="text-[#C4844A] font-bold">"{name}"</span></span>}
          </p>
        </div>
      )}

      {/* ── Empty state ── */}
      {pets.length === 0 && (
        <div className="text-center py-24 px-4">
          <div className="text-6xl flex text-[#3D2B1F] justify-center mb-4"> <MdOutlinePets />
          </div>
          <h3 className="text-xl font-bold text-[#3D2B1F] mb-2">No pets found</h3>
          <p className="text-sm text-[#9E7E6A]">Try a different name or species filter.</p>
        </div>
      )}

      {/* ── Pet Grid ── */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {pets.map((pet, ind) => (
          <PetCard pet={pet} key={ind} />
        ))}
      </div>

    </div>
  )
}