import React, { useState, useRef } from 'react'
import logo from '../assets/logo.png'
import Logo from '../assets/logo.png'
import {BiLogOut} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import {MdDashboard} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import {GiAcousticMegaphone} from "react-icons/gi";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {MdOutlineManageAccounts} from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../context/userContext'

import { Modal, Form } from 'antd';



const Sidebar = () => {

  const {logoutUser, resetPassword} = useUserContext()
  const location = useLocation()

  const ActiveStyle = "flex items-center justify-center text-center border-2 border-[#155e59] my-2 text-base font-medium px-4 py-3 text-white bg-[#155e59] rounded-lg";
  const InactiveStyle = "flex items-center justify-center text-center border-2 border-[#155e59] my-2 text-base text-gray-900 font-medium px-4 py-3 hover:text-white hover:bg-[#155e59] rounded-lg";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
      <> 
      <div className='shadow-2xl top-0 fixed hide-scrollbar h-full overflow-y-auto scrollbar-hide min-w-210 flex-row flex-nowrap shadow-xl bg-white shadow-lg py-4 px-6 transition-all duration-300' 
      >
        <div className="flex flex-col border-gray-100">
          <div className="flex flex-col justify-center items-center py-6">
            <NavLink to='/' className='hover:brightness-110'> 
              <img src={logo} alt='logo' className='w-60'/>
            </NavLink>
            <p className='text-md font-medium pt-2'> Admin Page </p>
            <p className='text-sm font-normal'> Barangay Welfare Account </p>
          </div>
        
        <div className="flex flex-col">
          <hr className="mb-4 mt-2 min-w-full" />
              <NavLink
              to="/"
              exact
              className={({ isActive }) =>
                          isActive ? ActiveStyle : InactiveStyle
                        }            
            >
              <MdDashboard size={30} className='pr-2'/>
              Dashboard
              </NavLink>

              <NavLink
              to="/animal-profile"
              className={({ isActive }) =>
              isActive ? ActiveStyle : InactiveStyle
            }      
            >
              <ImProfile size={30} className='pr-2'/>
              Animal Profiles
            </NavLink>

              <NavLink
              to="/lostfound-request"
              className={({ isActive }) =>
                          isActive ? ActiveStyle : InactiveStyle
                        }      
            >
              <AiOutlineQuestionCircle size={30} className='pr-2'/>
              Lost & Found Request
            </NavLink>

            <NavLink
              to="/lostfound-approved"
              className={({ isActive }) =>
                          isActive ? ActiveStyle : InactiveStyle
                        }      
            >
              <AiOutlineQuestionCircle size={30} className='pr-2'/>
              Lost & Found Approve
            </NavLink>

              <NavLink
                to="/announcement"
                className={({ isActive }) =>
                isActive ? ActiveStyle : InactiveStyle
              }      
              >
              <GiAcousticMegaphone size={30} className='pr-2'/> 
              Announcement
              </NavLink>

              <NavLink
                to
                onClick={showModal}
                className={InactiveStyle}      
              >
              <MdOutlineManageAccounts size={30} className='pr-2'/> 
              Update Account
              </NavLink>
              
          <button className='text-gray-900 hover:text-[#155e59] text-lg font-medium mt-4 py-3 rounded-lg border-t-2'
           onClick={logoutUser}>
            <div className='flex justify-center my-3'>
              <BiLogOut className='mt-1'/>
              <p className='pl-2'> Logout </p>
            </div>
          </button>
        </div>
        </div>
      </div>

      {/* Update Account */}

      <Modal 
        title={false} 
        footer={false}
        visible={isModalVisible}
        onClose={handleOk} 
        onOk={handleOk} 
        width='350px'
        destroyOnClose={true}
        zIndex={1000}
        centered={true}
        onCancel={handleCancel}>
       <div className='flex flex-col justify-center items-center text-center mt-5'>
             <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
             <img src={Logo} alt="logo-login" width='200px' className='pt-5' />
        </div>
        <div className='flex flex-col text-2xl py-8' style={{marginBottom:'-30px'}}>
              <Form
                name="basic"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 30 }}
                initialValues={false}
                autoComplete="off"
              >
        
              <div className='flex flex-col justify-center items-center text-center pt-2' >
                <p className='text-gray-700'> <b>Sending Password Recovery Code </b>  will send out an email to your <b>registered email address </b>, in which you might then click the link to set your new password. You will be automatically <b> logged out from the page </b> after clicking the "Send Password Recovery Code" button. </p> 
                <Form.Item>
                  <button htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white mt-8 px-5 py-2'
                    onClick={resetPassword}>
                    {location.pathname="/"}
                    Send Password Recovery Code
                  </button>
                </Form.Item>
              </div>
              </Form>
            </div>
      </Modal>


      </>
    );
}

export default Sidebar