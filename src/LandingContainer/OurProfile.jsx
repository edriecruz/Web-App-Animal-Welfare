import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { Carousel } from 'antd';
import { Modal } from 'antd';

import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

import bgMark from '../assets/profile/bgMark.jpg'
import bgEnrico from '../assets/profile/bgEnrico.jpg'
import bgEdrie from '../assets/profile/bgEdrie.jpg'
import bgKerwin from '../assets/profile/bgKerwin.jpg'
import bgJhay from '../assets/profile/bgJhay.jpg'
import bgCad from '../assets/profile/bgCad.jpg'
import bgKenneth from '../assets/profile/bgKenneth.jpg'
// import LesterProfile from '../assets/profile/LesterProfile.png'
import EnricoProfile from '../assets/profile/EnricoProfile.png'
import EdrieProfile from '../assets/profile/EdrieProfile.png'
import KerwinProfile from '../assets/profile/KerwinProfile.png'
import JhayProfile from '../assets/profile/JhayProfile.png'
import CadProfile from '../assets/profile/CadProfile.png'
import KennethProfile from '../assets/profile/KennethProfile.png'
import { PropagateLoader } from 'react-spinners';


export const OurProfile = () => {

    /* Lester Style */

    // const [lesterModal, setLesterModal] = useState(false);

    //   const showLester = () => {
    //     setLesterModal(true);
    //   };
    
    //   const lesterCancel = () => {
    //     setLesterModal(false);
    //   };

    // const lesterStyle = {
    //     color: '#fff',
    //     textAlign: 'center',
    //     backgroundImage: `url(${bgMark})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '450px'
    //   };

      
    /* Enrico Style */

    const [enricoModal, setEnricoModal] = useState(false);

    const showEnrico = () => {
      setEnricoModal(true);
    };
  
    const enricoCancel = () => {
      setEnricoModal(false);
    };

      const enricoStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgEnrico})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };
    
    /* Edrie Style */

    const [edrieModal, setEdrieModal] = useState(false);

    const showEdrie = () => {
        setEdrieModal(true);
    };
  
    const edrieCancel = () => {
        setEdrieModal(false);
    };
      
    const edrieStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgEdrie})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };

    /* Kerwin Style */

    const [kerwinModal, setKerwinModal] = useState(false);

    const showKerwin = () => {
        setKerwinModal(true);
    };
  
    const kerwinCancel = () => {
        setKerwinModal(false);
    };
      
    const kerwinStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgKerwin})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };

      /* Jhay Style */

    const [jhayModal, setJhayModal] = useState(false);

    const showJhay = () => {
        setJhayModal(true);
    };
  
    const jhayCancel = () => {
        setJhayModal(false);
    };
      
    const jhayStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgJhay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };
    
    /* Cad Style */

    const [cadModal, setCadModal] = useState(false);

    const showCad = () => {
        setCadModal(true);
    };
  
    const cadCancel = () => {
        setCadModal(false);
    };
      
    const cadStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgCad})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };

    /* Kenneth Style */

    const [kennethModal, setKennethModal] = useState(false);

    const showKenneth = () => {
        setKennethModal(true);
    };
  
    const kennethCancel = () => {
        setKennethModal(false);
    };
      
    const kennethStyle = {
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${bgKenneth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px'
      };
    
    
    
    return (
    <>
    
    <div className='2xl:hidden pb-5 px-5 bg-[#155e59] bg-cover font-Poppins min-h-screen' id='lostfound'>
        <div className='flex justify-start pt-8 pl-8 '>
            <NavLink to='/' 
                    className='absolute lg:flex md:flex sm:hidden xsm:hidden justify-start bg-[#d95858] rounded-lg text-white px-5 py-1.5 hover:bg-white  hover:text-[#155e59]'>
    
                <p className='lg:text-lg md:text-md sm:text-xsm pb-1 lg:font-medium sm:font-normal'> Back </p> 
            </NavLink>
        </div>
    <div className="flex flex-col justify-around items-center pb-3 text-white" >
      <div className='flex flex-col justify-center p-3'>
          <div className='flex flex-col items-center self-center w-1/2'>
              <h1 className='text-white font-semibold text-lg'>
                    OUR PAWFILE</h1>
              <h1 className=' text-[#d95858] font-extrabold lg:text-4xl py-2 md:text-2xl xsm:text-sm'>
                  Animal Welfare Developer
              </h1>
              <p className='text-center lg:text-base py-6 md:text-sm xsm:text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
          </div>
        </div>
        </div>
            <div className='py-1 mb-10 px-1 border-white border-2'> 
                <Carousel effect='fade' >
                    {/* <div>
                        <h3 className='flex justify-center items-center text-center' style={lesterStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showLester}
                                >
                                <img src={LesterProfile} alt='lester-profile' width="305px" />
                                <p className='text-[#155e59] text-2xl font-semibold'> Mark Lester Moreno </p>  
                                <p className='text-[#d95858] text-md font-semibold'> UX & UI Designer/Lead Programmer </p> 
                            </Card>
                        </h3>
                    </div> */}
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={edrieStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showEdrie}
                                >
                                <img src={EdrieProfile} alt='edrie-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'> Edrie Isaac Cruz </p>  
                                <p className='text-[#d95858] text-md font-semibold'> Team Consultant/Programmer </p> 
                            </Card>
                        </h3>
                    </div>
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={enricoStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showEnrico}
                                >
                                <img src={EnricoProfile} alt='enrico-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'> Enrico Ramos </p>  
                                <p className='text-[#d95858] text-md font-semibold'> Backend Developer/Documenter </p> 
                            </Card>
                        </h3>
                    </div>
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={kerwinStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showKerwin}
                                >
                                <img src={KerwinProfile} alt='kerwin-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'>Kerwin Alemaña </p>  
                                <p className='text-[#d95858] text-md font-semibold'> Backend Developer/Programmer </p> 
                            </Card>
                        </h3>
                    </div>
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={jhayStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showJhay}
                                >
                                <img src={JhayProfile} alt='jhay-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'>El Jhay Ramos</p>  
                                <p className='text-[#d95858] text-md font-semibold'> Front-End Developer/Documenter </p> 
                            </Card>
                        </h3>
                    </div>
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={cadStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 340 }}
                                onClick={showCad}
                                >
                                <img src={CadProfile} alt='cad-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'>Charles Alwhin Mateo </p>  
                                <p className='text-[#d95858] text-md font-semibold'> Admin Developer </p> 
                            </Card>
                        </h3>
                    </div>
                    <div>
                        <h3 className='flex justify-center items-center text-center' style={kennethStyle}>
                            <Card 
                                className=" mx-12 my-5 overflow-hidden rounded-lg"
                                hoverable
                                style={{ width: 320 }}
                                onClick={showKenneth}
                                >
                                <img src={KennethProfile} alt='kenneth-profile' width="305px" /> 
                                <p className='text-[#155e59] text-2xl font-semibold'>Kenneth Westhle Davila </p>  
                                <p className='text-[#d95858] text-md font-semibold'> Admin UI Developer </p> 
                            </Card>
                        </h3>
                    </div>
                </Carousel>
            </div> 
        </div>
        <div className="2xl:flex justify-center items-center bg-[#155e59] md:hidden xsm:hidden sm:hidden lg:hidden p-5">
          <div className="flex flex-col justify-center items-center w-screen h-screen px-5">
            <p className='flex justify-center items-center text-white text-4xl font-Poppins mr-6 pb-16'> To access this page, try zooming in as it is not supported by larger devices. </p>
            <PropagateLoader color='white' />
          </div>
        </div>


        {/* Modal */}

        {/* Lester Modal */}
        {/* <Modal 
            title={false} 
            footer={false} 
            visible={lesterModal}  
            onCancel={lesterCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={LesterProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Mark Lester Moreno </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> UX & UI Designer/Lead Programmer </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/marklestermoreno'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/MLMoreno09/'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/in/mark-lester-moreno-6a06a6219/'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal> */}

        {/* Enrico Modal */}
        <Modal 
            title={false} 
            footer={false} 
            visible={enricoModal}  
            onCancel={enricoCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={EnricoProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Enrico Ramos </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Front-End Developer/Documenter </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/gradths'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/erickaqw'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://github.com/gradths'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>


         
        {/* Edrie Modal */}
        <Modal 
            title={false} 
            footer={false} 
            visible={edrieModal}  
            onCancel={edrieCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={EdrieProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Edrie Isaac Cruz </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Team Consultant/Programmer </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/edriecruz'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/edriecruz'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/in/edrie-isaac-cruz-23515b239/'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>


          {/* Kerwin Modal */}
          <Modal 
            title={false} 
            footer={false} 
            visible={kerwinModal}  
            onCancel={kerwinCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={KerwinProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Kerwin Alemaña </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Backend Developer/Programmer </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/Tellestarle'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/kerwinalemania'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/in/kerwin-alemania-8b347a239/'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>


         
          {/* Jhay Modal */}
          <Modal 
            title={false} 
            footer={false} 
            visible={jhayModal}  
            onCancel={jhayCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={JhayProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> El-Jhay Ramos </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Front-End Developer/Documenter </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/TazCoding'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/eljhay.ramos.9'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/mwlite/in/el-jhay-ramos-a8208021a'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>


        {/* Cad Modal */}
        <Modal 
            title={false} 
            footer={false} 
            visible={cadModal}  
            onCancel={cadCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={CadProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Charles Alwhin Mateo </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Admin Developer </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/k1llertyp3'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/tolmateo'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/in/charles-alwhin-mateo-745114239'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>


         {/* Kenneth Modal */}
         <Modal 
            title={false} 
            footer={false} 
            visible={kennethModal}  
            onCancel={kennethCancel}
            closeIcon={true}
            width='375px'
            style={{top:'40px'}}
            >
            <div className='flex flex-col'> 
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={KennethProfile} alt='lester-profile' width="305px" /> 
                    <p className='text-[#155e59] text-2xl font-semibold'> Kenneth Westhle Davila </p>  
                    <p className='text-[#d95858] text-lg font-semibold'> Admin UI Developer </p> 
                </div>
                <div className='flex justify-center items-center text-center pt-5 text-base'>
                    <p className='text-[#2c2c2c] font-medium'> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                    luctus aliquet justo sed placerat."  </p>
                </div>
                <div className='flex justify-evenly items-center text-center pt-6 pb-4'>
                    <a className='hover:text-[#d95858] pr-2 text-[#155e59]' href='https://github.com/imjustapotato'>
                        <AiFillGithub size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] text-[#155e59]' href='https://www.facebook.com/kennethwesthle5SOS'>
                        <AiFillFacebook size='35px'/>
                    </a>
                    <a className='hover:text-[#d95858] pl-2 text-[#155e59]' href='https://www.linkedin.com/in/kenneth-westhle-davila-aa193514a/'>
                        <AiFillLinkedin size='35px'/>
                    </a>
                </div>
            </div>
         </Modal>
         <div className='flex justify-center items-center text-center text-[#155e59] h-10 bg-white'>
          <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
        </div> 
    </>
    )
};

