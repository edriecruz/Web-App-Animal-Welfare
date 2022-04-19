import React from 'react'
import infobg from './photos/infobg.png'
import hotlineimg from './photos/hotlineimg.png'
import hotlineimg2 from './photos/hotlineimg2.png'

export const Hotlines = () => {
  return (
    <div
    className='relative'>
        <div
        className='relative'>
            <img src={infobg}/>
        </div>
        <div
        className='flex justify-center'>
            {/*White Background*/}
        <div 
        className='absolute top-0 text-center bg-white mt-10 rounded-lg p-10 flex flex-col w-3/4'>

            {/*Title*/}
            <div
            className='mt-5 p-6'>
            <h1
            className='font-Poppins font-extrabold text-primaryColor text-4xl'>
            Veterinary Hotlines</h1>
            <p
            className='font-Poppins text-base'>
                Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
            </div>

            {/*Vet Hotline*/}
            <div
            className='flex justify-around '>
            <div>
                <h1 
                className='font-Poppins font-semibold text-lg'>
                Health Concerns Hotline</h1>
                <hr/>
                <div 
                className=' overflow-scroll h-4/5'>
                    <h1
                    className='font-Poppins font-semibold'>Veterinary Clinic 1</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Veterinary Clinic 2</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Veterinary Clinic 3</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Veterinary Clinic 4</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Veterinary Clinic 5</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>

                </div>
            </div>

            {/*Image Center*/}
            <div>
                <img src={hotlineimg} className="absolute"/>
                <img src={hotlineimg2} className=" ml-28 mt-20"/>
            </div>

            {/*Cruelty Hotline*/}
            <div>
                <h1 
                className='font-Poppins font-semibold text-lg'>
                Cruelty & Neglect Hotline</h1>
                
                <hr/>
                <div 
                className=' overflow-scroll h-4/5'>
                    <h1
                    className='font-Poppins font-semibold'>National Emergency</h1>
                    <p
                    className='font-Poppins'>911</p>
                    <h1
                    className='font-Poppins font-semibold'>Barangay</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>PAWS</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Cruelty Hotline 1</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    <h1
                    className='font-Poppins font-semibold'>Cruelty Hotline 2</h1>
                    <p
                    className='font-Poppins'>Contact Number</p>
                    </div>
            </div>

            </div>
        </div>
        </div>
    </div>
  )
}
