
"use client"
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div className='bg-black min-h-screen overflow-hidden'>

      <Navbar />
      <Hero />
    </div>
  )
}

export default Home

