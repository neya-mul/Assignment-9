import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
     
                <div className="navbar shadow-sm fixed z-90  bg-[#264653] ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-[#264653] rounded-box z-1 mt-10 h-screen w-52 p-2 shadow">
                                <Link className='btn' href='/'>Home</Link>
                                <Link className='btn' href='/all-pets'>All Pets</Link>
                                <Link className='btn' href='/my-req'>My Requests</Link>
                                <Link className='btn' href='/add-pets'>Add Pet</Link>
                            </ul>
                        </div>
                        <Image width={80} height={80} alt='logo' src={'/logo.png'} />
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            <Link className='mx-2 btn' href='/'>Home</Link>
                            <Link className='mx-2 btn' href='/all-pets'>All Pets</Link>
                            <Link className='mx-2 btn' href='/my-req'>My Requests</Link>
                            <Link className='mx-2 btn' href='/add-pets'>Add Pet</Link>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            
    )
}
