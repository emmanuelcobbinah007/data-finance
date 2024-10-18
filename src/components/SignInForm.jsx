import React from 'react'
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div className='max-w-[600px] mx-auto mt-6'>
        <div>
            <h1 className='font-bold md:text-4xl sm:text-1xl text-2xl md:py-4 text-center'>Welcome <span className='text-[#00df9a]'>Back!</span></h1>
        </div>
        <div className='pt-10 pb-6'>
            <input className='text-black mb-6 rounded-lg p-3 block w-[75%] mx-auto' type="email" placeholder='Email'/>
            <input className='text-black rounded-lg p-3 block w-[75%] mb-6 mx-auto' type="password" placeholder='Password'/>
            <div className='w-[80%] mx-auto text-center'>
            <a href="google.com" className='text-[#00df9a]'>Forgot password?</a>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <button className='p-4 pt-1.5 bg-white text-black rounded-lg font-bold h-9 cursor-pointer hover:bg-[#00df9a] duration-200 w-[200px] block mx-auto'>Log In</button>
            <p className=' text-center py-6'>Don't have an account, <Link to ='/sign-up' className='text-[#00df9a]'>Sign up.</Link></p>
        </div>
    </div>
  )
}

export default SignInForm