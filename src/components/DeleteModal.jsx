'use client'
import { authClient } from '@/lib/auth-client'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function DeleteModal({ pet }) {
    const { _id, ownerName, petName } = pet
    const petId = _id?.toString()

    const [token, setToken] = useState(null)
    useEffect(() => {
        const getToken = async () => {
            const { data: tokenData } = await authClient.token()
            setToken(tokenData?.token)
        }
        getToken()
    })

    // console.log(token);
    

    const openModal = () => {
        document.getElementById(`delete_modal_${petId}`).showModal()
    }

    const closeModal = () => {
        document.getElementById(`delete_modal_${petId}`).close()
    }

    const deleteButton = async (e) => {
        e.preventDefault()


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}pets/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`

            }
        })
        await res.json()
        closeModal()
        toast('Pet deleted')
        window.location.reload()
    }

    return (
        <div>
            <button
                onClick={openModal}
                className="relative w-full overflow-hidden bg-red-50  border  hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer group"
            >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-1.5">

                    Delete
                    <MdDeleteOutline className="text-base" />
                </span>
            </button>

            <dialog id={`delete_modal_${petId}`} className="modal">
                <div className="modal-box bg-[#6b6767]">
                    <p>Hey <span className='font-bold'>{ownerName},</span></p>
                    <p className="py-4">Are you sure you want to delete <span className='font-bold'>{petName}</span> from your list?</p>
                    <div className="modal-action flex">
                        <button className='btn w-full flex-1' onClick={closeModal}>Cancel</button>
                        <button className="btn flex-1" onClick={deleteButton}>Confirm Delete</button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}