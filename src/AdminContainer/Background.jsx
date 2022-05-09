import React from 'react'
import { Card} from 'antd';
import infobg from '../assets/infobg.png'
import {IoIosPaw} from 'react-icons/io'
import {BiBone} from 'react-icons/bi'
import {IoPaw} from 'react-icons/io'


const leftData = [
  { id: 1, title: 'Dog Population 1', img: BiBone, description: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
  
];
const rightData = [
  { id: 1, title: 'Population % of Pets 4', img: IoIosPaw , description: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
  
];
const centerData = [
    { id: 1, title: 'Cat Population 6', img: IoIosPaw, description: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
      
  ];
  const bottomRightData = [
    { id: 1, title: 'Summary Nugget 7', img: IoIosPaw, description: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
      
  ];
  const bottomLeftData = [
    { id: 1, title: 'Chart Nugget 7', img: IoIosPaw, description: '1.Lorem ipsum dolor sit amet, consectetur adipiscing elit '},
      
  ];



      const Background  = () => {
  return (
     
     <>
 
 <div className="w-full h-screen bg-[#e5e5e0] shadow-lg flex flex-col justify-between" style={{ 
         backgroundImage: `url(${infobg})`,
         backgroundSize: 'auto',
 
        }} id='background'>



     
    <div className='hidden 2xl:flex lg:flex md:flex justify-center'>
    <div className='flex flex-col pb-30'>
      
        <div className='flex flex-col text-center place-self-left ml-14 w-1/2'>
            <h1 className='text-[#e5e5e0] lg-text-4xl font-extrabold py-5 mt-5 md:text-2xl xsm:text-base'>
            This is your dashboard</h1>
        </div>

         
    




        {/*Content*/}
        <div className='grid overflow-hidden grid-cols-3 grid-rows-1 gap-5'>

            {/*Left Content*/}
            <div className='box row-start-1 row-end-1 col-start-1 col-end-1 space-y-16 mt-5 pl-80 drop-shadow-lg'>
                {leftData.map((user) => (
                <>
        <div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/4' >

      <div className='grid grid-cols-3 grid-rows-1 gap-5 '>                   
        <Card size="small" title={user.title}  style={{ width: 300,textAlign: 'center', borderRadius:'0.5rem' }} >
        <BiBone size='20px' className='mx-4 text-[#d95858]'/>
        <p className='lg:text-1x1 md:text-sm'>{user.description}</p> 
        <p className='lg:text-1x1 md:text-sm'>{user.description}</p> 
       
        </Card>
      </div>
     </div>
           </>
            ))}
            </div>

 {/*Image Center*/}
 <div className='box row-start-1 row-end-1 col-start-2 col-end-3 mt-5 ml-56 space-y-16 drop-shadow-lg'>
   
                <div className='flex justify-center items-center text-center'>
                {centerData.map((user) => (   
<>
<div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/2'>    
<div className='grid grid-cols-3 grid-rows-1 gap-5 '>             
<Card size="small"  title={user.title} style={{width: 300, textAlign: 'center', borderRadius:'0.5rem' }} >
<IoIosPaw size='20px' className='mx-4 text-[#d95858]' />
<p className='lg:1x1 md:text-sm'>{user.description}</p> 
<p className='lg:1x1 md:text-sm'>{user.description}</p> 
</Card>

</div>  
         </div>
 </>
))}

      </div>
      </div>
         

            {/*Right Content*/}
            
            <div className='box row-start-1 row-end-1 col-start-13 col-end-3 mt-5 ml-60 space-y-16 drop-shadow-lg'>
            {rightData.map((user) => (
                <>
               <div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/2 '>    

               <div className='grid grid-cols-3 grid-rows-1 gap-5 '>             
       <Card size="small"  title={user.title} style={{width: 300,  textAlign: 'center', borderRadius:'0.5rem' }} >
        <IoIosPaw size='20px' className='mx-4 text-[#d95858]' />
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        </Card>

      </div>  
                        </div>
                </>
            ))}
            </div>


      {/*Bottom right Content*/}
            
      <div className='box row-start-3 row-end-5 col-start-13 col-end-3'>
            {bottomRightData.map((user) => (
                <>
               <div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/2'>    

               <div className='grid grid-cols-3 grid-rows-1 gap-5 '>             
       <Card size="large"  title={user.title} style={{width: 400, height: 300,textAlign: 'center', borderRadius:'0.5rem' }} >
       
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        </Card>

      </div>  
                        </div>
                </>
            ))}
            </div>


    {/*Bottom left Content*/}
            
    <div className='box row-start-3 row-end-5 col-start-2 col-end-5'>
            {bottomLeftData.map((user) => (
                <>
               <div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/2 '>    

               <div className='grid grid-cols-3 grid-rows-1 gap-5 '>             
       <Card size="large"  title={user.title} style={{width: 400, height: 300,textAlign: 'center', borderRadius:'0.5rem',}} >
     
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        <p className='lg:1x1 md:text-sm'>{user.description}</p> 
        </Card>

      </div>  
                        </div>
                </>
            ))}
            </div>




        </div>

      
    </div>
    </div> 
    </div>
        
        </>
     )
}
export default Background;