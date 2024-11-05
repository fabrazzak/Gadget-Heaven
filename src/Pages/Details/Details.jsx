import React from 'react';
import DetailsCard from './DetailsCard/DetailsCard';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    return (
        <div className='bg-[#F7F7F7] pb-20'>
            <Helmet>
                <title>Gadget Heaven | Details</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet> 
            <div className=' z-10    '>
                <div className="bg-[#9538E2]    flex justify-center items-center content-center  pb-64 pt-16 text-white  ">
                    <div className="hero-content text-center">
                        <div className="md:w-3/4">
                            <h1 className="text-4xl   font-bold">Product Details</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                           
                        </div>
                    </div>
                </div>


            </div>
            <DetailsCard></DetailsCard>
            
        </div>
    );
};

export default Details;