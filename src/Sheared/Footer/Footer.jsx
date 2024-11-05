import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-white section-container py-10'>
            <div className='flex flex-col justify-center items-center gap-4  '>
                <h2 className='text-2xl font-semibold'>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation</p>
            </div>
            <div className="divider"></div>
            <footer className="footer text-base-content  ">
                <nav>
                    <h6 className=" font-semibold text-xl text-black">Services</h6>
                    <a className="link link-hover"> Product Support</a>
                    <a className="link link-hover"> Order Tracking</a>
                    <a className="link link-hover"> Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
              
                <nav>
                    <h6 className=" font-semibold text-xl text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    
                </nav>
                <nav>
                    <h6 className=" font-semibold  text-xl text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    
                </nav>
            </footer>
            
        </div>
    );
};

export default Footer;