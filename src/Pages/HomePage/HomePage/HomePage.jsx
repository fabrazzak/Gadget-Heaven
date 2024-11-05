import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Products from '../Products/Products';

const HomePage = () => {
    return (
        <div className='bg-[#F7F7F7]'>

            <div className=' z-40  relative'>
                <BottomBanner></BottomBanner>
            </div>

            <Products></Products>


            
            
        </div>
    );
};

export default HomePage;