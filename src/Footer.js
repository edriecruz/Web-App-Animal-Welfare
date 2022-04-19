import React from 'react'
import logo from './photos/logo.png'

export const Footer = () => {
  return (
    <div
    className='flex'>
        <div
        className='basis-1/3 flex flex-col items-center'>
            <img src={logo} 
            className=' h-60'/>
            <h1
            className=' font-Comfortaa font-bold text-5xl text-primaryColor'>
            Animal Welfare</h1>
        </div>

        <div
        className='basis-1/3 p-10'>
            <h1
            className=' font-Poppins font-bold text-3xl text-primaryColor'>Information</h1>
            <p
            className=' font-Poppins text-2xl font-semibold'>Our Profile</p>
            <p
            className='font-Poppins text-2xl font-semibold'>Frequently Asked Questions</p>

        </div>

        <div
        className='basis-1/3 p-10'>
            <h1
            className=' font-Poppins font-bold text-3xl text-primaryColor'>Contact Us</h1>

            <div className='flex space-x-5'>
                <p
                className=' font-Poppins text-2xl font-semibold'>
                Phone:</p>
                <p 
                className=' font-Poppins text-2xl font-normal'>
                09668824215</p>
            </div>
            
            <div className='flex space-x-5'>
                <p
                className=' font-Poppins text-2xl font-semibold'>
                Email:</p>
                <p 
                className=' font-Poppins text-2xl font-normal'>
                animalwelfare@gmail.com</p>
            </div>

            <div className='flex space-x-5'>
                <p
                className=' font-Poppins text-2xl font-semibold'>
                Location:</p>
                <p 
                className=' font-Poppins text-2xl font-normal'>
                San Miguel Street</p>
            </div>
        </div>
    </div>
  )
}
