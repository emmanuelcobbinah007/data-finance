import React from 'react'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className='max-w-[600px] mx-auto mt-6'>
        <div>
            <h1 className='font-bold md:text-4xl sm:text-1xl text-2xl md:py-4 text-center'>Let's Sign You  <span className='text-[#00df9a]'>Up!</span></h1>
        </div>
        <div className='pt-10 pb-6'>
            <input className='text-black mb-6 rounded-lg p-3 block w-[75%] mx-auto' type="email" placeholder='Email'/>
            <input className='text-black rounded-lg p-3 block w-[75%] mb-6 mx-auto' type="password" placeholder='Password'/>
            <input className='text-black rounded-lg p-3 block w-[75%] mb-6 mx-auto' type="password" placeholder='Confirm Password'/>
        </div>
        <div className='flex flex-col justify-center'>
            <button className='p-4 pt-1.5 bg-white text-black rounded-lg font-bold h-9 cursor-pointer hover:bg-[#00df9a] duration-200 w-[200px] block mx-auto'>Sign Up</button>
            <p className=' text-center py-6'>Already have an account, <Link to ='/sign-in' className='text-[#00df9a]'>Sign in.</Link></p>
        </div>
    </div>
  )
}

export default SignUpForm