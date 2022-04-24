import React from 'react'
import {Link} from 'react-router-dom'
import lostfoundbg from '../assets/lostfoundbg.png'
import {FaFish} from 'react-icons/fa'

import lost1 from '../assets/lost1.jpg'
import lost2 from '../assets/lost2.jpg'
import lost3 from '../assets/lost3.jpg'
import lost4 from '../assets/lost4.jpg'
import LostFoundCards from './LostFoundCards'

const data = [
  { id: 1, owner: 'Edrie Cruz', status:'lost', email: 'edriecruz@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Blacky", lost: '2022-04-21', img:lost1, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 2, owner: 'N/A', status:'lost', email: 'edriecruz@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Bullsbal", lost: '2022-03-09', img:lost2, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 3, owner: 'Edrie Cruz', status:'lost', email: 'edriecruz@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Brownie", lost: '2022-02-01', img:lost3, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  { id: 4, owner: 'Edrie Cruz', status:'found', email: 'edriecruz@gmail.com', address:'Marikina City', gender: 'Male', lastSeen: 'Antipolo' ,name: "Bullydog", lost: '2022-01-12', img:lost4, contact:'09123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
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
            {data.slice(0,4).map((user) => (
                <>
              <LostFoundCards lost={user} key={user.id}/>
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
