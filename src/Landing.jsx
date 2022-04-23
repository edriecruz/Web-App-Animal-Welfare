import React from 'react'

// import Clouds from './assets/clouds.png'
import {HashLoader} from 'react-spinners'
import {Home} from './LandingContainer/Home'
import {Navbar} from './LandingContainer/Navbar'
import {MV} from './LandingContainer/MV'
import {Info} from './LandingContainer/Info'
import {Announcement} from './LandingContainer/Announcement'
import {LostFound} from './LandingContainer/LostFound'
import {Cruelty} from './LandingContainer/Cruelty'
import {Hotlines} from './LandingContainer/Hotlines'
import {Footer} from './LandingContainer/Footer'

/* 

Primary Color - 155e59
Secondary Color (Light) d95858
Secondary Color (Dark) ff7070

*/

const Landing = () => {
  return (
      <>
          <div className='2xl:flex justify-center'>
            <div className='hidden xsm:flex flex-col font-Poppins'>
              <div className='sticky top-0 left-0 right-0 z-40'> 
                <Navbar />
              </div>
                {/* <div 
                className="absolute align-top z-50">
                    <img src={Clouds} alt="clouds" />
                </div> */}
                <Home />
                <MV />
                <Info />
                <Announcement />
                <LostFound />
                <Cruelty />
                <Hotlines />
                <Footer />
                <div className='flex justify-center items-center text-center text-white h-10 bg-[#155e59]'>
                  <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-[#155e59] xsm:hidden p-5">
              <div className="flex justify-center items-center w-screen h-screen px-5">
                <p className='flex justify-center items-center text-white font-Poppins mr-6'> Not Supported for smaller devices </p>
                <HashLoader color='white'/>
              </div>
            </div>
        </div>
   </>
  )
}

export default Landing