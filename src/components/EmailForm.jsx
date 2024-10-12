import React from 'react'

const EmailForm = () => {
  return (
    <div className='w-full py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 py-4'>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flec-col sm:flex-row items-center justify-between w-full'>
                    <input className='rounded-md p-3 flex w-full text-black' type="text" placeholder='Enter your email'/>
                    <button className='rounded-md font-semibold text-black bg-[#00df9a] w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <a href="#" className='underline text-[#00df9a]'>Privacy Policy</a> </p>
            </div>
        </div>  

    </div>
  )
}

export default EmailForm