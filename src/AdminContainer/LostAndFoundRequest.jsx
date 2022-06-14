import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


import {FcSearch} from 'react-icons/fc'
import infobg from '../assets/infobg.png'
import {IoIosPaw} from 'react-icons/io'
import {AiFillCaretDown} from 'react-icons/ai'
import { Menu, Dropdown } from 'antd';
import { LostAndFoundCardsRequest } from './LostAndFoundCardsRequest'

// Database
import { db } from '../firebase-config'
import {collection, onSnapshot,  orderBy, query} from 'firebase/firestore'

const LostAndFoundRequest  = () => {

    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'

      const [LostAndFound, setLostAndFound] = useState([])
      const [search, setSearch] = useState("")
      const lostAndFoundCollectionRef = collection(db, "LostAndFound")

      useEffect(() => {
        const q = query(lostAndFoundCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, lostAndFoundCollectionRef, snapshot => {
          
            setLostAndFound(snapshot.docs.map(doc => {
            return{
              id: doc.id,
              ...doc.data()
            }
          }).filter((users) =>
          users.reporterName.toLowerCase().includes(search.toLowerCase())))
        })
      }, [search])

        // Sorting

    const [order, setOrder] = useState('asc')

    const sorting = (col) => {
      if (order === 'asc'){
        const sorted = [...LostAndFound].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setLostAndFound(sorted);
          setOrder("dsc")
        
      }
      if (order === 'dsc') {
        const sorted = [...LostAndFound].sort((a,b) => 
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
          setLostAndFound(sorted);
          setOrder("asc")
      }
    }


    const info = (
        <Menu style={{ padding: 0, marginTop:'15px'}}
    
        >
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <button 
                onClick={()=>sorting('reporterName')}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Found/Reported By
                      </span>
                  </div>
              </button>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
              <button 
                onClick={()=>sorting('petName')}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Pet's Name
                      </span>
                  </div>
              </button>
          </Menu.Item>
        </Menu>
      );

      const filterBy = (
        <Menu style={{ padding: 0, marginTop:'15px'}}
    
        >
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <button 
              onClick={() => sorting('petName')}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Pet Type
                      </span>
                  </div>
              </button>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
              <button 
                onClick={() => sorting('ownerName')}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Pet Gender
                      </span>
                  </div>
              </button>
          </Menu.Item>
        </Menu>
      );

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
                    <h1 className='pt-7 text-xl font-semibold text-white md:text-base md:mt-1 lg:text-xl lg:ml-16 md:ml-10'> Lost & Found Request </h1> 
                    <div className="pt-6 relative text-gray-600 lg:mr-16 md:mr-3">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search"
                            placeholder="Search Found/Reported By" 
                            onChange={(e)=>{setSearch(e.target.value)}}/>
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                   <div></div>
                    <div className='flex justify-end'> 
                      <Dropdown 
                          overlay={filterBy} 
                          placement='bottomCenter' 
                          className='flex justify-center items-center text-white lg:mr-12 md:mr-12 mt-5'
                      >
                          <button
                          className={isNotActive}
                          >
                                          <span>
                            Filter By
                          </span>
                          <AiFillCaretDown />
                          </button>
                      </Dropdown>
                      <Dropdown 
                          overlay={info} 
                          placement='bottomRight' 
                          className='flex justify-center items-center text-white lg:mr-16 md:mr-3 mt-5'
                      >
                          <button
                          className={isNotActive}
                          >
                                          <span>
                              Sort By
                          </span>
                          <AiFillCaretDown />
                          </button>
                      </Dropdown>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}>
                    {LostAndFound.map((user) => (
                        <>
                        <LostAndFoundCardsRequest laf={user} key={user.id}/>
                    </>
                    ))}
                    </div>
                </div>
        </div>
    </>
     )
}
export default LostAndFoundRequest;