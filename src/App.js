import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Login from './components/Login'
import Landing from './Landing'
import {AnnouncementViewPage} from './LandingContainer/AnnouncementViewPage'
import LostFoundViewPage from './LandingContainer/LostFoundViewPage'
import FAQ from './LandingContainer/FAQ'
import { HashLoader } from 'react-spinners'
import {OurProfile} from './LandingContainer/OurProfile'

const App = () => {
  return (
    <>
    <div className='2xl:flex justify-center'>
             
    <div className='hidden xsm:flex flex-col font-Poppins'>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/*" element={<Landing />} />
        <Route path="/view-announcement" element={<AnnouncementViewPage />} />
        <Route path="/view-lostfound" element={<LostFoundViewPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/our-profile" element={<OurProfile />} />
      </Routes>
       
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

export default App