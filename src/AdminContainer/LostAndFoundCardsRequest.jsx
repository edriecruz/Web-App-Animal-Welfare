import React, {useState} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import { Modal } from 'antd';


const { confirm } = Modal;


export const LostAndFoundCardsRequest = ({laf}) => {
    
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


  
function showPromiseConfirm() {
    confirm({
      title: <> <div className='flex'> <IoIosPaw size={25} color="#155e59" /><p className='pl-2'> Do you really want to approve it? </p> </div> </> ,
      icon: false,
      onOk() {
        return new Promise((resolve, reject) => {
          setIsModalVisible(false)
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
          
      },
      onCancel() {},
    });
  }
  
  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure to delete this request?',
      icon: false,
      content: 'It will not post publicly if you delete this request',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        setIsModalVisible(false)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

    return (
        <>
{laf.approved ? "" :
  <>
    <div className='basis-1/3 border bg-white shadow-2xl'>
    <img src={laf.img} alt='lost' className='rounded-md' width='400px' />
      <div className='flex pr-5 py-3 text-[#155e59] hover:text-[#d95858] pl-5'>
        <AiFillCalendar size='30px'/>
        <h1 className='pt-1 pl-2 text-[#155e59]'>{laf.lost}</h1>
      </div>
    <div className='w-3/4 py-3 flex flex-col pl-5'>
      <h1 className='text-[#d95858] lg:text-2xl md:text-base font-bold'>
      {laf.contact}</h1>
      <p className='text-base text-[#155e59] '>
      {laf.owner}
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
                            <p className='text-[#155e59] text-2xl font-bold tracking-tight'> {laf.name} </p> 
                            <div className='flex'>
                              <p className='text-lg text-[#155e59] font-medium tracking-tight capitalize pr-1'>  Status: </p> 
                              <p className='text-lg font-medium tracking-tight capitalize' 
                              style={{color: laf.status === "lost" ? "#dc2626" : "#155e59"
                              }} > 
                              { laf.status } </p> 
                            </div>
                          </div>
                            <p className='text-[#d95858] text-base tracking-tight pt-2'> Found or Reported by: {laf.owner} </p> 
                          <div className='grid overflow-hidden grid-cols-3 grid-rows-6 gap-1 pt-5 px-5 pb-10'>
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-medium'>Contact No: </p> 
                            <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#2c2c2c]'>{laf.contact} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-medium">Email: </p>
                            <p className="box row-start-2 row-end-2 col-start-2 col-end-4 text-[#2c2c2c]">{laf.email}</p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-medium">Owner (if Lost): </p>
                            <p className="box row-start-3 row-end-3 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.owner}</p>
                            <p className="box row-start-4 row-end-4 col-start-1 col-end-1 text-[#155e59] font-medium">Address: </p>
                            <p className="box row-start-4 row-end-4 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.address}</p>
                            <p className="box row-start-5 row-end-5 col-start-1 col-end-1 text-[#155e59] font-medium">Last Seen: </p>
                            <p className="box row-start-5 row-end-5 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.lastSeen}</p>
                            <p className="box row-start-6 row-end-6 col-start-1 col-end-1 text-[#155e59] font-medium">Gender: </p>
                            <p className="box row-start-6 row-end-6 col-start-2 col-end-4 text-[#2c2c2c] capitalize">{laf.gender}</p>
                            <p className="box row-start-7 row-end-7 col-start-1 col-end-1 text-[#155e59] font-medium">Pet Type:</p>
                            <p className="box row-start-7 row-end-7 col-start-2 col-end-4 text-[#2c2c2c] text-justify">{laf.petType}</p>
                            <p className="box row-start-8 row-end-8 col-start-1 col-end-1 text-[#155e59] font-medium"> Description </p>
                            <p className="box row-start-8 row-end-8 col-start-2 col-end-4 text-[#2c2c2c] text-justify">{laf.description}</p>
                          </div>
                            <img src={laf.img} alt='lostfound-profile' className='py-2'></img>
                            <div className='flex justify-around pt-10' >
                          <button htmlType="submit" className='rounded-full text-white bg-red-700 hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                            onClick={showDeleteConfirm} 
                            >
                            Delete
                          </button>
                          <button htmlType="submit" className='rounded-full bg-green-700 text-md text-white px-5 py-2 hover:bg-[#155e59]'
                            onClick={showPromiseConfirm}
                          >
                            Accept
                          </button>
                      </div>
                      </div>

                    </Modal>
    </>
    }
  </>
  )
}
