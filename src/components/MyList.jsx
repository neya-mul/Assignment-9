'use client'
import { authClient } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'
import Mypet from './cardComponents/Mypet'

export default function MyList() {

  const { data: session } = authClient.useSession()
  const [pets, setPets] = useState([])

  useEffect(() => {
    if (session?.user?.id) {
      fetch(`http://localhost:5000/pets?ownerId=${session.user.id}`)
        .then(res => res.json())
        .then(data => setPets(data))
    }
  }, [session])

  console.log(session)
  console.log(pets)

  return (
    <div className=' text-black w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        pets.map((pet, ind) => <Mypet pet={pet} key={ind}></Mypet>)
      }
    </div>
  )
}