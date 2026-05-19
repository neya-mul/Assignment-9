import React from 'react'
import { Button, Card, CardFooter, CardHeader } from "@heroui/react";
import Image from 'next/image';

export default async function Details({ params }) {

    const { id } = await params
    console.log("Current Pet ID:", id);

    const res = await fetch(`http://localhost:5000/pets/${id}`, { cache: 'no-store' })
    const pet = await res.json()
    console.log("Fetched Pet Data:", pet);

    return (
        <div className='text-black flex justify-center items-center min-h-screen'>
            <div className='border p-10'>
                <Card className="w-full max-w-5xl flex flex-col md:flex-row gap-4">

                    <div className="relative h-[200px] w-full md:w-[300px] shrink-0 overflow-hidden rounded-2xl">
                        {/* FIX 1: Changed pet?.image to pet?.imageUrl */}
                        {/* FIX 2: Wrapped in conditional statement so it won't render if empty */}
                        {pet?.imageUrl ? (
                            <Image
                                alt={pet?.petName || 'Pet Image'}
                                className="object-cover"
                                src={pet.imageUrl}
                                width={800}
                                height={800}
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-400">
                                No Image Available
                            </div>
                        )}
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                        <CardHeader className="flex-col items-start gap-1">
                            {/* FIX 3: Changed pet.name to pet.petName to match your data */}
                            <h2 className="font-bold text-xl">{pet?.petName}</h2>
                            <p className="text-sm text-gray-500 max-w-[400px]">{pet?.description}</p>
                        </CardHeader>

                        <div>
                            <p className="text-sm"><span className="font-medium">Breed:</span> {pet?.breed}</p>
                            <p className="text-sm"><span className="font-medium">Age:</span> {pet?.age}</p>
                        </div>

                        <CardFooter className="flex justify-between items-center">
                            <Button className={'bg-[#7C5C2E] text-white border-none'}>Adopt Me</Button>
                        </CardFooter>
                    </div>

                </Card>
            </div>
        </div>
    )
}