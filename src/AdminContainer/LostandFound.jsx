import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';    

// Icons and Images
import infobg from '../assets/infobg.png'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'

// Misc
import { Menu, Dropdown, DatePicker, notification} from 'antd';
import { Modal, Radio, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

// Database
import { db, storage } from '../firebase-config'
import {collection, onSnapshot, doc, addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { lostfoundData } from '../LandingContainer/data'
import { LostAndFoundCards } from './LostAndFoundCards'

const LostandFound  = () => {

    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'

    const info = (
        <Menu style={{ padding: 0, marginTop:'15px'}}
    
        >
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                        by Pet Type
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Pet's Name
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Date Reported
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          
        </Menu>
      );
    
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
        <div className='min-w-screen'>
            <div className="bg-[#155e59] h-64 shadow-lg"  
                style={{
                    backgroundImage: `url(${infobg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px'
                }} >    
                <div className='flex justify-between'>
                    <h1 className='pt-7 text-xl font-semibold text-white md:text-base md:mt-1 lg:text-xl lg:ml-16 md:ml-10'> Lost and Found Profiles </h1> 
                    <div className="pt-6 relative text-gray-600 lg:mr-16 md:mr-3">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Dropdown 
                        overlay={info} 
                        placement='bottomRight' 
                        className='flex justify-center items-center text-white lg:mr-16 md:mr-3 mt-5'
                        trigger={'click'}
                        
                    >
                        <Link 
                        to=""
                        className={isNotActive}
                        >
                
                        <span>
                            Sort By
                        </span>
                        <AiFillCaretDown />
                        
                        </Link>
                    </Dropdown>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}>
                    {LostAndFound.map((user) => (
                        <>
                        <LostAndFoundCards laf={user} key={user.id}/>
                    </>
                    ))}
                    </div>
                </div>
        </div>
    </>
     )
}
export default LostandFound;