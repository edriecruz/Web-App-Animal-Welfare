import React, {useState} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import { Modal } from 'antd';


const LostFoundCards = ({laf}) => {
    
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
   {laf.hasApproved === true ?
  <>

    <div className='border bg-white shadow-2xl h-full' key={laf.id}>
        <img src={laf.imageUrl} alt='lost' className='rounded-md w-full h-3/6' />
          <div className='flex pr-5 py-3 text-[#155e59] hover:text-[#d95858] pl-5'>
            <AiFillCalendar size='30px'/>
            <h1 className='pt-1 pl-2 text-[#155e59]'>{laf.dateOfLastSeen}</h1>
          </div>
        <div className='w-3/4 py-3 flex flex-col pl-5'>
          <h1 className='text-[#d95858] lg:text-2xl md:text-base font-bold truncate'
            style={{color: laf.whatReporting === "Lost" ? "#ef4444" : "#22c55e"
            }} > 
            { laf.whatReporting } 
          </h1>
          <p className='text-base text-[#155e59] capitalize truncate'>
          {laf.reporterName}
          </p>
          <button 
            onClick={showModal}
            className="flex text-[#d95858] font-bold hover:text-[#155e59] pt-4 lg:text-base md:text-xs md:font-medium">
            <p className='pb-5'> Read Info </p> 
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
                            <p className='text-[#155e59] text-2xl font-bold tracking-tight capitalize truncate'> {laf.petName} </p> 
                            <div className='flex'>
                              <p className='text-lg text-[#155e59] font-medium tracking-tight capitalize pr-1'>  Status: </p> 
                              <p className='text-lg font-medium tracking-tight capitalize' 
                              style={{color: laf.whatReporting === "Lost" ? "#ef4444" : "#22c55e"
                              }} > 
                              { laf.whatReporting } </p> 
                            </div>
                          </div>
                            <p className='text-[#d95858] text-base tracking-tight pt-2 capitalize'> Found or Reported by: {laf.reporterName} </p> 
                          <div className='grid overflow-hidden grid-cols-3 grid-rows-6 gap-1 pt-5 px-5 pb-10'>
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-medium'>Contact No: </p> 
                            <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#2c2c2c]'>{laf.contactNo} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-medium">Email: </p>
                            <p className="box row-start-2 row-end-2 col-start-2 col-end-4 text-[#2c2c2c]">{laf.email}</p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-medium">Last Seen (Place): </p>
                            <p className="box row-start-3 row-end-3 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.lastSeen}</p>
                            <p className="box row-start-4 row-end-4 col-start-1 col-end-1 text-[#155e59] font-medium">Last Seen (Date) </p>
                            <p className="box row-start-4 row-end-4 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.dateOfLastSeen}</p>
                            <p className="box row-start-5 row-end-5 col-start-1 col-end-1 text-[#155e59] font-medium">Gender: </p>
                            <p className="box row-start-5 row-end-5 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.petGender}</p>
                            <p className="box row-start-6 row-end-6 col-start-1 col-end-1 text-[#155e59] font-medium">Pet Type:</p>
                            <p className="box row-start-6 row-end-6 col-start-2 col-end-4 text-[#2c2c2c] text-justify">{laf.petType}</p>
                            <p className="box row-start-7 row-end-7 col-start-1 col-end-1 text-[#155e59] font-medium"> Description </p>
                            <p className="box row-start-7 row-end-7 col-start-2 col-end-4 text-[#2c2c2c] text-justify">{laf.petDescription}</p>
                          </div>
                            <img src={laf.imageUrl} alt='lostfound-profile' className='py-2'></img>
                      </div>

                    </Modal>
    </>
      : '' }
  </>
  )
}

export default LostFoundCards