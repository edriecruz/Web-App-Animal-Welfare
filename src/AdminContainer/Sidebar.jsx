import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {BiLogOut} from 'react-icons/bi'
import AdminNavbar from './AdminNav'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {MdDashboard} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {MdOutlineManageAccounts} from "react-icons/md";

//test sidebar
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState('-left-64'); 
    return(
      <> 
      <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            /> 
      <div
                className={'h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300'}
            >
        <div className="flex flex-col min-h screen w-5/5 shadow-l border-r-2 items-stretch min-h-full flex-nowrap px-0 relative border-gray-100">
          <div className="flex flex-col h-5/6 justify-center items-center py-10">
            <img src={logo} alt='logo' className='w-60'/>
            <p className='text-md font-medium pt-2'> Admin Page </p>
          </div>
        
        <div className="flex flex-col">
          <hr className="my-4 min-w-full" />

          
          <ul className="flex-col min-w-full flex list-none">
            <li className="rounded-lg mb-4">
              <NavLink
              to="/"
              exact            
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
            >
            <MdDashboard size='30px'/> 
              Dashboard
              </NavLink>
            </li>

            <li className="rounded-lg mb-2">
              <NavLink
              to="/settings"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
            >
            <ImProfile size='30px'/> 
              Animal Profiles
            </NavLink>
            </li>

            <li className="rounded-lg mb-2">
              <NavLink
              to="/LostandFound"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
              activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
            >
            <AiOutlineQuestionCircle size='30px'/> 
              Lost and Found
            </NavLink>
            </li>
            
            <li className="px-4 rounded-lg mb-2 text-gray-700">
              <a
                href="https://bit.ly/34k9EbT"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-sm font-light py-3"
              >
            <MdOutlineManageAccounts size='30px'/> 
              Manage
              </a>
            </li>            
          </ul> 

          <ul className="flex-col min-w-full flex list-none absolute bottom-0 hover:text-[#155e59]">
            <li className="bg-gradient-to-tr from-red-700 to-red-500 px-4 rounded-lg text-white">
              <a 
              href="https://bit.ly/34k9EbT"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-sm font-light py-3"
              >
              <BiLogOut size='30px'/> 
               Logout
              </a>
            </li>
          </ul>
          

        </div>
        </div>
      </div>

      
      
      
      </>
    );
}

export default Sidebar