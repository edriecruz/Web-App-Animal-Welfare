import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Logo from '../assets/logo.png'
import {BiLogOut} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import {MdDashboard} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import {GiAcousticMegaphone} from "react-icons/gi";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {MdOutlineManageAccounts} from "react-icons/md";

import { Modal, Form, Input } from 'antd';

const Sidebar = () => {

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
            <NavLink to='/*' className='hover:brightness-110'> 
              <img src={logo} alt='logo' className='w-60'/>
            </NavLink>
            <p className='text-md font-medium pt-2'> Admin Page </p>
            <p className='text-sm font-normal'> Barangay Welfare Account </p>
          </div>
        
        <div className="flex flex-col">
          <hr className="mb-4 mt-2 min-w-full" />
              <NavLink
              to="/*"
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
              
          <button className='text-gray-900 hover:text-[#155e59] text-lg font-medium mt-4 py-3 rounded-lg border-t-2'>
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
             <img src={Logo} alt="logo-login" width='180px' className='' />
        </div>
        <div className='flex flex-col text-2xl py-8' style={{marginBottom:'-30px'}}>
              <Form
                name="basic"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 30 }}
                initialValues={false}

                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <p className='text-[#999897] text-md pb-3'> Email </p> 
                <Form.Item
                  name="Email"
                >
                  <Input />
                </Form.Item>
                <p className='text-[#999897] text-md pb-3'> Password </p> 
                <Form.Item
                  name="Password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <p className='text-[#999897] text-md pb-3'> Confirm Password </p> 
                <Form.Item
                name="confirm"
                dependencies={['Password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('Password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] text-md px-6 py-2'
                    onClick={handleCancel} 
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white px-5 py-2'>
                    Update
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