'use client'
import MyList from '@/components/MyList'
import React, { useState } from 'react'

export default function Dashboard() {
    const [section, setSection] = useState('list')
    return (
        <div className='pt-[90px]'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content" style={{ display: 'block' }}>
                    <div className="w-full p-6">
                        {section === 'list' && <MyList />}
                        {section === 'item' && <h1 className='text-7xl text-black'>Islam</h1>}
                    </div>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        <li><button onClick={() => setSection('list')}>My List</button></li>
                        <li><button onClick={() => setSection('item')}>Sidebar Item 2</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}