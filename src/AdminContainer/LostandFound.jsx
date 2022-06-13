import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';    

// Icons and Images
import infobg from '../assets/infobg.png'
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'
import Logo from '../assets/logo.png'

// Misc
import { Menu, Dropdown, Modal, Input, Form, Radio, DatePicker, notification} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

// Database
import { db, storage } from '../firebase-config'
import {collection, onSnapshot, addDoc, Timestamp, orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { LostAndFoundCards } from './LostAndFoundCards'

const { TextArea } = Input;

const lostFoundId = "laf-" + uuidv4().slice(0,8);

const LostandFound  = () => {

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
                        by Pet Type
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
                      by Pet's Name
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
                      by Date Reported
                      </span>
                  </div>
              </Link>
          </Menu.Item>
          
        </Menu>
      );
    
      const [LostAndFound, setLostAndFound] = useState([])
      const lostAndFoundCollectionRef = collection(db, "LostAndFound")
      const [search, setSearch] = useState("")

      useEffect(() => {
        const q = query(lostAndFoundCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, lostAndFoundCollectionRef, snapshot => {
          
            setLostAndFound(snapshot.docs.map(doc => {
            return{
              id: doc.id,
              ...doc.data()
            }
          }).filter((users) =>
          users.reporterName.toLowerCase().includes(search.toLowerCase())))
        })
      }, [search])    

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const [loading, setLoading] = useState(false)
    const [, setProgress] = useState(0)
    const [image, setImage] = useState(null)
    const [lafForm, setLafForm] = useState({
      lostFoundId: lostFoundId,
      hasApproved: true,
      dateCreated: Timestamp.now().toDate(),
      contactNo: "",
      dateOfLastSeen: "",
      email: "",
      imageUrl: "",
      lastSeen: "",
      petDescription: "",
      petGender: "",
      petName: "",
      petType: "",
      reporterName: "",
      whatReporting: "",
    })

    // Handle Image

  const handleImage = e => {
    setImage(e.target.files[0])
  }

  // Handle Future Dates 

  const currentDate = (current) => {
    let customDate = moment();
    return current && current > moment(customDate);
    }

  // Set Birthdate

  function pickDate(date, dateString) {
    setLafForm({...lafForm, dateOfLastSeen: dateString})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      if (
        !lafForm.contactNo ||
        !lafForm.dateOfLastSeen ||
        !lafForm.email ||
        !lafForm.lastSeen ||
        !lafForm.petDescription ||
        !lafForm.petGender ||
        !lafForm.petName ||
        !lafForm.petType ||
        !lafForm.reporterName ||
        !lafForm.whatReporting 
      ){
        notification.open({
          icon: <> <FaSadTear className='mt-5 text-red-500'/>   </>,
          message:  <> <p className='text-red-500'>  Invalid Form </p> </>,
          description:
          'Please make sure that you have completed the entire form before submitting',
        });
        
        setLoading(false)
        return 
      }

      const storageRef = ref(storage, `/LAFRequestImg/${lafForm.lostFoundId}${lafForm.reporterName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          {
            setLafForm({
              lostFoundId: "laf-"+ uuidv4().slice(0,8),
              hasApproved: false,
              dateCreated: Timestamp.now().toDate(),
              contactNo: "",
              dateOfLastSeen: "",
              email: "",
              imageUrl: "",
              lastSeen: "",
              petDescription: "",
              petGender: "",
              petName: "",
              petType: "",
              reporterName: "",
              whatReporting: "",
            })
                
            setLoading(false)
            setIsModalVisible(false)
            notification.success({
              message: 
                  <div className='flex flex-col justify-center items-center' style={{marginLeft: "-50px"}}>
                    <RiStarSmileFill className='my-5 text-green-500' style={{fontSize: '30px'}}/> 
                    <p className='px-3 pb-5 text-justify text-sm'>
                      Form Submitted
                    </p>
                  </div>,
              icon: <> </>,
              duration: 3,
          });
          }
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

            const lostFoundCollectionRef = collection(db, "LostAndFound")
            addDoc(lostFoundCollectionRef, {
              dateCreated: Timestamp.now().toDate(),
              lostFoundId:lafForm.lostFoundId,
              hasApproved: lafForm.hasApproved,
              contactNo: lafForm.contactNo,
              dateOfLastSeen: lafForm.dateOfLastSeen,
              email: lafForm.email,
              imageUrl: downloadURL,
              lastSeen: lafForm.lastSeen,
              petDescription: lafForm.petDescription,
              petGender: lafForm.petGender,
              petName:  lafForm.petName,
              petType:  lafForm.petType,
              reporterName:  lafForm.reporterName,
              whatReporting:  lafForm.whatReporting,
            })
          });
        
        }
        
      );

   }, 2000)
  }

  return (
     
     <>
        <div className='min-w-screen'>
            <div className="bg-[#155e59] h-64 shadow-lg"  
                style={{
                    backgroundImage: `url(${infobg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px'
                }} >    
                <div className='flex justify-between'>
                    <h1 className='pt-7 text-xl font-semibold text-white md:text-base md:mt-1 lg:text-xl lg:ml-16 md:ml-10'> Lost & Found Profiles </h1> 
                    <div className="pt-6 relative text-gray-600 lg:mr-16 md:mr-3">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search Found/Reported By" 
                            onChange={(e)=>{setSearch(e.target.value)}} />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button className={buttonStyle} onClick={showModal}>
                        Add Lost and Found
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}>
                    {LostAndFound.map((user) => (
                        <>
                        <LostAndFoundCards laf={user} key={user.id}/>
                    </>
                    ))}
                    </div>
                </div>
        </div>

        { /* Modal Add Lost and Found */}
        <Modal 
        title={false} 
        footer={false}
        visible={isModalVisible} 
        closeIcon={true}
        destroyOnClose={true}
        width='400px'>

        <div className='flex flex-col justify-center items-center text-center mt-10'>
            <p className='font-semibold text-3xl font-Poppins'>Lost and Found Form </p> 
            <img src={Logo} alt="logo-login" width='180px' className='' />
        </div>
        <form 
         onSubmit={handleSubmit}
         autoComplete="off">

                <p className='text-[#2c2c2c] font-medium text-md pt-5'> Your Full Name </p> 
                <Form.Item name="full name" >
                  <Input placeholder='Full Name' 
                  className='capitalize'
                  value={lafForm.reporterName}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setLafForm({...lafForm, reporterName: e.target.value})}
                  />
                </Form.Item>

              <Form>
                <p className='text-[#2c2c2c] font-medium text-md pb-1'> What are you reporting? </p> 
                <Form.Item
                  name="reporting"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="reporting"
                   value={lafForm.whatReporting}
                   disabled={loading}
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                   onChange={e => setLafForm({...lafForm, whatReporting: e.target.value})}>
                    <Radio value='Lost'> Lost </Radio>
                    <Radio value='Found'> Found</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>

                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Last Seen </p> 
                <Form.Item name="Last Seen">
                  <TextArea placeholder="Where did you last see? Be specific on place" 
                    className='capitalize'
                    value={lafForm.lastSeen}
                    disabled={loading}
                    onChange={e => setLafForm({...lafForm, lastSeen: e.target.value})}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </Form.Item>

                <p className='text-[#2c2c2c] font-medium text-md pb-2 pt-2'> When was the last time you saw it</p> 
                <Form.Item name="date">
                    <DatePicker type='date'
                        value={lafForm.dateOfLastSeen}
                        onChange={ pickDate }
                        disabled={loading}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        disabledDate={currentDate}
                        />
                </Form.Item>

                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Email (for Updates) </p> 
                <Form.Item name="email">
                  <input type='email' placeholder='Email'
                  required
                  className='px-2 py-1 w-full border-2 border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-blue-300'
                  value={lafForm.email}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setLafForm({...lafForm, email: e.target.value})}
                  
                  />
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Contact Number (for Updates) </p> 
                <Form.Item
                  name="contact"
                  rules={[{ required: true, message: 'Please input your contact for updates!' }]}
                >
                  <Input type='number' placeholder='Contact No'
                      value={lafForm.contactNo}
                      disabled={loading}
                      minLength="11"
                      controls={false}
                      maxLength='11'
                      onChange={e => setLafForm({...lafForm, contactNo: e.target.value})}
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </Form.Item>
                
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Name </p> 
                <Form.Item name="pet name">
                  <Input placeholder="Pet's Name (Type N/A if Unsure)" 
                  className='capitalize'
                  value={lafForm.petName}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setLafForm({...lafForm, petName: e.target.value})}
                  />
                </Form.Item>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Description </p> 
                <Form.Item
                  name="pet description"
                >
                  <TextArea placeholder="Pet's Description (For Unique Identification)" 
                   value={lafForm.petDescription}
                   disabled={loading}
                   onChange={e => setLafForm({...lafForm, petDescription: e.target.value})}
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                 />
                </Form.Item>

              <Form>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Gender </p> 
                <Form.Item
                  name="pet gender"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="radiogroup" 
                   value={lafForm.petGender}
                   disabled={loading}
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                   onChange={e => setLafForm({...lafForm, petGender: e.target.value})}>
                    <Radio value='Male'> Male </Radio>
                    <Radio value='Female'> Female</Radio>
                    <Radio value='Unsure'> Unsure</Radio>
                  </Radio.Group>
                </Form.Item>

              </Form>
              <Form>
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Type </p> 
                <Form.Item
                  name="pet gender"
                  rules={[{ required: true, message: 'Please select' }]}
                >
                  <Radio.Group name="radiogroup" 
                   value={lafForm.petType}
                   disabled={loading}
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                   onChange={e => setLafForm({...lafForm, petType: e.target.value})}>
                    <Radio value='Cat'> Cat </Radio>
                    <Radio value='Dog'> Dog</Radio>
                    <Radio value='Unsure'> Unsure</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>

              <div className='py-3 pb-6'>
                <p className='text-[#2c2c2c] font-medium text-md pb-1'> Pet's Picture For Report </p> 
                <input type='file' disabled={loading} name='image' accept="image/*" required onChange={ handleImage }/>
              </div>

              <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] text-md px-6 py-2'
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
                       <p> Submitting </p> 
                       :
                       <p> Submit Form</p> 
                    }
                  </button>
                </Form.Item>
              </div>
        </form>
    </Modal>
    </>
     )
}
export default LostandFound;