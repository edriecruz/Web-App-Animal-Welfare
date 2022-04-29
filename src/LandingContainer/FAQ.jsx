import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoIosPaw} from 'react-icons/io'
import {FaBone, FaFish} from 'react-icons/fa'

const strayDogs = [
    {id: 1,
    title: 'Do you pick up stray animals?', 
    description: 'Its impossible to rescue all stray animals. There are thousands of them, and the shelter is only a small facility with limited resources. Therefore, we give priority to victims of cruelty and neglect, or those whose life is in imminent danger.'},
    {id: 2,
    title: 'What should I do if I see an injured stray animal?',
    description:'YOU are their best chance of survival. Calling PAWS does not guarantee that the animal will be rescued due to limited space at the shelter and not enough volunteers. Our vet can assist in emergency cases if the reporting citizen is willing to transport and foster the animal.'},
    {id: 3,
    title: 'What is the city pound?',
    description: 'The City Pound operates under the LGU, and it is their responsibility to keep the stray dog population under control. In accordance with the Anti-Rabies Act, city pounds must employ humane methods in catching stray dogs and performing euthanasia, if necessary.'}
  ]

const crueltyNeglect = [
    {id: 4, title: 'What should I do if I see animal cruelty or neglect?',
    description: 'The first step is to immediately tell the offender to stop the abuse, as it may save the animals life. However, animal cruelty is a crime and MUST be reported to your barangay officials and/or police hotline 911. Otherwise, offenders will only keep abusing and mistreating animals.'},
    {id: 5, title: 'How do I report animal cruelty or neglect?',
    description: 'Animal cruelty MUST be reported to your barangay officials and/or police hotline 911. You may also seek free legal assistance from PAWS. As the reporting citizen, you will need to execute an affidavit so that PAWS can file the case and appear in court.' },
    {id: 6, title: 'How can I obtain legal assistance from PAWS?',
    description: 'Once you execute an affidavit, PAWS will file the case in court and appear in hearings. Because of the legal expenses which will be shouldered by PAWS, we need your commitment in testifying and providing evidence against the offender so that the case can move forward.'}
]

const donationVolunteer = [
    {id: 7, title: 'Question 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'},
    {id: 8, title: 'Question 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'},
    {id: 9, title: 'Question 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'}
]

