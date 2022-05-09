import React from 'react'
import { Card} from 'antd';
import infobg from '../assets/infobg.png'
import {BiBone} from 'react-icons/bi'
import lost1 from '../assets/lost1.jpg'

const leftData = [
  
    { id: 1, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum'},
    { id: 2, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum '},
    { id: 3, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum'},
    { id: 4, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum '},
    { id: 5, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum '},
    { id: 6, title: 'Lorem Ipsum 1', img: BiBone, description: 'Lorem ipsum '},
];


const { Meta } = Card;

      const LostandFound  = () => {
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
            Here is your Animal list</h1>
        </div>
    
        {/*Content*/}
        <div className='grid overflow-hidden grid-cols-3 grid-rows-1 gap-5'>

            {/*Left Content*/}
        

                {leftData.map((user) => (
                <>
                 <div className='box row-start-1 row-end-1 col-start-1 col-end-6 pl-44 drop-shadow-lg'></div>
        <div className = 'font-semibold lg:text-xl md:text-base text-[#155e59] flex flex-col w-1/4' >
      <div className='grid grid-cols-1 grid-rows-1 gap-5 space-y-5 '>                   
        {/* <Card size="small" title={user.title}  style={{ width: 250,height: 250 ,textAlign: 'center', borderRadius:'0.5rem' }} >
        <BiBone size='20px' className='mx-4 text-[#d95858]'/>
        <p className='lg:text-1x1 md:text-sm'>{user.description}</p> 
        <p className='lg:text-1x1 md:text-sm'>{user.description}</p> 
        </Card> */}
<Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="Animal" src={lost1} />}
  >
    <Meta />
                            <p className='box row-start-1 row-end-1 col-start-1 col-end-1 text-[#155e59] font-medium'>Owner: {user.description} </p> 
                            <p className="box row-start-2 row-end-2 col-start-1 col-end-1 text-[#155e59] font-medium">Breed: {user.description} </p>
                            <p className="box row-start-3 row-end-3 col-start-1 col-end-1 text-[#155e59] font-medium">Owner: {user.description} </p>
                          
  </Card>
      </div>
     </div>
           </>
            ))}
           

 </div>
 </div> 
    </div>
        </div>
        </>
     )
}
export default LostandFound;