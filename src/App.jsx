import React from 'react'
import "./App.css"
import Navbar from './components/layout/Navbar'
import LandingPage from './components/landing/LandingPage'
import TripFormpage from './components/tripForm/TripFormpage'
const App = () => {
  return (
    <>
    <Navbar/>
    {/* <LandingPage/> */}
    <TripFormpage/>

    </>
  )
}

export default App
