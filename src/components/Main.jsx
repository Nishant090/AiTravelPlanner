import React from 'react'
import { IoIosColorPalette } from "react-icons/io";
import { SiOrganicmaps } from "react-icons/si";
import { GiPowerLightning } from "react-icons/gi";
const Main = () => {
  return (
    <>
      <main className=' w-full max-w-3xl mx-auto flex flex-col justify-center items-center p-5  font-Inter  min-h-screen xl:max-w-6xl  '>
        <section className='w-full flex flex-col items-center justify-center text-center bg-Navy text-white  px-5 py-10  gap-5 rounded-xl xl:px-50 xl:py-20   '>
          <h1 className='text-4xl md:text-6xl font-bold '>Your next adventure, curated by intelligence.</h1>
          <p className='text-sm font-light'>   Skip hours of researching, budgeting, and mapping. Get a fully optimized, interactive travel itinerary tailored perfectly to your vibe in 10 seconds.</p>
          <button className='bg-Orange px-3 py-1 rounded-md font-Inter cursor-pointer  border  hover:border-Mint '>˙✦  Create Your Trip — It's Free</button>
          <p className='text-xs -mt-3 font-extralight'>⚡ No credit card required. Built purely on the frontend.</p>
        </section>
        <section className='mt-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className=' flex flex-col items-start justify-start shadow-md  text-left px-5 py-5 rounded-xl border-3 border-LightGrey active:scale-[0.98] transition hover:-translate-0.5'>
           <IoIosColorPalette className=' text-Navy w-8 h-8 mb-3'/>
            <h2 className='text-xl font-extrabold mb-1'>Personalized Vibes</h2>
            <p className='text-xs font-light'>Whether you are a hardcore foodie, a history buff, or looking for low-budget hidden gems, our AI tunes the itinerary to what you actually love.</p>
          </div>
          <div className='flex flex-col items-start justify-start shadow-md  text-left px-5 py-5 rounded-xl border-3 border-LightGrey active:scale-[0.98] transition  hover:-translate-0.5'>
             <SiOrganicmaps className='text-Navy w-8 h-8 mb-3'/>
            <h2 className='text-xl font-bold  mb-1 '>Smart Routing</h2>
            <p className='text-xs font-light'>No more zigzagging across town. RoamAI intelligently organizes your day by geographic proximity, keeping your travel times low and exploration time high.</p>
          </div>
           <div className=' flex flex-col items-start justify-start shadow-md  text-left px-5 py-5 rounded-xl border-3 border-LightGrey active:scale-[0.98] transition  hover:-translate-0.5'>
            <GiPowerLightning className='text-Navy w-8 h-8 mb-3'/>
            <h2 className='text-xl font-extrabold mb-1'>100% Client-Side Speed</h2>
            <p className='text-xs font-light'>Experience lightning-fast itinerary updates, live map pinning, and instant local storage caching without waiting on sluggish server lag.</p>
          </div>
        </section>
      </main>

    </>
  )
}

export default Main
