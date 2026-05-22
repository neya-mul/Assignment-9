'use client'
import React, { useEffect, useState } from 'react'

export default function RequestModal({ pet }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/adoption-requests/pet/${pet._id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [pet._id])
    console.log(users);

    const handleApprove = async (userId) => {
        const res = await fetch(`http://localhost:5000/adoption-requests/${userId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Approved' })
        })
        await res.json()
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, status: 'Approved' } : u))
        alert('done')

    }


    const handleReject = async (userId) => {
        const res = await fetch(`http://localhost:5000/adoption-requests/${userId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Rejected' })
        })
        await res.json()
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, status: 'Rejected' } : u))
    }


    return (
        <div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="bg-blue-500 hover:bg-blue-600 w-full text-white py-2 rounded-xl text-sm font-medium transition" onClick={() => document.getElementById('my_modal_1').showModal()}>Requests</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    {users.length === 0 && (
                        <p className="text-gray-400 text-sm">No requests yet.</p>

                    )}
                    <div className="space-y-4">
                        {
                            users.map((user, index) => (
                                <div
                                    key={index}
                                    className="bg-[#132347] border border-[#243b6b] rounded-2xl p-5 shadow-md"
                                >
                                    {/* Top Section */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-white font-semibold text-lg">
                                                {user.adopterName}
                                            </h2>

                                            <p className="text-gray-400 text-sm">
                                                {user.adopterEmail}
                                            </p>
                                        </div>

                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${user.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                                            user.status === 'Rejected' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                                                'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                            }`}>
                                            {user.status || 'Pending'}
                                        </span>
                                    </div>

                                    {/* Dates */}
                                    <div className="flex justify-between mt-4 text-sm text-gray-300">
                                        <p>
                                            Pickup: {user.pickupDate}
                                        </p>

                                        <p>
                                            Requested: {user.requestDate}
                                        </p>
                                    </div>

                                    {/* Message */}
                                    <div className="mt-4 bg-[#0f1d3d] border border-[#243b6b] rounded-xl p-3">
                                        <p className="text-gray-300 italic text-sm">
                                            “{user.message}”
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-5">
                                        <button onClick={() => handleApprove(user._id)} className="flex-1 bg-emerald-500 hover:text-white py-2 rounded-xl transition">
                                            Approve
                                        </button>
                                        <button onClick={() => handleReject(user._id)} className="flex-1 border hover:text-white py-2 rounded-xl transition">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>





                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}












// className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-sm font-medium transition"