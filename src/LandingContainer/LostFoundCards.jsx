import React, {useState} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import { Modal } from 'antd';


const LostFoundCards = ({lost}) => {
    
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
    <div className='basis-1/3 border bg-white'>
    <img src={lost.img} alt='lost' className='rounded-md' width='400px' />
      <div className='flex pr-5 py-3 text-[#155e59] hover:text-[#d95858] pl-5'>
        <AiFillCalendar size='30px'/>
        <h1 className='pt-1 pl-2 text-[#155e59]'>{lost.lost}</h1>
      </div>
    <div className='w-3/4 py-3 flex flex-col pl-5'>
      <h1 className='text-[#d95858] lg:text-2xl md:text-base font-bold'>
      {lost.contact}</h1>
      <p className='text-base text-[#155e59] '>
      {lost.owner}
      </p>
        <button 
        onClick={showModal}
        className="flex text-[#d95858] font-bold hover:text-[#155e59] pt-8 pb-6 lg:text-base md:text-xs md:font-medium">
        <p className='pt-1'> Read Info </p> 
        <IoIosPaw size='30px' className="pb-2 lg:mt-1.5 md:hidden xsm:mt-1 hover:text-[#155e59]"/>
        </button>
    </div>
  </div>
        {/* Modal */}
                <Modal 
                      title={false} 
                      footer={false}
                      visible={isModalVisible} 
                      onOk={handleOk} 
                      closeIcon={true}
                      onCancel={handleCancel}
                      style={{top:'10px'}}
                      >
                          
                      <div className='flex flex-col justify-start items-left text-left py-3 px-3'>
                          <div className='flex justify-between'>
                            <p className='text-[#155e59] text-2xl font-bold tracking-tight'> {lost.name} </p> 
                            <div className='flex'>
                              <p className='text-lg text-[#155e59] font-medium tracking-tight capitalize pr-1'>  Status: </p> 
                              <p className='text-lg font-medium tracking-tight capitalize' 
                              style={{color: lost.status === "lost" ? "#dc2626" : "#155e59"
                              }} > 
                              { lost.status } </p> 
                            </div>
                          </div>
                            <p className='text-[#d95858] text-base tracking-tight pt-2'> Found or Reported by: {lost.owner} </p> 
                          <div className='grid overflow-hidden grid-cols-3 grid-rows-6 gap-1 pt-5 px-5 pb-10'>
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-medium'>Contact No: </p> 
                            <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#2c2c2c]'>{lost.contact} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-medium">Email: </p>
                            <p className="box row-start-2 row-end-2 col-start-2 col-end-4 text-[#2c2c2c]">{lost.email}</p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-medium">Owner (if Lost): </p>
                            <p className="box row-start-3 row-end-3 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{lost.owner}</p>
                            <p className="box row-start-4 row-end-4 col-start-1 col-end-1 text-[#155e59] font-medium">Address: </p>
                            <p className="box row-start-4 row-end-4 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{lost.address}</p>
                            <p className="box row-start-5 row-end-5 col-start-1 col-end-1 text-[#155e59] font-medium">Last Seen: </p>
                            <p className="box row-start-5 row-end-5 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{lost.lastSeen}</p>
                            <p className="box row-start-6 row-end-6 col-start-1 col-end-1 text-[#155e59] font-medium">Gender: </p>
                            <p className="box row-start-6 row-end-6 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{lost.gender}</p>
                            <p className="box row-start-7 row-end-7 col-start-1 col-end-1 text-[#155e59] font-medium">Desription </p>
                            <p className="box row-start-7 row-end-7 col-start-2 col-end-4 text-[#2c2c2c] text-justify">{lost.description}</p>
                          </div>
                            <img src={lost.img} alt='lostfound-profile' className='py-2'></img>
                      </div>

                    </Modal>
  </>
  )
}

export default LostFoundCards