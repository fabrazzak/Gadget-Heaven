import React from 'react';
import { Helmet } from 'react-helmet-async';
import BarChart from './BarChart/AllCharts';
import AllCharts from './BarChart/AllCharts';

const Statistics = () => {
    return (
        <div className='bg-base-200'>
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet> 

            <div>
                <div className="bg-[#9538E2]     flex justify-center items-center content-center py-10  text-white  ">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-4xl leading-[72px]  font-bold">
                                Statistics
                            </h1>
                            <p className='md:w-3/5 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                        </div>
                    </div>
                </div>
            </div>
           <div className='  section-container my-10 py-10'>
                <AllCharts></AllCharts>
           </div>
        </div>
    );
};

export default Statistics;