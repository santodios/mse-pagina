import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className= 'text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#ff0000] font-bold p-2">GROWING YOUR BUSINESS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Grow your</p>
                    <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" strings={['WebSite', 'Marketing', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
                </div> 
                <p className="md:2xl text-xl font-bold text-gray-500">We help your business by making these things possible.</p>
                <button className="bg-[#ff0000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get started</button>
            </div>
        </div>
    );
};

export default Hero;