import React from 'react'

const Hero = () => {
  return (
    
    <section className='w-full flex flex-col items-center justify-center text-center bg-Navy text-white  px-5 py-10  gap-5 rounded-xl xl:px-50 xl:py-20   '>
          <h1 className='text-4xl md:text-6xl font-bold '>Your next adventure, curated by intelligence.</h1>
          <p className='text-sm font-light'>   Skip hours of researching, budgeting, and mapping. Get a fully optimized, interactive travel itinerary tailored perfectly to your vibe in 10 seconds.</p>
          <button className='bg-Orange px-3 py-1 rounded-md font-Inter cursor-pointer  border  hover:border-Mint '>˙✦  Create Your Trip — It's Free</button>
          <p className='text-xs -mt-3 font-extralight'>⚡ No credit card required. Built purely on the frontend.</p>
    </section>
  )
}

export default Hero
