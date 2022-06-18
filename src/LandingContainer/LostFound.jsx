import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import lostfoundbg from '../assets/lostfoundbg.png'
import {FaFish} from 'react-icons/fa'

// Database
import { db } from '../firebase-config'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'

import LostFoundCards from './LostFoundCards'

export const LostFound = () => {

  const [LostAndFound, setLostAndFound] = useState([])
  const lostAndFoundCollectionRef = collection(db, "LostAndFound")

  useEffect(() => {
    const q = query(lostAndFoundCollectionRef, orderBy("dateCreated", "desc"));
    onSnapshot(q, lostAndFoundCollectionRef, snapshot => {
      
        setLostAndFound(snapshot.docs.map(doc => {
        return{
          id: doc.id,
          ...doc.data()
        }
      }))
    })
  }, [])    

  return (
    <>
    <div className='pb-5' id='lostfound'>
      <div className="flex flex-col justify-around items-center text-white font-Poppins" style={{
                          backgroundImage: `url(${lostfoundbg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }}>
        <div className='flex flex-col justify-center p-3 mt-10'>
            <div className='flex flex-col items-center self-center w-full'>
                <FaFish size='30px' className='text-[#d95858]'/>
                <h1 className='text-white font-semibold text-lg'>
                    Our News</h1>
                <h1 className=' text-[#d95858] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                    Lost and Found Report
                </h1>
                <p className='text-center lg:text-base py-6 md:text-sm xsm:text-sm'>
                    The following is a list of reported lost and found pets.

                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
            maxWidth: '1400px'
          }}>
            {LostAndFound.slice(0,4).map((user) => (
                <>
              <LostFoundCards laf={user} key={user.id}/>
              </>
              ))}
            </div>
            <div className='flex py-10'>
              <Link to='/view-lostfound'>
                  <p className='text-xl font-bold text-[#ff7070] hover:text-white'> Click to view others </p> 
              </Link>
            </div>
      </div> 
    </div>
  </>
  )
}
