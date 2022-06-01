import {FcSearch} from 'react-icons/fc'
import infobg from '../assets/infobg.png'
import {IoIosPaw} from 'react-icons/io'
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';    
import { Menu, Dropdown, DatePicker } from 'antd';
import { AnimalListCards } from './AnimalListCards'
import { animalDetails } from '../LandingContainer/data'
import { Modal, Radio, Form, Input, InputNumber } from 'antd';
import Logo from '../assets/logo.png'
import moment from 'moment';
import { stringify } from 'postcss';

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";




const { TextArea } = Input;

const AnimalList  = () => {

  const { confirm } = Modal;

  const [ newPetName, setNewPetName ] = useState("");
  const [ newPetBreed, setNewPetBreed] = useState("");
  const [ newPetType, setNewPetType] = useState("");
  const [ newPetGender, setNewPetGender] = useState("");
  const [ newPetBirthdate, setNewPetBirthdate ] = useState(0);
  const [ newPetVaccine, setNewPetVaccine] = useState("");
  const [ newPetDescription, setNewPetDescription] = useState("");
  const [ newOwnerName, setNewOwnerName] = useState("");
  const [ newOwnerAddress, setNewOwnerAddress] = useState("");
  const [ newOwnerContact, setNewOwnerContact] = useState(0);
  
  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "AnimalList");

      // For Confirmation in Addition
      function showListconfirm() {
        confirm({
          title: <> <div className='flex'> <IoIosPaw size={25} color="#155e59" /><p className='pl-2'> Add animal? </p> </div> </> ,
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
    

  const createUser = async () => {
    await addDoc(usersCollectionRef, { petname: String(newPetName), petbreed: String(newPetBreed),
      pettype: String(newPetType), petgender: String(newPetGender), petbirthdate: String(newPetBirthdate),
      petvaccine: String(newPetVaccine), petdescription: String(newPetDescription), ownername: String(newOwnerName),
      owneraddress: String(newOwnerAddress), ownercontact: String(newOwnerContact)

  });
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "AnimalProfile", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

    const isNotActive = 'flex items-center px-2 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg py-1 px-2 hover:text-[#d95858]'
    const buttonStyle = 'flex justify-center items-center text-white lg:mr-10 md:mr-10 mt-5 px-3 gap-3 text-base font-medium text-[#155e59] capitalize bg-white rounded-lg hover:text-[#d95858]'

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
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-9 mr-4"> 
                            <FcSearch />
                        </button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className={buttonStyle} onClick={showModal}>
                        Add Animal
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-10 lg:ml-5 md:ml-2 py-6 mt-10">
                    {animalDetails.map((user) => (
                    <>
                        <AnimalListCards details={user} key={user.id}/>
                    </>
                    ))}
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
                
                {/* Pet Name */}
                <p onChange={(event) => {
                    setNewPetName(event.target.value);
                  }}
                 
                className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Pet Name </p> 
                <Form.Item
                  name="name"
                 
                  rules={[{ required: true, message: 'Please input pet name!' }]}
                >
                  <Input 
                   onChange={(event) => {
                    setNewPetName(event.target.value);
                  }}
                  placeholder="Pet's Name" className='capitalize'/>
                </Form.Item>

                 {/* Breed */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Breed</p> 
                <Form.Item
                  name="breed"
                  rules={[{ required: true, message: 'Please input breed! or N/A if unsure' }]}
                >
                  <Input  onChange={(event) => {
                    setNewPetBreed(event.target.value);
                  }}
                  placeholder="Pet's Breed" className='capitalize'/>
                </Form.Item>

          
                {/* Pet Type */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Pet Type</p> 
                <Form.Item
                name="type"
                rules={[{ required: true, message: 'Please select yes or no' }]}
                >
                <Radio.Group  onChange={(event) => {
                    setNewPetType(event.target.value);
                  }}>
                    <Radio value='Dog'>Dog</Radio>
                    <Radio value='Cat'>Cat</Radio>
                   
                </Radio.Group>
                </Form.Item>
              
                { /* Gender */ }
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Gender </p> 
                <Form.Item
                name="pet gender"
                rules={[{ required: true, message: 'Please input gender! or N/A if unsure' }]}
              >
                 <Radio.Group  onChange={(event) => {
                    setNewPetGender(event.target.value);
                  }}>
                    <Radio value='Male'>Male</Radio>
                    <Radio value='Female'>Female</Radio>
                   
                </Radio.Group>
                </Form.Item>

                 {/* Birthdate */}
                <p className='text-[#2c2c2c] font-medium text-md pb-2 pt-2'> Pet's Birthdate </p> 
                <Form.Item
                    name="petday"
                    rules={[{ required: true, message: 'Please select birthdate' }]}
                >
                  <Input onChange={(event) => {
                    setNewPetBirthdate(event.target.value);
                  }}
                   placeholder="Birthdate" type="date"/>
                </Form.Item>

                {/* Pet Vaccine */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Has Vaccinated? </p> 
                <Form.Item
                name="hasVaccinated"
                rules={[{ required: true, message: 'Please input gender! or N/A if unsure' }]}
              >
               <Radio.Group  onChange={(event) => {
                    setNewPetVaccine(event.target.value);
                  }}>
                    <Radio value='Yes'>Yes</Radio>
                    <Radio value='No'>No</Radio>
                    <Radio value='Unsure'>Unsure</Radio>
                </Radio.Group>
                </Form.Item>
              
                {/* Details */}
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'>Description</p> 
                <Form.Item
                  name="description"
                >
                  <TextArea onChange={(event) => {
                    setNewPetDescription(event.target.value);
                  }}
                   placeholder="Pet's Description (For Unique Identification)" />
                </Form.Item>

                 {/* Owner Name */}
                 <p className='text-[#2c2c2c] font-medium text-md pb-2'> Owner's Name </p> 
                <Form.Item
                  name="owner"
                  rules={[{ required: true, message: 'Please input owner name!' }]}
                >
                  <Input onChange={(event) => {
                    setNewOwnerName(event.target.value);
                  }}
                  placeholder="Owners's Name" className='capitalize'/>
                </Form.Item>

                 {/* Owner Address */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-2 pb-2'> Owner's Address </p> 
                <Form.Item
                  name="address"
                  rules={[{ required: true, message: 'Please input owner address!' }]}
                >
                  <Input.TextArea onChange={(event) => {
                    setNewOwnerAddress(event.target.value);
                  }}
                  placeholder="Owners's Address" className='capitalize'/>
                </Form.Item>

                { /* Owner Contact */}

                <p className='text-[#2c2c2c] font-medium text-md pb-1'> Contact Number (for Updates) </p>               
                <Form.Item
                  name="contact"
                  rules={[{ required: true, message: 'Please input contact!' }]}
                >
                  <Input onChange={(event) => {
                    setNewOwnerContact(event.target.value);
                  }}
                  
                    type="numbers" 
                    style={{ width: '100%' }} 
                    minLength="11"
                    placeholder='Contact No'
                    
                    maxLength="11"
                    />
                </Form.Item>
                <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button htmlType="submit" className='rounded-full text-[#155e59] hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                
                    style={{ 
                      borderWidth: '0.5px',
                      borderColor: '#155e59'
                      
                      }}>
                    Cancel
                  </button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button  onClick={() => { createUser(); showListconfirm(); }} 
                  htmlType="submit" className='rounded-full bg-[#155e59] text-md text-white px-5 py-2 hover:bg-[#d95858]'>
                    Add
                  </button>
                </Form.Item>
              </div>
                </Form>
                  </>
                </Modal>

<div className='flex  flex-wrap justify-start'>
        {users.map((user) => (
    
        <div className='shadow-lg m-10 p-5 w-1/4 '>
        <h4>Pet Name: {user.petname}</h4>
        <h4>Pet Breed: {user.petbreed}</h4>
        <h4>Pet Type: {user.pettype}</h4>
        <h4>Pet Gender: {user.petgender}</h4>
        <h4>Pet Birthdate: {user.petbirthdate}</h4>
        <h4>Pet Vaccination: {user.petvaccine}</h4>
        <h4>Pet Description: {user.petdescription}</h4>
        <h4>Owner's Name: {user.ownername}</h4>
        <h4>Owner's Address: {user.owneraddress}</h4>
        <h4>Owner's Contact: {user.ownercontact}</h4>
        </div>
     
      
      
  ))}
  </div>
    </>


     )
    
}

export default AnimalList;