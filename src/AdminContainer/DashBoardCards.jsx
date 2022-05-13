import React from 'react'
import infobg from '../assets/infobg.png'
import {BiBone} from 'react-icons/bi'
import {GiFishbone} from 'react-icons/gi'
import {IoIosPaw} from 'react-icons/io'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { vaccinated, vaccinated2 } from '../LandingContainer/data'

const DashBoardCards = () => {

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
                            <h1 className='pt-7 text-xl font-semibold text-white lg:ml-24 md:ml-10'> Here is your Dashboard </h1> 
                            <h1 className='pt-7 text-xl font-semibold text-white lg:mr-16 md:mr-8'> Welcome Back!  </h1> 
                        </div>
                    <div className='flex justify-evenly pt-10 md:pl-6 lg:pl-12'>
                        <div className='bg-white h-28 rounded-lg shadow-lg lg:w-48 md:w-36 '>
                            <h1 className='flex justify-center text-center pt-2 font-medium text-base'> Dog Population </h1>
                            <div className='flex justify-center items-center text-center my-5'>
                                <BiBone size='40px'/>
                                <h1 className='font-semibold text-2xl px-3'> 159 </h1> 
                            </div>
                        </div>
                        <div className='bg-white h-28 rounded-lg shadow-lg lg:w-48 md:w-36'>
                            <h1 className='flex justify-center text-center pt-2 font-medium text-base'> Cat Population </h1>
                            <div className='flex justify-center items-center text-center my-5'>
                                <GiFishbone size='40px'/>
                                <h1 className='font-semibold text-2xl px-3'> 159 </h1> 
                            </div>
                        </div>
                        <div className='bg-white h-28 rounded-lg shadow-lg lg:w-48 md:w-36'>
                            <h1 className='flex justify-center text-center pt-2 font-medium text-base'> Total Population </h1>
                            <div className='flex justify-center items-center text-center my-5'>
                                <IoIosPaw size='40px'/>
                                <h1 className='font-semibold text-2xl px-3'> 159 </h1> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:hidden lg:flex flex-row justify-center h-3/5 bg-gray-200 py-10 overflow-x-auto'>
                    <div className='bg-white shadow-lg py-5 my-5 ml-12' style={{width: 800, height: 400}}>
                        <BarChart width={700} height={300} data={vaccinated} className='pt-10 px-10 mx-10'
                         margin={{
                            top: 5,
                            right: 50,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign='top' iconType={"wye"}/>
                            <Bar dataKey="Vaccinated_Dogs" fill="#155e59" />
                            <Bar dataKey="Vaccinated_Cats" fill="#d95858" />
                        </BarChart>
                        
                    </div>
                </div>
                <div className='md:hidden lg:flex flex-row justify-center h-3/5 bg-gray-200 pb-10 overflow-x-auto'>
                    <div className='bg-white shadow-lg py-5 my-5 ml-12' style={{width: 800, height: 400}}>
                        <BarChart width={700} height={300} data={vaccinated2} className='pt-10 px-10 mx-10'
                         margin={{
                            top: 5,
                            right: 50,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign='top' iconType={"wye"}/>
                            <Bar dataKey="Vaccinated_Dogs" fill="#155e59" />
                            <Bar dataKey="Vaccinated_Cats" fill="#d95858" />
                        </BarChart>
                        
                    </div>
                </div>
                

                {/* Medium Devices*/}

                <div className='md:flex-col lg:hidden flex justify-center md:items-center h-3/5 bg-gray-200 py-10 overflow-x-auto'>
                    <div className='bg-white shadow-lg py-5 my-5' style={{width: 400, height: 400}}>
                        <BarChart width={400} height={300} data={vaccinated} className='pt-10 mr-10'
                         margin={{
                            top: 5,
                            right: 50,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign='top' iconType={"wye"}/>
                            <Bar dataKey="Vaccinated_Dogs" fill="#155e59" />
                            <Bar dataKey="Vaccinated_Cats" fill="#d95858" />
                        </BarChart>
                    </div>
                    <div className='bg-white shadow-lg py-5 my-5' style={{width: 400, height: 400}}>
                        <BarChart width={400} height={300} data={vaccinated2} className='pt-10 mr-10'
                         margin={{
                            top: 5,
                            right: 50,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign='top' iconType={"wye"}/>
                            <Bar dataKey="Vaccinated_Dogs" fill="#155e59" />
                            <Bar dataKey="Vaccinated_Cats" fill="#d95858" />
                        </BarChart>
                    </div>
                </div>
            </div>
    
        </>  
     )
}

export default DashBoardCards