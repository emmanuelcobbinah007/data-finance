import React from 'react'

const Blog = () => {
  return (
    <div className=' text-black bg-white pb-12'>
        <div className=' max-w-[1000px] m-auto'>
          <h1 className='text-black font-bold md:text-6xl sm:text-5xl text-3xl md:py-6 lg:text-right text-center'>Our Blog...</h1>
      </div>
        <div className='max-w-[1200px] mx-6 my-12 px-4 md:mx-auto grid md:grid-cols-3 gap-6'>
            <div className='bg-gray-200 rounded-md px-6 pt-4 shadow-xl flex flex-col'>
                <h1 className='font-bold text-2xl px-3 pt-4 pb-2 text-center'>Blog 1</h1>
                <h2 className='px-3 py-2 text-lg font-bold'>Evolution of React Jobs</h2>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
            <div className='bg-gray-200 rounded-md px-6 pt-4 shadow-xl flex flex-col'>
                <h1 className='font-bold text-2xl px-3 pb-2 pt-4 text-center'>Blog 2</h1>
                <h2 className='px-3 py-2 text-lg font-bold'>Evolution of React Jobs</h2>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
            <div className='bg-gray-200 rounded-md px-6 pt-4 shadow-xl flex flex-col'>
                <h1 className='font-bold text-2xl px-3 pt-4 pb-2 text-center'>Blog 3</h1>
                <h2 className='px-3 py-2 text-lg font-bold'>Evolution of React Jobs</h2>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
        </div>
        <div className='flex justify-center'>
        <button className='text-[#00df9a] bg-white w-[180px] md:mx-0 m-auto rounded-md px-6 py-3 my-4 hover:shadow-xl duration-300 font-bold'>View All Blogs</button>  
        </div>   
        
    </div>
  )
}

export default Blog