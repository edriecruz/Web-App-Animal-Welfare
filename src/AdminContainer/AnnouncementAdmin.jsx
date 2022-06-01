import React, {useState, useEffect} from 'react';
import {FcSearch} from 'react-icons/fc'
import infobg from '../assets/infobg.png'
import {IoIosPaw} from 'react-icons/io'
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';    
import { Menu, Dropdown } from 'antd';
import { Modal, Form, Input } from 'antd';
import Logo from '../assets/logo.png'
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";



const { confirm } = Modal;
const { TextArea } = Input;

const AnnouncementAdmin  = () => {
  
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Announcement");

  const createAnnouncement = async () => {
    await addDoc(usersCollectionRef,  {Title: newTitle, Author: newAuthor, Details: newDetails, timestamp: serverTimestamp()});
  };

  const deleteAnnouncement = async (id) => {
    const userDoc = doc(db, 'Announcement', id);
    await deleteDoc(userDoc)
  };

  useEffect(() => {

    const getAnnouncement = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getAnnouncement()
  }, [])




    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'
    const buttonStyle = 'flex justify-center items-center text-white lg:ml-16 md:ml-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'

    const info = (
        <Menu style={{ padding: 0, marginTop:'15px'}}
    
        >
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                        by Date
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Title
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
              <Link 
                  to="lostfound"
                  spy={true} smooth={true} offset={-100} duration={500}
              >
                  <div className='flex justify-start font-medium items-center'>
                      <IoIosPaw />
                      <span className="ml-3">
                      by Author
                      </span>
                  </div>
              </Link>
          </Menu.Item>    
        </Menu>
      );

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

      // For Confirmation in Addition
      function showPromiseConfirm() {
        confirm({
          title: <> <div className='flex'> <IoIosPaw size={25} color="#155e59" /><p className='pl-2'> Do you really want to add it publicly? </p> </div> </> ,
          icon: false,
          onOk() {
            return new Promise((resolve, reject) => {
              setIsModalVisible(false)
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              window.location.reload(false);
            }).catch(() => console.log('Oops errors!'));
              
          },
          onCancel() {},
        });
      }

      // For Deletion
      function showPromiseConfirmDelete() {
        confirm({
          title: <> <div className='flex'> <IoIosPaw size={25} color="#155e59" /><p className='pl-2'> Do you really want to delete it? </p> </div> </> ,
          icon: false,
          onOk() {
            return new Promise((resolve, reject) => {
              setIsModalVisible(false)
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              window.location.reload(false);
            }).catch(() => console.log('Oops errors!'));
              
          },
          onCancel() {},
        });
      }


  return (
     
     <>
        <div className='min-w-screen '>
            <div className="bg-[#155e59] h-64 shadow-lg"  
                style={{
                    backgroundImage: `url(${infobg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px'
                }} >    
                <div className='flex justify-between'>
                    <h1 className='pt-7 text-xl font-semibold text-white md:text-base md:mt-1 lg:text-xl lg:ml-16 md:ml-10'> Pet Announcement </h1> 
                    <div className="pt-6 relative text-gray-600 lg:mr-16 md:mr-3">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button className={buttonStyle} onClick={showModal}>
                        Add Announcement
                    </button>
                    <Dropdown 
                        overlay={info} 
                        placement='bottomRight' 
                        className='flex justify-center items-center text-white lg:mr-16 md:mr-3 mt-5'
                        trigger={'click'}  
                    >
                        <Link 
                        to=""
                        className={isNotActive}
                        >
                                        <span>
                            Sort By
                        </span>
                        <AiFillCaretDown />
                        </Link>
                    </Dropdown>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}> */}
                
                              {/* { announcementData.slice(0,4).map((user) => (
                                  <>
                                  <AnnouncementCards ann={user} key={user.id}/>
                                  </>
                                  ))}
                              */}
                      <div>
          <div className='flex  flex-wrap justify-start'>
                   {users.map((user) => { 
                    return (
                    <div className='shadow-lg m-10 p-5 w-1/4 '>
                      <img/>
                      <h2 className='font-bold'>Title: </h2><p>{user.Title}</p>
                      <h4 className='font-bold'>Author: </h4> <p>{user.Author}</p>
                      <h4 className='font-bold'>Details: </h4><p>{user.Details}</p>
                      <h4 className='font-bold'>Time: </h4><p>{user.time}</p>
                      <button className=' p-2 shadow-xl rounded-lg bg-slate-200 mt-2'
                      onClick={() => {deleteAnnouncement(user.id); showPromiseConfirmDelete(); }}>Delete</button>
                    </div>
                    );
                  })}
                    </div>
                </div>
        </div>
        </div>
        { /* Modal Add Animal */}
                <Modal 
                      title={false} 
                      footer={false}
                      visible={isModalVisible} 
                      onOk={handleOk} 
                      closeIcon={true}
                      onCancel={handleCancel}
                      destroyOnClose={true}
                      style={{top:'10px'}}
                      >
                  <>
                  <Form
                    name="basic"
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 30 }}
                    initialValues={false}

                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                <div className='flex flex-col justify-center items-center text-center mt-5'>
                    <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
                    <img src={Logo} alt="logo-login" width='180px' className='' />
                </div>
                
              
                {/* Title */}
                <p className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Announcement Title </p> 
                    <Form.Item
                      name="title"
                      rules={[{ required: true, message: 'Please input Announcement Title!' }]}
                    >
                      <Input placeholder="Announcement Title" className='capitalize' onChange={(event) => {setNewTitle(event.target.value)}}/>
                    </Form.Item>
                {/* Author */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Author </p> 
                    <Form.Item
                      name="Author"
                      rules={[{ required: true, message: 'Please input the author' }]}
                    >
                      <Input placeholder="Author" className='capitalize' onChange={(event) => {setNewAuthor(event.target.value)}}/>
                    </Form.Item>
                {/* Details */}
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'>Details</p> 
                    <Form.Item
                      name="details"
                      rules={[{ required: true, message: 'Please input the details' }]}
                    >
                      <TextArea placeholder="Details" onChange={(event) => {setNewDetails(event.target.value)}}/>
                    </Form.Item>
                    
                { /* Picture */ }

                  {/* <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Photo</p> 
                    <Form.Item
                      name="announcement-picture"
                      rules={[{ required: true, message: 'Please upload picture' }]}>
                      <input 
                      type="file"  
                      accept="image/png, image/svg, image/jpg, image/jpeg"
                    />
                    </Form.Item> */}
    
                <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                    onClick={handleOk} 
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white px-5 py-2 hover:bg-[#d95858]' 
                  onClick={() => { createAnnouncement(); showPromiseConfirm(); }}>
                    Add
                  </button>
                </Form.Item>
                </div>
              
                </Form>
                  </>
                </Modal>
    </>
     )
}


export default AnnouncementAdmin