import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Sheared/Header/Header';
import Footer from '../Sheared/Footer/Footer';
import HomeHeader from '../Sheared/Header/HomeHeader';
import { animateScroll as scroll } from 'react-scroll';

const MainPage = () => {
  

    const location = useLocation()  
    useEffect(()=>{
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    }, [location.pathname])

    return (
        <div>
            
            {location.pathname == "/" ? <HomeHeader></HomeHeader> : <Header></Header>}
            
          
           <Outlet></Outlet>

           <Footer></Footer>

        </div>
    );
};

export default MainPage;