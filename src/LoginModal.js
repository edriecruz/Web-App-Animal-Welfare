
import React, { useState } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import Paws from './photos/Paws.png'

export const App = () => {
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
      <button 
        className="z-20 font-Poppins relative flex p-3 items-center top-6 w-28 h-14 mr-14 bg-primaryColor justify-center text-white rounded-xl hover:bg-buttonColor transition" 
        type="primary" onClick={showModal}>
        <img src={Paws} className=" absolute h-5 left-2"/>
        Login
      </button>
      
      <Modal 
      className=""
      title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
