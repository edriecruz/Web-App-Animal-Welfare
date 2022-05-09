import React from 'react'
import Sidebar from './AdminContainer/Sidebar'
import { HashLoader, RingLoader } from 'react-spinners'
import { BgColorsOutlined } from '@ant-design/icons'
import Background from './AdminContainer/Background'
import DashBoardCards from './AdminContainer/DashBoardCards'
import LostandFound from './AdminContainer/LostandFound'

const Admin = () => {
  return (
    <>  
      <div>
        <div className='2xl:hidden lg:flex md:flex sm:hidden xsm:hidden font-Poppins'>
       
          <Sidebar />
          <LostandFound />
      
         
        </div>

          <div className='2xl:hidden lg:flex md:flex sm:hidden xsm:hidden justify-center items-center text-center text-white h-10 bg-[#155e59] '>
            <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
          </div> 
      </div>
        <div className="flex justify-center items-center bg-[#155e59] 2xl:hidden lg:hidden md:flex sm:flex xsm:flex p-5">
          <div className="flex justify-center items-center w-screen h-screen px-5">
            <p className='flex justify-center items-center text-white font-Poppins mr-6'> Not Supported for smaller devices </p>
            <HashLoader color='white'/>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#155e59] 2xl:flex lg:hidden md:flex sm:hidden xsm:hidden p-5">
          <div className="flex justify-center flex-col items-center text-center w-screen h-screen px-5">
            <p className='flex justify-center items-center text-white font-Poppins mr-6 pb-20 text-5xl'> Not Supported for Larger Devices, try Zooming In!  </p>
            <RingLoader size='100px' color='white'/>
          </div>
        </div>
    </>
  )
}

export default Admin