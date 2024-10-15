import React from 'react'
import AboutCompany from '../components/AboutCompany'
import Blog from '../components/Blog'
import Team from '../components/Team'

const CompanyPage = () => {
  return (
    <div className='text-white'>
        <AboutCompany/>
        <Team />
        <Blog />
    </div>
  )
}

export default CompanyPage