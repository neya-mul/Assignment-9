import React from 'react'

export default function DeleteModal({ pet }) {
    const { _id } = pet

    const deleteButton = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:5000/pets/${_id}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',

                }
            }
        )
        const data = await res.json()
        document.getElementById('my_modal_6').checked = false;
        alert('data deleted')
        window.location.reload()

    }
    return (
        <div className='bg-white'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn w-full bg-red-500 hover:bg-red-600 border-none text-white py-2 rounded-xl text-sm font-medium transition">Delete</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                    <h3 className="text-lg font-bold">Hey there, </h3>
                    <p className="py-4">Are you sure you want to delete this pet?</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn" onClick={deleteButton}>Confirm Delete? </label>
                    </div>
                </div>
            </div>

        </div>
    )
}
