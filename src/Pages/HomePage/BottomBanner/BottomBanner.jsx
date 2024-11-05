import React from 'react';
import bottomBannerImg from "../../../assets/bottom-banner.png"
import "./BottomBanner.css"

const BottomBanner = () => {
    return (
        <div className=' border-2 border-[#fff]  rounded-3xl bottom-container bg-[#ffffff64]  z-40  bottom-banner-section'>
            <div
                className=" flex justify-center content-center items-center  m-5  rounded-3xl    "
                style={{
                    backgroundImage: `url(${bottomBannerImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                }}>
               
                <div className="hero-content text-neutral-content text-center py-64">
                    <div className="max-w-md">
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BottomBanner;