import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const CartModal = () => {
    const { carts}=useContext(AuthContext);
    const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);
    const navigate= useNavigate();
    const dashboardNavigate=()=>{
        navigate("dashboard")

    }
    return (
        <div>            
            <dialog id="my_modal_5" className="modal relative top-0 left-0 modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold">{carts.length} Items in Cart</h3>
                    <div className="divider"></div>
                    <p className="pb-5 text-xl text-[#9538E2] " >Subtotal: ${totalPrice}</p>
                    <div className="">
                     
                            <form method="dialog">
                                <button onClick={dashboardNavigate} className="btn bg-[#9538E2] text-white rounded-full hover:text-black">Dashboard</button>
                            </form>
                        
                       
                    </div>
                    
                </div>
            </dialog>
            
        </div>
    );
};

export default CartModal;