import React from 'react'

// import Clouds from './assets/clouds.png'
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
   </>
  )
}

export default Landing