"use client";



import { authClient } from "@/lib/auth-client";
// import { router } from "better-auth/api";
// import { router } from "better-auth/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    url: '',
    password: '',
    confirmPass: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const { name, email, url, password, confirmPass } = formData;

    if (!name || !email || !url || !password || !confirmPass) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 6 characters.');
      return; // ← fixed: was missing
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    if (!hasUppercase || !hasLowercase) {
      setError('Password must contain at least one uppercase and one lowercase letter.');
      return;
    }

    if (password !== confirmPass) {
      setError('Passwords do not match.'); // ← fixed message
      return;
    }






    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: url,
      callbackURL: "/login",
    });

    if (error) {
      alert(error.message)
      return;
    }

    else {
      router.push('/login')
    }





    // const { data, error } = await authClient.signUp.email({
    //   name,
    //   email,
    //   password,
    //   image: url,
    //   callbackURL: '/login',
    // });

    // if (error) {
    //   setError(error.message || 'Registration failed. Please try again.');
    //   return;
    // }

    // setSuccess(true); 

    // console.log(data);
    // console.log(error);




  };

  return (
    <div className='flex justify-center items-center min-h-screen pt-20 px-4'>
      <form onSubmit={onSubmit} className='max-w-xl w-full mx-auto'>
        <fieldset className="fieldset shadow-md border-[#b88e4866] rounded-box border md:p-10 p-6 bg-[#ddcca2]">
          <h1 className='text-center text-3xl font-bold mb-4'>Please Register</h1>

          {/* Error and Success Alert Displays */}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded-md mb-4 text-sm font-medium">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-600 text-white p-3 rounded-md mb-4 text-sm font-medium">
              Registration successful! Redirecting...
            </div>
          )}

          <label className="label font-medium">Name</label>
          <input
            type="text"
            className="input w-full border-[#b88e4866]"
            placeholder="Name"
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="label font-medium">Photo URL</label>
          <input
            type='url'
            className="input w-full border-[#b88e4866]"
            placeholder="Photo URL"
            name='url'
            value={formData.url}
            onChange={handleChange}
            required
          />

          <label className="label font-medium">Email</label>
          <input
            type="email"
            className="input w-full border-[#b88e4866]"
            placeholder="Email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="label font-medium">Password</label>
          <input
            type="text"
            className="input w-full border-[#b88e4866]"
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label className="label font-medium">Confirm Password</label>
          <input
            type="text"
            className="input w-full border-[#b88e4866]"
            placeholder="Confirm Password"
            name='confirmPass'
            value={formData.confirmPass}
            onChange={handleChange}
            required
          />

          <button type='submit' className="btn btn-neutral button mt-6 w-full">Register</button>

          <p className='text-sm mt-4 text-gray-800 text-center'>
            Already have an account? <Link className='text-blue-700 font-semibold underline' href='/login'>Login</Link>
          </p>

          <div className="divider">OR</div>
          {/* Google Button placeholder can go here */}
        </fieldset>
      </form>
    </div>
  );
}







// Nn1234