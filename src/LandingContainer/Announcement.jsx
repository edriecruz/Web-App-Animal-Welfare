import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import bone from '../assets/bone.png'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import {IoIosPaw} from 'react-icons/io'
import {AiFillBell} from 'react-icons/ai'
import { Modal, Form, Input, Button, Checkbox } from 'antd';

 const data = [
    { id: 1, title: "John Doe", date: '2022-04-21', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 2, title: "Victor Wayne", date: '2022-03-09', img:news2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 3, title: "Jane Doe", date: '2022-02-01', img:news3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
    { id: 4, title: "ML", date: '2022-01-12', img:news1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
  ];

export const Announcement = () => {

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

  return (
    <>
    <div className='pb-5' id='announcement'>
      <div className='flex flex-col justify-center p-3 mt-10'>
          <div className='flex flex-col items-center self-center w-1/2'>
              <img src={bone}  alt='bone' className="w-10"/>
              <h1 className='text-[#d95858] font-semibold text-lg'>
                  Our News</h1>
              <h1 className=' text-[#155e59] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                  Latest News Update
              </h1>
              <p className='text-center lg:text-base py-6 md:text-sm xsm:text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-full mx-auto px-4" style={{
          maxWidth: '1400px'
        }}>
          { data.map((user) => (
              <>
              <div className='basis-1/3' key={user.id}>
                <img src={user.img} alt='announcement' width='400px' />
                  <div className='flex py-3 hover:text-[#155e59]'>
                    <AiFillBell size='30px'/>
                    <h1 className='pt-1 pl-2'>{user.date}</h1>
                  </div>
                <div className='w-3/4 py-3'>
                  <h1 className='text-[#155e59] lg:text-2xl font-bold md:text-base'>
                  {user.title}</h1>
                  <p className='lg:text-base md:text-xs py-4'>
                  {user.description}
                  </p>
                    <button 
                      onClick={showModal}
                      className="flex items-center text-[#d95858] font-bold text-base pt-4 hover:text-[#155e59]">
                      Read More
                    <IoIosPaw size='30px' className="ml-1 hover:text-[#155e59]"/>
                   {/* Modal Announcement*/}
                    </button>
                </div>
                         
              </div>

              
                    <Modal 
                      title={false} 
                      footer={false}
                      visible={isModalVisible} 
                      onOk={handleOk} 
                      onCancel={handleCancel}>
                    
                      <div className='flex flex-col justify-start items-left text-left'>
                          <p className='text-[#155e59] text-2xl'> {user.title} </p> 
                      </div>

                    </Modal>
            </>
            ))}
          </div>
          <div className='flex justify-center items-center text-center py-10'>
            <Link to='/view-announcement'>
                <p className='text-xl font-bold text-[#d95858] hover:text-[#155e59]'> Click to view others </p> 
            </Link>
          </div>
    </div>

  </>
  )
}
