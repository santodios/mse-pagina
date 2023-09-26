import React from "react";
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#ff0000] font-bold">IMAGINE THIS</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Your OWN Web Page</h1>
                    <p>Don't struggle making your own Web Page, leave that to us and have a ready to use Web Page however you like it, just focus on your business.</p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#ff0000]">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
