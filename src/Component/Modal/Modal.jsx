import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import img from '../../assets/Group.png'

const Modal = ({ purchaseProductHandle }) => {
    const {carts}=useContext(AuthContext);
    const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);
    return (
        <div>

          
            
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col  items-center gap-2  ">
                    <img src={img} alt="" />
                    <h3 className="font-bold text-lg mt-3">Payment Successfully</h3>
                   
                    <p className="">Thanks for purchasing.</p>
                    <p className="">Total: ${totalPrice } </p>
                    <div className="modal-action flex justify-center w-full ">
                        <form method="dialog">                            
                            <button onClick={purchaseProductHandle} className="btn px-20 rounded-full bg-slate-200 shadow-xl ">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            
        </div>
    );
};

export default Modal;