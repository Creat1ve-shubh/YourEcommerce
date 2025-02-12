"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HomeText = () => {
  return (
    <div className='bg-black overflow-hidden mt-[15vh] mx-[10vh] my-[10vh] py-[30vh] px-[40vh]  rounded-lgfont-bold text-2xl shadow-md '>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'We produce food for Mice', // initially rendered starting point
      1000,
      'We produce food for Hamsters',
      1000,
      'We produce food for Guinea Pigs',
      1000,
      'We produce food for Chinchillas',
      500,
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />
</div>
  );
};

export default HomeText;