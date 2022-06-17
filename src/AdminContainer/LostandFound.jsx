import React, {useState, useEffect} from 'react'

// Icons and Images
import infobg from '../assets/infobg.png'
import noData from '../assets/noData.png'
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
            notification.open({
              icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
              message:  <> <p className='text-green-500'> Lost and Found Added </p> </>,
              duration: 5,
              description:
              'Pet has been published in lost and found publicly ',
          })
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

        // Sorting

        const [order, setOrder] = useState('asc')

        const sorting = (col) => {
          if (order === 'asc'){
            const sorted = [...LostAndFound].sort((a,b) =>
              a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
              );
              setLostAndFound(sorted);
              setOrder("dsc")
            
          }
          if (order === 'dsc') {
            const sorted = [...LostAndFound].sort((a,b) => 
              a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
              );
              setLostAndFound(sorted);
              setOrder("asc")
          }
        }
         // Pagination

         const [currentPage, setcurrentPage] = useState(1);
         const [itemsPerPage, ] = useState(9);
       
         const [pageNumberLimit,] = useState(3);
         const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
         const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
       
         const handleClick = (event) => {
           setcurrentPage(Number(event.target.id));
         };
       
         const pages = [];
         for (let i = 1; i <= Math.ceil(LostAndFound.length / itemsPerPage); i++) {
           pages.push(i);
         }
       
         const indexOfLastItem = currentPage * itemsPerPage;
         const indexOfFirstItem = indexOfLastItem - itemsPerPage;
         const currentItems = LostAndFound.slice(indexOfFirstItem, indexOfLastItem);
       
         const renderPageNumbers = pages.map((number) => {
           if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
             return (
               <button
                 key={number}
                 id={number}
                 onClick={handleClick}
                 className={currentPage === number ? 
                   "bg-[#d95858] text-white rounded-lg px-4 py-2 cursor-not-allowed' mx-2" 
                 : "bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer mx-2"}
               >
                 {number}
               </button>
             );
           } else {
             return null;
           }
         });
   
         const handleNextbtn = () => {
           setcurrentPage(currentPage + 1);
       
           if (currentPage + 1 > maxPageNumberLimit) {
             setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
             setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
           }
         };
       
         const handlePrevbtn = () => {
           setcurrentPage(currentPage - 1);
       
           if ((currentPage - 1) % pageNumberLimit === 0) {
             setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
             setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
           }
         };
       
         let pageIncrementBtn = null;
         if (pages.length > maxPageNumberLimit) {
           pageIncrementBtn = <button onClick={handleNextbtn}> </button>;
         }
       
         let pageDecrementBtn = null;
         if (minPageNumberLimit >= 1) {
           pageDecrementBtn = <button onClick={handlePrevbtn}> </button>;
         }
       
         const disabledPrev = currentPage === pages[0] ? true : false
         const disabledNext = currentPage === pages[pages.length - 1] ? true : false
     
 
    
        const info = (
            <Menu style={{ padding: 0, marginTop:'15px'}}
        
            >
              <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
                  <button 
                    onClick={()=>sorting('reporterName')}
                  >
                      <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                          <IoIosPaw />
                          <span className="ml-3">
                          by Found/Reported By
                          </span>
                      </div>
                  </button>
              </Menu.Item>
              <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
                  <button 
                    onClick={()=>sorting('whatReporting')}
                  >
                      <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                          <IoIosPaw />
                          <span className="ml-3">
                          by Status
                          </span>
                      </div>
                  </button>
              </Menu.Item>
              <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
                  <button 
                    onClick={()=>sorting('petType')}
                  >
                      <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                          <IoIosPaw />
                          <span className="ml-3">
                          by Pet Type
                          </span>
                      </div>
                  </button>
              </Menu.Item>
            </Menu>
          );
    

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
                    <button className={'flex justify-center items-center text-white lg:ml-16 md:ml-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'} onClick={showModal}>
                        Add Animal
                    </button>
                    <div className='flex justify-end'> 
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
                
                { currentItems.filter(animal => animal.hasApproved === true).length < 1 ? 

                  <div className='flex flex-col justify-center items-center text-center pt-48'> 
                    <h1 className='text-[#155e59] pb-5 font-semibold text-4xl uppercase'> 
                      No Data Available.
                    </h1>
                    <img src={noData} alt='no-data' width={300} />
                  </div>
                    :  

                  <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10" style={{
                    maxWidth: '1400px'
                }}>
                    {currentItems.map((user) => (
                        <>
                        <LostAndFoundCards laf={user} key={user.id}/>
                    </>
                    ))}
                    </div>
                    <div className='flex items-center justify-center ml-3 py-10'>
                        <div>

                              <button
                                className={!disabledPrev ?
                                  'bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
                                  :
                                  'bg-[#d3d3d3] text-white rounded-lg px-4 py-2 cursor-not-allowed'
                                }
                                onClick={handlePrevbtn}
                                disabled={disabledPrev}
                              >
                                <p>Prev </p> 
                              </button>
                         </div>
                            <div className='px-3 py-3'>  {pageDecrementBtn} </div>
                            <div className='px-3 py-3'>  {renderPageNumbers} </div>
                            <div className='px-3 py-3'>  {pageIncrementBtn} </div>
                          <div>
                              <button
                               className={
                                !disabledNext ? 
                                'bg-[#155e59] text-white rounded-lg px-4 py-2 hover:bg-[#d95858] cursor-pointer'
                                :
                                'bg-[#d3d3d3] text-white rounded-lg px-4 py-2 cursor-not-allowed'
                               }
                                onClick={handleNextbtn}
                                disabled={disabledNext}
                              >
                                <p>  Next </p>
                              </button>
                          </div>
                        </div>
                        </> }
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