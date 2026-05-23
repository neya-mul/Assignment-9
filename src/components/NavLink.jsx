'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({ href, children }) {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link
            href={href}
            className={`
        px-5 py-2 rounded-full font-medium
        transition-all duration-300
        hover:bg-[#F3E4D1]
        border
        hover:text-[#D97706]
        hover:shadow-md
        active:scale-95
        ${isActive
                    ? "bg-[#F3E4D1] text-[#D97706]"
                    : "text-[#9b8575] mx-2 border"
                }
    `}
        >
            {children}
        </Link>
    )
}
