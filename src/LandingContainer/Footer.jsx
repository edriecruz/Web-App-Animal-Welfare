import React from 'react'
import {Link} from 'react-router-dom'
import FooterLogo from '../assets/footer-logo.png'

export const Footer = () => {
  return (
      <>
    <div className='hidden lg:flex' id='about-us'>
        <div className='basis-1/3 flex flex-col items-center'>
            <Link to='/home' className='hover:brightness-110 '>
                <img src={FooterLogo} alt='footer-logo' className='h-60'/>
            </Link>
        </div>

        <div className='basis-1/3 p-10'>
            <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Information</h1>
            <Link to='our-profile' className='text-2xl font-semibold hover:text-[#d95858]'>
                <p className='text-xl font-medium border-t-2 border-[#155e59] pt-4 '>Our Profile </p>
            </Link>
            <Link to='faq' className='text-2xl font-semibold hover:text-[#d95858]'> 
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
            <Link to='/home' className='hover:brightness-110 '>
                <img src={FooterLogo} alt='footer-logo' className='h-60'/>
            </Link>
        </div>

        <div className='basis-1/3 p-10'>
            <h1 className='font-semibold text-3xl text-[#155e59] pb-4'>Information</h1>
            <Link to='our-profile' className='text-2xl font-semibold hover:text-[#d95858]'>
                <p className='text-xl font-medium border-t-2 border-[#155e59] pt-4 '>Our Profile </p>
            </Link>
            <Link to='faq' className='text-2xl font-semibold hover:text-[#d95858]'> 
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
    </>
  )
}
