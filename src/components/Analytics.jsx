import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='text-3xl font-bold py-1'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto quaerat architecto ad omnis consectetur delectus porro illum vel, voluptatibus sint. Error eius quo, adipisci placeat iusto delectus quisquam qui.</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics