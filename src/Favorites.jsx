import React from 'react';
import { Outlet } from 'react-router';

const favorites = () => {
    return (

        <>
        <div>
            This is favorites pages.
        </div>
        <Outlet></Outlet>
        </>
    );
};

export default favorites;