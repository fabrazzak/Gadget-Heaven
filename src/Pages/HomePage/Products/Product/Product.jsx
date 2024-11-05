import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { rating, availability, Specification, description, price, category, product_image, product_title, product_id } = product

    return (
        <div>

            <div className="card bg-base-100 md:h-[500px] shadow-xl">
                <figure className=" pt-10">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl  w-52 h-52 p-4" />
                </figure>
                <div className="card-body  justify-evenly gap-4">
                    <div className='flex flex-col gap-3 '>
                        <h2 className="card-title">{product_title}</h2>

                        <p className='font-semibold'>Price: {price}</p>
                    </div>
                    <div className="card-actions ">
                        <Link to={`details/${product_id}`}><button className="btn btn-outline px-10 border-purple-800  hover:bg-[#9538E2] hover:text-white hover:border-none  border-b-2  rounded-full">View Details</button> </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Product;