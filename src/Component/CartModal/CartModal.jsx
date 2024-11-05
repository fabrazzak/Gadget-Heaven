import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const CartModal = ({ type }) => {
    const { carts, loves, setIsActive, handleIsActive, isActive } = useContext(AuthContext);
    const navigate = useNavigate();
    const totalPrice = carts.reduce((sum, product) => sum + product.price, 0);


    const dashboardNavigate = () => {

        if (type == "carts") {

            if (carts.length > 0) {
                handleIsActive(true)
                navigate("dashboard")
            }
            else {
                navigate("/")
            }

        }



        if (type == "loves") {
            if (loves.length > 0) {
                handleIsActive(false)
                navigate("dashboard")

            }
            else {
                navigate("/")
            }

        }




    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal relative top-0 left-0 modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center items-center">
                    {type == "carts" && <h3 className="text-2xl font-bold">{carts.length} Items in Cart</h3>}
                    {type == "loves" && <h3 className="text-2xl font-bold">{loves.length} Items in WishList</h3>}
                    <div className="divider"></div>
                    {type == "carts" ? <p className="pb-5 text-xl text-[#9538E2] " >Subtotal: ${totalPrice}</p> : ""}
                    <div className="">

                        <form method="dialog">
                            {
                                type == "carts" ? <button onClick={dashboardNavigate} className="btn bg-[#9538E2] text-white rounded-full hover:text-black">{carts.length == 0 ? "Add Product" : "See Product"}</button>
                                    : "" }
                                     {
                                type == "loves" ? <button onClick={dashboardNavigate} className="btn bg-[#9538E2] text-white rounded-full hover:text-black">{loves.length == 0 ? "Add Product" : "See Product"}</button>
                                    : "" }


                        </form>


                    </div>

                </div>
            </dialog>

        </div>
    );
};

export default CartModal;