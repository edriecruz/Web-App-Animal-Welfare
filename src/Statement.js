import react from "react"

export const Statement = () => {
    return <div 
            className=" flex justify-around items-center h-96 ">
                <div 
                className=" flex flex-col items-center w-96 space-y-8">
                    <h1 
                    className=" font-Poppins text-5xl text-primaryColor font-bold">
                        Mission
                    </h1>
                    <p 
                    className=" text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ex quis quam consectetur cursus vitae eget nulla. Duis at urna sit amet ipsum auctor ornare.
                    </p>
                </div>
                
                <div 
                className=" flex flex-col items-center w-96 space-y-8 ">
                    <h1 
                    className=" font-Poppins text-5xl text-primaryColor font-bold">
                        Vision
                    </h1>
                    <p 
                    className=" text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ex quis quam consectetur cursus vitae eget nulla. Duis at urna sit amet ipsum auctor ornare.
                    </p>
                </div>
    </div>;
}