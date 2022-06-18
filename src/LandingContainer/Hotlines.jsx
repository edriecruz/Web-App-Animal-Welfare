import React from 'react'
import infobg from '../assets/infobg.png'
import hotlineimg from '../assets/hotlineimg.png'
import hotlineimg2 from '../assets/hotlineimg2.png'
import {IoIosPaw} from 'react-icons/io'
import {BiPhoneCall} from 'react-icons/bi'

const leftData = [
    { id: 1, title: 'Veterinary Clinic 1', img: IoIosPaw, description: 'Vacant'},
    { id: 2, title: 'Veterinary Clinic 2', img: IoIosPaw, description: 'Vacant'},
    { id: 3, title: 'Veterinary Clinic 3', img: IoIosPaw, description: 'Vacant'},
    { id: 4, title: 'Veterinary Clinic 1', img: IoIosPaw, description: 'Vacant '},
    { id: 5, title: 'Veterinary Clinic 2', img: IoIosPaw, description: 'Vacant'},
    { id: 6, title: 'Veterinary Clinic 3', img: IoIosPaw, description: 'Vacant'},
  ];

  const rightData = [
    { id: 1, title: 'Veterinary Clinic 4', img: IoIosPaw, description: 'Vacant '},
    { id: 2, title: 'Veterinary Clinic 5', img: IoIosPaw, description: 'Vacant'},
    { id: 3, title: 'Veterinary Clinic 6', img: IoIosPaw, description: 'Vacant'},
    { id: 1, title: 'Veterinary Clinic 4', img: IoIosPaw, description: 'Vacant '},
    { id: 2, title: 'Veterinary Clinic 5', img: IoIosPaw, description: 'Vacant'},
    { id: 3, title: 'Veterinary Clinic 6', img: IoIosPaw, description: 'Vacant'},
  ];

export const Hotlines = () => {
  return  (
    <div className='relative pb-5' id='hotlines'>
    <div className="relative flex flex-col justify-around items-center text-white  " style={{
                        backgroundImage: `url(${infobg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>

        <div className='hidden w-3/4 lg:flex lg:flex flex-col justify-center items-center text-center my-20 mx-5 pb-10 rounded-lg bg-white'>

            {/*Title*/}
            <div className='mt-5 p-6'>
                <h1 className='font-bold text-[#155e59] text-4xl'>
                Veterinary Hotlines</h1>
                <p className='text-base text-[#2c2c2c]'>
                Urgent Emergency Hotline Rescue
</p>
            </div>
            <div className='grid overflow-hidden grid-cols-3 grid-rows-1 gap-5 pr-4'>

            {/*Left Content*/}
            <div className='box row-start-1 row-end-1 col-start-1 col-end-1'>
                <div className='flex justify-center items-center text-center font-semibold text-2xl text-[#2c2c2c] my-10'>
                    Health Concern Hotline
                </div>
                <div className='overflow-y-scroll hide-scrollbar h-full overflow-y-auto scrollbar-hide overflow-x-hidden max-h-96'>
                {leftData.map((user) => (
                <>
                        <div className='flex items-center text-center my-10 justify-center'>
                        
                            <div className='flex flex-col w-full'>
                                <h1 className='font-semibold lg:text-xl md:text-base text-[#155e59]'>
                                {user.title}</h1>
                                <p className='lg:text-base text-[#2c2c2c] md:text-sm'>
                                {user.description}</p>
                            </div>
                        </div>
                    </>
                ))}
                 </div>
            </div>

            {/*Image Center*/}
            <div className='lg:box row-start-1 row-end-1 col-start-2 col-end-3 my-5 pt-20'>
                <div className='flex justify-center items-center text-center'>
                    <img src={hotlineimg} alt='dog' className="absolute mt-60 2xl:pt-32 2xl:pt-60 lg:flex lg:pt-56 lg:pb-12 lg:pt-14 md:hidden xs:hidden xsm:hidden"/>
                    {/* <img src={hotlineimg2} alt='chaozi' className="absolute z-10 2xl:pt-32 2xl:pt-64 ml-8 mt-60 lg:flex lg:pt-60 lg:pr-20 md:hidden xs:z-0 xsm:hidden"/> */}
                </div>
            </div>

            {/*Right Content*/}
            
            <div className='box row-start-1 row-end-1 col-start-3 col-end-4'>
                <div className='flex justify-center items-center text-center font-semibold text-2xl text-[#2c2c2c] my-10'>
                    Cruelty & Neglect Report
                </div>
                <div className='overflow-y-scroll hide-scrollbar h-full overflow-y-auto scrollbar-hide max-h-96 mt-3 '>
            {rightData.map((user) => (
                <>
                <div className='flex items-center text-center justify-center mt-10'>
                    
                        <div className='flex flex-col w-full'>
                        <h1 className=' font-semibold lg:text-xl md:text-base text-[#155e59]'>
                        {user.title}</h1>
                        <p className='lg:text-base md:text-sm text-[#2c2c2c] '>
                        {user.description}</p>
                    </div>
            
                </div>
                </>
            ))}
            
            </div>
            </div>
            </div>
        </div>

        {/* Medium Devices */}

        <div className='sm:flex flex-col justify-center items-center text-center my-20 mx-10 pb-10 [pxrounded-lg bg-white lg:hidden'>

            {/*Title*/}
            <div className='mt-5 p-6'>
                <h1 className='font-bold text-[#155e59] text-4xl'>
                Veterinary Hotlines</h1>
                <p className='text-base text-[#2c2c2c]'>
                    Lorem ipsum dolor sit amet adipiscing elit, dolor sit</p>
            </div>
            <div className='flex flex-col'>

            {/*Left Content*/}
            <div className='box row-start-1 row-end-1 col-start-1 col-end-3'>
                <div className='flex justify-center items-center text-center font-semibold lg:text-2xl sm:text-lg xsm:pr-4 text-[#2c2c2c] pl-10 my-10'>
                    Health Concern Hotline
                </div>
                <div className='overflow-y-scroll overflow-x-hidden max-h-96'>
                {leftData.map((user) => (
                <>
                        <div className='flex items-center text-center my-10 justify-center'>
                            <BiPhoneCall size='60px' className='mx-4 text-[#d95858]'/>
                            <div className='flex flex-col w-1/2'>
                                <h1 className='font-semibold lg:text-xl md:text-base text-[#155e59]'>
                                {user.title}</h1>
                                <p className='lg:text-base text-[#2c2c2c] md:text-sm'>
                                {user.description}</p>
                            </div>
                        </div>
                    </>
                ))}
                 </div>
            </div>

            {/*Right Content*/}
            
            <div className='box row-start-1 row-end-1 col-start-3 col-end-5 pt-10'>
                <div className='flex justify-center items-center text-center font-semibold  lg:text-2xl sm:text-lg sm:pr-8 xsm:pr-6 text-[#2c2c2c] pl-10 my-10'>
                    Cruelty & Neglect Report
                </div>
                <div className='overflow-y-scroll max-h-96 mt-3 '>
            {rightData.map((user) => (
                <>
                <div className='flex items-center text-center justify-center mt-10'>
                        <BiPhoneCall size='60px' className='mx-4 text-[#d95858]'/>
                        <div className='flex flex-col w-1/2'>
                        <h1 className=' font-semibold lg:text-xl md:text-base text-[#155e59]'>
                        {user.title}</h1>
                        <p className='lg:text-base md:text-sm text-[#2c2c2c] '>
                        {user.description}</p>
                    </div>
            
                </div>
                </>
            ))}
            
            </div>
            </div>
            </div>
        </div>
        </div>
        
        </div>
  )
}
