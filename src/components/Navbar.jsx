'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'

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

        <div className="navbar shadow-sm fixed z-50  bg-[#264653] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#264653] rounded-box z-1 mt-10 h-auto w-52 p-2 shadow">

                        <Link className='btn' href='/'>Home</Link>
                        <Link className='btn' href='/all-pets'>All Pets</Link>
                        {/* <Link className='btn' href='/my-request'>My Requests</Link> */}
                        <Link className='btn' href='/add-pets'>Add Pet</Link>
                    </ul>
                </div>
                <Image width={80} height={80} alt='logo' src={'/logo.png'} />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">

                    <Link className='mx-2 btn' href='/'>Home</Link>
                    <Link className='mx-2 btn' href='/all-pets'>All Pets</Link>
                    {/* <Link className='mx-2 btn' href='/my-request'>My Requests</Link> */}
                    <Link className='mx-2 btn' href='/add-pets'>Add Pet</Link>
                    {/* <Link className='mx-2 btn' href='/login'>Login</Link> */}
                </ul>
            </div>
            <div className="navbar-end">
                {session ? (
                    <div className="flex items-center gap-2 mx-2">
                        {/* Profile picture */}
                        <div className="avatar">
                            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                            <label tabIndex={0} className="btn btn-ghost btn-xs px-1">
                                ▾
                            </label>

                            <ul tabIndex={0} className="dropdown-content menu p-0 shadow-lg bg-base-100 border border-base-200 rounded-xl w-56 mt-2 overflow-hidden">

                                {/* User info header */}
                                <li className="px-4 py-3 border-b border-base-200 pointer-events-none">
                                    <p className="font-semibold text-sm text-base-content leading-tight">{user.name}</p>
                                    <p className="text-xs text-base-content/40 truncate">{user.email}</p>
                                </li>

                                {/* Nav items */}
                                <div className="p-1.5 space-y-0.5">
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm hover:bg-base-200 transition-colors"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>



                                </div>

                                {/* Sign out */}
                                <div className="p-1.5 border-t border-base-200">
                                    <li>
                                        <button
                                            onClick={logOutButton}
                                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-error hover:bg-error/10 transition-colors w-full"
                                        >
                                            <span className="text-base">→</span>
                                            Sign out
                                        </button>
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>


                ) : (
                    <div>
                        <Link className="mx-2 btn" href="/register">Get Started</Link>

                        <Link className="mx-2 btn" href="/login">Login</Link>
                    </div>
                )}
            </div>
        </div >

    )
}
