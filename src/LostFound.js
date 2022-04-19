import React from 'react'
import lostfoundbg from './photos/lostfoundbg.png'
import fish from './photos/fish.png'
import lost1 from './photos/lost1.png'
import lost2 from './photos/lost2.png'
import lost3 from './photos/lost3.png'
import lost4 from './photos/lost4.png'
import calendar from './photos/calendar.png'
import PawsR from './photos/PawsR.png'

export const LostFound = () => {
  return (
    <div className='relative'>
      {/*Lost & Found Background*/}
      <div
      className='relative'>
        <img src={lostfoundbg}/>
      </div>

      <div 
      className='flex justify-center'>
         {/*Lost & Found Title*/}
        <div 
        className='absolute top-10 flex flex-col items-center w-1/2 space-y-2'>
          <img src={fish} 
          className="w-10"/>
          <h1 
          className=' text-white font-Poppins font-semibold text-base'>
          Our Lost and Found</h1>

          <h1
          className=' text-textRed font-Poppins font-extrabold text-4xl'>
            Latest Lost & Found Report
          </h1>
          <p
          className='font-Poppins text-center text-base text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/*Lost & Found Reports*/}
        <div
        className='flex justify-center'>
        <div
        className='absolute bottom-1/4 flex space-x-10'>
          
          {/*Image*/}
          <div>
            <img src={lost1} 
            className=" rounded-full "/>

            {/*Information*/}
            <div
            className='flex justify-center space-x-5 mt-5'>
            <img src={calendar} className="h-6"/>
            <p
            className=' font-Poppins text-white text-base'>
              Lost: Date</p>
            </div>

            <div
            className='flex flex-col items-center'>
              <h1
              className=' font-Poppins text-textRed text-xl font-bold'>
              Contact Number</h1>
              <h1
              className=' font-Poppins text-white text-lg'>
              Contact Person</h1>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>

          </div>

          {/*Image*/}
          <div>
            <img src={lost2}
            className=" rounded-full"/>

            {/*Information*/}
            <div
            className='flex justify-center space-x-5 mt-5'>
            <img src={calendar} className="h-6"/>
            <p
            className=' font-Poppins text-white text-base'>
              Lost: Date</p>
            </div>

            <div
            className='flex flex-col items-center'>
              <h1
              className=' font-Poppins text-textRed text-xl font-bold'>
              Contact Number</h1>
              <h1
              className=' font-Poppins text-white text-lg'>
              Contact Person</h1>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>
          </div>

          {/*Image*/}
          <div>
            <img src={lost3}
            className=" rounded-full"/>

            {/*Information*/}
            <div
            className='flex justify-center space-x-5 mt-5'>
            <img src={calendar} className="h-6"/>
            <p
            className=' font-Poppins text-white text-base'>
              Lost: Date</p>
            </div>

            <div
            className='flex flex-col items-center'>
              <h1
              className=' font-Poppins text-textRed text-xl font-bold'>
              Contact Number</h1>
              <h1
              className=' font-Poppins text-white text-lg'>
              Contact Person</h1>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>
          </div>

          {/*Image*/}
          <div>
            <img src={lost4}
            className=" rounded-full"/>

            {/*Information*/}
            <div
            className='flex justify-center space-x-5 mt-5'>
            <img src={calendar} className="h-6"/>
            <p
            className=' font-Poppins text-white text-base'>
              Lost: Date</p>
            </div>

            <div
            className='flex flex-col items-center'>
              <h1
              className=' font-Poppins text-textRed text-xl font-bold'>
              Contact Number</h1>
              <h1
              className=' font-Poppins text-white text-lg'>
              Contact Person</h1>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>

          </div>

        </div>

        <div 
        className='absolute bottom-20'>
          <button 
          className='text-textRed font-Poppins font-extrabold text-3xl'>Click to view others</button>
        </div>
        </div>

      </div>
    </div>
  )
}
