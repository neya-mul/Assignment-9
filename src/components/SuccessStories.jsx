import React from 'react'
import SuccesssStoryCard from './cardComponents/SuccesssStoryCard'

export default async function SuccessStories() {
    const res = await fetch('http://localhost:5000/success-storie')
    const stories = await res.json()
    // console.log(storie);

    return (
        <div>
            <div>
                <h1 className='text-5xl text-center text-black'>            Our Successfull Stories
                </h1>
            </div>

            <div>
                {
                    stories.map((storie, ind) => <SuccesssStoryCard key={ind} storie={storie}></SuccesssStoryCard>)
                }

            </div>

        </div>
    )
}
