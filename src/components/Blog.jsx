import React from 'react'

const Blog = () => {
  return (
    <div className=' text-black bg-white pb-12 justify-center flex flex-col items-center'>
        <div className='max-w-[1240px] px-4 mx-auto grid md:grid-cols-3 gap-6'>
            <div className='my-12 bg-gray-200 rounded-md px-6 pt-4 shadow-xl'>
                <h1 className='font-bold text-2xl px-3 py-4'>Blog 1</h1>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
            <div className='my-12 bg-gray-200 rounded-md px-6 pt-4 shadow-xl'>
                <h1 className='font-bold text-2xl px-3 py-4'>Blog 2</h1>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
            <div className='my-12 bg-gray-200 rounded-md px-6 pt-4 shadow-xl'>
                <h1 className='font-bold text-2xl px-3 py-4'>Blog 3</h1>
                <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia deleniti officiis, assumenda asperiores quo alias expedita temporibus.</p>
                <p className='px-3'>in sapiente nihil, dolor molestiae doloribus totam praesentium? Voluptatem tenetur officiis voluptate</p>
                <button className='rounded-md font-medium text-black bg-[#00df9a] w-[160px] my-6 mx-auto px-6 py-3'>Read More</button>
            </div>
        </div>
        <button className='text-[#00df9a] bg-black w-[180px] md:mx-0 m-auto rounded-md px-6 py-3 my-4'>View All Blogs</button>     
        
    </div>
  )
}

export default Blog