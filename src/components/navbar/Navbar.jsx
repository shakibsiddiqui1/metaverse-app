import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import {NavLink}  from "react-router-dom";
import { HiMenuAlt1,HiMenuAlt3 } from "react-icons/hi";
import DarkMode from './DarkMode';

const NavLinks=[
    {
        id:1,
        name:"Home",
        link:"#"
    },
    {
        id:2,
        name:"Products",
        link:"#"
    },
    {
        id:3,
        name:"Pricing",
        link:"#"
    },
    {
        id:4,
        name:"Contact",
        link:"#"
    },
]

const Navbar = () => {
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

  return (
    <div className="text-black dark:text-white relative z-[9999]">
        <div className=" container py-2 md:py-0">
            <div className=" flex justify-between items-center">
                {/*logo section */}
                <div className=" flex items-center gap-3">
                    <img className="h-16" src={Logo} alt=""/>
                    <p className="text-3xl">
                        VR{" "}
                        <span className="font-bold">
                            World
                        </span>
                    </p>
                </div>
                {/*Desktop Menu section */}
                <div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {
                                NavLinks.map((data)=>(
                                    
                                        <li key={data.id} >
                                        <NavLink to={data.link} className="text-xl font-semibold py-2 hover:text-primary hover:border-b-2 hover:border-secondary transition-colors duration-500">
                                            {data.name}
                                        </NavLink>
                                        </li>
                                    
                                ))
                            }
                            {/* DarkMode Feature */}
                            <DarkMode/>
                        </ul>
                    </nav>
                </div>
                {/*Mobile Menu section */}
                <div className="md:hidden block">
                    <div className="flex items-center gap-4">
                        <DarkMode/>
                        {
                            showMenu ? <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30}/> : <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Navbar