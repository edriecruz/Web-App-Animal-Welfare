import React from 'react'
import infoimg from './photos/infoimg.png'
import infobg from './photos/infobg.png'

export const Info = () => {
    return <div
            className="relative">
                <div 
                className="relative">
                <img src={infobg} className=""/>
                </div>

                <div className="absolute bottom-36 flex items-center justify-around">
                <div 
                className="">
                    <img src={infoimg}/>
                </div>

                <div 
                className="p-10 w-1/3">
                    <h1 
                    className=' font-Poppins text-white font-bold text-5xl text-center'>
                        Barangay Welfare Information</h1>
                    <p 
                    className='font-Poppins text-white text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ex quis quam consectetur cursus vitae eget nulla. Duis at urna sit amet ipsum auctor ornare. Sed venenatis scelerisque ante, eu tristique quam dignissim vitae. Duis tincidunt dapibus biandit. Pelfentesque nec.
                    </p>
                    <p 
                    className='font-Poppins text-white text-center'>
                        Ultrices diam, ac tempus eros. Morbi tincidunt orci eget nisi rhoncus imperdiet, Maecenas tellus enim, gracida ut nulla a, sollicitudin mottis ipsum,. Vivamus et sem rutrum, ulfamcorper mauris solicitudin, malesuada ligula.
                    </p>
                </div>
                </div>
            </div>;
}