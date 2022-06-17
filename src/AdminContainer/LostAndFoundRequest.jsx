import React, {useEffect, useState} from 'react'

import {FcSearch} from 'react-icons/fc'
import noData from '../assets/noData.png'
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

       // Pagination

       const [currentPage, setcurrentPage] = useState(1);
       const [itemsPerPage,] = useState(9);
     
       const [pageNumberLimit,] = useState(3);
       const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
       const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
     
       const handleClick = (event) => {
         setcurrentPage(Number(event.target.id));
       };
     
       const pages = [];
       for (let i = 1; i <= Math.ceil(LostAndFound.length / itemsPerPage); i++) {
         pages.push(i);
       }
     
       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = LostAndFound.slice(indexOfFirstItem, indexOfLastItem);
     
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
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
                  <button 
                    onClick={()=>sorting('petType')}
                  >
                      <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                          <IoIosPaw />
                          <span className="ml-3">
                          by Pet Type
                          </span>
                      </div>
                  </button>
              </Menu.Item>
        </Menu>
      );

      console.log()

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

                { currentItems.filter(animal => animal.hasApproved === false).length < 1 ? 

                      <div className='flex flex-col justify-center items-center text-center pt-48'> 
                        <h1 className='text-[#155e59] pb-5 font-semibold text-4xl uppercase'> 
                          No Data Available.
                        </h1>
                        <img src={noData} alt='no-data' width={300} />
                      </div>
                        :  

                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-3">
                        {currentItems.map((user) => (
                        <>
                              <LostAndFoundCardsRequest laf={user} key={user.id}/>
                        </>
                        ))}
                        </div>     
                    <div className='flex items-center justify-center ml-3 py-16'>
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
                  </> }
                </div>
        </div>
    </>
     )
}
export default LostAndFoundRequest;