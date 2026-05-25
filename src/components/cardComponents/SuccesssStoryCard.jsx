
'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function SuccesssStoryCard({ storie }) {
    return (
        <motion.div
            className="flex justify-center mx-auto items-center p-8 bg-[#F6F1E8] rounded-3xl min-h-[520px] transition-all duration-500 hover:bg-[#F0E8D8]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="group max-w-[370px] w-full bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#E2D8C5] shadow-[0_2px_16px_0_rgba(180,160,110,0.10)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(196,132,74,0.18)] hover:border-[#C4844A]/40"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >

                {/* Image */}
                <figure className="m-0 overflow-hidden rounded-t-xl relative">
                    <Image
                        width={600}
                        height={200}
                        src={storie?.image}
                        alt={storie?.name}
                        className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-3 left-3 bg-[#3D2B1F]/80 backdrop-blur-sm text-[#FDF6EC] text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        📅 {storie.adoptedDate}
                    </div>

                    <div className="absolute top-3 right-3 bg-[#C4844A] text-[#FDF6EC] text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        📍 {storie.location}
                    </div>
                </figure>

                <div className="p-6">

                    {/* Name */}
                    <motion.h2
                        className="text-2xl font-bold text-[#3B3120] mb-1 transition-all duration-300 group-hover:text-[#C4844A] group-hover:translate-x-1"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        {storie.name}
                    </motion.h2>

                    {/* Title */}
                    <motion.p
                        className="text-sm font-semibold text-[#C4844A] mb-3 transition-all duration-300 group-hover:text-[#8B5E3C]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        {storie.title}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        className="h-px bg-[#E2D8C5] mb-4 transition-all duration-500 group-hover:bg-[#C4844A]/40 group-hover:scale-x-110 origin-left"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    {/* Story */}
                    <motion.p
                        className="text-sm leading-relaxed text-[#7A6A50] mb-5 line-clamp-3 transition-colors duration-300 group-hover:text-[#5A4A30]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                    >
                        {storie.story}
                    </motion.p>

                    {/* Meta info */}
                    <motion.div
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-xs text-[#9E7E6A] transition-all duration-300 group-hover:text-[#7A6A50]">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2C4A0]/40 text-[#C4844A]">📅</span>
                            <span>Adopted: <span className="font-semibold text-[#3B3120]">{storie.adoptedDate}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#9E7E6A] transition-all duration-300 group-hover:text-[#7A6A50]">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2C4A0]/40 text-[#C4844A]">📍</span>
                            <span>Location: <span className="font-semibold text-[#3B3120]">{storie.location}</span></span>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}