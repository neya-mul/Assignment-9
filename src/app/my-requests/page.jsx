'use client'
import { authClient } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'

export default function MyRequest() {
  const {data: session} = authClient.useSession()
  const user = session?.user
  // console.log(user);
  

  const [requests, setRequests] = useState([])
  useEffect(() => {
    if(!user){
      return
    }
    fetch(`http://localhost:5000/adoption-requests?adopterId=${user?.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRequests(data)
      }

      )

  }, [user])

  console.log(requests);
  const statusStyle = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100  text-green-800',
    Rejected: 'bg-red-100    text-red-800',
  }


  return (
    <div className='min-h-screen mt-30'>
      <div>
        <h1 className='text-black text-5xl text-center'>Your Requests</h1>
      </div>
      <div>
       
      </div>
    </div>
  )
}




//  {requests.map((req, ind) => (
//           <div key={ind} className="grid grid-cols-4 items-center px-5 py-4 border-b border-gray-100 last:border-0">
//             <span className="font-medium text-gray-800">{req.petName}</span>
//             <span className="text-sm text-gray-500">{new Date(req?.createdAt).toLocaleDateString()}</span>
//             <span className="text-sm text-gray-500">
//               {req.pickupDate ? new Date(req.pickupDate).toLocaleDateString() : '—'}
//             </span>
//             <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${statusStyle[req.status]}`}>
//               {req.status}
//             </span>
//           </div>
//         ))}