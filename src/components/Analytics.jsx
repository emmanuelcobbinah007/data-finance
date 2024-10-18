import React from 'react'
import Laptop from '../assets/laptop.jpg'
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center pt-2 md:w-[100%] w-[90%] mx-auto'>
                <p className='uppercase text-[#00df9a] font-bold md:text-left text-center'>Data Analytics Dashboard</p>
                <h1 className='md:text-3xl text-2xl font-bold py-1 md:text-left text-center'>Manage Data Analytics Centrally</h1>
                <p className='md:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto quaerat architecto ad omnis consectetur delectus porro illum vel, voluptatibus sint. Error eius quo, adipisci placeat iusto delectus quisquam qui.</p>
                <button className='text-[#00df9a] bg-black w-[180px] md:mx-0 m-auto rounded-md py-2 my-4'><Link to='/sign-up'>Get Started</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Analytics