import React, {useState} from 'react'
import {AiFillBell} from 'react-icons/ai'
import { Modal } from 'antd'


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
                <img src={ann.imageUrl} alt='announcement' className='rounded-md w-full h-2/5' />
                  <div className='flex font-Poppins py-3 ml-3 hover:text-[#155e59]'>
                    <AiFillBell size='30px'/>
                    <h1 className='pt-1 pl-2'>
                     { ann.dateCreated.toDate().toDateString()}
                    </h1>
                  </div>
                <div className='w-3/4 py-3'   >
                  <h1 className='text-[#155e59] ml-5 lg:text-sm font-bold md:text-xs'>
                  {ann.title.length >= 20 ?
                  <>
                    {ann.title.slice(0,15) + '...'}
                  </>
                  :
                  <>
                    {ann.title}
                  </>
                  }</h1>
                  <p className='lg:text-sm md:text-xs ml-5 md:text-xs py-4'>
                  {ann.details.slice(0,40) + '...'} 
                  </p>
                    <button 
                      onClick={showModal}
                      className="flex items-center ml-5 text-[#d95858] font-bold text-base py-4 hover:text-[#155e59]">
                      Read More
               </button>
                </div>
                  </div>

                <Modal 
                        title={false} 
                        footer={false}
                        visible={isModalVisible} 
                        onOk={handleOk} 
                        width={700}
                        onCancel={handleCancel}
                        style={{top:'10px'}}
                        >
                            
                        <div className='flex flex-col justify-start items-left text-left py-3 px-4'>
                            <p className='text-[#155e59] text-2xl font-bold tracking-tight'> {ann.title} </p> 
                            <div className='flex font-Poppins py-3 hover:text-[#155e59]'>
                              <AiFillBell size='25px'/>
                              <h1 className='pl-1'> { ann.dateCreated.toDate().toDateString()} </h1>
                            </div>
                            <p className='text-[#d95858] text-base font-medium tracking-tight pt-2'> by: {ann.author} </p> 
                            <p className='text-[#2c2c2c] text-base py-3 px-5 text-justify'>{ann.details} </p> 
                            <img src={ann.imageUrl} alt='announcement-profile' className='py-5'></img>
                        </div>
                      </Modal> 
   </>

  )
}

export default AnnouncementCards