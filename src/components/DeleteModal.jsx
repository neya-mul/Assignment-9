import React from 'react'

export default function DeleteModal({ pet }) {
    const { _id, ownerName, petName } = pet

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

    const cancel = () => {
        document.getElementById('my_modal_6').checked = false;

    }
    return (
        <div className='bg-white'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn w-full bg-red-500 hover:bg-red-600 border-none text-white py-2 rounded-xl text-sm font-medium transition">Delete</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                    <p>Hey <span className='font-bold'>{ownerName},</span> </p>
                    <p className="py-4">Are you sure you want to delete <span className='font-bold'>{petName}</span> from your list?</p>
                    {/* <p>It is not recoverable if you delete this once</p> */}
                    <div className="modal-action flex ">
                        <button className='btn w-full flex-1' onClick={cancel}>Cancel</button>

                        <label htmlFor="my_modal_6" className="btn flex-1" onClick={deleteButton}>Confirm Delete</label>
                    </div>
                </div>
            </div>

        </div>
    )
}
