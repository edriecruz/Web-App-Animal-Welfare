import React from "react"

export const MV = () => {
    return (
        <> 
        <div className="hidden lg:flex justify-around items-center my-20 ">
            <div className=" flex flex-col items-center w-96 space-y-8">
                <h1 className=" font-Poppins text-5xl text-[#155e59] font-bold">
                    Mission
                </h1>
                <p  className="text-center text-lg">
                    Committed to improve the lives of animals in the community.
                </p>
            </div>
            <div className=" flex flex-col items-center w-96 space-y-8 ">
                <h1 className=" font-Poppins text-5xl text-[#155e59] font-bold">
                    Vision
                </h1>
                <p className=" text-center text-lg">
                Protecting Animals, Positive Interaction and Cruelty ceased to exist
                </p>
            </div>
        </div>
        <div className="hidden xsm:flex flex-col justify-center items-center text-center my-10 lg:hidden ">
            <div className="flex flex-col  items-center w-96 space-y-8 my-10">
                    <h1 className="font-Poppins text-4xl text-[#155e59] font-bold">
                        Mission
                    </h1>
                    <p  className="text-center text-sm px-8">
                    Committed to improve the lives of animals in the community.
                    </p>
            </div>
            <div className=" flex flex-col items-center w-96 space-y-8 mt-4">
                    <h1 className=" font-Poppins text-4xl text-[#155e59] font-bold">
                        Vision
                    </h1>
                    <p className=" text-center text-sm px-8">
                    Protecting Animals, Positive Interaction and Cruelty ceased to exist
                    </p>
            </div>
        </div>
     </>
    )
}