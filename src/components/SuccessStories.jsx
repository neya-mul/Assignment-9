
'use client'
import React, { useEffect, useState } from 'react'
import SuccesssStoryCard from './cardComponents/SuccesssStoryCard'
import { MdOutlinePets } from 'react-icons/md'
import { motion } from 'framer-motion'
import { FaPaw } from 'react-icons/fa'

export default function SuccessStories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}success-storie`)
            .then(res => res.json())
            .then(data => setStories(data))
    }, [])

    return (
        <div className="bg-[#FDF6EC] py-24 px-6 overflow-hidden relative">

            {/* Background glows */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F2C4A0]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#C8DFC9]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <motion.span
                    className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F] mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    ❤️ Happy Endings
                </motion.span>

                <motion.h1
                    className="text-5xl font-black text-[#3D2B1F] tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Our{' '}
                    <span className="text-[#C4844A] italic font-serif">Successful</span>
                    {' '}Stories
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-[#9E7E6A] max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Every adoption is a new beginning. Here are some of our most heartwarming ones.
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-3 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                    <FaPaw className="text-[#C4844A] text-sm" />
                    <div className="h-px w-16 bg-[#C4844A]/30 rounded-full" />
                </motion.div>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {stories.map((storie, ind) => (
                    <motion.div
                        key={ind}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{
                            duration: 0.5,
                            delay: ind * 0.1,
                            ease: 'easeOut'
                        }}
                    >
                        <SuccesssStoryCard storie={storie} />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}