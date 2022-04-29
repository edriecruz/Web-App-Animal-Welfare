import React from 'react'
import {lostfoundData} from './data'
import {NavLink} from 'react-router-dom'
import {FaFish} from 'react-icons/fa'
import LostFoundCards from './LostFoundCards'

const LostFoundViewPage = () => {
  return (
 <>
     
    <div className='pb-5 px-5 bg-[#155e59] bg-cover font-Poppins min-h-screen' id='lostfound'>
        <div className='flex justify-start pt-8 pl-8 '>
            <NavLink to='/' 
                    className='absolute flex justify-start bg-[#d95858] rounded-lg text-white px-5 py-1.5 hover:bg-white  hover:text-[#155e59]'>
    
                <p className='lg:text-lg md:text-md sm:text-xsm pb-1 lg:font-medium sm:font-normal'> Back </p> 
            </NavLink>
        </div>
    <div className="flex flex-col justify-around items-center pb-5 text-white" >
      <div className='flex flex-col justify-center p-3'>
          <div className='flex flex-col items-center self-center w-1/2'>
              <FaFish size='30px' className='text-[#d95858]'/>
              <h1 className='text-white font-semibold text-lg'>
                  Our News</h1>
              <h1 className=' text-[#d95858] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                  Lost and Found Report
              </h1>
              <p className='text-center lg:text-base py-6 md:text-sm xsm:text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
          maxWidth: '1400px'
        }}>
          {lostfoundData.map((user) => (
              <>
            <LostFoundCards lost={user} key={user.id}/>
            </>
            ))}
          </div>    
    </div>
  </div>
    <div className='flex justify-center items-center text-center text-[#155e59] h-10 bg-white'>
          <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
        </div> 
</>
  )
}

export default LostFoundViewPage