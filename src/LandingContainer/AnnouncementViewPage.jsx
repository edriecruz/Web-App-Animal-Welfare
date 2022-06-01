import React, { useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import bone from '../assets/bone.png'
import AnnouncementCards from './AnnouncementCards' 
import {announcementData} from './data'
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'

   
export const AnnouncementViewPage = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Announcement");

  useEffect(() => {

    const getAnnouncement = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getAnnouncement()
  }, [])

  return (
    <>
    <div className='pb-5 px-5 bg-gray-100 min-h-screen' id='announcement'>
      <div className='flex justify-start pt-8 pl-8'>
        <NavLink to='/' 
              className='absolute flex justify-around bg-[#155e59] rounded-lg text-white px-5 py-1 hover:bg-[#d95858] hover:text-white'>

          <p className='lg:text-lg md:text-md sm:text-xsm pb-1 lg:font-medium sm:font-normal'> Back </p> 
        </NavLink>
      </div>
    <div className='flex flex-col justify-center p-3'>
        <div className='flex flex-col items-center justify self-center w-1/2'>
            <img src={bone}  alt='bone' className="w-10"/>
            <h1 className='text-[#d95858] font-semibold text-lg'>
                Our News</h1>
            <h1 className=' text-[#155e59] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                Latest News Update
            </h1>
            <p className='text-center lg:text-base py-6 md:text-sm xsm:text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4 pt-4" style={{
        maxWidth: '1400px'
      }}>
        { users.map((user) => (
            <>
            <AnnouncementCards ann={user} key={user.id}/>
          </>
          ))}
        </div>
    </div>
            
      <div className='flex justify-center items-center text-center text-white h-10 bg-[#155e59]'>
      <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
    </div> 
    </> 
  )
}