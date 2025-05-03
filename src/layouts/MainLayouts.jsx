import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-240px)]'>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>
    )
};

export default MainLayouts;