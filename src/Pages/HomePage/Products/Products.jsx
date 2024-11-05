import React, { useEffect, useState } from 'react';
import "./Products.css"
import Product from './Product/Product';
import FourOFour from '../../../Component/FourOFour/FourOFour';

const Products = () => {

    const [products, setProducts] = useState([])
    const [showProduct, setShowProduct]=useState([]);
    useEffect(() => {

        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setShowProduct(data)
            })

    }, [])
    console.log(products)

    const categories = [];

    // Loop through each product and add unique categories to the list
    products.forEach(product => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });


    const filterProducts = (value)=>{
        const filterData=products.filter(product => product.category === value);
        setShowProduct(filterData)
        console.log(filterData)

    }
    // showAllProduct

    const showAllProduct =()=>{
        setShowProduct(products)
    }
    // notAvailableDataHandel 
    const notAvailableDataHandel =()=>{
        setShowProduct([])
        
    }
    return (
        <div className='md:pt-28 md:pb-16 pt-10 pb-10 products-container '>
            <div>
                <h2 className='text-[40px] font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            </div>

            <div className='grid grid-cols-4 gap-10 pt-16   z-10 '>
                {/* categories  */}
                <div className='col-span-1  relative'>
                    <div className="card bg-base-100  sticky top-16  shadow-xl ">
                        <div className="card-body items-center text-center relative">
                            <div className="card-actions w-full flex justify-center  gap-6 ">
                                <button onClick={showAllProduct} className="btn  btn-outline rounded-full w-full  bg-[#9538E2] text-white ">All Product</button>

                                {categories.map((category, index) => <button onClick={() => filterProducts(category)} key={index} className="btn hover:bg-[#9538E2] hover:text-white rounded-full w-full ">{category}</button> )}
                                <button onClick={notAvailableDataHandel} className="btn rounded-full w-full  hover:bg-[#9538E2] hover:text-white ">Apple accessories</button>
                            </div >

                        </div>
                    </div>


                </div>

                {/* product load  */}
                <div className={`col-span-3 grid ${(showProduct == 0) ? "md:grid-cols-1" : "md:grid-cols-3" }  gap-6`}>

                    {(showProduct == 0) ? <FourOFour></FourOFour>  
                    :
                   
                    showProduct.map(product => <Product product={product} key={product.product_id}> </Product>)              

                        
                    }




                </div>

            </div>

        </div>
    );
};

export default Products;