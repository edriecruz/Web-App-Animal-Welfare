import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import bone from '../assets/bone.png'
import { Dropdown, Menu } from 'antd'
import { AiFillCaretDown } from 'react-icons/ai'
import { IoIosPaw } from 'react-icons/io'
import noData from '../assets/noData.png'

import AnnouncementCards from './AnnouncementCards' 
import { db } from '../firebase-config'
import {collection, onSnapshot,  orderBy, query} from 'firebase/firestore'

   
export const AnnouncementViewPage = () => {

  const isNotActive = 'flex justify-center items-center text-center px-5 gap-3 text-base bg-[#155e59] font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'

  const [Announcement, setAnnouncement] = useState([])
  const [search, setSearch] = useState("")
  const announcementCollectionRef = collection(db, "Announcement")

  useEffect(() => {
    const q = query(announcementCollectionRef, orderBy("dateCreated", "desc"));
    onSnapshot(q, announcementCollectionRef, snapshot => {
      setAnnouncement(snapshot.docs.map(doc => {
        return{
          id: doc.id,
          ...doc.data()
        }
      }).filter((users) =>
      users.title.toLowerCase().includes(search.toLowerCase()) || 
      users.author.toLowerCase().includes(search.toLowerCase())
      ))
    })
  }, [search])

  // Sorting

  const [order, setOrder] = useState('asc')

    const sorting = (col) => {
      if (order === 'asc'){
        const sorted = [...Announcement].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setAnnouncement(sorted);
          setOrder("dsc")
        
      }
      if (order === 'dsc') {
        const sorted = [...Announcement].sort((a,b) => 
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
         setAnnouncement(sorted);
          setOrder("asc")
      }
    }

        // Pagination

        const [currentPage, setcurrentPage] = useState(1);
        const [itemsPerPage, ] = useState(9);
      
        const [pageNumberLimit, ] = useState(3);
        const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
        const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
      
        const handleClick = (event) => {
          setcurrentPage(Number(event.target.id));
        };
      
        const pages = [];
        for (let i = 1; i <= Math.ceil(Announcement.length / itemsPerPage); i++) {
          pages.push(i);
        }
      
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = Announcement.slice(indexOfFirstItem, indexOfLastItem);
      
        const renderPageNumbers = pages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <button
                key={number}
                id={number}
                onClick={handleClick}
                className={currentPage === number ? 
                  "bg-[#d95858] text-white rounded-lg px-4 py-2 cursor-not-allowed' mx-2" 
                : "bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer mx-2"}
              >
                {number}
              </button>
            );
          } else {
            return null;
          }
        });
  
        const handleNextbtn = () => {
          setcurrentPage(currentPage + 1);
      
          if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
          }
        };
      
        const handlePrevbtn = () => {
          setcurrentPage(currentPage - 1);
      
          if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
          }
        };
      
        let pageIncrementBtn = null;
        if (pages.length > maxPageNumberLimit) {
          pageIncrementBtn = <button onClick={handleNextbtn}> </button>;
        }
      
        let pageDecrementBtn = null;
        if (minPageNumberLimit >= 1) {
          pageDecrementBtn = <button onClick={handlePrevbtn}> </button>;
        }
      
        const disabledPrev = currentPage === pages[0] ? true : false
        const disabledNext = currentPage === pages[pages.length - 1] ? true : false
    
  
  const info = (
    <Menu style={{ padding: 0, marginTop:'15px'}}

    >
    
      <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
      <button
         onClick={() => sorting('title')}
         >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <IoIosPaw />
                  <span className="ml-3">
                  by Announcement Title
                  </span>
              </div>
          </button>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
      <button
         onClick={() => sorting('author')}
         >
              <div className='flex justify-start font-medium items-center'>
                  <IoIosPaw />
                  <span className="ml-3">
                  by Announcement Author
                  </span>
              </div>
          </button>
      </Menu.Item>    
    </Menu>
  );

  return (
    <>
    <div className='pb-5 px-5 bg-gray-100 min-h-screen' id='announcement'>
      <div className='flex justify-start pt-8 pl-8'>
        <NavLink to='/' 
              className='absolute flex justify-around bg-[#155e59] sm:flex xsm:hidden rounded-lg text-white px-5 py-1 hover:bg-[#d95858] hover:text-white'>

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

      <div className='flex sm:justify-between pt-5 sm:flex-row xsm:flex-col xsm:items-center px-5'>
          <div className='flex justify-end'>
            
        <Dropdown 
            overlay={info} 
            placement='bottomLeft' 
            className='flex justify-start items-center text-white lg:mr-16 md:mr-3 mt-5'
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
        <div className="pt-6 relative text-gray-600">
            <input className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search Title or Author"
                onChange={(e)=>{setSearch(e.target.value)}} />
      </div>
      </div>
    
      
      { currentItems.length < 1 ? 

          <div className='flex flex-col justify-center items-center text-center pt-48'> 
            <h1 className='text-[#155e59] pb-5 font-semibold text-4xl uppercase'> 
              No Data Available.
            </h1>
            <img src={noData} alt='no-data' width={300} />
          </div>
            :  

          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto lg:ml-5 md:ml-2 py-6 mt-10" style={{
          maxWidth: '1400px'
          }}>
          { currentItems.map((user) => (
              <>
              <AnnouncementCards ann={user} key={user.id}/>
              </>
              ))}

          </div>
          <div className='flex items-center justify-center ml-3 py-10'>
              <div>

                    <button
                      className={!disabledPrev ?
                        'bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
                        :
                        'bg-[#d3d3d3] text-white rounded-lg px-4 py-2 cursor-not-allowed'
                      }
                      onClick={handlePrevbtn}
                      disabled={disabledPrev}
                    >
                      <p>Prev </p> 
                    </button>
              </div>
                  <div className='px-3 py-3'>  {pageDecrementBtn} </div>
                  <div className='px-3 py-3'>  {renderPageNumbers} </div>
                  <div className='px-3 py-3'>  {pageIncrementBtn} </div>
                <div>
                    <button
                    className={
                      !disabledNext ? 
                      'bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
                      :
                      'bg-[#d3d3d3] text-white rounded-lg px-4 py-2 cursor-not-allowed'
                    }
                      onClick={handleNextbtn}
                      disabled={disabledNext}
                    >
                      <p>  Next </p>
                    </button>
                </div>
              </div>
            </>  }
          </div>
          
      <div className='flex justify-center items-center text-center text-white h-10 bg-[#155e59]'>
      <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
    </div> 
    </> 
  )
}