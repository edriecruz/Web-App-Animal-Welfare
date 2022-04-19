import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Statement } from './Statement'
import { Info } from './Info'
import { Announcement } from './Announcement'
import { LostFound } from './LostFound'
import { Cruelty } from './Cruelty'
import { Hotlines } from './Hotlines'
import { Footer } from './Footer'

const App = () => {
  return <div>
    <Navbar />
    <Home />
    <Statement />
    <Info />
    <Announcement />
    <LostFound />
    <Cruelty />
    <Hotlines />
    <Footer />
    </div>;
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
