import React, {useState} from 'react'
import {AiFillBell} from 'react-icons/ai'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'


import { Modal, Form, notification } from 'antd'
import { db, storage } from '../firebase-config'
import {doc, deleteDoc} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage';

const { confirm } = Modal;

const AnnouncementCards = ({ann}) => {

const [isModalVisible, setIsModalVisible] = useState(false);
// const [updateModal, setUpdateModal] = useState(false);
const [loading, setLoading] = useState(false)

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
      setIsModalVisible(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };


  // Delete Cards

  const desertRef = ref(storage, `/NewsImg/${ann.announcementId}${ann.title}`);

  const removePet = id => {
    setLoading(true)
    
    setTimeout(() => {
      deleteDoc(doc(db, "Announcement", id))
      deleteObject(desertRef).then(()=>{
        notification.open({
          icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
          message:  <> <p className='text-green-500'> Announcement Deleted </p> </>,
          description:
          'Your announcement has been deleted permanently',
        });
      })
      .catch((error)=>{
        notification.open({
          icon: <> <FaSadTear className='mt-5 text-red-500'/>   </>,
          message:  <> <p className='text-red-500'> Error Deleting the Documents </p> </>,
          description:
          'Please delete again the documents',
        });
      })
      setLoading(false)
    }, 2000)
  }

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure to delete this Announcement?',
      icon: false,
      content: 'It will not post publicly if you delete this request',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setIsModalVisible(false)
        removePet(ann.id)
      },
      onCancel() {},
    });
  }



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

                        <div className='flex justify-around py-5' >
                          <button htmlType="submit" className={ loading ? 
                          'rounded-full text-white bg-red-700 hover:text-white opacity-50 cursor-not-allowed hover:bg-[#155e59] text-md px-6 py-2'
                          :
                          'rounded-full text-white bg-red-700 hover:text-white hover:bg-[#155e59] text-md px-6 py-2'}
                            onClick={() => showDeleteConfirm()} 
                            >
                            Delete
                          </button>
                          <button htmlType="submit" className='rounded-full bg-green-700 text-md text-white px-5 py-2 hover:bg-[#155e59]'
                            // onClick={showUpdate}
                          >
                            Update
                          </button>
                      </div>
                      </Modal> 
   </>

  )
}

export default AnnouncementCards