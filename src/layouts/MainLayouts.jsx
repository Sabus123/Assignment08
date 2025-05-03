import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayouts = () => {
    return (
        <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <h1>Footer</h1>
    </>
    )
};

export default MainLayouts;