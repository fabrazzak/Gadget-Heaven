import React, { useContext } from 'react';
import pricingImg from '../../../assets/pricing.png'
import buttonBg from '../../../assets/button-bg.png'
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';
import CartProduct from '../CartProduct/CartProduct';
import Modal from '../../../Component/Modal/Modal';
import { useNavigate } from 'react-router-dom';

const CartProducts = ({   isActive }) => {

    const {carts,setCarts,loves,setLoves}=useContext(AuthContext)
    const navigate=useNavigate()

    const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);

        const sortByPriceHandle= ()=>{
        
            if(isActive){
                const sortCart = [...carts].sort((a, b) => b.price - a.price);
                setCarts(sortCart)

            }else{
                const sortCart = [...loves].sort((a, b) => b.price - a.price);
                setLoves(sortCart)
                console.log("love sort",loves)

            }
            
     
    }

    const purchaseProductHandle =()=>{
         
        setCarts([])
        navigate("/")

    }

    return (
        <div className='section-container'>



            <div className='flex justify-between content-center items-center py-10  mx-auto' style={{ maxWidth: "1280px" }}>
                {/* cart  */}

                <div><h2 className='text-2xl font-semibold '> {isActive ? <span>Cart : {carts.length} </span> : <span>Wishlist : {loves.length} </span>} </h2> </div>

                {/* filter price  */}

                <div className='flex gap-6 content-center items-center'>

                    <h2 className='text-xl font-semibold '> {isActive ? <span>Total Cost :{totalPrice.toFixed(2)}</span> : ""} </h2>
                    <div className='flex gap-6'>
                        <button onClick={sortByPriceHandle} className='flex  btn  btn-outline rounded-full text-[#9538E2]'> Sort by Price <img className='w-6 h-6' src={pricingImg} alt="" /></button>
                        {isActive && <button onClick={() => {
                          
                            document.getElementById('my_modal_6').showModal();
                           
                        }} className='flex  btn  btn-outline rounded-full text-white'
                            style={{
                                backgroundImage: `url('${buttonBg}')`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"

                            }}>Purchase </button>}
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 pb-20'>

                {
                    isActive ? carts.map(product => <CartProduct type="card" product={product} key={product.product_id}></CartProduct>) 
                    :
                     loves.map(product => <CartProduct type="wishlist" product={product} key={product.product_id}></CartProduct>)
                    
                   
                }

               

            </div>     


            <Modal purchaseProductHandle={purchaseProductHandle}> </Modal>
            
        </div>
    );
};

export default CartProducts;