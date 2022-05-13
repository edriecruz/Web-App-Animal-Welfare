import React, {useState} from 'react'
import {IoIosPaw} from 'react-icons/io'
import {AiFillBell} from 'react-icons/ai'
import { Modal } from 'antd';


const AnnouncementCards = ({ann}) => {

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
   
            <div className='basis-1/3 shadow-lg' key={ann.id}>
                <img src={ann.img} alt='announcement' width='400px' />
                  <div className='flex font-Poppins py-3 ml-3 hover:text-[#155e59]'>
                    <AiFillBell size='30px'/>
                    <h1 className='pt-1 pl-2'>{ann.date}</h1>
                  </div>
                <div className='w-3/4 py-3'   >
                  <h1 className='text-[#155e59] ml-5 lg:text-lg font-bold md:text-base'>
                  {ann.title.slice(0,20)}</h1>
                  <p className='lg:text-base ml-5 md:text-xs py-4'>
                  {ann.description.slice(0,50) + '...'}
                  </p>
                    <button 
                      onClick={showModal}
                      className="flex items-center ml-5 text-[#d95858] font-bold text-base pt-4 hover:text-[#155e59]">
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
                      onCancel={handleCancel}
                      style={{top:'10px'}}
                      >
                          
                      <div className='flex flex-col justify-start items-left text-left py-3 px-3'>
                          <p className='text-[#155e59] text-2xl font-bold tracking-tight'> {ann.title} </p> 
                          <div className='flex font-Poppins py-3 hover:text-[#155e59]'>
                            <h1>{ann.date}</h1>
                          </div>
                          <p className='text-[#d95858] text-base font-medium tracking-tight pt-2'> by: {ann.reportedBy} </p> 
                          <p className='text-[#2c2c2c] text-base py-5 px-5 text-justify'>{ann.description} </p> 
                          <img src={ann.img} alt='announcement-profile' className='py-5'></img>
                      </div>

                    </Modal>
   </>

  )
}

export default AnnouncementCards