import React from "react"
import {Link} from 'react-scroll/modules'
import homeimg from '../assets/homeimg.png'
import {IoIosPaw} from 'react-icons/io'


export const Home = () => {

    return (
    <>
        <div className="xsm:p-10 relative flex justify-between items-center font-Poppins" style={{
            backgroundImage: `url(${homeimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px'
        }} id='home'>
            
            <div className="w-full h-full absolute top-0 left-0 z-0" style={{ 
            opacity: .20,
            zIndex: 1,
            background: "#155e59"
            }}></div>
            <div className='pl-4' style={{ zIndex: 2 }}>
            <h1 className="text-left font-semibold text-medium md:text-5xl xsm:text-2xl text-white pb-2">
                Treating pets like 
            </h1>
            <h1 className="text-left font-semibold text-5xl text-white tracker-wide">
                FAMILY
            </h1>
            <p className="text-2xl text-white text-left font-thin mt-7 w-5/6 ">
                Manage Pets and Support Animal Welfare
            </p>
            <div className='flex justify-start'>
            <Link to='info' spy={true} smooth={true} offset={-450} duration={500}
                className="flex bg-[#155e59] text-white text-xl mt-7 md:text-2xl py-3 px-3 font-semibold rounded-md hover:bg-[#d95858] hover:text-white duration-200"
                >
                <IoIosPaw size='30px' /> 
                <p className="ml-2"> View More </p> 
                </Link>
            </div>
            </div>
        </div>

    </> 
    
    )
}