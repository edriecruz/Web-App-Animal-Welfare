import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {BiLogOut} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <>  
        <div className='flex flex-col min-h-screen w-1/5 shadow-lg border-r-2 border-gray-100'> 
            <div className='flex flex-col h-5/6 justify-center items-center py-10'> 
                <img src={logo} alt='logo' className='w-60'/>
                <p className='text-md font-medium pt-2'> Barangay Admin! </p>
            </div>
            <div className='flex justify-center items-center  hover:text-[#155e59] text-center h-1/6'>
                <Link to='/' className='flex text-xl px-4 hover:text-[#155e59]'>
                    <BiLogOut size='40px'/> 
                    <p className='pt-2 px-2'>Logout </p> 
                </Link>
            </div>
        </div> 
    </>
  )
}

export default Sidebar