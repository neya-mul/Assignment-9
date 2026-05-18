import React from 'react'
import { Button, Card, CardFooter, CardHeader, CloseButton } from "@heroui/react";
import Image from 'next/image';


export default async function Details({ params }) {


    const { id } = await params


    const res = await fetch(`http://localhost:5000/pets/${id}`)
    const pet = await res.json()
    // const pet = pets.find(p => p._id == id)
    // console.log(pet);


    return (
        <div className='text-black flex justify-center items-center min-h-screen'>
            <div className='border p-10'>
                <Card className="w-full max-w-5xl flex flex-col md:flex-row gap-4">

                    <div className="relative h-[200px] w-full md:w-[300px] shrink-0 overflow-hidden rounded-2xl">
                        <Image
                            alt='name'
                            className="object-cover"
                            src={pet.image}
                            width={800}
                            height={800}
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                        <CardHeader className="flex-col items-start gap-1">
                            <h2 className="font-bold text-xl">{pet.name}</h2>
                            <p className="text-sm text-gray-500 max-w-[400px]">{pet.description}</p>
                        </CardHeader>

                        <div>
                            <p className="text-sm"><span className="font-medium">Breed:</span> {pet.breed}</p>
                            <p className="text-sm"><span className="font-medium">Age:</span> {pet.age}</p>
                        </div>

                        <CardFooter className="flex justify-between items-center">
                            {/* <span className="text-sm text-gray-400">Available for adoption</span> */}
                            <Button className={'bg-[#7C5C2E] btn border-none'}>Adopt Me</Button>
                        </CardFooter>
                    </div>

                </Card>
            </div>
        </div>
    )
}
