'use client'
import { authClient } from '@/lib/auth-client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaPaw } from 'react-icons/fa'
import toast from 'react-hot-toast'

const labelClass = "block text-xs font-semibold text-[#7A6A50] uppercase tracking-wide mb-1.5"
const inputClass = "w-full h-12 rounded-xl border border-[#E2D8C5] bg-[#F6F1E8] px-4 text-sm text-[#3D2B1F] placeholder:text-[#9E7E6A] focus:outline-none focus:ring-2 focus:ring-[#C4844A]/40 focus:border-[#C4844A] transition-all duration-200"
const selectClass = "w-full h-12 rounded-xl border border-[#E2D8C5] bg-[#F6F1E8] px-4 text-sm text-[#3D2B1F] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C4844A]/40 focus:border-[#C4844A] transition-all duration-200"

export default function AddPets() {
    const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user
    const name = user?.name

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        const pet = {
            petName: data.petName,
            species: data.species,
            breed: data.breed || "Unknown",
            age: data.age.toString(),
            gender: data.gender,
            healthStatus: data.healthStatus,
            vaccinationStatus: data.vaccinationStatus,
            adoptionFee: data.adoptionFee ? data.adoptionFee.toString() : "0",
            location: data.location,
            imageUrl: data.imageUrl,
            description: data.description.replace(/\n/g, ' ').trim(),
            ownerName: name,
            ownerEmail: data.ownerEmail || user?.email || "unknown@example.com",
            ownerId: user?.id || "unknown_id",
            adopted: false,
            createdAt: new Date()
        }



        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}pets`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },

            body: JSON.stringify(pet)
        })
        const result = await res.json()
        if (result.insertedId) {
            toast.success('Pet added successfully!')
            router.refresh()
            router.push('/')
        }
    }

    return (
        <div className="relative min-h-screen bg-[#FDF6EC] px-4 py-12 overflow-hidden">

            {/* Background glows */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F2C4A0]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#C8DFC9]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">

                {/* Page header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F] mb-5">
                        🐾 New Listing
                    </span>
                    <h1 className="text-4xl font-black text-[#3D2B1F] tracking-tight">List a Pet for Adoption</h1>
                    <p className="mt-3 text-sm text-[#9E7E6A] max-w-md mx-auto leading-relaxed">
                        Fill in your pet's details and help them find a loving forever home.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                        <FaPaw className="text-[#C4844A] text-sm" />
                        <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                    </div>
                </div>

                {/* Form card */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#FFFDF8] border border-[#E2D8C5] shadow-[0_8px_40px_rgba(196,132,74,0.1)] rounded-3xl p-6 md:p-10 space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Pet Name */}
                        <div className="md:col-span-2">
                            <label className={labelClass}>Pet Name</label>
                            <input name="petName" placeholder="e.g. Buddy" required className={inputClass} />
                        </div>

                        {/* Species */}
                        <div>
                            <label className={labelClass}>Species</label>
                            <div className="relative">
                                <select name="species" required defaultValue="" className={selectClass}>
                                    <option value="" disabled>Select species</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Bird">Bird</option>
                                    <option value="Rabbit">Rabbit</option>
                                    <option value="Hamster">Hamster</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Turtle">Turtle</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-xs">▾</span>
                            </div>
                        </div>

                        {/* Breed */}
                        <div>
                            <label className={labelClass}>Breed</label>
                            <input name="breed" placeholder="e.g. Golden Retriever" className={inputClass} />
                        </div>

                        {/* Age */}
                        <div>
                            <label className={labelClass}>Age</label>
                            <input name="age" placeholder="e.g. 2 years" required className={inputClass} />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className={labelClass}>Gender</label>
                            <div className="relative">
                                <select name="gender" required defaultValue="" className={selectClass}>
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">♂ Male</option>
                                    <option value="Female">♀ Female</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-xs">▾</span>
                            </div>
                        </div>

                        {/* Health Status */}
                        <div>
                            <label className={labelClass}>Health Status</label>
                            <div className="relative">
                                <select name="healthStatus" required defaultValue="" className={selectClass}>
                                    <option value="" disabled>Select health status</option>
                                    <option value="Healthy">Healthy</option>
                                    <option value="Minor Issues">Minor Issues</option>
                                    <option value="Under Treatment">Under Treatment</option>
                                    <option value="Needs Special Care">Needs Special Care</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-xs">▾</span>
                            </div>
                        </div>

                        {/* Vaccination Status */}
                        <div>
                            <label className={labelClass}>Vaccination Status</label>
                            <div className="relative">
                                <select name="vaccinationStatus" required defaultValue="" className={selectClass}>
                                    <option value="" disabled>Select status</option>
                                    <option value="Fully Vaccinated">Fully Vaccinated</option>
                                    <option value="Partially Vaccinated">Partially Vaccinated</option>
                                    <option value="Not Vaccinated">Not Vaccinated</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-xs">▾</span>
                            </div>
                        </div>

                        {/* Adoption Fee */}
                        <div>
                            <label className={labelClass}>Adoption Fee (USD)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4844A] text-sm font-semibold">$</span>
                                <input
                                    type="number" name="adoptionFee" placeholder="0" min="0"
                                    className="w-full h-12 rounded-xl border border-[#E2D8C5] bg-[#F6F1E8] pl-8 pr-4 text-sm text-[#3D2B1F] placeholder:text-[#9E7E6A] focus:outline-none focus:ring-2 focus:ring-[#C4844A]/40 focus:border-[#C4844A] transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2">
                            <label className={labelClass}>Location / Shelter Name</label>
                            <input
                                name="location" placeholder="e.g. Happy Paws Shelter, New York"
                                required className={inputClass}
                            />
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className={labelClass}>
                                Pet Photo URL
                                <span className="ml-2 text-[#9E7E6A] normal-case font-normal tracking-normal">
                                    — Upload to imgbb.com or postimages.org first
                                </span>
                            </label>
                            <input
                                type="url" name="imageUrl"
                                placeholder="https://i.ibb.co/your-image.jpg"
                                className={inputClass}
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className={labelClass}>About this Pet</label>
                            <textarea
                                name="description"
                                placeholder="Tell us about the pet's personality, habits, and what kind of home they need..."
                                rows={4} required
                                className="w-full min-h-[110px] max-h-[200px] rounded-2xl border border-[#E2D8C5] bg-[#F6F1E8] px-4 py-3 text-sm text-[#3D2B1F] placeholder:text-[#9E7E6A] focus:outline-none focus:ring-2 focus:ring-[#C4844A]/40 focus:border-[#C4844A] transition-all duration-200 resize-none"
                            />
                        </div>

                        {/* Owner Email */}
                        <div className="md:col-span-2">
                            <label className={labelClass}>
                                Owner Email
                                <span className="ml-2 text-[#9E7E6A] normal-case font-normal tracking-normal">
                                    — auto-filled from your account
                                </span>
                            </label>
                            <input
                                type="email" name="ownerEmail"
                                value={session?.user?.email ?? ""}
                                readOnly
                                className="w-full h-12 rounded-xl border border-[#E2D8C5] bg-[#F6F1E8] px-4 text-sm text-[#9E7E6A] cursor-not-allowed focus:outline-none select-none"
                            />
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#E2D8C5]" />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="relative w-full h-14 rounded-2xl overflow-hidden bg-[#3D2B1F] hover:bg-[#C4844A] text-[#FDF6EC] text-base font-bold tracking-wide shadow-[0_4px_20px_rgba(196,132,74,0.25)] active:scale-[0.99] transition-all duration-300 cursor-pointer group"
                    >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out" />
                        <span className="relative flex items-center justify-center gap-2">
                            <FaPaw className="text-sm" />
                            List Pet for Adoption
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </button>

                </form>
            </div>
        </div>
    )
}