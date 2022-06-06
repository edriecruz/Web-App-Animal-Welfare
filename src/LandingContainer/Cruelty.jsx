import React from 'react'
import crueltyimg1 from '../assets/crueltyimg1.png'
import crueltyimg2 from '../assets/crueltyimg2.png'
import {IoIosPaw} from 'react-icons/io'


const leftData = [
    { id: 1, title: 'Lorem Ipsum 1', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
    { id: 2, title: 'Lorem Ipsum 2', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { id: 3, title: 'Lorem Ipsum 3', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

  const rightData = [
    { id: 1, title: 'Lorem Ipsum 4', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
    { id: 2, title: 'Lorem Ipsum 5', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { id: 3, title: 'Lorem Ipsum 6', img: IoIosPaw, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

export const Cruelty = () => {
  return (
      <>
    <div className='hidden 2xl:flex lg:flex md:flex justify-center' id='cruelty'>
    <div className='flex flex-col pb-36'>
        <div className='flex flex-col text-center place-self-center w-1/2'>
            <h1 className='text-[#155e59] lg-text-4xl font-extrabold py-5 mt-5 md:text-2xl xsm:text-base'>
            Guidance Regarding Cruelty</h1>
            <p className='text-center lg:text-base md:text-sm lg:mb-20 md:mb-20'>
            Animal cruelty is a crime against animals, eliminating their right to live. This is guidance to detach us from any crimes that may be involved in animal cruelty.
</p>
        </div>

        {/*Content*/}
        <div className='grid overflow-hidden grid-cols-3 grid-rows-1 gap-5'>

            {/*Left Content*/}
            <div className='box row-start-1 row-end-1 col-start-1 col-end-1'>
                {leftData.map((user) => (
                <>
                        <div className='flex items-center text-left my-10 justify-start'>
                            <IoIosPaw size='60px' className='mx-4 text-[#d95858]'/>
                            <div className='flex flex-col w-1/2'>
                                <h1 className='font-semibold lg:text-xl md:text-base text-[#155e59]'>
                                {user.title}</h1>
                                <p className='lg:text-base md:text-sm'>
                                {user.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            {/*Image Center*/}
            <div className='lg:box row-start-1 row-end-1 col-start-2 col-end-3 mt-5'>
                <div className='flex justify-center items-center text-center'>
                    <img src={crueltyimg2} alt='dog' className="absolute mt-60 lg:flex lg:pl-20 lg:pb-12 lg:pt-14md:hidden xs:hidden xsm:hidden"/>
                    <img src={crueltyimg1} alt='dog' className="absolute z-10 mt-60 lg:flex lg:pr-20 md:flex xs:mr-10 xs:z-0 xsm:hidden"/>
                </div>
            </div>

            {/*Right Content*/}
            <div className='box row-start-1 row-end-1 col-start-3 col-end-4'>
            {rightData.map((user) => (
                <>
                <div className='flex items-center text-right justify-end mt-10'>
                        <div className='flex flex-col w-1/2'>
                        <h1 className=' font-semibold lg:text-xl md:text-base text-[#155e59]'>
                        {user.title}</h1>
                        <p className='lg:text-base md:text-sm'>
                        {user.description}</p>
                    </div>
                    <IoIosPaw size='60px' className='mx-4 text-[#d95858]'/>
                </div>
                </>
            ))}
            </div>
        </div>

      
    </div>
    </div> 
    <div className='hidden xsm:flex sm:flex justify-center 2xl:hidden lg:hidden md:hidden' id='cruelty'>
    <div className='flex flex-col pb-36'>
        <div className='flex flex-col text-center place-self-center w-1/2'>
            <h1 className='text-[#155e59] lg-text-4xl font-extrabold py-5 mt-5 md:text-2xl xsm:text-base'>
            Guidance Regarding Cruelty</h1>
            <p className='text-center lg:text-base md:text-sm lg:mb-20 md:mb-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        {/*Content*/}
        <div className='grid overflow-hidden grid-cols-4 grid-rows-1 gap-5'>

            {/*Left Content*/}
            <div className='box row-start-1 row-end-1 col-start-1 col-end-3'>
                {leftData.map((user) => (
                <>
                        <div className='flex items-center text-left my-10 justify-start'>
                            <IoIosPaw size='60px' className='mx-4 text-[#d95858]'/>
                            <div className='flex flex-col w-1/2'>
                                <h1 className='font-semibold lg:text-xl md:text-base text-[#155e59]'>
                                {user.title}</h1>
                                <p className='lg:text-base md:text-sm'>
                                {user.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            {/*Right Content*/}
            <div className='box row-start-1 row-end-1 col-start-3 col-end-5'>
            {rightData.map((user) => (
                <>
                <div className='flex items-center text-right justify-end mt-10'>
                        <div className='flex flex-col w-1/2'>
                        <h1 className=' font-semibold lg:text-xl md:text-base text-[#155e59]'>
                        {user.title}</h1>
                        <p className='lg:text-base md:text-sm'>
                        {user.description}</p>
                    </div>
                    <IoIosPaw size='60px' className='mx-4 text-[#d95858]'/>
                </div>
                </>
            ))}
            </div>
        </div>

      
    </div>
    </div> 
    </>
  )
}
