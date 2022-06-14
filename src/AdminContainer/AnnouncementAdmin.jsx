import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';    

import infobg from '../assets/infobg.png'
import Logo from '../assets/logo.png'

import {FcSearch} from 'react-icons/fc'
import {IoIosPaw} from 'react-icons/io'
import {AiFillCaretDown} from 'react-icons/ai'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'

import { Menu, Dropdown, notification, Modal, Form, Input } from 'antd';

import AnnouncementCards from './AnnouncementCards'

import {v4 as uuidv4} from 'uuid'

// Database
import { db, storage } from '../firebase-config'
import {collection, onSnapshot,  addDoc, serverTimestamp, Timestamp,  orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const { TextArea } = Input;

const announcementId = "announcement-" + uuidv4().slice(0,8);

const AnnouncementAdmin  = () => {

    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'
    const buttonStyle = 'flex justify-center items-center text-white lg:ml-16 md:ml-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'

  

      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
          setIsModalVisible(true);
      };
    
      const handleOk = () => {
          setIsModalVisible(false);
      };

      const [loading, setLoading] = useState(false);
      const [Announcement, setAnnouncement] = useState([])

      const [image, setImage] = useState(null)
      const [search, setSearch] = useState("")
      const [form, setForm] = useState({

          announcementId: announcementId,
          author: '',
          details: '',
          title: '',
          imageUrl: '',
          dateCreated: Timestamp.now().toDate()
      })
    

      const announcementCollectionRef = collection(db, "Announcement")

      useEffect(() => {
        const q = query(announcementCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, announcementCollectionRef, snapshot => {
          setAnnouncement(snapshot.docs.map(doc => {
            return{
              id: doc.id,
              ...doc.data()
            }
          }).filter((users) =>
          users.title.toLowerCase().includes(search.toLowerCase())))
        })
       
      }, [search])


      


    // Sorting
    const [order, setOrder] = useState('asc')

    const sorting = (col) => {
      if (order === 'asc'){
        const sorted = [...Announcement].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setAnnouncement(sorted);
          setOrder("dsc")
        
      }
      if (order === 'dsc') {
        const sorted = [...Announcement].sort((a,b) => 
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
         setAnnouncement(sorted);
          setOrder("asc")
      }
    }
    

    const info = (
      <Menu style={{ padding: 0, marginTop:'15px'}}
  
      >
      
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
        <button
           onClick={() => sorting('title')}
           >
                <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Title
                    </span>
                </div>
            </button>
        </Menu.Item>
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
        <button
           onClick={() => sorting('author')}
           >
                <div className='flex justify-start font-medium items-center'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Author
                    </span>
                </div>
            </button>
        </Menu.Item>    
      </Menu>
    );

    const filterBy = (
      <Menu style={{ padding: 0, marginTop:'15px'}}
  
      >
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
            <button 
            onClick={() => sorting('petName')}
            >
                <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Pet Type
                    </span>
                </div>
            </button>
        </Menu.Item>
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
            <button 
              onClick={() => sorting('ownerName')}
            >
                <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Pet Gender
                    </span>
                </div>
            </button>
        </Menu.Item>
      </Menu>
    );


      // Handle Image

      const handleImage = e => {
        setImage(e.target.files[0])
      }

      // Handle Submit 

      const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
  
        setTimeout(() => {
          if (
            !form.author ||
            !form.details||
            !form.title || 
            !image
            
          ){
            notification.open({
              icon: <> <FaSadTear className='mt-5 text-red-500'/>   </>,
              message:  <> <p className='text-red-500'>  Invalid Form </p> </>,
              description:
              'Please make sure that you have completed the entire form.',
            });
            
            setLoading(false)
            return 
          }
  
          const storageRef = ref(storage, `/NewsImg/${form.announcementId}${form.title}`);
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
              {
                setForm({
                  announcementId: "announcement-" + uuidv4().slice(0,8),
                  author: "",
                  details: "",
                  title:  "",
                  imageUrl: "",
                  dateCreated: serverTimestamp(),
                })
                    
                setLoading(false)
                setIsModalVisible(false)
                notification.success({
                  message: 
                      <div className='flex flex-col justify-center items-center' style={{marginLeft: "-50px"}}>
                        <RiStarSmileFill className='my-5 text-green-500' style={{fontSize: '50px'}}/> 
                        <p className='px-3 pb-5 text-justify text-sm'>
                          Announcement Added
                        </p>
                      </div>,
                  icon: <> </>,
                  duration: 3,
              });
              }
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const announcementCollectionRef = collection(db, "Announcement")
                addDoc(announcementCollectionRef, {
                  dateCreated: Timestamp.now().toDate(),
                  announcementId: form.announcementId,
                  author: form.author,
                  details: form.details,
                  title:  form.title,
                  imageUrl: downloadURL,
                })
              });
            
            }
            
          );
  
       }, 2000)
  
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
                            type="search" name="search" placeholder="Search Title"
                            onChange={(e)=>{setSearch(e.target.value)}} />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button className={'flex justify-center items-center text-white lg:ml-16 md:ml-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'} onClick={showModal}>
                        Add Animal
                    </button>
                    <div className='flex justify-end'> 
                      <Dropdown 
                          overlay={filterBy} 
                          placement='bottomCenter' 
                          className='flex justify-center items-center text-white lg:mr-12 md:mr-12 mt-5'
                      >
                          <button
                          className={isNotActive}
                          >
                                          <span>
                            Filter By
                          </span>
                          <AiFillCaretDown />
                          </button>
                      </Dropdown>
                      <Dropdown 
                          overlay={info} 
                          placement='bottomRight' 
                          className='flex justify-center items-center text-white lg:mr-16 md:mr-3 mt-5'
                      >
                          <button
                          className={isNotActive}
                          >
                                          <span>
                              Sort By
                          </span>
                          <AiFillCaretDown />
                          </button>
                      </Dropdown>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}>
                     { Announcement.map((user) => (
                        <>
                        <AnnouncementCards ann={user} key={user.id}/>
                        </>
                        ))}
                   
                    </div>
                </div>
        </div>

        { /* Modal Add Announcement */}
                <Modal 
                      title={false} 
                      footer={false}
                      visible={isModalVisible} 
                      closeIcon={true}
                      destroyOnClose={true}
                      style={{top:'10px'}}
                      >
                  <>
                  <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                <div className='flex flex-col justify-center items-center text-center mt-5'>
                    <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
                    <img src={Logo} alt="logo-login" width='180px' className='' />
                </div>
                
                {/* Title */}
                <p className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Announcement Title </p> 
                <Form.Item name="title" >
                  <Input placeholder="Announcement Title" className='capitalize'
                  value={form.title}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setForm({...form, title: e.target.value})}
                
                  />
                </Form.Item>

                 {/* Author */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Author </p> 
                <Form.Item
                  name="Author"
                  rules={[{ required: true, message: 'Please input the author' }]}
                >
                  <Input placeholder="Author" className='capitalize'
                  value={form.author}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setForm({...form, author: e.target.value})}
                  />
                </Form.Item>
              
                {/* Details */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'>Details</p> 
                <Form.Item
                  name="details"
                  rules={[{ required: true, message: 'Please input the details' }]}
                >
                  <TextArea placeholder="Details" 
                    value={form.details}
                    disabled={loading}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    onChange={e => setForm({...form, details: e.target.value})}
                  />
                </Form.Item>

                <div className='py-3 pb-3'>
                  <p className='text-[#2c2c2c] font-medium text-md pb-1'> Announcement </p> 
                  <input type='file' name='image' disabled={loading} accept="image/*" required onChange={ handleImage }/>
                </div>

                <div className='flex justify-around pr-12 pt-6' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button type="button" className='rounded-full text-[#155e59] hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                    onClick={handleOk} 
                    disabled={loading}
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
                       <p> Adding Announcement </p> 
                       :
                       <p> Add Announcement </p> 
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


export default AnnouncementAdmin