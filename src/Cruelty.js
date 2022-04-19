import React from 'react'
import crueltyimg1 from './photos/crueltyimg1.png'
import crueltyimg2 from './photos/crueltyimg2.png'
import PawsR from './photos/PawsR.png'

export const Cruelty = () => {
  return (
    <div
    className='flex flex-col mt-10 pb-36'>
        <div
        className='flex flex-col text-center place-self-center w-1/2'>
            <h1 
            className=' font-Poppins text-primaryColor text-4xl font-extrabold'>
            Guidance Regarding Cruelty</h1>
            <p
            className=' font-Poppins text-center text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        {/*Content*/}
        <div
        className='flex flex-row items-center justify-around'>
            
            {/*Left Content*/}
            <div
            className=''>
                
                <div
                className='flex'>
                <img src={PawsR} className=" h-8 m-2"/>
                    <div 
                    className='flex flex-col w-1/2'>
                        <h1
                        className='font-Poppins font-semibold text-xl text-primaryColor'>
                        Lorem Ipsum</h1>
                        <p
                        className='font-Poppins text-base'>
                        Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                    </div>
                </div>

                <div
                className='flex'>
                <img src={PawsR} className=" h-8 m-2"/>
                    <div 
                    className='flex flex-col w-1/2'>
                        <h1
                        className='font-Poppins font-semibold text-xl text-primaryColor'>
                        Lorem Ipsum</h1>
                        <p
                        className='font-Poppins text-base'>
                        Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                    </div>
                </div>

                <div
                className='flex'>
                <img src={PawsR} className=" h-8 m-2"/>
                    <div 
                    className='flex flex-col w-1/2'>
                        <h1
                        className='font-Poppins font-semibold text-xl text-primaryColor'>
                        Lorem Ipsum</h1>
                        <p
                        className='font-Poppins text-base'>
                        Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                    </div>
                </div>

            </div>

            {/*Image Center*/}
            <div
            className='relative'>
                <img src={crueltyimg1} className="absolute"/>
                <img src={crueltyimg2} className=""/>
            </div>


            {/*Right Content*/}
            <div
            className=' text-right'>
            
            <div
            className='flex'>
                    <div 
                    className='flex flex-col w-1/2'>
                    <h1
                    className='font-Poppins font-semibold text-xl text-primaryColor'>
                    Lorem Ipsum</h1>
                    <p
                    className='font-Poppins text-base'>
                    Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                </div>
                <img src={PawsR} className="h-8 m-2"/>
            </div>

            <div
            className='flex'>
                    <div 
                    className='flex flex-col w-1/2'>
                    <h1
                    className='font-Poppins font-semibold text-xl text-primaryColor'>
                    Lorem Ipsum</h1>
                    <p
                    className='font-Poppins text-base'>
                    Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                </div>
                <img src={PawsR} className=" h-8 m-2"/>
            </div>

            <div
            className='flex'>
                    <div 
                    className='flex flex-col w-1/2'>
                    <h1
                    className='font-Poppins font-semibold text-xl text-primaryColor'>
                    Lorem Ipsum</h1>
                    <p
                    className='font-Poppins text-base'>
                    Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
                </div>
                <img src={PawsR} className=" h-8 m-2"/>
            </div>

            </div>

        </div>
    </div>
  )
}
