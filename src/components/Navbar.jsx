'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'
import NavLink from './NavLink'

export default function Navbar() {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user);
    const router = useRouter()
    const logOutButton = async () => {

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                    // toast.info("Logged out successfully")
                },
            },
        });
    }
    return (

        <div className="navbar fixed top-0 z-50 px-4 lg:px-10 bg-[#FBF2E6]/90 backdrop-blur-md border-b border-[#E8D5BE] shadow-sm text-[#3E2C20]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#FBF2E6] rounded-box z-1 mt-10 h-auto w-52 p-2 shadow">

                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/all-pets'>All Pets</NavLink>
                        {/* <Link className='btn' href='/my-request'>My Requests</Link> */}
                        <NavLink href='/add-pets'>Add Pet</NavLink>
                    </ul>
                </div>
                <Image width={80} height={80} alt='logo' src={'/logo.png'} />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 bg-[#FBF2E6]">

                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/all-pets'>All Pets</NavLink>
                    {/* <Link className='mx-2 btn' href='/my-request'>My Requests</Link> */}
                    <NavLink href='/add-pets'>Add Pet</NavLink>
                    {/* <Link className='mx-2 btn' href='/login'>Login</Link> */}
                </ul>
            </div>
            <div className="navbar-end">
                {session ? (
                    <div className="flex items-center gap-2 mx-2">
                        {/* Profile picture */}
                        <div className="avatar">
                            <div className="w-9 rounded-full ring ring-[#FDF6EC] ring-offset-base-100 ring-offset-2">
                                {session.user?.image ? (
                                    <Image src={session.user.image} alt={session.user?.name ?? "User"} width={80} height={80} />
                                ) : (
                                    <div className="bg-primary text-primary-content flex items-center justify-center w-full h-full text-sm font-bold">
                                        {session.user?.name?.[0]?.toUpperCase() ?? "U"}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Dropdown toggle button */}

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-xs px-1 text-[#F2C4A0] hover:text-[#C4844A] hover:bg-transparent transition-colors duration-200">
                                ▾
                            </label>

                            <ul tabIndex={0} className="dropdown-content menu p-0 shadow-[0_8px_32px_rgba(61,43,31,0.15)] bg-[#FFFDF8] border border-[#E2D8C5] rounded-2xl w-60 mt-2 overflow-hidden">

                                {/* User info header */}
                                <li className="px-4 py-3 border-b border-[#E2D8C5] pointer-events-none bg-[#F6F1E8]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#C4844A] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                            {user.name?.[0]?.toUpperCase() ?? "U"}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-semibold text-sm text-[#3D2B1F] leading-tight truncate">{user.name}</p>
                                            <p className="text-xs text-[#9E7E6A] truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </li>

                                {/* Nav items */}
                                <div className="p-1.5 space-y-0.5">
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-[#3D2B1F] hover:bg-[#F6F1E8] hover:text-[#C4844A] transition-all duration-200 font-medium"
                                        >
                                            <span className="w-6 h-6 rounded-lg bg-[#F2C4A0]/40 flex items-center justify-center text-[#C4844A] text-xs">🏠</span>
                                            Dashboard
                                        </Link>
                                    </li>
                                </div>

                                {/* Sign out */}
                                <div className="p-1.5 border-t border-[#E2D8C5]">
                                    <li>
                                        <button
                                            onClick={logOutButton}
                                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-red-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 w-full font-medium"
                                        >
                                            <span className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-400 text-xs">→</span>
                                            Sign out
                                        </button>
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>


                ) : (
                    <div>
                        <Link className="mx-2 btn border-none bg-[#6B4226]" href="/register">Get Started</Link>

                        <Link className="mx-2 btn border-none bg-[#6B4226]" href="/login">Login</Link>
                    </div>
                )}
            </div>
        </div >

    )
}
