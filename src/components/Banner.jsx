'use client'
import React from 'react'
import hero from '../../public/hero.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className='bg-[#fcf0de] px-4 md:px-8'>
            <div className="min-h-screen text-center lg:text-left py-10 lg:py-0 flex flex-col lg:flex-row gap-10 lg:gap-20 w-full justify-around container mx-auto items-center">

                {/* ── Left text side ── */}
                <motion.div
                    className="space-y-5 text-[#3E2C20] max-w-[600px]"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center rounded-full bg-[#F2C4A0] border border-[#C4844A]/30 px-5 py-2 text-sm font-semibold text-[#3D2B1F]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        🐾 Find Your Match
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#3D2B1F]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Find Your{' '}
                        <span className="text-[#C4844A] italic font-serif">Forever</span>
                        <br /> Companion
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="max-w-xl text-sm md:text-base text-[#7A6A50] leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        Thousands of lovable pets are waiting for a place to call home.
                        Connect with local shelters and open your heart to a lifetime of
                        unconditional love.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link href="/all-pets">
                            <motion.button
                                className="relative overflow-hidden bg-[#3D2B1F] hover:bg-[#C4844A] text-[#FDF6EC] font-semibold px-8 py-3 rounded-2xl transition-all duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700" />
                                <span className="relative flex items-center gap-2">
                                    🐾 Adopt Now
                                </span>
                            </motion.button>
                        </Link>

                        <Link href="/all-pets">
                            <motion.button
                                className="bg-transparent border-2 border-[#C4844A]/40 hover:border-[#C4844A] text-[#3D2B1F] hover:text-[#C4844A] font-semibold px-8 py-3 rounded-2xl transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Browse Pets →
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        className="flex gap-8 justify-center lg:justify-start pt-4 border-t border-[#C4844A]/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {[
                            { num: '12K+', label: 'Happy Pets' },
                            { num: '850+', label: 'Verified Homes' },
                            { num: '98%', label: 'Satisfaction' },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                className="text-center lg:text-left"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                            >
                                <p className="text-2xl font-black text-[#3D2B1F]">{s.num}</p>
                                <p className="text-xs text-[#9E7E6A] font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Right image side ── */}
                <motion.div
                    className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] aspect-square"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    {/* Spinning dashed ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-dashed border-[#C4844A]/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Outer glow */}
                    <motion.div
                        className="absolute inset-2 rounded-full bg-[#F2C4A0]/20 blur-2xl"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Image circle */}
                    <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden border-4 md:border-8 border-white shadow-2xl"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        animate={{ y: [0, -10, 0] }}
                    >
                        <div className="absolute inset-0 bg-[#FFD8A8] blur-3xl opacity-40 rounded-full" />
                        <Image
                            src={hero}
                            alt="Cute pets"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Floating badge 1 */}
                    <motion.div
                        className="absolute -bottom-4 -left-4 bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl px-4 py-2.5 shadow-[0_4px_20px_rgba(196,132,74,0.15)] flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                        transition={{
                            opacity: { delay: 0.8, duration: 0.4 },
                            scale: { delay: 0.8, duration: 0.4 },
                            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }
                        }}
                    >
                        <span className="text-xl">🏡</span>
                        <div>
                            <p className="text-xs font-bold text-[#3D2B1F]">Safe Homes</p>
                            <p className="text-[10px] text-[#9E7E6A]">850+ verified</p>
                        </div>
                    </motion.div>

                    {/* Floating badge 2 */}
                    <motion.div
                        className="absolute -top-4 -right-4 bg-[#C4844A] text-white rounded-2xl px-4 py-2.5 shadow-[0_4px_20px_rgba(196,132,74,0.35)] flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                        transition={{
                            opacity: { delay: 1, duration: 0.4 },
                            scale: { delay: 1, duration: 0.4 },
                            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
                        }}
                    >
                        <span className="text-xl">🐾</span>
                        <div>
                            <p className="text-xs font-bold">12K+ Pets</p>
                            <p className="text-[10px] text-white/70">Happy tails</p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </div>
    )
}