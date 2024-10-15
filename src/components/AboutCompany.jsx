import React from 'react'
import team from '../assets/team.jpg'

const AboutCompany = () => {
  return (
    <div>
        <div className='h-screen w-full max-w-[1240px] mx-auto grid grid-cols-5 py-6'>
            <div className='col-span-3 p-6'>
            <h1 className='font-bold md:text-4xl sm:text-1xl text-2xl md:py-4'>Who are we?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea voluptates laboriosam nam tempore numquam autem corrupti doloribus facere earum consequuntur dicta minus rerum, officiis nulla veritatis quae doloremque delectus. Ex repellat laboriosam necessitatibus labore nemo placeat reiciendis obcaecati. Expedita molestias facilis molestiae asperiores, eveniet recusandae soluta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, ipsam laboriosam quis cum cupiditate explicabo repudiandae earum excepturi laudantium unde sed illo deserunt delectus repellendus culpa eum dicta? Similique quam voluptatum aliquid quaerat? Optio tenetur recusandae excepturi, labore et, voluptas animi rerum, at quaerat dignissimos amet! Corrupti nulla ea nobis mollitia dicta asperiores eligendi accusamus minus deleniti eius.</p>
            </div>
            <div>
            <img src={team} alt="/"  className='bg-white w-[300px] mx-auto px'/>
            </div>
        </div>
    </div>
  )
}

export default AboutCompany