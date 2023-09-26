import React from "react";

const Newsletter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to have your own Web Page?</h1>
                    <p>Send us your email and we will contact you as soon as we get it.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter your Email"/>
                        <button className="bg-[#ff0000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ml-4 px-6">Send email</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#ff0000]">Privacy policy.</span></p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;