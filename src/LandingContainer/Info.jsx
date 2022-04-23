import React from 'react'
import infoimg from '../assets/infoimg.png'
import infobg from '../assets/infobg.png'

export const Info = () => {
    return (
        <>

            <div id='info' className="hidden lg:flex justify-around items-center font-Poppins" style={{
                        backgroundImage: `url(${infobg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '700px'
                    }}
                
                    >
                <div className="flex items-center mx-8 text-center justify-around">
                    <div>
                        <img src={infoimg} alt='info-img' className='shadow-lg rounded-lg' width='600px'/>
                    </div>
                    <div className="flex flex-col w-2/3 px-6">
                        <h1 className='text-white font-bold text-3xl text-center'>
                            Barangay Welfare Information</h1>
                        <br />  <br />
                        <p className='text-white font-light text-xl text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ex quis quam consectetur cursus vitae eget nulla. Duis at urna sit amet ipsum auctor ornare. Sed venenatis scelerisque ante, eu tristique quam dignissim vitae. Duis tincidunt dapibus biandit. Pelfentesque nec.
                        </p>
                        <br /> 
                        <p className='text-white font-light text-xl text-center'>
                            Ultrices diam, ac tempus eros. Morbi tincidunt orci eget nisi rhoncus imperdiet, Maecenas tellus enim, gracida ut nulla a, sollicitudin mottis ipsum,. Vivamus et sem rutrum, ulfamcorper mauris solicitudin, malesuada ligula.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden xsm:flex flex-col justify-center items-center text-center xsm:pt-20 xsm:px-2 lg:hidden " style={{
                        backgroundImage: `url(${infobg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '900px'
                    }}>
                <div className="flex flex-col items-center text-center justify-around">
                    <div>
                        <img src={infoimg} alt='info-img' className='shadow-lg rounded-lg my-5' width='500px'/>
                    </div>
                    <div className="flex flex-col px-8 py-10">
                        <h1 className='text-white font-bold text-3xl text-center xsm:text-xl'>
                            Barangay Welfare Information</h1>
                        <br />  <br />
                        <p className='text-white font-light text-xl text-center xsm:text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ex quis quam consectetur cursus vitae eget nulla. Duis at urna sit amet ipsum auctor ornare. Sed venenatis scelerisque ante, eu tristique quam dignissim vitae. Duis tincidunt dapibus biandit. Pelfentesque nec.
                        </p>
                        <br /> 
                        <p className='text-white font-light text-xl text-center xsm:text-base'>
                            Ultrices diam, ac tempus eros. Morbi tincidunt orci eget nisi rhoncus imperdiet, Maecenas tellus enim, gracida ut nulla a, sollicitudin mottis ipsum,. Vivamus et sem rutrum, ulfamcorper mauris solicitudin, malesuada ligula.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
     )
}