import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FormStep1Destination = () => {
    const inputClass = "border h-10 w-full px-3 rounded-md outline-none border-gray-600";
    const labelClass = "font-medium text-gray-700";
    const fieldClass = "flex flex-col items-start gap-1";
    const dateInputClass = "border h-10 w-35 px-1 rounded-md outline-none border-gray-600";
    return (
        <>
            <div className='flex flex-col justify-start items-start h-2/3 p-8 w-100% gap-5 font-Inter mt-10'>
                <button className=' flex justify-center items-center gap-2 border py-2 px-4 rounded-xl text-gray-700 font-semibold'> <FaArrowLeft/> Back</button>
              
                <p className='text-gray-700 text-sm'>Step 1 of 3 --- Destination</p>
                <form action="" className='flex flex-col items-start w-full gap-5' >
                    <div className='flex flex-col justify-start items-start w-full gap-1' >
                        <label htmlFor="where" className={labelClass}>Where to?</label>
                        <input
                            className={inputClass}
                            type="text" name="where" id="where"
                            placeholder='e.g. Kathmandu, Nepal' />
                    </div>
                    <div className='flex flex-row justify-between items-start w-full '>
                        <div className={fieldClass} >
                            <label htmlFor="from" className={labelClass}>From</label>
                            <input
                                className={dateInputClass}
                                type="date" name="from" id="from" />
                        </div>
                        <div className={fieldClass}>
                            <label htmlFor="to" className={labelClass}>To</label>
                            <input
                                className={dateInputClass}
                                type="date" name="to" id="to" />
                        </div>
                    </div>
                </form>
             
                <button className= ' flex justify-center items-center gap-2  text-gray-700 w-full border py-2 rounded-md border-gray-600 font-semibold'>Continue <FaArrowRight/></button>
                
    
                
            </div>


        </>
    )
}

export default FormStep1Destination
