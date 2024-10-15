import React from 'react'
import team from '../assets/team.jpg'

const AboutCompany = () => {
  return (
    <div>
        <div className='hidden lg:h-full lg:w-full lg:max-w-[1240px] lg:mx-auto lg:my-1 lg:grid lg:grid-cols-2 lg:py-3 lg:px-5 lg:pb-6'>
            <div className='col-span-1 p-6 text-center'>
            <h1 className='font-bold md:text-4xl sm:text-1xl text-2xl md:py-4'>Who are we?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea voluptates laboriosam nam tempore numquam autem corrupti doloribus facere earum consequuntur dicta minus rerum, officiis nulla veritatis quae doloremque delectus. Ex repellat laboriosam necessitatibus labore nemo placeat reiciendis obcaecati. Expedita molestias facilis molestiae asperiores, eveniet recusandae soluta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, ipsam laboriosam quis cum cupiditate explicabo repudiandae earum excepturi laudantium unde sed illo deserunt delectus repellendus culpa eum dicta? Similique quam voluptatum aliquid quaerat? Optio tenetur recusandae excepturi, labore et, voluptas animi rerum, at quaerat dignissimos amet! Corrupti nulla ea nobis mollitia dicta asperiores eligendi accusamus minus deleniti eius.</p>
            </div>
            <div className='px-12 py-20'>
            <img src={team} alt="/"  className='w-[500px] bg-white mx-auto rounded-md hover:scale-105 duration-300'/> 
            </div>
        </div>
        <div className='lg:hidden w-full max-w-[1240px] mx-auto my-3 grid py-3 px-5'>
            <div className='px-12 py-3'>
            <img src={team} alt="/"  className='w-[500px] bg-white mx-auto rounded-md'/> 
            </div>
            <div className='col-span-1 p-6 text-center'>
            <h1 className='font-bold md:text-4xl sm:text-1xl text-2xl md:py-4'>Who are we?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea voluptates laboriosam nam tempore numquam autem corrupti doloribus facere earum consequuntur dicta minus rerum, officiis nulla veritatis quae doloremque delectus. Ex repellat laboriosam necessitatibus labore nemo placeat reiciendis obcaecati. Expedita molestias facilis molestiae asperiores, eveniet recusandae soluta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, ipsam laboriosam quis cum cupiditate explicabo repudiandae earum excepturi laudantium unde sed illo deserunt delectus repellendus culpa eum dicta? Similique quam voluptatum aliquid quaerat? Optio tenetur recusandae excepturi, labore et, voluptas animi rerum, at quaerat dignissimos amet! Corrupti nulla ea nobis mollitia dicta asperiores eligendi accusamus minus deleniti eius.</p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutCompany