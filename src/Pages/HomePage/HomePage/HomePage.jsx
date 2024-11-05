import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Products from '../Products/Products';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <div className='bg-[#F7F7F7]'>

            <Helmet>
                <title>Gadget Heaven | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className=' z-40  relative'>
                <BottomBanner></BottomBanner>
            </div>

            <Products></Products>


            
            
        </div>
    );
};

export default HomePage;