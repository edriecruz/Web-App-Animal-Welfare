import React, {useState, useEffect} from 'react'
import infobg from '../assets/infobg.png'
import {BiBone} from 'react-icons/bi'
import {GiFishbone} from 'react-icons/gi'
import {IoIosPaw} from 'react-icons/io'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


// Database
import { db } from '../firebase-config'
import {collection, onSnapshot, query, where} from 'firebase/firestore'


const DashBoardCards = () => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const [Dog_Animal_Profile, setDog_Animal_Profile] = useState([])
    const [Cat_Animal_Profile, setCat_Animal_Profile] = useState([])
    const [Other_Animal_Profile, setOther_Animal_Profile] = useState([])
    const [vaccinated, setVaccinated] = useState([])
    const [unvaccinated, setUnvaccinated] = useState([])
    const [unsureVaccinated, setUnsureVaccinated] = useState([])
    const animalProfileCollectionRef = collection(db, "Animal_Profile")

    const totalPopulation = Dog_Animal_Profile.length + Cat_Animal_Profile.length;

    useEffect(() => {   
      const filterDog = query(animalProfileCollectionRef, where("petType", "==", "dog"));
      onSnapshot(filterDog, animalProfileCollectionRef, snapshot => {
        setDog_Animal_Profile(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      const filterCat = query(animalProfileCollectionRef, where("petType", "==", "cat"));
      onSnapshot(filterCat, animalProfileCollectionRef, snapshot => {
        setCat_Animal_Profile(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      const filterOther = query(animalProfileCollectionRef, where("petType", "==", "other"));
      onSnapshot(filterOther, animalProfileCollectionRef, snapshot => {
        setOther_Animal_Profile(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      const vaccinated = query(animalProfileCollectionRef, where("hasVaccinated", "==", "Yes"));
      onSnapshot(vaccinated, animalProfileCollectionRef, snapshot => {
        setVaccinated(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      const unvaccinated = query(animalProfileCollectionRef, where("hasVaccinated", "==", "No"));
      onSnapshot(unvaccinated, animalProfileCollectionRef, snapshot => {
        setUnvaccinated(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
      const unsure = query(animalProfileCollectionRef, where("hasVaccinated", "==", "Unsure"));
      onSnapshot(unsure, animalProfileCollectionRef, snapshot => {
        setUnsureVaccinated(snapshot.docs.map(doc => {
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      })
    }, [])
   

    const vaccinate = {
        labels: [
            'Unvaccinated',
            'Vaccinated',
            'Unsure'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [unvaccinated.length, vaccinated.length, unsureVaccinated.length],
            backgroundColor: [
            'rgb(217, 88, 88)',
            'rgb(21, 94, 89)',
            'rgb(44, 44, 44)'
            ],
            hoverOffset: 4
        }]
        };

        
    const petType = {
        labels: [
            'Dog',
            'Cat',
            'Other'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [Dog_Animal_Profile.length, Cat_Animal_Profile.length, Other_Animal_Profile.length],
            backgroundColor: [
            'rgb(21, 94, 89)',
            'rgb(217, 88, 88)',
            'rgb(44, 44, 44)'
            ],
            hoverOffset: 4
        }]
        };



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
                                <h1 className='font-semibold text-2xl px-3'>
                                    {Dog_Animal_Profile.length}
                                </h1> 
                            </div>
                        </div>
                        <div className='bg-white h-28 rounded-lg shadow-lg lg:w-48 md:w-36'>
                            <h1 className='flex justify-center text-center pt-2 font-medium text-base'> Cat Population </h1>
                            <div className='flex justify-center items-center text-center my-5'>
                                <GiFishbone size='40px'/>
                                <h1 className='font-semibold text-2xl px-3'> {Cat_Animal_Profile.length} </h1> 
                            </div>
                        </div>
                        <div className='bg-white h-28 rounded-lg shadow-lg lg:w-48 md:w-36'>
                            <h1 className='flex justify-center text-center pt-2 font-medium text-base'> Total Population </h1>
                            <div className='flex justify-center items-center text-center my-5'>
                                <IoIosPaw size='40px'/>
                                <h1 className='font-semibold text-2xl px-3'> {totalPopulation} </h1> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex lg:flex-row sm:flex-col items-center justify-center'>
                    <div className='lg:w-1/3 sm:w-2/3 h-full lg:ml-20 py-10'>
                        <h1 className='flex items-center justify-center text-center pb-3 text-lg font-semibold'> Number of Vaccinated Pets </h1>
                        <Pie data={vaccinate} />
                    </div>
                    <div className='lg:w-1/3 sm:w-2/3 h-full lg:ml-28 py-10'>
                        <h1 className='flex items-center justify-center text-center pb-3 text-lg font-semibold'> Number of Pet Type </h1>
                        <Pie data={petType}/>
                    </div>
                </div>
            </div>
    
        </>  
     )
}

export default DashBoardCards