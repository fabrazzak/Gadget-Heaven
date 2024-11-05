import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' z-10  border border-2   rounded-[32px] m-6 '>
            <div className="bg-[#9538E2] m-2   rounded-[32px] flex justify-center items-center content-center  pb-64 pt-40 text-white  ">
                <div className="hero-content text-center">
                    <div className="md:w-3/4">
                        <h1 className="text-[48px] leading-[72px]  font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                       <Link to="dashboard">
                            <button className="btn rounded-full px-8 text-[#9538E2] font-bold ">Shop Now</button>
                    
                       </Link>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Banner;