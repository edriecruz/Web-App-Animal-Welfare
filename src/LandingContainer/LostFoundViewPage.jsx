import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';    

// Icons and Images
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import {FaFish} from 'react-icons/fa'

// Misc
import { Menu, Dropdown} from 'antd';

// Database
import { db } from '../firebase-config'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import LostFoundCards from './LostFoundCards'

const LostFoundViewPage = () => {

  const isNotActive = 'flex items-center px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'

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
     
    <div className='pb-5 px-5 bg-[#155e59] bg-cover font-Poppins min-h-screen' id='lostfound'>
        <div className='flex justify-start pt-8 pl-8 '>
            <NavLink to='/' 
                    className='absolute flex justify-start bg-[#d95858] rounded-lg text-white px-5 py-1.5 hover:bg-white  hover:text-[#155e59]'>
    
                <p className='lg:text-lg md:text-md sm:text-xsm pb-1 lg:font-medium sm:font-normal'> Back </p> 
            </NavLink>
        </div>
    <div className="flex flex-col justify-around pb-5 text-white" >
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

        <div className='flex sm:justify-between pt-5 sm:flex-row xsm:flex-col xsm:items-center'>
                <div className='flex justify-end'>
                    <Dropdown 
                        overlay={info} 
                        placement='bottomRight' 
                        className='flex justify-center items-center text-white lg:ml-4 md:mr-3 mt-5'
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
            <div className='flex justify-end'>    
                <div className="pt-6 relative text-gray-600 lg:mr-6 md:mr-3">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search Pet's Name" />
                    <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                        <FcSearch />
                    </button>
                </div>
              </div>
          </div>
        <div className="pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
          maxWidth: '1400px'
        }}>
          {LostAndFound.map((user) => (
              <>
            <LostFoundCards laf={user} key={user.id}/>
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