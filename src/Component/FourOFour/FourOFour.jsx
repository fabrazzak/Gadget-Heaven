import React from 'react';
import notFound from '../../assets/not found.png'

const FourOFour = () => {
    return (
        <div className='mx-auto flex justify-center content-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 '>
                <img src={notFound} alt="" />
                <h2 className='text-4xl font-bold capitalize'>No results found</h2>
                
                

                
            </div>
            
        </div>
    );
};

export default FourOFour;