const LostFound = [
    {id: 10, title: 'Question 10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'},
    {id: 11, title: 'Question 11',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'},
    {id: 12, title: 'Question 12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, mollit anim id est laborum.'}
]


const FAQ = () => {
  return (
   <>
<div className='bg-gray-100 min-h-screen'>
   <div className='relative flex justify-center font-poppins bg-[#155e59]'>
      <FaBone size={30} className='text-white flex place-self-center pr-3' />
      <p className='flex place-self-center lg:text-2xl md:text-2xl sm:text-lg xsm:text-sm font-semibold text-white py-10'>Frequently Asked Questions</p>
      <FaFish size={30} className='text-white flex place-self-center pl-3' />
        <NavLink to='/' className='absolute lg:flex md:flex sm:hidden xsm:hidden left-0 top-8 left-6 justify-start bg-[#d95858] rounded-lg text-white px-5 py-1.5 hover:bg-white  hover:text-[#155e59]'>
              <p className='lg:text-lg md:text-md sm:text-xsm pb-1 lg:font-medium sm:font-normal'> Back </p> 
        </NavLink>
   </div>

  <div class="grid overflow-hidden lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5 pb-5 pt-10 px-5">
    <div class="box row-start-1 row-end-2 col-start-1 col-end-2 ">
    <div class="box row-start-1 row-end-2 lg:col-start-2 md:col-start-2 sm:col-start-1 lg:col-end-4 md:col-end-4 sm:col-end-2">
    <p className='pt-6 text-[#d95858] text-2xl font-semibold flex justify-center'> Cruelty and Neglect </p>       
        {crueltyNeglect.map((user) => (
          <> 
            <div className='flex items-center text-justify mx-2 my-4'>
            
              <div className='flex flex-col'>
                <div className='flex '>
                <IoIosPaw size='25' className='pr-1.5 lg:mt-3.5 md:mt-2 sm:mt-2 xsm:mt-2 text-[#d95858]'/> 
                <p className='lg:text-xl md:text-sm font-medium py-3 text-[#155e59]'> 
              {user.title} </p>
                </div>
                <p className='ml-7 lg:text-md md:text-sm  font-regular'> {user.description} </p>
              </div>
            </div>
          </> 
        ))}
      </div>
    </div>
    <div class="box lg:row-start-1 md:row-start-1 sm:row-start-2 lg:row-end-2 md:row-end-2 sm:row-end-3 lg:col-start-2 md:col-start-2 sm:col-start-1 lg:col-end-4 md:col-end-4 sm:col-end-2 px-4">
    <p className='pt-6 text-[#d95858] text-2xl font-semibold flex justify-center'> Stray Dogs </p>       
        {strayDogs.map((user) => (
          <> 
            <div className='flex items-center text-justify mx-2 my-4'>
            
              <div className='flex flex-col'>
                <div className='flex '>
                <IoIosPaw size='25' className='pr-1.5 lg:mt-3.5 md:mt-2 sm:mt-2 xsm:mt-2 text-[#d95858]'/> 
                <p className='lg:text-xl md:text-sm font-medium py-3 text-[#155e59]'> 
              {user.title} </p>
                </div>
                <p className='ml-7 lg:text-md md:text-sm  font-regular'> {user.description} </p>
              </div>
            </div>
          </> 
        ))}
      </div>
  </div>
  <div class="grid overflow-hidden lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-5 pb-5 pt-3 px-5">
    <div class="box row-start-1 row-end-2 col-start-1 col-end-2">
    <div class="box row-start-1 row-end-2 lg:col-start-2 md:col-start-2 sm:col-start-1 lg:col-end-4 md:col-end-4 sm:col-end-2 ">
    <p className='pt-6 text-[#d95858] text-2xl font-semibold flex justify-center'> Donation and Volunteer</p>       
        {donationVolunteer.map((user) => (
          <> 
            <div className='flex items-center text-justify mx-2 my-4'>
            
              <div className='flex flex-col'>
                <div className='flex '>
                <IoIosPaw size='25' className='pr-1.5 lg:mt-3.5 md:mt-2 sm:mt-2 xsm:mt-2 text-[#d95858]'/> 
                <p className='lg:text-xl md:text-sm font-medium py-3 text-[#155e59]'> 
              {user.title} </p>
                </div>
                <p className='ml-7 lg:text-md md:text-sm  font-regular'> {user.description} </p>
              </div>
            </div>
          </> 
        ))}
      </div>
    </div>
    <div class="box lg:row-start-1 md:row-start-1 sm:row-start-2 lg:row-end-2 md:row-end-2 sm:row-end-3 lg:col-start-2 md:col-start-2 sm:col-start-1 lg:col-end-4 md:col-end-4 sm:col-end-2 px-4">
    <p className='pt-6 text-[#d95858] text-2xl font-semibold flex justify-center'> Lost and Found Pets </p>       
        {LostFound.map((user) => (
          <> 
            <div className='flex items-center text-justify mx-2 my-4'>
            
              <div className='flex flex-col'>
                <div className='flex '>
                <IoIosPaw size='25' className='pr-1.5 lg:mt-3.5 md:mt-2 sm:mt-2 xsm:mt-2 text-[#d95858]'/> 
                <p className='lg:text-xl md:text-sm font-medium py-3 text-[#155e59]'> 
              {user.title} </p>
                </div>
                <p className='ml-7 lg:text-md md:text-sm font-regular'> {user.description} </p>
              </div>
            </div>
          </> 
        ))}
      </div>
  </div>
</div>
  <div className='flex justify-center items-center text-center text-white h-10 bg-[#155e59] mt-5'>
      <p> WAAW - ANIMAL WELFARE PHILIPPINES © 2022  </p>
    </div> 
  </>
  )  
}

  
  export default FAQ