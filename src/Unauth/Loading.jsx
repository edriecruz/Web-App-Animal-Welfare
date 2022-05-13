import React from 'react'
import { PuffLoader} from 'react-spinners'

const Loading = () => {
  return (
    <>  
        <div className='flex justify-center items-center text-center min-h-screen'>
            <PuffLoader color='#155e59' size={200} />
        </div>
    </>
  )
}

export default Loading