import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const knowUsData =[
    {
        id:1,
        name : "About Us",
        link:"#"
    },
    {
        id:2,
        name : "Careers",
        link:"#"
    },
    {
        id:3,
        name : "Press Releases",
        link:"#"
    },
    {
        id:4,
        name : "Metverse Science",
        link:"#"
    },
]

const HelpUData =[
    {
        id:1,
        name : "Your Account",
        link:"#"
    },
    {
        id:2,
        name : "Help",
        link:"#"
    },
    {
        id:3,
        name : "Security",
        link:"#"
    },
    {
        id:4,
        name : "Online Chat",
        link:"#"
    },
]
const LegalData = [
    {
        id:1,
        name : "Privacy Policy",
        link:"#"
    },
    {
        id:2,
        name : "Safety Center",
        link:"#"
    },
    {
        id:3,
        name : "Our Business",
        link:"#"
    },

]

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container py-16 sm:py-16 md:py-15">
            <div className="grid grid-cols-1 lg:grid-cols-3 order-1">
                <div className="py-8  space-y-6 pr-10">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify ">MetaVerse</h1>
                    <p className="text-sm">Metaverse brought virtual reality to the web, making it easier for anyone to create, enjoy, and share VR experiences. The next phase of this evolution is WebXR, which will combine Web VR and AR into a single API.</p>
                    <div className="flex items-center gap-4">
                        <FaLocationArrow className="text-xl" />
                        <p>Noida, Uttar Pradesh</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMobileRetro className="text-xl" />
                        <p>+91 7037310011</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaInstagram className="text-3xl hover:text-secondary hover:scale-105 duration-300"/>
                        <FaFacebook  className="text-3xl hover:text-secondary hover:scale-105 duration-300"/>
                        <FaLinkedin  className="text-3xl hover:text-secondary hover:scale-105 duration-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-4 lg:gap-10  col-span-2">
                <div className="space-y-6 py-8">
                    <h1 className="text-xl font-semibold mb-3">Get to Know Us</h1>
                    <ul className="space-y-3">
                        {
                            knowUsData.map((data)=>(
                                <li className="hover:translate-x-1 duration-300 " key={data.id.id} >
                                    <NavLink  className="cursor-pointer hover:text-secondary" to={data.link}>{data.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="space-y-6 py-8 ">
                    <h1 className="text-xl font-semibold mb-3">Let Us Help You</h1>
                    <ul className="space-y-3">
                        {
                            HelpUData.map((data)=>(
                                <li className="hover:translate-x-1 duration-300 " key={data.id.id} >
                                    <NavLink  className="cursor-pointer hover:text-secondary" to={data.link}>{data.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="space-y-6 py-8">
                    <h1 className="text-xl font-semibold mb-3">Legal & Safety</h1>
                    <ul className="space-y-3">
                        {
                            LegalData.map((data)=>(
                                <li className="hover:translate-x-1 duration-300 " key={data.id.id} >
                                    <NavLink  className="cursor-pointer hover:text-secondary" to={data.link}>{data.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                



                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer