'use client'
import { authClient } from '@/lib/auth-client'
import { betterAuth } from 'better-auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function Login() {
  const auth = betterAuth

  const googleButton = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const router = useRouter()

  const loginButton = async (e) => {
    e.preventDefault()
    const password = e.target.password.value
    const email = e.target.email.value


    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: '/',
    });

    console.log(data);
    if (error) {
      alert(error.message)
    }
    else {
      router.push('/')

    }



  }
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      <form action="" onSubmit={loginButton} className='max-w-xl w-full mx-auto'>
        <fieldset className="fieldset bg-[#1C1B1F] border-[#b88e4866] shadoww rounded-box border md:p-10 p-6  ">
          <h1 className='text-center text-3xl'>Please Login</h1>

          <label className="label ">Email</label>
          <input type="email" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Email" name='email' />

          <label className="label">Password</label>
          <input type="password" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Password" name='password' />

          <button className="btn btn-neutral mt-4 button" type='submit'>Login</button>
          <p className='text-sm mt-3'>Don't have any account? <span className='text-[#b59e1c]'><Link href='/register'>Register</Link></span></p>

          <div className="divider">OR</div>
          <button type='button' onClick={googleButton} className='btn btn-neutral w-full border flex items-center button'><FaGoogle />
            Log in with Google</button>
        </fieldset>

      </form>

    </div>
  )
}
