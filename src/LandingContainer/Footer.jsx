import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Modal, Form, Input} from 'antd'
import Logo from '../assets/logo.png'
import FooterLogo from '../assets/footer-logo.png'

import { useUserContext } from '../context/userContext'

export const Footer = () => {

    const {forgotPassword, setEmail, validating} = useUserContext()

    const [resetPassModal, setResetPassModal] = useState(false)

    const resetModal = () => {
        setResetPassModal(true);
    };

    const resetOk = () => {
        setResetPassModal(false);
    };

    const resetCancel = () => {
        setResetPassModal(false);
    };

  return (
      <>
    <div className='hidden lg:flex' id='about-us'>
        <div className='basis-1/3 flex flex-col items-center'>
            <button className='hover:brightness-110 '>
                <img src={FooterLogo} alt='footer-logo' className='h-60'/>
            </button>
        </div>

        <div className='basis-1/3 p-10'>
            <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>In
            <button className='font-semibold' onClick={resetModal}> f </button>
            ormation</h1>
            <Link to='our-profile' className='text-2xl font-semibold hover:text-[#d95858]'>
                <p className='text-xl font-medium border-t-2 border-[#155e59] pt-4 '>Our Profile </p>
            </Link>
            <Link to='' className='text-2xl font-semibold hover:text-[#d95858]'> 
                <p className='text-xl font-medium '>Frequently Asked Questions</p>
            </Link>

        </div>
        <div className='basis-1/3 p-10'>
        <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Contact</h1>
            <div className='flex'>
                <p className='text-lg font-bold border-t-2 border-[#155e59] pt-4 '> Email: </p>
                <p className='text-lg font-medium border-t-2 border-[#155e59] pt-4 px-2'> animalwelfare@gmail.com</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Contact: </p>
                <p className='text-lg font-medium px-2'> 09089260456</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Address: </p>
                <p className='text-lg font-medium px-2'> Barangay San Roque, Marikina City</p>
            </div>

        </div>
    </div>
    <div className='hidden md:flex lg:hidden'>
        <div className='basis-1/2 p-10'>
            <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Information</h1>
            <Link to='our-profile' className='text-2xl font-semibold hover:text-[#d95858]'>
                <p className='text-xl font-medium border-t-2 border-[#155e59] pt-4 '>Our Profile </p>
            </Link>
            <Link to='faq' className='text-2xl font-semibold hover:text-[#d95858]'> 
                <p className='text-xl font-medium '>Frequently Asked Questions</p>
            </Link>
         

        </div>
        <div className='basis-1/2 p-10'>
        <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Contact</h1>
            <div className='flex'>
                <p className='text-lg font-bold border-t-2 border-[#155e59] pt-4 '> Email: </p>
                <p className='text-lg font-medium border-t-2 border-[#155e59] pt-4 px-2'> animalwelfare@gmail.com</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Contact: </p>
                <p className='text-lg font-medium px-2'> 09089260456</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Address: </p>
                <p className='text-lg font-medium px-2'> Barangay San Roque, Marikina City</p>
            </div>

        </div>
    </div>
    <div className='hidden xsm:flex sm:flex md:hidden lg:gidden flex-col'>
        <div className='basis-1/3 flex flex-col items-center'>
            <button  className='hover:brightness-110 '>
                <img src={FooterLogo} alt='footer-logo' className='h-60'/>
            </button>
        </div>

        <div className='basis-1/3 p-10'>
            <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Information</h1>
            <Link to='our-profile' className='text-2xl font-semibold hover:text-[#d95858]'>
                <p className='text-xl font-medium border-t-2 border-[#155e59] pt-4 '>Our Profile </p>
            </Link>
            <Link to='' className='text-2xl font-semibold hover:text-[#d95858]'> 
                <p className='text-xl font-medium '>Frequently Asked Questions</p>
            </Link>
           
       
        </div>
        <div className='basis-1/3 p-10'>
        <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Contact</h1>
            <div className='flex'>
                <p className='text-lg font-bold border-t-2 border-[#155e59] pt-4 '> Email: </p>
                <p className='text-lg font-medium border-t-2 border-[#155e59] pt-4 px-2'> animalwelfare@gmail.com</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Contact: </p>
                <p className='text-lg font-medium px-2'> 09089260456</p>
            </div>
            <div className='flex'>
                <p className='text-lg font-bold'> Address: </p>
                <p className='text-lg font-medium px-2'> Barangay San Roque, Marikina City</p>
            </div>

        </div>
    </div>


    {/* Reset Modal */}

    <Modal 
        title={false} 
        footer={false}
        visible={resetPassModal}
        onClose={resetOk} 
        onOk={resetOk} 
        width='400px'
        destroyOnClose={true}
        zIndex={1000}
        centered={true}
        onCancel={resetCancel}>
       <div className='flex flex-col justify-center items-center text-center mt-5'>
             <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
             <img src={Logo} alt="logo-login" width='200px' className='pt-5' />
        </div>
        <div className='flex flex-col text-2xl py-8' style={{marginBottom:'-30px'}}>
        
         <form onSubmit={forgotPassword}>
              <div className='flex flex-col justify-center items-center text-center pt-2' >
                <p className='text-gray-700 text-lg'> <b>Sending Password Recovery Code </b>  will send out an email to your <b>registered email address </b>, in which you might then click the link to set your new password. <b> Disregard the email </b> if you do not want to change your password </p> 
                <div className='flex pt-7 text-center items-center w-full'>
                    <Form.Item 
                    name="Email"
                    className='w-full'
                    rules={[{ required: true, message: 'Please input your Email!' }]}>
                    <Input 
                    placeholder='Input your Email'
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    onChange={(e) => {setEmail(e.target.value)}}
                    disabled={validating}
                    />
                    </Form.Item>
                </div>
                <Form.Item>
                  <button type="submit" 
                  className={
                    validating ? 
                    'rounded-full bg-[#155e59] opacity-50 text-md text-white mt-4 px-5 py-2'
                    :
                    'rounded-full bg-[#155e59] text-md text-white mt-4 px-5 py-2'}

                    >
                    {
                      validating ? 
                      <h1 className='text-white'> Sending .... </h1>
                      :
                      <h1 className='text-white'> Send Password Recovery Code</h1>
                    }
                  </button>
                </Form.Item>
              </div>
              {/* </Form> */}
              </form>
            </div>
      </Modal>

    </>
  )
}
