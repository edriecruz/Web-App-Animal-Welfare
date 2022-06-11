import React from 'react'
import {NavLink} from 'react-router-dom';

const Error = () => {
  return (
    <>
        <div className='min-h-screen flex items-center justify-center text-center text-2xl font-semibold text-gray-900 animate-pulse'> 
            The requested URL was not found on this server.<NavLink to='/' className='pl-2 text-[#155e59]'> Try Again </NavLink>
        </div>
    </>
  )
}

export default Error