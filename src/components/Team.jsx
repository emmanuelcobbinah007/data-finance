import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Picture1 from '../assets/killa1.jpg';
import HS1 from '../assets/headshots/JohnDoe.jpeg'
import HS2 from '../assets/headshots/johnDoe2.jpg'
import HS3 from '../assets/headshots/JohnDoe3.jpeg'
import HS4 from '../assets/headshots/JohnDoe4.jpg'
import HS5 from '../assets/headshots/JaneDoe.jpg'
import HS6 from '../assets/headshots/JaneDoe2.jpg'
import HS7 from '../assets/headshots/JaneDoe3.jpg'
import HS8 from '../assets/headshots/JaneDoe4.jpg'

const Team = () => {

  const [arrow, setArrow] = useState(true);

  const turn = () => {
    setArrow(!arrow);
  }

  const people = [
    {id: 1, name: "Lucas Moretti", role: "CEO", img: HS1},
    {id: 2, name: "Alejandro Garcia", role: "Chief Financial Officer", img: HS2},
    {id: 3, name: "Ethan Williams", role: "Marketing Manager", img: HS3},
    {id: 4, name: "Nikolai Ivanov", role: "Head of Operations", img: HS4},
    {id: 5, name: "Isabella Rossi", role: "Human Resources Manager", img: HS5},
    {id: 6, name: "Sofia Martinez", role: "Project Coordinator", img: HS6},
    {id: 7, name: "Amelie Dupont", role: "Sales Director", img: HS7},
    {id: 8, name: "Yuna Nakamura", role: "Chief Technology Officer", img: HS8}
  ]

  return (
    <div className='text-black bg-white'>
      <div className=' max-w-[1240px] m-auto'>
        <div className='relative z-10 bg-white max-w-full pt-10 mx-auto lg:text-left text-center'> 
          <h1 className='text-[#00df9a] font-bold md:text-6xl sm:text-5xl text-3xl md:py-6'>The Team</h1>
        </div>
        <div className='relative z-10 grid grid-cols-2 pt-10 pb-24 bg-white'>
            <div className='flex justify-center'>
            <img className='rounded-xl lg:w-[300px] md:w-[250px] shadow-xl mr-[-25%]' src={Picture1} alt="/" />
            </div>
            <div className='ml-[-35%] flex flex-col justify-center '>
              <h1 className='w-full lg:text-4xl md:text-3xl font-bold text-black text-center'>Emmanuel Cobbinah</h1>
              <p className='text-[#00df9a] font-bold text-center'>Founder, Managing Director</p>
            </div>
          </div>
          <div className={`relative z-5 ease-in-out duration-300 ${arrow ? 'mt-[-660px]' : 'mt-2 my-8 flex flex-col justify-center'}`}>
          <div className='grid grid-cols-4 gap-20 mx-auto'>
            {people.map(person => (
              <div className='text-center' key={person.id}>
                <img className='w-[225px] rounded-lg shadow-md' src={person.img} alt="/" />
                <h1 className='pt-2 w-full lg:text-xl md:text-lg font-bold'>{person.name}</h1>
                <p className='text-[#00df9a] font-bold '>{person.role}</p>
              </div>))} 
          </div>
          </div>
          <div className='max-w-[1240px] pt-[60px]' onClick={turn}>
            {arrow ? <FaAngleDown className='text-4xl mx-auto'/> : <FaAngleUp className='text-4xl mx-auto'/> }
          
          </div>
      </div>
    </div>
  )
}

export default Team