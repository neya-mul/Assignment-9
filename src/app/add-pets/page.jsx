'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react'
import React from 'react'


export default function AddPets() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const pet = Object.fromEntries(formData.entries())
        pet.description = pet.description.replace(/\n/g, ' ').trim()

        // console.log(pet);

        const res = await fetch('http://localhost:5000/my-list', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',

            },
            body: JSON.stringify(pet)

        })
        const data = await res.json()
        console.log(data);




    }
    return (
        <div className="min-h-screen bg-[#F6F1E8] px-4 py-20 text-black">
            <div className="max-w-4xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border h-fit mt-10 border-amber-100 shadow-lg rounded-3xl p-8 md:p-12 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Pet Name */}
                        <div className="md:col-span-2">
                            <Label className="text-black">Pet Name</Label>
                            <Input
                                name="petName"
                                // value={formData.petName}
                                // onChange={handleChange}
                                placeholder="Buddy"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Pet Type */}
                        <div>
                            <Label className="text-black">Pet Type</Label>
                            <Select

                            >
                                <Select.Trigger className="w-full h-12 rounded-xl border border-gray-300 bg-white px-4 text-black">
                                    <Select.Value placeholder="Select type" className="text-black" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="text-black">
                                    <ListBox className="p-2 flex flex-col gap-1">
                                        <ListBox.Item className="btn" id="Dog">Dog</ListBox.Item>
                                        <ListBox.Item className="btn" id="Cat">Cat</ListBox.Item>
                                        <ListBox.Item className="btn" id="Rabbit">Rabbit</ListBox.Item>
                                        <ListBox.Item className="btn" id="Parrot">Parrot</ListBox.Item>
                                        <ListBox.Item className="btn" id="Hamster">Hamster</ListBox.Item>
                                        <ListBox.Item className="btn" id="Fish">Fish</ListBox.Item>
                                        <ListBox.Item className="btn" id="Turtle">Turtle</ListBox.Item>
                                        <ListBox.Item className="btn" id="Other">Other</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Breed */}
                        <div>
                            <Label className="text-black">Breed</Label>
                            <Input
                                name="breed"
                                // value={formData.breed}
                                // onChange={handleChange}
                                placeholder="Golden Retriever"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <Label className="text-black">Age</Label>
                            <Input
                                name="age"
                                // value={formData.age}
                                // onChange={handleChange}
                                placeholder="2 years"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <Label className="text-black">Gender</Label>
                            <Select


                            >
                                <Select.Trigger className="w-full h-12 rounded-xl border border-gray-300 bg-white px-4 text-black">
                                    <Select.Value placeholder="Select gender" className="text-black" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="text-black">
                                    <ListBox className="p-2 flex flex-col gap-1">
                                        <ListBox.Item className="btn" id="Male">♂ Male</ListBox.Item>
                                        <ListBox.Item className="btn" id="Female">♀ Female</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Adoption Fee */}
                        <div>
                            <Label className="text-black">Adoption Fee (USD)</Label>
                            <Input
                                type="number"
                                name="adoptionFee"
                                // value={formData.adoptionFee}
                                // onChange={handleChange}
                                placeholder="50"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Location / Shelter */}
                        <div className="md:col-span-2">
                            <Label className="text-black">Location / Shelter Name</Label>
                            <Input
                                name="location"
                                // value={formData.location}
                                // onChange={handleChange}
                                placeholder="Happy Paws Shelter, New York"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Pet Photo URL */}
                        <div className="md:col-span-2">
                            <Label className="text-black">Pet Photo URL</Label>
                            <Input
                                type="url"
                                name="photoUrl"
                                // value={formData.photoUrl}
                                // onChange={handleChange}
                                placeholder="https://example.com/buddy.jpg"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* About this Pet */}
                        <div className="md:col-span-2">
                            <Label className="text-black">About this Pet </Label>
                            <textarea
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                placeholder="Tell us about the pet's personality, habits, and what kind of home they need..."
                                className="w-full max-h-[140px] min-h-[100px] rounded-2xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold"
                    >
                        List Pet for Adoption
                    </Button>
                </form>
            </div>
        </div>
    )
}
