import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[-96px] pt-24 w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>Growing With Data Analytics</p>
        <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl md:py-4'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, flexible financing for</p>
            <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold py-4 mx-2'
              strings= {['B2B', 'B2C', 'SAAS...']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
        </div>
        <p className='md:text-xl text-large font-bold text-gray-500'>Monitor your data analytics to increase revenue fot BTB, BTC & SASS platforms</p>
        <button className='transform transition duration-500 hover:scale-110 bg-[#00df9a] w-[150px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
    </div>
  )
}

export default Hero