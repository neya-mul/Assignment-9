import React from 'react'

export default function CancelModal({ req, onDelete }) {
    const openModal = () => document.getElementById(`cancel_modal_${req._id}`).showModal()
    const closeModal = () => document.getElementById(`cancel_modal_${req._id}`).close()
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/adoption-requests/pet/${req._id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        await res.json()
        closeModal()
        onDelete(req._id)
    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
                onClick={openModal}>
                Cancel
            </button>

            <dialog id={`cancel_modal_${req._id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cancel Request</h3>
                    <p className="py-4">Are you sure you want to cancel request for <span className="font-bold">{req.petName}</span>?</p>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>No, Keep it</button>
                        <button className="btn btn-error" onClick={handleDelete}>Yes, Cancel</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
