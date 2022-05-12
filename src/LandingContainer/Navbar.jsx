import React, {useState} from 'react'
import LogoTitle from '../assets/logo-title.png'
import Logo from '../assets/logo.png'
import Title from '../assets/AnimalWelfare.png'
import { Drawer } from 'antd';
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosPaw, IoIosMegaphone} from 'react-icons/io'
import {BsMegaphoneFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import {FaWpforms} from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
import {ImMenu} from 'react-icons/im'
import { Modal, Form, Input,  Menu, Dropdown, InputNumber, Radio,} from 'antd';

import { Link } from 'react-scroll/modules'

const { TextArea } = Input;

export const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const [lostFound, setLostFound] = useState(false);

  const showLostFound = () => {
    setLostFound(true);
  };

  const handleOkLostFound = () => {
    setLostFound(false);
  };

  const handleCancelLostFound = () => {
    setLostFound(false);
  };

  // Modal Login 
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

  const isNotActive = 'flex items-center px-2 gap-3 text-lg font-medium text-[#155e59] transition-all duration-200 ease-in capitalize hover:rounded-lg hover:bg-[#155e59] hover:text-white hover:px-3 hover:py-2'
  const isNotActiveDrawer = 'flex items-center justify-center py-2 my-2 gap-5 text-gray-500 transition-all duration-200 ease-in capitalize text-[#155e59] hover:bg-[#155e59] hover:text-white hover:py-2 hover:px-2'
  // const isActiveDrawer = 'flex items-center justify-center py-2 my-2 gap-5 tracking-wide text-white bg-[#155e59] font-bold border-2 hover:text-white rounded-md border-[#155e59] transition-all duration-200 ease-in capitalize'

  // Lost and Found Modal

  const info = (
    <Menu style={{ padding: 0, marginTop:'15px'}}

    >
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="info"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <HiInformationCircle />
                  <span className="ml-3">
                    About Barangay 
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="announcement"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <IoIosMegaphone />
                  <span className="ml-3">
                   Announcement
                  </span>
              </div>
          </Link>
      </Menu.Item>
      
    </Menu>
  );

  const report = (
    <Menu style={{ padding: 0, marginTop:'15px'}}

    >
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link to=''
              onClick={showModal}          
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <FaWpforms />
                  <span className="ml-3">
                    Lost & Found Form
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="lostfound"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <BsMegaphoneFill />
                  <span className="ml-3">
                   Lost & Found List
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="cruelty"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <CgNotes />
                  <span className="ml-3">
                   Cruelty Guidelines
                  </span>
              </div>
          </Link>
      </Menu.Item>
    </Menu>
  );
 

  return (
    <>

      <div className='hidden lg:flex justify-between bg-white items-center px-7 py-4'>
        <a href="home" className='text-gray-700 hover:brightness-110 '>
            <div className='flex items-center'>
                <img src={ LogoTitle } alt="trackit-ph" className="w-80" />
            </div>
        </a>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
              <div className={isNotActive}>
                Home
              </div>
            </Link>
            <Link to='info' spy={true} smooth={true} offset={-450} duration={500}> 
               <Dropdown 
                overlay={info} 
                placement='bottomLeft' 
                className='flex justify-center items-center text-white'
                
              >
                <Link 
                  to=""
                  className={isNotActive}
                  onClick={ e => e.preventDefault() }
                >
          
                  <span>
                    Info
                  </span>
                  <AiFillCaretDown className='mr-1'/>
                
                </Link>
              </Dropdown>
            </Link>
            <Link to='lostfound' spy={true} smooth={true} offset={-100} duration={500}> 
            <Dropdown 
                overlay={report} 
                placement='bottomLeft' 
                className='flex justify-center items-center text-white'
        
              >
                <Link 
                  to=""
                  className={isNotActive}
                  onClick={ e => e.preventDefault() }
                >
            
                  <span>
                    Report 
                  </span>
                  <AiFillCaretDown className='mr-1'/>

                </Link>
              </Dropdown>
            </Link>
            <Link to='hotlines' spy={true} smooth={true} offset={-50} duration={500}> 
             <div className={isNotActive}>
                Hotlines
              </div>
            </Link>
            <Link to='about-us' spy={true} smooth={true} offset={-100} duration={500}> 
            <div className={isNotActive}>
                About Us
              </div>
            </Link>
            
        <div>
          <button className='flex items-center bg-[#155e59] text-white px-3 py-3 text-xl rounded-md ml-6 font-medium font-Poppins hover:bg-[#d95858] duration-200'
            onClick={showLostFound}
          >
            <IoIosPaw size='30px' />
            <p className='px-2'> LOGIN </p> 
          </button>
        </div>
      </div>
      
      { /* Medium Devices */}
      <div className="hidden xsm:flex justify-between items-center bg-white md:flex sm:flex lg:hidden p-5">
          <div className='flex items-center'>
              <img src={ LogoTitle } alt="waaw-ph" className="w-60" />
                      </div>
          <button 
            className='flex items-center bg-[#155e59] text-white px-2 py-2 ml-4 text-medium rounded-md font-medium font-Poppins hover:bg-[#d95858] duration-200'
            onClick={showDrawer}
          >
            <ImMenu />
            <p className='px-2'> Navbar </p> 
          </button>
          <Drawer title={false} 
                  placement="right" 
                  onClose={onClose} 
                  visible={visible}
                  width='210px'
                  closeIcon={false}
                  footer={
                    <button 
                    className='flex items-center justify-center w-full bg-[#155e59] text-white px-2 py-2 my-5 text-medium rounded-md font-medium font-Poppins hover:bg-[#d95858] duration-200'
                    onClick={showLostFound}
                
                 >
                    <IoIosPaw size='30px' />
                    <p className='px-2'> LOGIN </p> 
                  </button>
                  }
                  >
            <div className='flex items-center justify-center' style={{marginTop:'-25px'}}>
                <img src={ Logo } alt="waaw-ph" className="w-80" />
            </div>
            <img src={ Title } alt="waaw-ph" className="w-60" />
            <div className='py-5'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
              <div className={isNotActiveDrawer}>
                Home
              </div>
            </Link>
            <Link to='announcement' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Announcement
              </div>
            </Link>
            <Link to='/' onClick={showModal} smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Lost and Found Form
              </div>
            </Link>
            <Link to='lostfound' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Lost and Found List
              </div>
            </Link>
            <Link to='cruelty' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
               Cruelty Guidelines
              </div>
            </Link>
            <Link to='hotlines' spy={true} smooth={true} offset={-50} duration={500}> 
             <div className={isNotActiveDrawer}>
                Hotlines
              </div>
            </Link>
            
            </div>
           
          </Drawer>
      </div>
  


  {/* Modal Login*/}

    <Modal 
        title={false} 
        footer={false}
        visible={lostFound}
        onClose={handleOkLostFound} 
        onOk={handleOkLostFound} 
        width='350px'
        destroyOnClose={true}
        zIndex={1000}
        onCancel={handleCancelLostFound}>
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
                  rules={[{ required: true, message: 'Please input your Email!' }]}
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
              <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] text-md px-6 py-2'
                    onClick={handleOkLostFound} 
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white px-5 py-2'>
                    Submit
                  </button>
                </Form.Item>
              </div>
              </Form>
            </div>
      </Modal>

    {/* Lost and Found Form*/}

    <Modal 
        title={false} 
        footer={false}
        visible={isModalVisible}
        onClose={handleOk} 
        onOk={handleOk} 
        width='400px'
        destroyOnClose={true}
        onCancel={handleCancel}>

        <div className='flex flex-col justify-center items-center text-center mt-10'>
            <p className='font-semibold text-3xl font-Poppins'>Lost and Found Form </p> 
            <img src={Logo} alt="logo-login" width='180px' className='' />
        </div>
        <Form
                name="basic"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 30 }}
                initialValues={false}

                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <p className='text-[#2c2c2c] font-medium text-md pt-5'> Your Full Name </p> 
                <Form.Item
                  name="full name"
                  rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                  <Input placeholder='Full Name'/>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1'> What are you reporting? </p> 
                <Form.Item
                  name="reporting"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="lostfound">
                    <Radio value='lost'> Lost </Radio>
                    <Radio value='found'> Found</Radio>
                  </Radio.Group>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1'> Pet Type</p> 
                <Form.Item
                  name="petType"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio value='cat'> Cat </Radio>
                    <Radio value='dog'> Dog</Radio>
                    <Radio value='other'> Other</Radio>
                  </Radio.Group>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Last Seen </p> 
                <Form.Item
                  name="Last Seen"
                >
                  <TextArea placeholder="Where did you last see? " />
                </Form.Item>

                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Email (for Updates) </p> 
                <Form.Item
                  name="email"
                 
                >
                  <Input placeholder='Email'/>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Contact Number (for Updates) </p> 
                <Form.Item
                  name="contact"
                  rules={[{ required: true, message: 'Please input your contact for updates!' }]}
                >
                  <InputNumber type="numbers" 
                    style={{ width: '100%' }} 
                    minLength="11"
                    placeholder='Contact No'
                    controls={false}
                    maxLength="11"/>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Name </p> 
                <Form.Item
                  name="pet name"
                  rules={[{ required: true, message: 'Please input the name of pet!' }]}
                >
                  <Input placeholder="Pet's Name" />
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Description </p> 
                <Form.Item
                  name="pet gender"
                >
                  <TextArea placeholder="Pet's Description (For Unique Identification)" />
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Gender </p> 
                <Form.Item
                  name="pet gender"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio value='lost'> Male </Radio>
                    <Radio value='found'> Female</Radio>
                    <Radio value='unsure'> Unsure</Radio>
                  </Radio.Group>
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Picture for Report</p> 
                <Form.Item
                  name="pet picture"
                  rules={[{ required: true, message: 'Please upload picture' }]}>
                  <input 
                  type="file"  
                  accept="image/png, image/svg, image/jpg, image/jpeg"
                />
              </Form.Item>
              <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] text-md px-6 py-2'
                    onClick={handleOk} 
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white px-5 py-2'>
                    Submit
                  </button>
                </Form.Item>
              </div>
              </Form>
    </Modal>
    </>
  )
}
