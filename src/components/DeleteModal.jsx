import React from 'react'
import toast from 'react-hot-toast'

export default function DeleteModal({ pet }) {
    const { _id, ownerName, petName } = pet
    const petId = _id?.toString()

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
            headers: { 'content-type': 'application/json' }
        })
        await res.json()
        closeModal()
        toast.warning('Pet deleted')
        window.location.reload()
    }

    return (
        <div>
            <button
                className="btn w-full bg-red-500 hover:bg-red-600 border-none py-2 rounded-xl text-sm font-medium transition"
                onClick={openModal}
            >
                Delete
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