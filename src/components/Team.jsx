import React from 'react'
import Picture1 from '../assets/killa1.jpg'

const Team = () => {
  return (
    <div className='text-black bg-white'>
      <div className=' max-w-[1240px] m-auto'>
        <div className='max-w-[1000px] mx-auto'> 
          <h1 className='text-[#00df9a] font-bold md:text-6xl sm:text-5xl text-3xl md:py-6'>The Team</h1>
        </div>
        <div className='grid grid-cols-2 py-6'>
            <div className='flex justify-center'>
            <img className='rounded-xl w-[300px] shadow-xl mr-[-30%]' src={Picture1} alt="/" />
            </div>
            <div className='ml-[-30px] flex flex-col justify-center'>
              <h1 className='w-full text-3xl font-bold text-black'>Emmanuel Cobbinah</h1>
              <p>Managing Director</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Team