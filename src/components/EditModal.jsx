'use client'
import { authClient } from '@/lib/auth-client'
import React from 'react'

export default function EditModal({ pet }) {
    const { _id } = pet;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const updatedData = Object.fromEntries(formData.entries())
        console.log(updatedData);
        const res = await fetch(`http://localhost:5000/pets/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedData)

            })
        await res.json()


        document.getElementById('my_modal_2').close()
    }

    const { data: session } = authClient.useSession()
    const user = session?.user
    const userEmail = user?.email
    // console.log(userEmail);

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl text-sm font-medium transition" onClick={() => document.getElementById('my_modal_2').showModal()}>Edit</button>
            <dialog id="my_modal_2" className="modal">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-5 max-w-2xl mx-auto"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        {/* Pet Name */}
                        <div className="md:col-span-2">
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Pet Name
                            </label>

                            <input
                                name="petName"
                                placeholder="e.g. Buddy"
                                required
                                className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Species */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Species
                            </label>

                            <div className="relative">
                                <select
                                    name="species"
                                    required
                                    defaultValue=""
                                    className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
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

                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">
                                    ▾
                                </span>
                            </div>
                        </div>

                        {/* Breed */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Breed
                            </label>

                            <input
                                name="breed"
                                placeholder="e.g. Golden Retriever"
                                className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Age
                            </label>

                            <input
                                name="age"
                                placeholder="e.g. 2 years"
                                required
                                className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Gender
                            </label>

                            <div className="relative">
                                <select
                                    name="gender"
                                    required
                                    defaultValue=""
                                    className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">♂ Male</option>
                                    <option value="Female">♀ Female</option>
                                </select>

                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">
                                    ▾
                                </span>
                            </div>
                        </div>

                        {/* Health Status */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Health Status
                            </label>

                            <div className="relative">
                                <select
                                    name="healthStatus"
                                    required
                                    defaultValue=""
                                    className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select health status</option>
                                    <option value="Healthy">Healthy</option>
                                    <option value="Minor Issues">Minor Issues</option>
                                    <option value="Under Treatment">Under Treatment</option>
                                    <option value="Needs Special Care">Needs Special Care</option>
                                </select>

                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">
                                    ▾
                                </span>
                            </div>
                        </div>

                        {/* Vaccination Status */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Vaccination Status
                            </label>

                            <div className="relative">
                                <select
                                    name="vaccinationStatus"
                                    required
                                    defaultValue=""
                                    className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                >
                                    <option value="" disabled>Select status</option>
                                    <option value="Fully Vaccinated">Fully Vaccinated</option>
                                    <option value="Partially Vaccinated">Partially Vaccinated</option>
                                    <option value="Not Vaccinated">Not Vaccinated</option>
                                    <option value="Unknown">Unknown</option>
                                </select>

                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">
                                    ▾
                                </span>
                            </div>
                        </div>

                        {/* Adoption Fee */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Adoption Fee (USD)
                            </label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                                    $
                                </span>

                                <input
                                    type="number"
                                    name="adoptionFee"
                                    placeholder="0"
                                    min="0"
                                    className="w-full h-9 rounded-lg border border-gray-200 bg-white pl-7 pr-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2">
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Location / Shelter Name
                            </label>

                            <input
                                name="location"
                                placeholder="e.g. Happy Paws Shelter, New York"
                                required
                                className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Pet Photo URL
                            </label>

                            <input
                                type="url"
                                name="imageUrl"
                                placeholder="https://i.ibb.co/your-image.jpg"
                                className="w-full h-9 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                About this Pet
                            </label>

                            <textarea
                                name="description"
                                placeholder="Tell us about the pet..."
                                rows={3}
                                required
                                className="w-full min-h-[70px] max-h-[120px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition resize-none"
                            />
                        </div>

                        {/* Owner Email */}
                        <div className="md:col-span-2">
                            <label className="block text-[13px] font-medium text-gray-700 mb-0.5">
                                Owner Email
                            </label>

                            <input
                                type="email"
                                name="ownerEmail"
                                value={userEmail}
                                readOnly
                                className="w-full h-9 rounded-lg border border-gray-200 bg-gray-50 px-3 text-[13px] text-gray-400 cursor-not-allowed focus:outline-none"
                            />
                        </div>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full h-10 mt-4 rounded-lg bg-amber-400 hover:bg-amber-500 text-white text-[13px] font-medium transition"
                    >
                        Save                    </button>

                </form>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
