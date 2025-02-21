"use client"
import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className="fixed  z-10 top-0 left-1/2 hover:bg-zinc-700 hover:scale-125 duration-300 shadow-lg m-8 transform -translate-x-1/2 bg-transparent text-white py-2 px-8 rounded-md">
      <ul className="flex flex-row items-center  text-black justify-center space-x-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Shop">Shop</Link>
        </li>
        <li>
          <Link href="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link href="/Cart">Cart</Link>
        </li>
        <button className='bg-blue-500 text-white px-8 py-2 rounded-md'>
          <Link href="/Auth">Login/Signup</Link>
        </button>
      </ul>
    </nav>
  )
}

export default Navbar
