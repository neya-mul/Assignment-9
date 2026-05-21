'use client'
import { authClient } from '@/lib/auth-client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AddPets() {
    const router = useRouter() // 🌟 ADD THIS LINE
    const { data: session } = authClient.useSession()
    const user = session?.user
    const name = user?.name
    // console.log(user); 21



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
            imageUrl: data.imageUrl, // 🌟 Handled cleanly!
            description: data.description.replace(/\n/g, ' ').trim(),
            ownerName: name,
            ownerEmail: data.ownerEmail || user?.email || "unknown@example.com",
            ownerId: user?.id || "unknown_id",
            adopted: false,
            createdAt: new Date()
        }

        console.log("Submitting Pet Object:", pet)

        const res = await fetch('http://localhost:5000/pets', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(pet)
        })

        const result = await res.json()

        if (result.insertedId) {
            alert('Pet added successfully!')

            // 🌟 FORCE NEXT.JS TO FETCH FRESH DATA FROM THE SERVER
            router.refresh()

            // 🌟 AUTOMATICALLY SEND THE USER BACK TO THE GALLERY PAGE TO SEE IT WITH THE IMAGE
            router.push('/')
        }
    }
    return (
        <div className="min-h-screen bg-[#F6F1E8] px-4  text-black ">
            <div className="max-w-4xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border h-fit my-30 border-gray-200  shadow-lg rounded-2xl p-5 md:p-7 space-y-5 max-w-3xl mx-auto"                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Pet Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Pet Name</label>
                            <input
                                name="petName"
                                placeholder="e.g. Buddy"
                                required
                                className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Species */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Species</label>
                            <div className="relative">
                                <select
                                    name="species"
                                    required
                                    defaultValue=""
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select species</option>
                                    <option value="Dog"> Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Bird">Bird</option>
                                    <option value="Rabbit">Rabbit</option>
                                    <option value="Hamster">Hamster</option>
                                    <option value="Fish"> Fish</option>
                                    <option value="Turtle">Turtle</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                            </div>
                        </div>

                        {/* Breed */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Breed</label>
                            <input
                                name="breed"
                                placeholder="e.g. Golden Retriever"
                                className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
                            <input
                                name="age"
                                placeholder="e.g. 2 years"
                                required
                                className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender</label>
                            <div className="relative">
                                <select
                                    name="gender"
                                    required
                                    defaultValue=""
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">♂ Male</option>
                                    <option value="Female">♀ Female</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                            </div>
                        </div>

                        {/* Health Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Health Status</label>
                            <div className="relative">
                                <select
                                    name="healthStatus"
                                    required
                                    defaultValue=""
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select health status</option>
                                    <option value="Healthy">Healthy</option>
                                    <option value="Minor Issues">Minor Issues</option>
                                    <option value="Under Treatment">Under Treatment</option>
                                    <option value="Needs Special Care">Needs Special Care</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                            </div>
                        </div>

                        {/* Vaccination Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Vaccination Status</label>
                            <div className="relative">
                                <select
                                    name="vaccinationStatus"
                                    required
                                    defaultValue=""
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select status</option>
                                    <option value="Fully Vaccinated">Fully Vaccinated</option>
                                    <option value="Partially Vaccinated">Partially Vaccinated</option>
                                    <option value="Not Vaccinated">Not Vaccinated</option>
                                    <option value="Unknown">Unknown</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                            </div>
                        </div>

                        {/* Adoption Fee */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Adoption Fee (USD)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                <input
                                    type="number"
                                    name="adoptionFee"
                                    placeholder="0"
                                    min="0"
                                    className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-8 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Location / Shelter Name</label>
                            <input
                                name="location"
                                placeholder="e.g. Happy Paws Shelter, New York"
                                required
                                className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Pet Photo URL
                                <span className="ml-2 text-xs text-gray-400 font-normal">Upload to imgbb.com or postimages.org first</span>
                            </label>
                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="https://i.ibb.co/your-image.jpg"
                                className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">About this Pet</label>
                            <textarea
                                name="description"
                                placeholder="Tell us about the pet's personality, habits, and what kind of home they need..."
                                rows={4}
                                required
                                className="w-full min-h-[110px] max-h-[200px] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition resize-none"
                            />
                        </div>

                        {/* Owner Email */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Owner Email
                                <span className="ml-2 text-xs text-gray-400 font-normal">auto-filled from your account</span>
                            </label>
                            <input
                                type="email"
                                name="ownerEmail"
                                value={session?.user?.email ?? ""}
                                readOnly
                                className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-400 cursor-not-allowed focus:outline-none"
                            />
                        </div>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full h-14 rounded-2xl bg-amber-400 hover:bg-amber-500 active:scale-[0.99] text-white text-base font-semibold transition-all"
                    >
                        🐾 List Pet for Adoption
                    </button>
                </form>
            </div>
        </div>
    )
}
