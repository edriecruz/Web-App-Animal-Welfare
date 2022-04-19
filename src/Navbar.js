import React from 'react'
import logo from './photos/logo.png'
import clouds from './photos/clouds.png'
import { App } from './LoginModal'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const links = ['Home', 'Info', 'Report', 'Hotlines', 'About Us'];
    const navlinks = links.map(link => {
        return (
            <a href={'/' + link} className="hover:bg-primaryColor hover:text-white p-2 w-28 text-center transition rounded-xl">
               {link}
            </a>
        )
    });


    return  <div 
            className="z-10 flex justify-between bg-white sticky top-0 ">
                <div 
                    className="absolute align-top z-10">
                        <img src={clouds} alt="clouds" 
                        className=""/>
                    </div>
                    
                    {/* LOGO */}
                    <div 
                    className="flex items-center p-1 ml-10 z-20">

                        <img src={logo} alt="Logo" 
                        className="w-40 h-30" />

                        <h1 
                        className="font-Comfortaa text-4xl font-bold text-primaryColor">
                        Animal Welfare
                        </h1>

                    </div>

                    {/* NAVIGATION BAR */}
                    <div 
                    className="z-20 flex p-3 items-center">

                        <button 
                        className="p-2 shadow-lg rounded-lg lg:hidden">
                        
                        </button>

                        <nav 
                        className="flex space-x-12 text-lg mt-3 font-Poppins text-primaryColor">
                            {navlinks}
                        </nav>

                    </div>

                    {/* LOGIN BUTTON */}
                    <App />

                    
            </div>;
}