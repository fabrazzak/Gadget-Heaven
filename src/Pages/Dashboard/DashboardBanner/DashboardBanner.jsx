

import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const DashboardBanner = ({ setIsActive, handleIsActive, isActive }) => {
   

    return (
        <div>

            <div className=' z-10    '>
                <div className="bg-[#9538E2]    flex justify-center items-center content-center   py-8 text-white  ">
                    <div className="hero-content text-center">
                        <div className="md:w-3/4">
                            <h1 className="text-4xl   font-bold">Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className='flex justify-center gap-6'>
                                <button onClick={() => handleIsActive(true)} className={`btn btn-outline border-white   px-10 rounded-full ${isActive ? 'text-black bg-white' : 'text-white '}  `}>Cart</button>
                                <button onClick={() => handleIsActive(false)} className={`btn btn-outline border-white   px-10 rounded-full ${!isActive ? 'bg-white text-black' : 'text-white'} `}>Wishlist</button>

                            </div>

                        </div>
                    </div>
                </div>


            </div>

            


        </div>
    );
};

export default DashboardBanner;