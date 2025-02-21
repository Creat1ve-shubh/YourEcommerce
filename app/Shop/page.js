"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className=' bg-white min-h-screen overflow-hidden'>
      <div className="container mt-[10vh] mx-auto px-4 py-8">
        <h1 className="text-3xl text-black text-center font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Tilt
              key={product.id}
              className="background-stripes track-on-window"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.75}
              glarePosition="all"
              scale={1.02}
              trackOnWindow={false}
              glareBorderRadius="20px"
            >
              <div className="border border-cyan-200 rounded-lg p-4 flex flex-col">
                <div className="relative h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-lg text-blue-800 font-semibold mb-2">{product.title}</h2>
                <p className="text-white mb-2 flex-grow">{product.description.substring(0, 100)}...</p>
                <p className="text-xl text-blue-500 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Tilt>
          ))}

        </div>
      </div>

    </div>
  )
}