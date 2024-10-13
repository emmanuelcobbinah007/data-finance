import React from 'react'
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import EmailForm from "../components/EmailForm";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <div className=" text-white">
      <Hero />
      <Analytics />
      <EmailForm />
      <Cards />
    </div>
  )
}

export default HomePage