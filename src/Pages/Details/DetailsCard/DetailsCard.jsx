import React, {  useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loveIcon from "../../../assets/love.png"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const DetailsCard = () => {
    const params=useParams();
    const [product,setProduct]=useState([]);  
    const  { carts, setCarts,loves, setLoves } = useContext(AuthContext);
    const [isDisable,setDisable]=useState(false);

    useEffect(()=>{       
        fetch(`/products.json`)
        .then(res => res.json())
        .then(data =>  {
            const singleProduct= data.find(product => product.product_id == params.details);
            setProduct(singleProduct)
        })
    },[])

    const addToCart=(product)=>{
        let addProduct= [...carts]        
        addProduct.push(product);
        setCarts(addProduct);  
        toast(<p className='alert alert-info'>Product is successfully add </p>);    
    } 
    
    const addToLove=(product)=>{
        let addProduct= [...loves]  

        if( addProduct.includes(product)){           
            return setDisable(true)           
            
        }      
        addProduct.push(product);
        setLoves(addProduct);  
        toast(<p className='alert alert-info'>Product is successfully add</p>);  
        setDisable(true)

    }

    console.log(carts)   
    console.log(carts.length)
    
   
    const { rating, availability, description, price, category, product_image, product_title, product_id } = product;
    
    return (
        <div >
            <ToastContainer />
            <Tooltip id="my-tooltip" />
            <div className='  bg-white   rounded-3xl bottom-container  z-40  bottom-banner-section'>
                <div className=" grid grid-cols-5 gap-10 p-10 content-center items-center  " >
                    {/* first col  */}
                    <div className="col-span-2">
                        <div className="card bg-base-100  shadow-xl">
                            <figure className="p-4">
                                <img
                                    src={product_image}
                                    alt={product_title}
                                    className="rounded-xl" />
                            </figure>                           
                        </div>
                    </div>

                    {/* second cold  */}
                    <div className=" col-span-3 flex flex-col  gap-4">
                        <h className="text-xl font-bold ">{product_title}</h>
                        <p> Price:{price}</p>
                        <div> <button className=' border px-4 py-1 rounded-full border-purple-200 bg-green-100  btn-outline'>In Stock</button></div>
                        <p>{description}</p>
                        <p className='font-bold'>Specification:</p>

                       <div className='flex flex-col gap-1 pt-2'>
                            {

                                Array.isArray(product.specification)
                                    ? product.specification.map((spec, index)=> <p key={index}> {product.specification.indexOf(spec) + 1} •  {spec} </p>)
                                    : []

                            }
                       </div>

                       <h2 className='font-bold '>Rating </h2>
                        <p className='flex gap-4 mb-3  content-center items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            /> <span className=' font-semibold rounded-3xl  btn-outline bg-slate-200 px-4 py-1 '>{rating} </span></p>
                        <div className='flex  gap-6 '>
                            <button onClick={()=>addToCart(product)}  className=' border py-2 px-4 bg-purple-700 text-white rounded-full '  > <span className='flex  justify-center items-center gap-2'>Add to Card <IoCartOutline /></span>  
                            
                            </button> <button disable={isDisable} onClick={() => addToLove(product)} className={` ${isDisable == true ? "  cursor-not-allowed" : "cursor-pointer"}  text-white `} data-tooltip-id={`${isDisable && "my-tooltip"}`} data-tooltip-content="Exist" >  <img className='w-10 h-10' src={loveIcon} alt="" />   </button>
                        </div> 
                        


                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;