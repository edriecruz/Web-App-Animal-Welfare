import React, {useState} from 'react'
import {IoIosPaw} from 'react-icons/io'
import {FaSadTear} from 'react-icons/fa'
import { Modal, Radio, Form, Input, InputNumber, DatePicker  } from 'antd';
import Logo from '../assets/logo.png'
import moment from 'moment';
import { db, storage } from '../firebase-config'
import {doc, deleteDoc} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage';

const { confirm } = Modal;


const { TextArea } = Input;

export const AnimalListCards = ({details}) => {
    
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [updateModal, setUpdateModal] = useState(false);

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

  const okUpdate = () => {
      setUpdateModal(false);
  };

  const cancelUpdate = () => {
      setUpdateModal(false);
  };

  const removePet = id => {
    setLoading(true)
    const desertRef = ref(storage, `/AnimalProfileImg/${details.petId}`)
    
    setTimeout(() => {
      deleteDoc(doc(db, "Animal_Profile", id))
      deleteObject(desertRef).then(()=>{
        console.log('Image Deleted')
      })
      .catch((error)=>{
        console.log("Error Deleting")
      })
      setLoading(false)
    }, 2000)
  }

  function showPromiseConfirm() {
    confirm({
      title: <> <div className='flex'> <IoIosPaw size={25} color="#155e59" /><p className='pl-2'> Do you really want to update these items? </p> </div> </> ,
      icon: false,
      onOk() {
        return new Promise((resolve, reject) => {
          setUpdateModal(false)
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
          
      },
      onCancel() {},
    });
  }

    return (
        <>
    <div className='border bg-white shadow-2xl' key={details.id}>
      <img src={details.imageUrl} alt='pet' className='rounded-md w-full h-3/5' />
    <div className='w-3/4 py-3 flex flex-col pl-5'>
      <h1 className='text-[#d95858] lg:text-2xl md:text-base font-bold capitalize'>
      {details.petName}</h1>
      <p className='lg:text-sm md:text-xs text-[#155e59] md:truncate capitalize '>
      {details.ownerName}
      </p>
        <button 
        onClick={showModal}
        className="flex text-[#d95858] font-bold hover:text-[#155e59] pt-8 pb-6 lg:text-base md:text-xs md:font-medium">
        <p className='pt-1 pb-2'> Read Info </p> 
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
                      closeIcon={false}
                      onCancel={handleCancel}
                      bodyStyle={{ background: '#e0f2fe'}}
                      style={{top:'10px'}}
                      closable={true}
                      >
                          
                      <div className='flex flex-col justify-start items-left text-left py-3 px-3'>
                          <div className='flex justify-center'>
                            <p className='text-[#d95858] text-3xl font-bold tracking-wide capitalize'> {details.petName } </p> 

                          </div>
                            <p className='text-[#2c2c2c] text-base font-semibold pt-5'>Animal Profile </p> 
                          <div className='grid overflow-hidden grid-cols-3 grid-rows-6 gap-1 pt-5 px-5 pb-8'>
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-semibold'> Pet Type: </p> 
                            <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize'>{details.petType} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-semibold"> Breed: </p>
                            <p className="box row-start-2 row-end-2 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize">{details.petBreed}</p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-semibold">  Pet Details: </p>
                            <p className="box row-start-3 row-end-3 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize"> {details.petDetails}</p>
                            <p className="box row-start-4 row-end-4 col-start-1 col-end-1 text-[#155e59] font-semibold">Birthdate: </p>
                            <p className="box row-start-4 row-end-4 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize">{details.petBirthdate}</p>
                            <p className="box row-start-5 row-end-5 col-start-1 col-end-1 text-[#155e59] font-semibold">Gender </p>
                            <p className="box row-start-5 row-end-5 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize">{details.petGender}</p>
                            <p className="box row-start-6 row-end-6 col-start-1 col-end-1 text-[#155e59] font-semibold"> Has Vaccinated:</p>
                            <p className="box row-start-6 row-end-6 col-start-2 col-end-4 text-[#2c2c2c] font-medium text-justify capitalize">{details.hasVaccinated}</p>
                            <p className="box row-start-7 row-end-7 col-start-1 col-end-1 text-[#155e59] font-semibold"> Pet Vaccine: </p>
                            <p className="box row-start-7 row-end-7 col-start-2 col-end-4 text-[#2c2c2c] font-medium text-justify capitalize">{details.petVaccine}</p>
                            <p className="box row-start-8 row-end-8 col-start-1 col-end-1 text-[#155e59] font-semibold"> Pet ID: </p>
                            <p className="box row-start-8 row-end-8 col-start-2 col-end-4 text-[#2c2c2c] font-medium text-justify">{details.petId}</p>
                          </div>
                          <p className='text-[#2c2c2c] text-base font-semibold'>Owner Profile </p> 
                          <div className='grid overflow-hidden grid-cols-3 grid-rows-4 gap-1 pt-5 px-5 pb-5'>
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-semibold'> Owner: </p> 
                            <p className='box row-start-1 row-end-1 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize'>{details.ownerName} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-semibold"> Owner's Address: </p>
                            <p className="box row-start-2 row-end-2 col-start-2 col-end-4 text-[#2c2c2c] font-medium capitalize">{details.ownerAddress}</p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-semibold"> Owner's Contact </p>
                            <p className="box row-start-3 row-end-3 col-start-2 col-end-4 text-[#2c2c2c] font-medium">{details.ownerContact}</p>
                          </div>
                            <img src={details.imageUrl} alt='lostfound-profile'className='py-2 rounded-lg shadow-2xl'></img>
                          <div className='flex justify-around pt-10' >
                          <button htmlType="submit" className={ loading ? 
                          'rounded-full text-white bg-red-700 hover:text-white opacity-50 cursor-not-allowed hover:bg-[#155e59] text-md px-6 py-2'
                          :
                          'rounded-full text-white bg-red-700 hover:text-white hover:bg-[#155e59] text-md px-6 py-2'}
                            onClick={() => removePet(details.id)} 
                            >
                            Delete
                          </button>
                          <button htmlType="submit" className='rounded-full bg-green-700 text-md text-white px-5 py-2 hover:bg-[#155e59]'
                            onClick={showUpdate}
                          >
                            Update
                          </button>
                      </div>
                      </div>
                    </Modal>

                    <Modal 
                      title={false} 
                      footer={false}
                      visible={updateModal} 
                      onOk={okUpdate} 
                      closeIcon={true}
                      onCancel={cancelUpdate}
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
                <p className='text-[#2c2c2c] font-medium text-md pt-5 pb-2'> Pet Name </p> 
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input pet name!' }]}
                >
                  <Input placeholder={details.name} className='capitalize'/>
                </Form.Item>

                 {/* Breed */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-2'> Breed</p> 
                <Form.Item
                  name="breed"
                  rules={[{ required: true, message: 'Please input breed! or N/A if unsure' }]}
                >
                  <Input placeholder="Pet's Breed" className='capitalize'/>
                </Form.Item>

                {/* Pet Type */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Pet Type </p> 
                <Form.Item
                name="petType"
                rules={[{ required: true, message: 'Please select pet type' }]}
                >
                <Radio.Group>
                    <Radio value='cat'>Cat</Radio>
                    <Radio value='dog'>Dog</Radio>
                    <Radio value='other'>Other</Radio>
                </Radio.Group>
                </Form.Item>

                { /* Gender */ }
                <p className='text-[#2c2c2c] font-medium text-md pb-1 pt-2'> Pet's Gender </p> 
                <Form.Item
                  name="pet gender"
                  rules={[{ required: true, message: 'Please select gender' }]}
                >
                  <Radio.Group name="radiogroup">
                    <Radio value='lost'> Male </Radio>
                    <Radio value='found'> Female</Radio>
                    <Radio value='unsure'> Unsure</Radio>
                  </Radio.Group>
                </Form.Item>

                 {/* Birthdate */}
                <p className='text-[#2c2c2c] font-medium text-md pb-2 pt-2'> Pet's Birthdate </p> 
                <Form.Item
                    name="birthdate"
                    rules={[{ required: true, message: 'Please select birthdate' }]}
                >
                  <DatePicker format='MM-DD-YYYY' disabledDate={(current) => {
                        let customDate = moment().format("MM-DD-YYYY");
                        return current && current > moment(customDate, "MM-DD-YYYY");
                        }} />
                </Form.Item>

                {/* Pet Type */}
                <p className='text-[#2c2c2c] font-medium text-md pt-3 pb-1'> Has Vaccinated? </p> 
                <Form.Item
                name="hasVaccinated"
                rules={[{ required: true, message: 'Please select yes or no' }]}
                >
                <Radio.Group>
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
                  <TextArea placeholder="Pet's Description (For Unique Identification)" />
                </Form.Item>

                 {/* Owner Name */}
                 <p className='text-[#2c2c2c] font-medium text-md pb-2'> Owner's Name </p> 
                <Form.Item
                  name="owner"
                  rules={[{ required: true, message: 'Please input owner name!' }]}
                >
                  <Input placeholder="Owners's Name" className='capitalize'/>
                </Form.Item>

                 {/* Owner Address */}
                 <p className='text-[#2c2c2c] font-medium text-md pt-2 pb-2'> Owner's Address </p> 
                <Form.Item
                  name="address"
                  rules={[{ required: true, message: 'Please input owner address!' }]}
                >
                  <Input.TextArea placeholder="Owners's Address" className='capitalize'/>
                </Form.Item>

                { /* Owner Contact */}

                <p className='text-[#2c2c2c] font-medium text-md pb-1'> Contact Number (for Updates) </p> 
                <Form.Item
                  name="contact"
                  rules={[{ required: true, message: 'Please input contact!' }]}
                >
                  <InputNumber type="numbers" 
                    style={{ width: '100%' }} 
                    minLength="11"
                    placeholder='Contact No'
                    controls={false}
                    maxLength="11"/>
                </Form.Item>
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
                  <button htmlType="submit" onClick={showPromiseConfirm} className='rounded-full bg-[#155e59] text-md text-white px-5 py-2 hover:bg-[#d95858]'>
                    Update
                  </button>
                </Form.Item>
              </div>
                </Form>
                  </>
                </Modal>
  </>
  )
}
