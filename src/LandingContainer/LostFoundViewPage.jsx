import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';    

// Icons and Images
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import noData from '../assets/noData.png'
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
      users.reporterName.toLowerCase().includes(search.toLowerCase()) ||
      users.petName.toLowerCase().includes(search.toLowerCase())
      ))
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

       // Pagination

       const [currentPage, setcurrentPage] = useState(1);
       const [itemsPerPage, ] = useState(9);
     
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
               : "bg-white text-[#155e59] hover:text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer mx-2"}
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
            onClick={()=>sorting('whatReporting')}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <IoIosPaw />
                  <span className="ml-3">
                  by Status
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

        <div className='flex sm:justify-between pt-5 px-5 sm:flex-row xsm:flex-col xsm:items-center'>
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
            <div className='flex justify-end'>    
                <div className="pt-6 relative text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search Name" 
                        onChange={(e)=>{setSearch(e.target.value)}} />
                    <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                        <FcSearch />
                    </button>
                </div>
              </div>
          </div>
          { currentItems.filter(animal => animal.hasApproved === true).length < 1 ? 

            <div className='flex flex-col justify-center items-center text-center pt-20'> 
            <h1 className='text-white pb-5 font-semibold text-4xl uppercase'> 
                No Data Available
            </h1>
            <img src={noData} alt='no-data' width={300} />
            </div>
            :  

            <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 py-6 mt-10" style={{
            maxWidth: '1400px'
            }}>
            {currentItems.map((user) => (
                <>
                <LostFoundCards laf={user} key={user.id}/>
            </>
            ))}
            </div>
            <div className='flex items-center justify-center ml-3 py-10'>
                <div>

                        <button
                        className={!disabledPrev ?
                            'bg-white text-[#155e59] hover:text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
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
                        'bg-white text-[#155e59] hover:text-white  rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
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
    <div className='flex justify-center items-center text-center text-[#155e59] h-10 bg-white'>
      <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
    </div> 
</>
  )
}

export default LostFoundViewPage