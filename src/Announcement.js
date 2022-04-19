import React from 'react'

import bone from './photos/bone.png'
import news1 from './photos/news1.png'
import news2 from './photos/news2.png'
import news3 from './photos/news3.png'
import bell from './photos/bell.png'
import PawsR from './photos/PawsR.png'

export const Announcement = () => {
  return (
    <div 
    className='flex flex-col justify-center p-6 '>
        <div 
        className='flex flex-col items-center self-center w-1/2'>
            <img src={bone} 
            className="w-10"/>
            <h1 
            className='text-textRed font-semibold font-Poppins text-lg'>
                Our News</h1>
            <h1 
            className=' text-primaryColor font-extrabold font-Poppins text-4xl'>
                Latest News Update
            </h1>
            <p 
            className=' font-Poppins text-center text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>

        
        <div 
        className='flex justify-around p-6'>

{/*News 1*/}
          <div
          className='basis-1/3'>
            <img src={news1} />

            <div
            className='flex space-x-5 pt-3'>
              <img src={bell} 
              className="h-6"/>
              <h1>Date</h1>
            </div>

  {/*Information*/}
            <div 
            className='w-3/4 pt-3'>
              <h1
              className=' font-Poppins text-primaryColor text-2xl font-bold'>
              Lorem Ipsum Dolor Sit Amet</h1>
              <p
              className=' font-Poppins text-bas'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              
              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>

          </div>

{/*News 2*/}
          <div 
          className='basis-1/3'>
            <img src={news2}/>

            <div
            className='flex space-x-5 pt-3'>
              <img src={bell} className="h-6"/>
              <h1>Date</h1>
            </div>
  {/*Information*/}
            <div 
            className='w-3/4 pt-3'>
              <h1
              className=' font-Poppins text-primaryColor text-2xl font-bold '>
              Lorem Ipsum Dolor Sit Amet</h1>
              <p
              className=' font-Poppins text-bas'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>

            </div>

{/*News 3*/}
          <div 
          className='basis-1/3'>
            <img src={news3}/>

            <div
            className='flex space-x-5 pt-3'>
              <img src={bell} className="h-6"/>
              <h1>Date</h1>
            </div>
  {/*Information*/}
            <div 
            className='w-3/4 pt-3'>
              <h1
              className=' font-Poppins text-primaryColor text-2xl font-bold'>
              Lorem Ipsum Dolor Sit Amet</h1>
              <p
              className=' font-Poppins text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

              <button href={''} className="flex items-center text-textRed font-Poppins font-bold text-base">Read More
              <img src={PawsR} className="h-7 m-3"/>
              </button>
            </div>

            </div>

        </div>
    </div>
  )
}
