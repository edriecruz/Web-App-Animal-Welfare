import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import bone from '../assets/bone.png'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import AnnouncementCards from './AnnouncementCards'

 const data = [
    { id: 1, title: "Dog in Ukraine", reportedBy:'Edrie Isaac Cruz', date: '2022-04-21', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 2, title: "Upcoming Vaccination", reportedBy:'Edrie Isaac Cruz', date: '2022-03-09', img:news2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 3, title: "Pet Gadgets",reportedBy:'Edrie Isaac Cruz',  date: '2022-02-01', img:news3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 4, title: "Dog", reportedBy:'Edrie Isaac Cruz', date: '2022-01-12', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
    { id: 5, title: "Dog", reportedBy:'Edrie Isaac Cruz', date: '2022-01-12', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend ipsum a porttitor. Praesent tempus, urna quis luctus varius, lorem urna mollis mi, id suscipit dolor odio a ligula. Suspendisse ut luctus sem. Nullam sit amet volutpat lectus. Maecenas non enim in tellus luctus ultrices pellentesque in orci. Sed ac sagittis eros, ut faucibus velit. Vivamus ullamcorper arcu in augue maximus, sed imperdiet leo scelerisque. Nulla quis ultrices nisl, ac mattis risus. Aliquam facilisis tortor non leo vehicula maximus. Quisque quis nisl ex..'},
  ];

export const Announcement = () => {

  
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
          maxWidth: '1400px'
        }}>
          { data.slice(0,4).map((user) => (
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
