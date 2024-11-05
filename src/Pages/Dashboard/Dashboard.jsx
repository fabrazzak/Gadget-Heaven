import React, { useState } from 'react';
import DashboardBanner from './DashboardBanner/DashboardBanner';
import CartProducts from './CartProducts/CartProducts';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const handleIsActive = (value) => {

        setIsActive(value)
    }
    return (
        <div className='bg-slate-50'> 
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>         
            <DashboardBanner handleIsActive={handleIsActive} isActive={isActive} setIsActive={setIsActive}></DashboardBanner>
            <CartProducts isActive={isActive} ></CartProducts>
        </div>
    );
};

export default Dashboard;