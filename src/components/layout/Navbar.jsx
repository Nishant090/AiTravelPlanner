import React from 'react'
import logo from "../../assets/logo.png"
import { SlMenu } from "react-icons/sl";


const Navbar = () => {
    return (
        <>
            <header className='flex flex-row justify-between items-center p-3 shadow-xs lg:px-50 lg:shadow-xl'>
                <nav className='flex justify-center items-center cursor-pointer '>
                    <img src={logo} alt="Plane logo" className='w-15 h-15' />
                    <p className='font-Satoshi text-2xl -ml-2'>RoamAi</p>
                </nav>
                <SlMenu className='w-5 h-7 mr-3 lg:hidden md:hidden' />
                <div className='hidden md:flex gap-5 justify-center items-center'>
                    <p className=' font-Inter text-DarkSlate text-md font-light'>Explore</p>
                <button className=' py-1 px-3 bg-Navy text-white  text-md rounded-md font-Inter font-light cursor-pointer'>My Trips</button>
                </div>
            </header>

        </>
    )
}

export default Navbar
