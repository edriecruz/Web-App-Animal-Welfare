import React, {useState} from 'react'
import {AiFillBell} from 'react-icons/ai'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'
import Logo from '../assets/logo.png'

import { Modal, Form, notification, Input } from 'antd'
import { db, storage } from '../firebase-config'
import {doc, deleteDoc, Timestamp, updateDoc,} from 'firebase/firestore'
import { deleteObject, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const { confirm } = Modal;

const { TextArea } = Input;

const AnnouncementCards = ({ann}) => {

const [isModalVisible, setIsModalVisible] = useState(false);
const [updateModal, setUpdateModal] = useState(false);
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

const showUpdate = () => {
    setUpdateModal(true);
};

const updateOk = () => {
    setUpdateModal(false);
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

  // Update Documents

  const [image, setImage] = useState(null)
  const [updateForm, setUpdateForm] = useState({
      announcementId: ann.announcementId,
      author: ann.author,
      dateCreated: Timestamp.now().toDate(),
      details: ann.details,
      imageUrl: ann.imageUrl,
      title: ann.title
  })

  const handleImage = e => {
    setImage(e.target.files[0])
  }


  const updateAnnouncement = (id) => {
    setLoading(true)
    setTimeout(() => {

      try {
        const storageRef = ref(storage, `/NewsImg/${updateForm.announcementId}${updateForm.title}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              console.log(prog)
            },
            (error) => console.log(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                updateDoc(doc(db, "Announcement", id), {
                  ...updateForm,
                  announcementId: updateForm.announcementId,
                  author: updateForm.author,
                  dateCreated: Timestamp.now().toDate(),
                  details: updateForm.details,
                  imageUrl:downloadURL,
                  title: updateForm.title
                });
                setIsModalVisible(false)
                setUpdateModal(false)
                notification.open({
                  icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
                  message:  <> <p className='text-green-500'> Announcement Updated </p> </>,
                  description:
                  'Your announcement has been updated',
                });
              });
            });
      } catch (error) {
        notification.open({
          icon: <> <FaSadTear className='mt-5 text-red-500'/>   </>,
          message:  <> <p className='text-red-500'> Error updating the documents </p> </>,
          description:
          'Please update the document again',
        });
    }
      setLoading(false)
    }, 1000)
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
                        width={700}
                        onOk={handleOk} 
                        closeIcon={false}
                        onCancel={handleCancel}
                        style={{top:'10px'}}
                        closable={true}
                        >
                            
                        <div className='flex flex-col justify-start items-left text-left py-3 px-4'>
                            <p className='text-[#155e59] text-2xl font-bold tracking-tight truncate'> {ann.title} </p> 
                            <div className='flex font-Poppins py-3 hover:text-[#155e59]'>
                              <AiFillBell size='25px'/>
                              <h1 className='pl-1'> { ann.dateCreated.toDate().toDateString()} </h1>
                            </div>
                            <p className='text-[#d95858] text-base font-medium tracking-tight pt-2 truncate'> by: {ann.author} </p> 
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
                            onClick={showUpdate}
                          >
                            Update
                          </button>
                      </div>
                      </Modal> 

                
                { /* Modal Add Announcement */}
                <Modal 
                      title={false} 
                      footer={false}
                      visible={updateModal} 
                      closeIcon={true}
                      
                      destroyOnClose={true}
                      style={{top:'10px'}}
                      >
                  <>
                  <form
                    autoComplete="off"
                    onSubmit={e => e.preventDefault(updateAnnouncement(ann.id))}
                >
                <div className='flex flex-col justify-center items-center text-center mt-5'>
                    <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
                    <img src={Logo} alt="logo-login" width='180px' className='' />
                </div>
                
                {/* Title */}
                <p className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Announcement Title </p> 
                <Form.Item name="title" >
                  <Input placeholder="Announcement Title" className='capitalize'
                  defaultValue={updateForm.title}
                  value={updateForm.title}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setUpdateForm({...updateForm, title: e.target.value})}
                
                  />
                </Form.Item>

                 {/* Author */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Author </p> 
                <Form.Item
                  name="Author"
                  rules={[{ required: true, message: 'Please input the author' }]}
                >
                  <Input placeholder="Author" className='capitalize'
                  defaultValue={updateForm.author}
                  value={updateForm.author}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setUpdateForm({...updateForm, author: e.target.value})}
                  />
                </Form.Item>
              
                {/* Details */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'>Details</p> 
                <Form.Item
                  name="details"
                  rules={[{ required: true, message: 'Please input the details' }]}
                >
                  <TextArea placeholder="Details" 
                    defaultValue={updateForm.details}
                    value={updateForm.details}
                    disabled={loading}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    onChange={e => setUpdateForm({...updateForm, details: e.target.value})}
                  />
                </Form.Item>

                <div className='py-3 pb-3'>
                  <p className='text-[#2c2c2c] font-medium text-md pb-1'> Announcement </p> 
                  <input type='file' name='image' 
                     disabled={loading} accept="image/*"
                     required
                    onChange={ handleImage }
                  />
                </div>

                <div className='flex justify-around pr-12 pt-6' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button type="button" className='rounded-full text-[#155e59] hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                    onClick={updateOk} 
                    disabled={loading}
                    required
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item>
                  <button type="submit" 
                  className={
                    loading ? 
                    'rounded-full bg-[#155e59] text-md text-white opacity-50 px-5 py-2 hover:bg-[#d95858]'
                    :
                    'rounded-full bg-[#155e59] text-md text-white px-5 py-2 hover:bg-[#d95858]'}>
                    {
                       loading ? 
                       <p> Updating ... </p> 
                       :
                       <p> Update </p> 
                    }
                  </button>
                </Form.Item>
              </div>
                </form>
                  </>
                </Modal>
   </>

  )
}

export default AnnouncementCards