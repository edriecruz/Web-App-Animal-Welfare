import React, {useState, useEffect} from 'react'

// Icons 
import {FcSearch} from 'react-icons/fc'
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosPaw} from 'react-icons/io'
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'

// Images
import infobg from '../assets/infobg.png'
import Logo from '../assets/logo.png'
import noData from '../assets/noData.png'

// Components
import { AnimalListCards } from './AnimalListCards'

// Misc
import { Menu, Dropdown, DatePicker, notification} from 'antd';
import { Modal, Radio, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


// Database
import { db, storage } from '../firebase-config'
import {collection, onSnapshot, addDoc, serverTimestamp, orderBy, query} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const { TextArea } = Input;
const petId =  "pet-"+ uuidv4().slice(0,8);

const AnimalList  = () => {

    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'

      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
          setIsModalVisible(true);
      };
    
      const handleOk = () => {
          setIsModalVisible(false);
      };
    
      const [loading, setLoading] = useState(false)
      const [Animal_Profile, setAnimal_Profile] = useState([])
      const [search, setSearch] = useState("")
      const [, setProgress] = useState(0)
      const [image, setImage] = useState(null)
      const [form, setForm] = useState({
        petId: petId,
        hasVaccinated: false,
        petVaccine: [],
        ownerAddress: "",
        ownerContact: "",
        ownerName: "",
        petBirthdate: "",
        petBreed: "",
        petDetails: "",
        petGender: "",
        petName: "",
        petType: "",
        dateCreated: serverTimestamp(),
        imageUrl: "",
      })

      const animalProfileCollectionRef = collection(db, "Animal_Profile");
    
      useEffect(() => {
        
        const q = query(animalProfileCollectionRef, orderBy("dateCreated", "desc"));
        onSnapshot(q, animalProfileCollectionRef, snapshot => {
          setAnimal_Profile(snapshot.docs.map(doc => {
            return{
              id: doc.id,
              ...doc.data()
            }
   
            //query 
            
          }).filter((users) =>
          users.petName.toLowerCase().includes(search.toLowerCase())  ||
          users.ownerName.toLowerCase().includes(search.toLowerCase())
          )
          )
        })

      }, [search])
      
    function pickDate(date, dateString) {
      setForm({...form, petBirthdate: dateString})
    }

    const currentDate = (current) => {
      let customDate = moment();
      return current && current > moment(customDate);
      }

    const handleVaccine = (e, i) => {
      const vaccineClone = [...form.petVaccine]
      vaccineClone[i] = e.target.value
      setForm({
        ...form,
        petVaccine: vaccineClone
      })
    }

    const handleVaccinecount = () => {
      setForm({
        ...form,
        petVaccine: [...form.petVaccine, ""]
      })
    }

    const deleteVaccine = i => {
      const deleteList = [...form.petVaccine]
      deleteList.pop(i, 1)
      setForm({
        ...form,
        petVaccine: deleteList
      })
    }
      
    const handleImage = e => {
      setImage(e.target.files[0])
    }

    const handleSubmit = e => {
      e.preventDefault()
      setLoading(true)

      setTimeout(() => {
        if (
          !form.hasVaccinated ||
          !form.ownerAddress||
          !form.ownerContact||
          !form.ownerName||
          !form.petBirthdate||
          !form.petBreed||
          !form.petDetails||
          !form.petGender||
          !form.petName||
          !form.petType 
          
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

        const storageRef = ref(storage, `/AnimalProfileImg/${form.petId}${form.petName}`);
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
              setForm({
                petId: "pet-"+ uuidv4().slice(0,6),
                hasVaccinated: '',
                petVaccine: [],
                ownerAddress: "",
                ownerContact: "",
                ownerName: "",
                petBirthdate: "",
                petBreed: "",
                petDetails: "",
                petGender: "",
                petName: "",
                petType: "",
                imageUrl: "",
                dateCreated: serverTimestamp(),
              })
                  
              setLoading(false)
              setIsModalVisible(false)
              notification.open({
                icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
                message:  <> <p className='text-green-500'> Pet Added </p> </>,
                duration: 5,
                description:
                'Pet has been published in the list',
            })
            }
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

              const animalProfileCollectionRef = collection(db, "Animal_Profile")
              addDoc(animalProfileCollectionRef, {
                dateCreated: serverTimestamp(),
                hasVaccinated: form.hasVaccinated,
                imageUrl: downloadURL,
                ownerAddress: form.ownerAddress,
                ownerContact:form.ownerContact,
                ownerName: form.ownerName,
                petBirthdate: form.petBirthdate,
                petBreed: form.petBreed,
                petDetails: form.petDetails,
                petGender: form.petGender,
                petId: form.petId,
                petName: form.petName,
                petType: form.petType,
                petVaccine: form.petVaccine
              })
            });
          
          }
          
        );

     }, 2000)}



    const info = (
      <Menu style={{ padding: 0, marginTop:'15px'}}
  
      >
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="1">
            <button 
            onClick={() => sorting('petName')}
            >
                <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Pet's Name
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
                    by Pet's Owner
                    </span>
                </div>
            </button>
        </Menu.Item>
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
            <button 
              onClick={() => sorting('hasVaccinated')}
            >
                <div className='flex justify-start font-medium items-center hover:text-[#155e59]'>
                    <IoIosPaw />
                    <span className="ml-3">
                    by Has Vaccinated
                    </span>
                </div>
            </button>
        </Menu.Item>
        <Menu.Item className='font-Poppins text-gray-900 hover:text-[#155e59] text-base' style={{ margin: 0 , padding:"10px 15px"}} key="2">
            <button 
              onClick={() => sorting('petType')}
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


      

      // Pagination

      const [currentPage, setcurrentPage] = useState(1);
      const [itemsPerPage, ] = useState(9);
    
      const [pageNumberLimit, ] = useState(3);
      const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
      const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    
      const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };
    
      const pages = [];
      for (let i = 1; i <= Math.ceil(Animal_Profile.length / itemsPerPage); i++) {
        pages.push(i);
      }
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = Animal_Profile.slice(indexOfFirstItem, indexOfLastItem);
    
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

  
    // Sorting

    const [order, setOrder] = useState('asc')

    const sorting = (col) => {
      if (order === 'asc'){
        const sorted = [...Animal_Profile].sort((a,b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
          );
          setAnimal_Profile(sorted);
          setOrder("dsc")
        
      }
      if (order === 'dsc') {
        const sorted = [...Animal_Profile].sort((a,b) => 
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
          setAnimal_Profile(sorted);
          setOrder("asc")
      }
    }
    
  return (
     <>
       < div className='min-w-screen'>
            <div className="bg-[#155e59] h-64 shadow-lg"  
                style={{
                    backgroundImage: `url(${infobg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px'
                }} >    
                <div className='flex justify-between'>
                    <h1 className='pt-7 text-xl font-semibold text-white md:text-base md:mt-1 lg:text-xl lg:ml-16 md:ml-10'> Animal Profile List </h1> 
                    <div className="pt-6 relative text-gray-600 lg:mr-16 md:mr-3">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search Pet Name" 
                            onChange={(e)=>{setSearch(e.target.value)}}
                            />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between'>
                      <button className={'flex justify-center items-center text-white lg:ml-16 md:ml-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'} onClick={showModal}>
                          Add Profile
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
    
                  
                { currentItems.length < 1 ? 
                      <div className='flex flex-col justify-center items-center text-center pt-48'> 
                        <h1 className='text-[#155e59] pb-5 font-semibold text-4xl uppercase'> 
                          No Data Available.
                        </h1>
                        <img src={noData} alt='no-data' width={300} />
                      </div>
                        :  
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-3">
                        {currentItems.map((user) => (
                        <>
                              <AnimalListCards details={user} key={user.id}/>
                        </>
                        ))}
                        </div>     

  
                    <div className='flex items-center justify-center ml-3 py-16'>
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

               

        { /* Modal Add Animal */}
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
                
                {/* Pet Name */}
                <p className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Pet Name </p> 
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input pet name!' }]}
                >
                  <Input placeholder="Pet's Name" className='capitalize'  
                  value={form.petName}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setForm({...form, petName: e.target.value})}/>
                </Form.Item>

                 {/* Breed */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Breed</p> 
                <Form.Item
                  name="breed"
                 
                  rules={[{ required: true, message: 'Please input breed! or N/A if unsure' }]}
                >
                  <Input placeholder="Pet's Breed" className='capitalize'
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    value={form.petBreed}
                    disabled={loading}
                    onChange={e => setForm({...form, petBreed: e.target.value}) } /> 
               
                </Form.Item>

                {/* Pet Type */}
                <Form>
                  <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Pet Type </p> 
                  <Form.Item
                  name="petType"
                  className='pb-2'
                  rules={[{ required: true, message: 'Please select pet type' }]}
                  >
                  <Radio.Group 
                  value={form.petType}
                  disabled={loading}
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  onChange={e => setForm({...form, petType: e.target.value})}>
                      <Radio value='cat'>Cat</Radio>
                      <Radio value='dog'>Dog</Radio>
                      <Radio value='other'>Other</Radio>
                  </Radio.Group>
                  </Form.Item>
                </Form>

                { /* Gender */ }
                <Form>
                  <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Gender </p> 
                  <Form.Item
                    name="pet gender"
                    className='pb-2'
                    rules={[{ required: true, message: 'Please select gender' }]}
                  >
                    <Radio.Group 
                      value={form.petGender}
                      disabled={loading}
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                      onChange={e => setForm({...form, petGender: e.target.value})}>
                      <Radio value='male'> Male </Radio>
                      <Radio value='female'> Female</Radio>
                      <Radio value='unsure'> Unsure</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>

                 {/* Birthdate */}
                <p className='text-[#2c2c2c] font-medium text-md pb-2 pt-2'> Pet's Birthdate </p> 
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: 'Please select birthdate' }]}
                >

                    <DatePicker type='date'
                        value={form.petBirthdate}
                        onChange={ pickDate }
                        disabled={loading}
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        disabledDate={currentDate}
                        />
                </Form.Item>
              
                {/* Details */}
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'>Description</p> 
                <Form.Item
                  name="description"
                >
                  <TextArea placeholder="Pet's Description (For Unique Identification)" 
                    value={form.petDetails}
                    disabled={loading}
                    onChange={e => setForm({...form, petDetails: e.target.value})}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </Form.Item>
                <Form>
                  <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Has Vaccinated? </p> 
                  <Form.Item
                  name="hasVaccinated"
                  rules={[{ required: true, message: 'Please select yes or no' }]}
                  >
                  <Radio.Group disabled={loading}  value={form.hasVaccinated}
                              onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                              onChange={e => setForm({...form, hasVaccinated: e.target.value})}
            >
                      <Radio value='Yes'>Yes</Radio>
                      <Radio value='No'>No</Radio>
                      <Radio value='Unsure'>Unsure</Radio>
                  </Radio.Group>
                  </Form.Item>  
                </Form>
                 {/* Vaccinate */}

              { form.hasVaccinated === 'Yes' ?
                <>
                  <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Vaccinate </p> 

                  {
                    form.petVaccine.map((vaccine, i) => ( 
                    <Form.Item preserve={false}>
                      <Input placeholder="Pet's Vaccine" className='capitalize'
                          key={i}
                          disabled={loading}
                          value={vaccine}
                          onChange={e => handleVaccine(e, i)}
                          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                      />
                    </Form.Item>
                    ))}

                    <div className='flex justify-around pb-4'>
                      <button type='button' 
                      className={
                        form.petVaccine <= 1 ? 
                        'bg-gray-200 text-[#2c2c2c] rounded-lg px-2 py-1 cursor-not-allowed'
                        : 
                        'bg-[#155e59] text-[white] rounded-lg px-2 py-1'
                      } onClick={deleteVaccine}
                      disabled={form.petVaccine < 1 || loading}
                      > Delete Vaccine </button>
                      <button type='button'  disabled={loading} className='bg-[#155e59] text-white rounded-lg px-2 py-1' onClick={handleVaccinecount}> Add Vaccine </button>
                    </div>
                </>
              :
              ""
            }
                 {/* Owner Name */}
                 <p className='text-[#2c2c2c] font-medium text-md pb-2'> Owner's Name </p> 
                <Form.Item
                  name="owner"
                  rules={[{ required: true, message: 'Please input owner name!' }]}
                >
                  <Input placeholder="Owners's Name" className='capitalize'
                      value={form.ownerName}
                      disabled={loading}
                      onChange={e => setForm({...form, ownerName: e.target.value})}
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </Form.Item>

                 {/* Owner Address */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-2 pb-2'> Owner's Address </p> 
                <Form.Item
                  name="address"
                  rules={[{ required: true, message: 'Please input owner address!' }]}
                >
                  <Input.TextArea placeholder="Owners's Address" className='capitalize'
                      value={form.ownerAddress}
                      disabled={loading}
                      onChange={e => setForm({...form, ownerAddress: e.target.value})}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/>
                </Form.Item>

                { /* Owner Contact */}

                <p className='text-[#2c2c2c] font-medium text-md pb-1'> Contact Number (For Updates) </p> 
                <Form.Item
                  name="contact"
                  className='pb-2'
                  rules={[{ required: true, message: 'Please input contact!' }]}
                >
                   <Input type='number' placeholder='Contact No'
                      value={form.ownerContact}
                      disabled={loading}
                      minLength="11"
                      controls={false}
                      maxLength='11'
                      onChange={e => setForm({...form, ownerContact: e.target.value})}
                      onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  />
                </Form.Item>

                <div className='py-3 pb-3'>
                  <p className='text-[#2c2c2c] font-medium text-md pb-1'> Pet's Picture (Landscape for Best Preview) </p> 
                  <input type='file' disabled={loading} name='image' accept="image/*" required onChange={ handleImage }/>
                </div>

                <div className='flex justify-around pr-12 pt-2' >
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
                       <p> Adding Pet </p> 
                       :
                       <p> Add Pet </p> 
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
export default AnimalList;