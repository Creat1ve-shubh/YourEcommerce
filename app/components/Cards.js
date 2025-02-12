import React from 'react'

const Cards = () => {
  return (
    <div className='px-[40vh] py-[40vh]'>
        <div className='bg-slate-300 h-[] w-[30vh] rounded-lg'>
      <img  className="h-[20vh] w-[30vh] rounded-lg" src='https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg' alt='image' />
      <h1>Product Name</h1>
      <p>Product Description</p>
      <p>Product Price</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add to Cart</button>
    </div>
    </div>
  )
}

export default Cards
