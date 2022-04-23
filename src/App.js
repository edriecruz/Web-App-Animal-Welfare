import React, {useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
// import Login from './components/Login'
import Landing from './Landing'
import { Announcement } from './LandingContainer/Announcement'
import { Cruelty } from './LandingContainer/Cruelty'
import { Footer } from './LandingContainer/Footer'
import { Home } from './LandingContainer/Home'
import { Hotlines } from './LandingContainer/Hotlines'
import { Info } from './LandingContainer/Info'
import { LostFound } from './LandingContainer/LostFound'
import { MV } from './LandingContainer/MV'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/*" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App