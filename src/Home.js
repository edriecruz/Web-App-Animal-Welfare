import react from "react"
import homeimg from "./photos/homeimg.png"
import Paws from "./photos/Paws.png"

export const Home = () => {
    return <div 
            className="relative flex items-center">
        
    <img src={homeimg} alt="Intro" 
    className="w-screen h-3/4  hue-rotate-15"/> 
    
        <div 
        className="absolute space-y-5 ml-72">

            <h1 
            className=" text-white font-Poppins text-5xl font-bold">
                Treating pets like</h1>
            <h1 
            className="text-white font-Poppins text-6xl font-extrabold">
                Family</h1>

            <p 
            className="text-white font-Poppins w-96 ">
                Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Curabitur luctus neque.</p>

            <div 
            className="flex">
                <button 
                className="relative bg-primaryColor p-3 font-Poppins text-white rounded-xl text-lg pl-16 cursor-pointer hover:bg-buttonColor transition">
                    <img src={Paws} alt="paw" className=" absolute w-10 h-8 left-3 top-2"/>
                        View More
                </button>
            </div>

        </div>    
    
    </div>;
}