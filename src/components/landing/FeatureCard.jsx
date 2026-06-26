import React from 'react'
import { IoIosColorPalette } from "react-icons/io";
import { SiOrganicmaps } from "react-icons/si";
import { GiPowerLightning } from "react-icons/gi";

const FeatureCard = () => {
    const feature = [
        {
            icon: <IoIosColorPalette className=' text-Navy w-8 h-8 mb-3' />,
            heading: "Personalized Vibes",
            detail: "Whether you are a hardcore foodie, a history buff, or looking for low-budget hidden gems, our AI tunes the itinerary to what you actually love"
        },
        {
            icon:<SiOrganicmaps className='text-Navy w-8 h-8 mb-3' /> ,
            heading: "Smart Routing",
            detail: "No more zigzagging across town. RoamAI intelligently organizes your day by geographic proximity, keeping your travel times low and exploration time high."
        },
        {
            icon:<GiPowerLightning className='text-Navy w-8 h-8 mb-3' /> ,
            heading: "100% Client-Side Speed",
            detail: "Experience lightning-fast itinerary updates, live map pinning, and instant local storage caching without waiting on sluggish server lag."
        }

    ]
    return (
        <section className='mt-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {feature.map((elem) =>
                <div className=' flex flex-col items-start justify-start shadow-md  text-left px-5 py-5 rounded-xl border-3 border-LightGrey active:scale-[0.98] transition hover:-translate-0.5'>
                    {elem.icon}
                    <h2 className='text-xl font-extrabold mb-1'>{elem.heading}</h2>
                    <p className='text-xs font-light'>{elem.detail}</p>
                </div>
            )}
        </section>
    )
}

export default FeatureCard
