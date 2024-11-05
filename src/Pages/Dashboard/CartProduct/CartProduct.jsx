import React, { useContext } from 'react';
import deleteImg from '../../../assets/delete.png'
import { AuthContext } from '../../../Component/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const CartProduct = ({ product }) => {
    const { carts, setCarts } = useContext(AuthContext);
    const { rating, availability, Specification, description, price, category, product_image, product_title, product_id } = product;

    const deleteProduct = (id) => {
        

        const indexToDelete = [...carts].findIndex(product => product.product_id === id);

        toast(<p className='alert alert-info'>Product is successfully add</p>); 

        if (indexToDelete !== -1) {
            const updatedCarts = [...carts.slice(0, indexToDelete), ...carts.slice(indexToDelete + 1)];
            setCarts(updatedCarts)
            
        }
        toast(<p className='alert alert-danger'>Product Delete done</p>)
        



    }

    return (
        <div>

            <div className=" bg-white  shadow-2xl   rounded-xl  ">
                <div className="grid md:grid-cols-4 p-6">
                    <div className='col-span-1 flex  justify-center items-center content-center'> <img
                        src={product_image}
                        className="  rounded-lg  w-48" />
                    </div>
                    <div className='col-span-3 flex justify-between content-center items-center gap-3 '>
                        <div className='flex  flex-col gap-4'>
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p className="">{description}  </p>
                            <p className=" font-semibold"> Price :{price}  </p>
                        </div>

                        <div><button onClick={() => deleteProduct(product_id)} className="btn btn-outline hover:bg-red-500 border-red-500 hover:border-red-500"><img className='w-8 h-8' src={deleteImg} alt="" /></button></div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default CartProduct;