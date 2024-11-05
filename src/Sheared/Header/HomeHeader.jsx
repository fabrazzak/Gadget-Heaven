import React, { useContext } from 'react';
import "./HomeHeader.css"
import Banner from '../../Pages/HomePage/Banner/Banner';
import cart from '../../assets/cart.png'
import love from '../../assets/love.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';
import CartModal from '../../Component/CartModal/CartModal';

const HomeHeader = () => {
    const { carts,loves, } = useContext(AuthContext);

    const listItem=<>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='statistics'>Statistics</NavLink> </li>
        <li> <NavLink to='dashboard'>Dashboard</NavLink> </li>       
        <li> <NavLink to='login'>login</NavLink> </li>       
    
    </>
    return (
        <div className='relative max-container'>
           <div className='section-container mx-auto relative '>
                <div className="navbar  absolute top-0  z-0  py-6 text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                {
                                    listItem
                                }
                            </ul>
                        </div>
                        <Link to='/'>  <a className="btn btn-ghost text-xl">Gadget Heaven</a> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-2  gap-6  ">
                            {listItem}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-4 ">

                        <div className="indicator">
                            {!carts.length == 0 ? <span className="indicator-item badge badge-secondary text-[12px] font-bold  w-5 mr-4 h-5">{carts.length}</span> : ""}

                            <button onClick={() => document.getElementById('my_modal_5').showModal()}><a className=""><img className='w-10 h-10' src={cart} alt="cart" />  </a></button>
                        </div>

                        <div className="indicator">

                            {!loves.length == 0 ? <span className="indicator-item badge badge-secondary text-[12px] font-bold  w-5 mr-4 h-5">{loves.length}</span> : " "}
                            <a className=""><img className='w-10 h-10' src={love} alt="love" /></a>
                        </div>



                    </div>
                </div>
           </div>
            <Banner></Banner>
            <CartModal></CartModal>
            
        </div>
    );
};

export default HomeHeader;