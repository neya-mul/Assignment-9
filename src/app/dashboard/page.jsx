'use client'
import MyList from '@/components/MyList'
import React, { useState } from 'react'
// import AddPets from '../add-pets/page'
// import MyRequest from '../my-requests/page'
import { FaPaw, FaPlus, FaList, FaHeart } from 'react-icons/fa'
import AddPets from '../add-pets/page'
import MyRequest from '../my-requests/page'

const navItems = [
  { key: 'list',        label: 'My List',      icon: <FaList /> },
  { key: 'add-pets',    label: 'Add a Pet',    icon: <FaPlus /> },
  { key: 'my-requests', label: 'My Requests',  icon: <FaHeart /> },
]

export default function Dashboard() {
  const [section, setSection] = useState('list')

  return (
    <div className="mt-[90px] min-h-screen bg-[#FDF6EC]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* ── Mobile top bar ── */}
        <div className="drawer-content" style={{ display: 'block' }}>
          <div className="flex items-center justify-between px-5 py-4 bg-[#FFFDF8] border-b border-[#E2D8C5] lg:hidden">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#C4844A] flex items-center justify-center shadow">
                <FaPaw className="text-white text-sm" />
              </div>
              <span className="font-bold text-[#3D2B1F] text-lg">Dashboard</span>
            </div>
            <label htmlFor="my-drawer-3" className="cursor-pointer flex flex-col gap-1.5 p-1">
              <span className="block w-6 h-0.5 bg-[#C4844A] rounded-full" />
              <span className="block w-6 h-0.5 bg-[#C4844A] rounded-full" />
              <span className="block w-4 h-0.5 bg-[#C4844A] rounded-full" />
            </label>
          </div>

          {/* ── Main content ── */}
          <div className="w-full">
            {section === 'list'        && <MyList />}
            {section === 'add-pets'    && <AddPets />}
            {section === 'my-requests' && <MyRequest />}
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" />

          <aside className="min-h-full w-72 bg-[#FFFDF8] border-r border-[#E2D8C5] shadow-[4px_0_24px_rgba(196,132,74,0.07)] flex flex-col">

            {/* Sidebar header */}
            <div className="px-6 py-6 border-b border-[#E2D8C5]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C4844A] flex items-center justify-center shadow-[0_4px_12px_rgba(196,132,74,0.35)]">
                  <FaPaw className="text-white text-base" />
                </div>
                <div>
                  <p className="font-black text-[#3D2B1F] text-lg leading-tight">Pet Nest</p>
                  <p className="text-xs text-[#9E7E6A]">My Dashboard</p>
                </div>
              </div>
            </div>

            {/* Nav label */}
            <div className="px-6 pt-6 pb-2">
              <p className="text-xs font-bold text-[#9E7E6A] uppercase tracking-widest">Navigation</p>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-1 px-3 flex-1">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => setSection(item.key)}
                  className={`group w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 text-left
                    ${section === item.key
                      ? 'bg-[#C4844A] text-white shadow-[0_4px_16px_rgba(196,132,74,0.3)]'
                      : 'text-[#7A6A50] hover:bg-[#F6F1E8] hover:text-[#C4844A]'
                    }`}
                >
                  <span className={`text-base transition-transform duration-200 ${section === item.key ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {item.icon}
                  </span>
                  {item.label}

                  {/* Active indicator dot */}
                  {section === item.key && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-white opacity-80" />
                  )}
                </button>
              ))}
            </nav>

            {/* Sidebar footer */}
            <div className="px-6 py-5 border-t border-[#E2D8C5] mt-auto">
              <div className="flex items-center gap-2 text-xs text-[#9E7E6A]">
                <FaPaw className="text-[#C4844A] text-xs" />
                <span>Pet Nest — Made with love 🐾</span>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}

