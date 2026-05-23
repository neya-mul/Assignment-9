'use client'
import React, { useEffect, useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoCalendar } from 'react-icons/io5'

export default function RequestModal({ pet }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}adoption-requests/pet/${pet._id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [pet._id])

    const handleApprove = async (userId) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}adoption-requests/${userId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Approved' })
        })
        await res.json()
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, status: 'Approved' } : u))
        alert('done')
    }

    const handleReject = async (userId) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}adoption-requests/${userId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Rejected' })
        })
        await res.json()
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, status: 'Rejected' } : u))
    }

    return (
        <div>
            {/* Trigger button */}
            <button
                onClick={() => document.getElementById(`request_modal_${pet._id}`).showModal()}
                className="relative w-full overflow-hidden bg-[#F2C4A0]/40 hover:bg-[#C4844A] border border-[#C4844A]/30 hover:border-[#C4844A] text-[#8B5E3C] hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer group"
            >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-1.5">
                     Requests
                    {users.length > 0 && (
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C4844A] group-hover:bg-white text-white group-hover:text-[#C4844A] text-[10px] font-bold transition-colors duration-300">
                            {users.length}
                        </span>
                    )}
                </span>
            </button>

            {/* Modal */}
            <dialog id={`request_modal_${pet._id}`} className="modal">
                <div className="modal-box bg-[#FFFDF8] border border-[#E2D8C5] rounded-3xl shadow-[0_20px_60px_rgba(196,132,74,0.15)] p-0 max-w-lg overflow-hidden">

                    {/* Modal header */}
                    <div className="px-7 py-5 border-b border-[#E2D8C5] bg-[#F6F1E8] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#C4844A] flex items-center justify-center shadow">
                                <FaPaw className="text-white text-sm" />
                            </div>
                            <div>
                                <h3 className="font-black text-[#3D2B1F] text-base leading-tight">
                                    Adoption Requests
                                </h3>
                                <p className="text-xs text-[#9E7E6A]">{pet.petName}</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-[#C4844A] bg-[#F2C4A0]/50 border border-[#C4844A]/20 px-3 py-1 rounded-full">
                            {users.length} {users.length === 1 ? 'Request' : 'Requests'}
                        </span>
                    </div>

                    {/* Modal body */}
                    <div className="px-7 py-6 max-h-[60vh] overflow-y-auto space-y-4">

                        {/* Empty state */}
                        {users.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-4xl mb-3">🐾</div>
                                <p className="text-sm font-semibold text-[#3D2B1F]">No requests yet</p>
                                <p className="text-xs text-[#9E7E6A] mt-1">Adoption requests will appear here.</p>
                            </div>
                        )}

                        {users.map((user, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#E2D8C5] rounded-2xl p-5 shadow-[0_2px_12px_rgba(196,132,74,0.06)] transition-all duration-300 hover:border-[#C4844A]/30 hover:shadow-[0_4px_20px_rgba(196,132,74,0.1)]"
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        {/* Avatar + name */}
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-8 h-8 rounded-full bg-[#C4844A] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                {user.adopterName?.[0]?.toUpperCase() ?? 'U'}
                                            </div>
                                            <h2 className="text-sm font-bold text-[#3D2B1F]">
                                                {user.adopterName}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-1 ml-10">
                                            <MdEmail className="text-[#C4844A] text-xs" />
                                            <p className="text-xs text-[#9E7E6A]">{user.adopterEmail}</p>
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border flex-shrink-0 ${
                                        user.status === 'Approved'
                                            ? 'bg-[#C8DFC9]/40 text-[#4A7A4E] border-[#7A9E7E]/30'
                                            : user.status === 'Rejected'
                                            ? 'bg-red-50 text-red-400 border-red-100'
                                            : 'bg-[#F5DBA8]/40 text-[#8B6914] border-[#E8A94F]/30'
                                    }`}>
                                        {user.status || 'Pending'}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-[#E2D8C5] mb-3" />

                                {/* Dates */}
                                <div className="flex gap-4 mb-3">
                                    <div className="flex items-center gap-1.5 text-xs text-[#7A6A50]">
                                        <IoCalendar className="text-[#C4844A]" />
                                        <span>Pickup: <span className="font-semibold text-[#3D2B1F]">{user.pickupDate}</span></span>
                                    </div>
                                    {user.requestDate && (
                                        <div className="flex items-center gap-1.5 text-xs text-[#7A6A50]">
                                            <IoCalendar className="text-[#9E7E6A]" />
                                            <span>Requested: <span className="font-semibold text-[#3D2B1F]">{user.requestDate}</span></span>
                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="bg-[#F6F1E8] border border-[#E2D8C5] rounded-xl p-3 mb-4">
                                    <p className="text-xs text-[#7A6A50] italic leading-relaxed">
                                        "{user.message}"
                                    </p>
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-2.5">
                                    <button
                                        onClick={() => handleApprove(user._id)}
                                        disabled={user.status === 'Approved' || user.status === 'Rejected'}
                                        className="relative flex-1 overflow-hidden bg-[#C8DFC9]/40 hover:bg-[#7A9E7E] border border-[#7A9E7E]/30 hover:border-[#7A9E7E] text-[#4A7A4E] hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer group/approve disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover/approve:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                                        <span className="relative">✓ Approve</span>
                                    </button>
                                    <button
                                        onClick={() => handleReject(user._id)}
                                        disabled={user.status === 'Approved' || user.status === 'Rejected'}
                                        className="relative flex-1 overflow-hidden bg-red-50 hover:bg-red-500 border border-red-100 hover:border-red-500 text-red-400 hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer group/reject disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover/reject:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                                        <span className="relative">✕ Reject</span>
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Modal footer */}
                    <div className="px-7 py-4 border-t border-[#E2D8C5] bg-[#F6F1E8]">
                        <form method="dialog" className="flex justify-end">
                            <button className="px-6 py-2.5 bg-[#3D2B1F] hover:bg-[#C4844A] text-[#FDF6EC] text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98]">
                                Close
                            </button>
                        </form>
                    </div>

                </div>

                {/* Backdrop close */}
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}