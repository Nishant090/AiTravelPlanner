import React from 'react'
import Hero from './Hero'
import FeatureCard from './FeatureCard'

const LandingPage = () => {
  return (
    <>
    <div className=' w-full max-w-3xl mx-auto flex flex-col justify-center items-center p-5  font-Inter  min-h-screen xl:max-w-6xl'>
        <Hero/>
        <FeatureCard/>
    </div>
    </>
  )
}

export default LandingPage

