import React from 'react'

export default function DeleteModal({ pet }) {
    return (
        <div className='bg-white'>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn w-full bg-red-500 hover:bg-red-600 border-none text-white py-2 rounded-xl text-sm font-medium transition">Delete</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal"  role="dialog">
                <div className="modal-box bg-white">
                    <h3 className="text-lg font-bold">Hey there, </h3>
                    <p className="py-4">Are you sure you want to delete this pet?</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Confirm Delete? </label>
                    </div>
                </div>
            </div>

        </div>
    )
}
