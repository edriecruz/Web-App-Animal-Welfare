import React from 'react'
import {Link} from 'react-router-dom'
import lostfoundbg from '../assets/lostfoundbg.png'
import {FaFish} from 'react-icons/fa'
import {IoIosPaw} from 'react-icons/io'
import lost1 from '../assets/lost1.jpg'
import lost2 from '../assets/lost2.jpg'
import lost3 from '../assets/lost3.jpg'
import lost4 from '../assets/lost4.jpg'
import {AiFillCalendar} from 'react-icons/ai'



const data = [
  { id: 1, owner: 'Edrie Cruz', name: "John Doe", lost: '2022-04-21', img:lost1, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 2, owner: 'Edrie Cruz', name: "Victor Wayne", lost: '2022-03-09', img:lost2, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 3, owner: 'Edrie Cruz', name: "Jane Doe", lost: '2022-02-01', img:lost3, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 4, owner: 'Edrie Cruz', name: "ML", lost: '2022-01-12', img:lost4, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
];

export const LostFound = () => {
  return (
    <>
    <div className='pb-5' id='lostfound'>
      <div className="flex flex-col justify-around items-center text-white font-Poppins" style={{
                          backgroundImage: `url(${lostfoundbg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }}>
        <div className='flex flex-col justify-center p-3 mt-10'>
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
            {data.map((user) => (
                <>
                <div className='basis-1/3 border bg-white'>
                  <img src={user.img} alt='lost' className='rounded-md' width='400px' />
                    <div className='flex pr-5 py-3 text-[#155e59] hover:text-[#d95858] pl-5'>
                      <AiFillCalendar size='30px'/>
                      <h1 className='pt-1 pl-2 text-[#155e59]'>{user.lost}</h1>
                    </div>
                  <div className='w-3/4 py-3 flex flex-col pl-5'>
                    <h1 className='text-[#d95858] lg:text-2xl md:text-base font-bold'>
                    {user.contact}</h1>
                    <p className='text-base text-[#155e59] '>
                    {user.owner}
                    </p>
                      <button className="flex text-[#d95858] font-bold hover:text-[#155e59] pt-8 pb-6 lg:text-base md:text-xs md:font-medium">
                      <p className='pt-1'> Read Info </p> 
                      <IoIosPaw size='30px' className="pb-2 lg:mt-1.5 md:hidden xsm:mt-1 hover:text-[#155e59]"/>
                      </button>
                  </div>
                </div>
              </>
              ))}
            </div>
            <div className='flex py-10'>
              <Link to='/view-announcement'>
                  <p className='text-xl font-bold text-[#ff7070] hover:text-white'> Click to view others </p> 
              </Link>
            </div>
      </div> 
    </div>
  </>
  )
}
