import React, { useState } from 'react';
import DashboardBanner from './DashboardBanner/DashboardBanner';
import CartProducts from './CartProducts/CartProducts';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {

   
    return (
        <div className='bg-slate-50'> 
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>         
            <DashboardBanner ></DashboardBanner>
            <CartProducts  ></CartProducts>
        </div>
    );
};

export default Dashboard;