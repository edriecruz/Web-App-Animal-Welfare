import React, {useState} from 'react'
import { Modal, Radio, Form, Input, DatePicker, notification  } from 'antd';
import {FaSadTear} from 'react-icons/fa'
import {RiStarSmileFill} from 'react-icons/ri'
import Logo from '../assets/logo.png'
import moment from 'moment';

import { db, storage } from '../firebase-config'
import {doc, deleteDoc, Timestamp, updateDoc,} from 'firebase/firestore'
import { deleteObject, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';


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


  // Delete Document 
  const desertRef = ref(storage, `/AnimalProfileImg/${details.petId}${details.petName}`);

  const removePet = id => {
    setLoading(true)
    
    setTimeout(() => {
      deleteDoc(doc(db, "Animal_Profile", id))
      deleteObject(desertRef).then(()=>{
        notification.open({
          icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
          message:  <> <p className='text-green-500'> Document Deleted </p> </>,
          description:
          'Your document has been deleted permanently',
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
      title: 'Are you sure to delete this profile?',
      icon: false,
      content: 'It will delete permanently',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setIsModalVisible(false)
        removePet(details.id)
      },
      onCancel() {},
    });
  }


 // Update Document

 const [image, setImage] = useState(null)
 const [form, setForm] = useState({
   petId: details.petId,
   hasVaccinated: details.hasVaccinated,
   petVaccine: details.petVaccine,
   ownerAddress: details.ownerAddress,
   ownerContact: details.ownerContact,
   ownerName: details.ownerName,
   petBirthdate: details.petBirthdate,
   petBreed: details.petBreed,
   petDetails: details.petDetails,
   petGender: details.petGender,
   petName: details.petName,
   petType: details.petType,
   dateCreated: Timestamp.now().toDate(),
   imageUrl: details.imageUrl,
 })

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


  const updatePet = (id) => {
    setLoading(true)
    setTimeout(() => {

      try {
        const storageRef = ref(storage, `/AnimalProfileImg/${form.petId}${form.petName}`);
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

                image ? 
                updateDoc(doc(db, "Animal_Profile", id), {
                  ...form,
                  petId: form.petId,
                  hasVaccinated: form.hasVaccinated,
                  petVaccine: form.petVaccine,
                  ownerAddress: form.ownerAddress,
                  ownerContact: form.ownerContact,
                  ownerName: form.ownerName,
                  petBirthdate: form.petBirthdate,
                  petBreed: form.petBreed,
                  petDetails: form.petDetails,
                  petGender: form.petGender,
                  petName: form.petName,
                  petType: form.petType,
                  dateCreated: Timestamp.now().toDate(),
                  imageUrl:downloadURL,
                })
                :
                updateDoc(doc(db, "Animal_Profile", id), {
                  ...form,
                  petId: form.petId,
                  hasVaccinated: form.hasVaccinated,
                  petVaccine: form.petVaccine,
                  ownerAddress: form.ownerAddress,
                  ownerContact: form.ownerContact,
                  ownerName: form.ownerName,
                  petBirthdate: form.petBirthdate,
                  petBreed: form.petBreed,
                  petDetails: form.petDetails,
                  petGender: form.petGender,
                  petName: form.petName,
                  petType: form.petType,
                  dateCreated: Timestamp.now().toDate(),
                  imageUrl: form.imageUrl,
                });

                setIsModalVisible(false)
                setUpdateModal(false)
                notification.open({
                  icon: <> <RiStarSmileFill className='mt-5 text-green-500'/>   </>,
                  message:  <> <p className='text-green-500'> Pet Updated </p> </>,
                  description:
                  'Your document has been updated',
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

    return (
        <>
    <div className='border bg-white shadow-2xl h-full' key={details.id}>
      <img src={details.imageUrl} alt='pet' className='rounded-md w-full h-3/6' />
    <div className='w-3/4 py-3 flex flex-col pl-5'>
      <h1 className='text-[#d95858] pb-2 lg:text-2xl md:text-base font-bold capitalize truncate'>
      {details.petName}</h1>
      <p className='lg:text-sm md:text-xs text-[#155e59] pb-2 font-semibold md:truncate capitalize truncate '>
      {details.ownerName}
      </p>
       {
      details.hasVaccinated === 'Yes' ?
        <p className='text-[#2c2c2c] font-medium'> Vaccinated </p> 
        :
      details.hasVaccinated === 'No' ?
        <p className='text-[#2c2c2c] font-medium'> Unvaccinated </p> 
        :
        <p className='text-[#2c2c2c] font-medium'> Unsure </p> 
      } 

        <button 
        onClick={showModal}
        className="flex  text-[#d95858] font-bold hover:text-[#155e59] pt-4 lg:text-base md:text-xs md:font-medium">
        <p className='pt-1'> Read Info </p> 
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
                            <p className='text-[#d95858] text-3xl font-bold tracking-wide capitalize truncate'> {details.petName } </p> 

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
                            <p className="box row-start-7 row-end-7 col-start-2 col-end-4 text-[#2c2c2c] font-medium text-justify capitalize">{
                              details.hasVaccinated === 'Yes' || !details.petVaccine ? 
                              <p className='text-green-500'> {
                                details.petVaccine.map((index) => (
                                  <>
                                    <p> {index} </p>
                                  </>
                                ))
   
                                } </p> 
                              :

                              details.hasVaccinated === 'Unsure' ? 
                              ""
                              :
                              <p className='text-red-500'> Not Vaccinated </p>
                              }</p>
                            <p className="box row-start-8 row-end-8 col-start-1 col-end-1 text-[#155e59] font-semibold"> Pet ID</p>
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
                      </div>
                    </Modal>

                    { /* Modal Add Animal */}



                <Modal 
                      title={false} 
                      footer={false}
                      visible={updateModal} 
                      closeIcon={true}
                      onCancel={cancelUpdate}
                      destroyOnClose={true}
                      style={{top:'10px'}}
                      >
                  <>
                  <form
                    onSubmit={e => e.preventDefault(updatePet(details.id))}
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
                  defaultValue={form.petName}
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
                    defaultValue={form.petBreed}
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
                  defaultValue={form.petType}
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
                      defaultValue={form.petGender}
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
                        value={moment(form.petBirthdate)}
                        defaultValue={moment(form.petBirthdate)}
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
                    defaultValue={form.petDetails}
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
                              defaultValue={form.hasVaccinated}
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
                          required
                          defaultValue={form.petVaccine}
                          onChange={e => handleVaccine(e, i)}
                          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                      />
                    </Form.Item>
                    ))}

                    <div className='flex justify-around pb-4'>
                      <button type='button' 
                      className={
                        form.petVaccine < 2 ? 
                        'bg-gray-200 text-[#2c2c2c] rounded-lg px-2 py-1 cursor-not-allowed'
                        : 
                        'bg-[#155e59] text-[white] rounded-lg px-2 py-1'
                      } onClick={deleteVaccine}
                      
                        disabled={form.petVaccine < 2 || loading}
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
                      defaultValue={form.ownerName}
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
                      defaultValue={form.ownerAddress}
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
                      defaultValue={form.ownerContact}
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
                  <input type='file' disabled={loading} name='image' accept="image/*" onChange={ handleImage }/>
                </div>

                <div className='flex justify-around pr-12 pt-2' >
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button type="button" className='rounded-full text-[#155e59] hover:text-white hover:bg-[#155e59] text-md px-6 py-2'
                    onClick={okUpdate} 
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
                       <p> Updating ... </p> 
                       :
                       <p> Update Pet </p> 
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
