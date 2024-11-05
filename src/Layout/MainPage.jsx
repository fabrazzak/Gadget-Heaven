import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Sheared/Header/Header';
import Footer from '../Sheared/Footer/Footer';
import HomeHeader from '../Sheared/Header/HomeHeader';

const MainPage = () => {

    const location = useLocation()  

    return (
        <div>
            
            {location.pathname == "/" ? <HomeHeader></HomeHeader> : <Header></Header>}
            
          
           <Outlet></Outlet>

           <Footer></Footer>

        </div>
    );
};

export default MainPage;