import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { MdOutlineHighQuality } from "react-icons/md";

const FeaturesData = [
    {
        name : "Captivating Videos",
        icon : (
                <FaCameraRetro className="text-4xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Use immersive features to get a detailed multidimensional view of the world.",
        aosDelay : "300"
    },
    {
        name : "Safe Transaction",
        icon : (
                <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Discover the world treasures with metaverse safe transaction.",
        aosDelay : "600"
    },
    {
        name : "Real Experience",
        icon : (
                <SlNote className="text-4xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Making Technology more natural and intuitive for immersive experiences",
        aosDelay : "900"
    },
    {
        name : "Quality Products",
        icon : (
            <MdOutlineHighQuality className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link : "#",
        description : "Make the world your canvas with metaverse high quality products.",
        aosDelay : "1200"
    }
]
const Features = () => {
  return (
    <>  
        <div className="container py-16 sm:py-12 md:py-12 ld:py-0 sm:min-h-[500px]">
            <div>
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold text-center mb-14">Why Choose Us</h1>

            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-7">
                {
                    FeaturesData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="grid place-items-center text-center group space-y-6 sm:space-y-4 lg:space-y-3  p-3 sm:py-5 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0px_0px_20px_#007cfff0] text-white hover:text-black rounded-xl duration-300">
                            <div>{data.icon}</div>
                            <h1 className="text-2xl">{data.name}</h1>
                            <p>{data.description}</p>
                            <NavLink to={data.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300 ">Learn More</NavLink>
                        </div>    
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Features