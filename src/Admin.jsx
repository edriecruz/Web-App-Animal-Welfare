import React from 'react'
import Sidebar from './AdminContainer/Sidebar'
import { HashLoader, RingLoader } from 'react-spinners'

const Admin = ({display}) => {
  return (
    <>  
      <div>
        <div className='2xl:hidden lg:flex flex-col md:flex sm:hidden xsm:hidden font-Poppins'>
           <div className='flex'>
             <div className='flex w-80'>
              <Sidebar />
             </div>
             <div className='w-full md:pl-14 lg:pl-0'>
              {display}
              
            </div>
          </div>
    
        </div>

      </div>
        <div className="flex justify-center items-center bg-[#155e59] 2xl:hidden lg:hidden md:hidden sm:flex xsm:flex p-5">
          <div className="flex justify-center items-center w-screen h-screen px-5">
            <p className='flex justify-center items-center text-white font-Poppins mr-6'> Not Supported for smaller devices </p>
            <HashLoader color='white'/>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#155e59] 2xl:flex lg:hidden md:hidden sm:hidden xsm:hidden p-5">
          <div className="flex justify-center flex-col items-center text-center w-screen h-screen px-5">
            <p className='flex justify-center items-center text-white font-Poppins mr-6 pb-20 text-5xl'> Not Supported for Larger Devices, try Zooming In!  </p>
            <RingLoader size='100px' color='white'/>
          </div>
        </div>
    </>
  )
}

export default Admin