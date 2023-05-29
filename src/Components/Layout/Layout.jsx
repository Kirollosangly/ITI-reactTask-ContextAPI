import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContext from '../../MainContext/MainContext';
import Navbar from './../Navbar/Navbar';




export default function Layout() {

    return <>
        <div>
            <MainContext>
                <Navbar />
                <Outlet />
            </MainContext>
        </div>
    </>
}
