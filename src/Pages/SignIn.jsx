import React from 'react'
import Navbar2 from '../components/Navbar2'
import SignInForm from '../components/SignInForm'

const SignIn = () => {
  return (
    <div className='text-white bg-black h-screen'>
      <Navbar2 />
      <SignInForm/>
    </div>
  )
}

export default SignIn