
"use client"
import React from 'react'
import HomeText from './components/HomeText'
import ComponentName from './components/products'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-yellow-500 min-h-screen overflow-hidden'>
      
      <HomeText />
      <ComponentName />
    </div>
  )
}

export default Home

