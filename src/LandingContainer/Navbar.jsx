import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll/modules'

// Logo and Icons
import LogoTitle from '../assets/logo-title.png'
import Logo from '../assets/logo.png'
import Title from '../assets/AnimalWelfare.png'

import {IoIosPaw, IoIosMegaphone} from 'react-icons/io'
import {BsMegaphoneFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import {FaWpforms} from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
import {ImMenu} from 'react-icons/im'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'
import {AiFillCaretDown} from 'react-icons/ai'

// Antd
import { Drawer, Modal, Form, Input,  Menu, Dropdown, Radio, DatePicker, notification} from 'antd';

// Misc
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

// Database
import { useUserContext } from '../context/userContext';
import { db, storage } from '../firebase-config'
import {collection, onSnapshot, addDoc, Timestamp, orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const { TextArea } = Input;
const lostFoundId =  "laf-"+ uuidv4().slice(0,8);

export const Navbar = () => {

  const [visible, setVisible] = useState(false);
  
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const [lostFound, setLostFound] = useState(false);

  const showLostFound = () => {
    setLostFound(true);
  };

  const handleOkLostFound = () => {
    setLostFound(false);
  };

  const handleCancelLostFound = () => {
    setLostFound(false);
  };

  // Modal Login 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
      setIsModalVisible(false);
  };



  const isNotActive = 'flex items-center px-2 gap-3 text-lg font-medium text-[#155e59] transition-all duration-200 ease-in capitalize hover:rounded-lg hover:bg-[#155e59] hover:text-white hover:px-3 hover:py-2'
  const isNotActiveDrawer = 'flex items-center justify-center py-2 my-2 gap-5 text-gray-500 transition-all duration-200 ease-in capitalize text-[#155e59] hover:bg-[#155e59] hover:text-white hover:py-2 hover:px-2'

  //Authentication 

  const { error, login, validating, setEmail, setPassword} = useUserContext();

  const [form] = Form.useForm();

  const info = (
    <Menu style={{ padding: 0, marginTop:'15px'}}

    >
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="info"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <HiInformationCircle />
                  <span className="ml-3">
                    About Barangay 
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="announcement"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <IoIosMegaphone />
                  <span className="ml-3">
                   Announcement
                  </span>
              </div>
          </Link>
      </Menu.Item>
      
    </Menu>
  );

  const report = (
    <Menu style={{ padding: 0, marginTop:'15px'}}

    >
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link to=''
              onClick={showModal}          
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <FaWpforms />
                  <span className="ml-3">
                    Lost & Found Form
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="lostfound"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <BsMegaphoneFill />
                  <span className="ml-3">
                   Lost & Found List
                  </span>
              </div>
          </Link>
      </Menu.Item>
      <Menu.Item className='font-Poppins text-[#155e59] hover:text-[#d95858] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
          <Link 
              to="cruelty"
              spy={true} smooth={true} offset={-100} duration={500}
          >
              <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                  <CgNotes />
                  <span className="ml-3">
                   Cruelty Guidelines
                  </span>
              </div>
          </Link>
      </Menu.Item>
    </Menu>
  );

  // Lost and Found Report Auth


  const [loading, setLoading] = useState(false)
  const [, setAnimal_Profile] = useState([])
  const [, setProgress] = useState(0)
  const [image, setImage] = useState(null)
  const [lafForm, setLafForm] = useState({

    lostFoundId: lostFoundId,
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

  const lostFoundCollectionRef = collection(db, "LostAndFound")

  useEffect(() => {
    const q = query(lostFoundCollectionRef, orderBy("dateCreated", "desc"));
    onSnapshot(q, lostFoundCollectionRef, snapshot => {
      
      setAnimal_Profile(snapshot.docs.map(doc => {
        return{
          id: doc.id,
          ...doc.data()
        }
      }))
    })
  }, [])

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


  // Submitting to Firestore 

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

      <div className='hidden lg:flex justify-between bg-white items-center px-7 py-4'>
        <a href="/" className='text-gray-700 hover:brightness-110 '>
            <div className='flex items-center'>
                <img src={ LogoTitle } alt="trackit-ph" className="w-80" />
            </div>
        </a>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
              <div className={isNotActive}>
                Home
              </div>
            </Link>
            <Link to='info' spy={true} smooth={true} offset={-450} duration={500}> 
               <Dropdown 
                overlay={info} 
                placement='bottomLeft' 
                className='flex justify-center items-center text-white'
                
              >
                <Link 
                  to=""
                  className={isNotActive}
                  onClick={ e => e.preventDefault() }
                >
          
                  <span>
                    Info
                  </span>
                  <AiFillCaretDown className='mr-1'/>
                
                </Link>
              </Dropdown>
            </Link>
            <Link to='lostfound' spy={true} smooth={true} offset={-100} duration={500}> 
            <Dropdown 
                overlay={report} 
                placement='bottomLeft' 
                className='flex justify-center items-center text-white'
        
              >
                <Link 
                  to=""
                  className={isNotActive}
                  onClick={ e => e.preventDefault() }
                >
            
                  <span>
                    Report 
                  </span>
                  <AiFillCaretDown className='mr-1'/>

                </Link>
              </Dropdown>
            </Link>
            <Link to='hotlines' spy={true} smooth={true} offset={-50} duration={500}> 
             <div className={isNotActive}>
                Hotlines
              </div>
            </Link>
            <Link to='about-us' spy={true} smooth={true} offset={-100} duration={500}> 
            <div className={isNotActive}>
                About Us
              </div>
            </Link>
            
        <div>
          <button className='flex items-center bg-[#155e59] text-white px-3 py-3 text-xl rounded-md ml-6 font-medium font-Poppins hover:bg-[#d95858] duration-200'
            onClick={showLostFound}
          >
            <IoIosPaw size='30px' />
            <p className='px-2'> LOGIN </p> 
          </button>
        </div>
      </div>
      
      { /* Medium Devices */}
      <div className="hidden xsm:flex justify-between items-center bg-white md:flex sm:flex lg:hidden p-5">
          <div className='flex items-center'>
              <img src={ LogoTitle } alt="waaw-ph" className="w-60" />
                      </div>
          <button 
            className='flex items-center bg-[#155e59] text-white px-2 py-2 ml-4 text-medium rounded-md font-medium font-Poppins hover:bg-[#d95858] duration-200'
            onClick={showDrawer}
          >
            <ImMenu />
            <p className='px-2'> Navbar </p> 
          </button>
          <Drawer title={false} 
                  placement="right" 
                  onClose={onClose} 
                  visible={visible}
                  width='210px'
                  closeIcon={false}
                  footer={
                    <button 
                    className='flex items-center justify-center w-full bg-[#155e59] text-white px-2 py-2 my-5 text-medium rounded-md font-medium font-Poppins hover:bg-[#d95858] duration-200'
                    onClick={showLostFound}
                
                 >
                    <IoIosPaw size='30px' />
                    <p className='px-2'> LOGIN </p> 
                  </button>
                  }
                  >
            <div className='flex items-center justify-center' style={{marginTop:'-25px'}}>
                <img src={ Logo } alt="waaw-ph" className="w-80" />
            </div>
            <img src={ Title } alt="waaw-ph" className="w-60" />
            <div className='py-5'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
              <div className={isNotActiveDrawer}>
                Home
              </div>
            </Link>
            <Link to='announcement' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Announcement
              </div>
            </Link>
            <Link to='/' onClick={showModal} smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Lost and Found Form
              </div>
            </Link>
            <Link to='lostfound' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
                Lost and Found List
              </div>
            </Link>
            <Link to='cruelty' smooth={true} offset={10} duration={500}> 
              <div className={isNotActiveDrawer}>
               Cruelty Guidelines
              </div>
            </Link>
            <Link to='hotlines' spy={true} smooth={true} offset={-50} duration={500}> 
             <div className={isNotActiveDrawer}>
                Hotlines
              </div>
            </Link>
            
            </div>
           
          </Drawer>
      </div>
  
  {/* Modal Login*/}

    <Modal 
        title={false} 
        footer={false}
        visible={lostFound}
        onClose={handleOkLostFound} 
        maskClosable={false}
        width='350px'
        destroyOnClose={true}
        zIndex={1000}
        onCancel={handleCancelLostFound}>
       <div className='flex flex-col justify-center items-center text-center mt-5'>
             <p className='font-semibold text-3xl font-Poppins'>Animal Welfare </p> 
             <img src={Logo} alt="logo-login" width='180px' className='' />
        </div>
        <div className='flex flex-col text-2xl py-8' style={{marginBottom:'-30px'}}>
              <Form
                name="basic"
                form={form}
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 30 }}
                initialValues={false}
                autoComplete="on"
                preserve={false}
                onFinish={login}
              >
                <p className='text-[#999897] text-md pb-1'> Email </p> 
                <Form.Item name="Email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                  <Input 
                   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                   onChange={(e) => {setEmail(e.target.value)}}
                    disabled={validating}
                  />
                </Form.Item>
                <p className='text-[#999897] text-md pb-1 pt-3'> Password </p> 
                <Form.Item name="Password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                  <Input.Password 
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    onChange={(e) => {setPassword(e.target.value)}}
                    disabled={validating}
                  />
                </Form.Item>

              {error === 'err' ? 
                <>
                  <div className='flex justify-center flex-col'>
                    <h1 className='text-red-500 font-semibold text-center pt-3 pb-2'> <b> Username </b> & <b> Password </b> do not exists.  </h1>

                  </div>
                </>
                : 
                <> </>
              }
              <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button className='rounded-full text-[#155e59] text-md px-6 py-2'
                    onClick={handleCancelLostFound} 
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button type='submit'
                    disabled={validating}
                    className={
                      validating ? 
                      'rounded-full bg-[#155e59] opacity-50 text-md text-white px-5 py-2'
                      :
                      'rounded-full bg-[#155e59] hover:bg-[#d95858] text-md text-white px-5 py-2'}>
                     {validating ? 
                      'Logging'
                      :
                      'Login'}
                  </button>
                </Form.Item>
              </div>
              </Form>
            </div>
      </Modal>

    {/* Lost and Found Form*/}

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

                <p className="leading-tight m-0 text-gray-500 font-normal text-justify pt-5" style={{ margin: "20px 0 20px 0" }}>
                  <span className="font-medium text-[#155e59]">How it works?&nbsp;</span>
                  While filling up the lost & found form, the information will not show through the application, thus this will go first through the admin and review for confirmation. <b> For immediate act, call the barangay hotline. </b>
                </p>          

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
