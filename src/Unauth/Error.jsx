import React from 'react'
import {NavLink} from 'react-router-dom';

const Error = () => {
  return (
    <>
        <div className='min-h-screen flex items-center justify-center text-center text-5xl font-semibold text-gray-900'> 
            Internal Server <NavLink to='/' className='pl-2 text-[#155e59]'> Try Again </NavLink>
        </div>
    </>
  )
}

export default Error