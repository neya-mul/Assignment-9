'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react'
import React from 'react'


export default function AddPets() {
    return (
        <div className="min-h-screen bg-[#F6F1E8] px-4 py-20 text-black">
            <div className="max-w-4xl mx-auto">
                <form className="bg-white border h-fit mt-10 border-amber-100 shadow-lg rounded-3xl p-8 md:p-12 space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Destination */}
                        <div className="md:col-span-2">
                            <Label className="text-black">Destination Name</Label>

                            <Input
                                name="destinationName"
                                placeholder="Bali Paradise"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Country */}
                        <div className="">
                            <Label className="text-black">Country</Label>

                            <Input
                                name="country"
                                placeholder="Indonesia"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Category */}
                        <div className="">
                            <Label className="text-black">Category</Label>

                            <Select>
                                <Select.Trigger className="w-full h-12 rounded-xl border border-gray-300 bg-white px-4 text-black">
                                    <Select.Value
                                        placeholder="Select category"
                                        className="text-black"
                                    />

                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover className={'text-black'}>
                                    <ListBox className='p-10 flex flex-col'>
                                        <ListBox.Item className='btn' id="Beach">
                                            Beach
                                        </ListBox.Item>

                                        <ListBox.Item className='btn' id="Mountain">
                                            Mountain
                                        </ListBox.Item>

                                        <ListBox.Item className='btn' id="City">
                                            City
                                        </ListBox.Item>

                                        <ListBox.Item className='btn' id="Adventure">
                                            Adventure
                                        </ListBox.Item>

                                        <ListBox.Item className='btn' id="Luxury">
                                            Luxury
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <div className="">
                            <Label className="text-black">Price (USD)</Label>

                            <Input
                                type="number"
                                placeholder="1299"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Duration */}
                        <div className="">
                            <Label className="text-black">Duration</Label>

                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Date */}
                        <div className="md:col-span-2 ">
                            <Label className="text-black">Departure Date</Label>

                            <Input
                                type="date"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black"
                            />
                        </div>

                        {/* Image */}
                        <div className="md:col-span-2 ">
                            <Label className="text-black">Image URL</Label>

                            <Input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full rounded-xl bg-white border border-gray-300 h-12 px-4 text-black placeholder:text-gray-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2 ">
                            <Label className="text-black">Description</Label>

                            <textarea
                                placeholder="Describe the travel experience..."
                                className="w-full max-h-[140px] rounded-2xl border border-gray-300 bg-white px-4 py-3 text-black placeholder:text-gray-500 outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold"
                    >
                        Add Destination
                    </Button>
                </form>
            </div>
        </div>
    )
}
