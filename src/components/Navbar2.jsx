import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar2 = () => {

    const [nav, setNav] = useState(false);

    const navHandler = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'><Link to='/'>REACT.</Link></h1>
        <ul className='pr-20 hidden md:flex'>
        <Link to='/'><li className='p-4 cursor-pointer mx-[3px] hover:text-[#00df9a] duration-200'>Home</li></Link>
        <Link to='/company'><li className='p-4 cursor-pointer mx-[3px] hover:text-[#00df9a] duration-200'>Company</li></Link>
        </ul>

        <div onClick={navHandler} className='block md:hidden cursor-pointer hover:text-[#00df9a] duration-200'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}    
        </div>

        <div className={`fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 ${nav ? 'left-0' : 'left-[-100%]'} md:hidden`}>
        <h1 className='m-4 w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='uppercase p-4'>
            <Link to='/'><li className='duration-200 p-4 border-b border-b-gray-600 cursor-pointer hover:text-[#00df9a]'>Home</li></Link>
            <Link to='/company'><li className='duration-200 p-4 border-b border-b-gray-600 cursor-pointer hover:text-[#00df9a]'>Company</li></Link>
            <li className='p-4 border-b border-b-gray-600 cursor-pointer hover:text-[#00df9a] duration-200'>Resources</li>
            <li className='p-4 border-b border-b-gray-600 cursor-pointer hover:text-[#00df9a] duration-200'>About</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a] duration-200'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2