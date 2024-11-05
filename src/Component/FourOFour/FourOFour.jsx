import React from 'react';
import notFound from '../../assets/product-not-found.png'

const FourOFour = ({title, img = false}) => {
    return (
        <div className='mx-auto flex justify-center content-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 '>
                <img src={!img?notFound : img} alt="" />
                <h2 className='text-4xl font-bold capitalize'>{title}</h2>
                
                

                
            </div>
            
        </div>
    );
};

export default FourOFour;