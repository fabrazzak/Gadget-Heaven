import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainPage from '../Layout/MainPage';
import HomePage from '../Pages/HomePage/HomePage/HomePage';
import Statistics from '../Pages/Statistics/Statistics';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Details from '../Pages/Details/Details';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
        

        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
               
            } ,{
                path: "details/:details",              
                element: <Details></Details>,
            
               
            },{
                path: "statistics",
                element: <Statistics></Statistics>,
               
            },{
                path: "dashboard",
                element: <Dashboard></Dashboard>,
               
            },{
                path: "login",
                element: <Login></Login>,
               
            },
        ],
    },
]);
export default Routes;