import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import bone from '../assets/bone.png'
import AnnouncementCards from './AnnouncementCards'
import { db } from '../firebase-config'
import {collection, onSnapshot,  orderBy, query} from 'firebase/firestore'

export const Announcement = () => {

  const [Announcement, setAnnouncement] = useState([])
  const announcementCollectionRef = collection(db, "Announcement")

  useEffect(() => {
    const q = query(announcementCollectionRef, orderBy("dateCreated", "desc"));
    onSnapshot(q, announcementCollectionRef, snapshot => {
      setAnnouncement(snapshot.docs.map(doc => {
        return{
          id: doc.id,
          ...doc.data()
        }
      }))
    })
  }, [])

  return (
    <>
    <div className='pb-5' id='announcement'>
      <div className='flex flex-col justify-center p-3 mt-10'>
          <div className='flex flex-col items-center self-center w-1/2'>
              <img src={bone}  alt='bone' className="w-10"/>
              <h1 className='text-[#d95858] font-semibold text-lg'>
                  Our News</h1>
              <h1 className=' text-[#155e59] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                  Latest News Update
              </h1>
              <p className='text-center lg:text-base py-6 md:text-sm xsm:text-xs'>
                  The source of news from the community, connected to the concerns of Animal Welfare.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
          maxWidth: '1400px'
        }}>
          { Announcement.slice(0,4).map((user) => (
              <>
              <AnnouncementCards ann={user} key={user.id}/>
            </>
            ))}
          </div>
          <div className='flex justify-center items-center text-center py-10'>
            <Link to='/view-announcement'>
                <p className='text-xl font-bold text-[#d95858] hover:text-[#155e59]'> Click to view others </p> 
            </Link>
          </div>
    </div>

  </>
  )
}
