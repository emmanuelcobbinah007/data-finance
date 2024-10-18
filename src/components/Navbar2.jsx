import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'><Link to='/'>REACT.</Link></h1>
        <ul className='pr-20 hidden md:flex'>
        <Link to='/'><li className='p-4 cursor-pointer mx-[3px] hover:text-[#00df9a] duration-200'>Home</li></Link>
        <Link to='/company'><li className='p-4 cursor-pointer mx-[3px] hover:text-[#00df9a] duration-200'>Company</li></Link>
        </ul>
    </div>
  )
}

export default Navbar2