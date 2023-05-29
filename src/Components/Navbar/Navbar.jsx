import React from 'react'
import style from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <>
        <div className={`overflow-hidden`}>
            <div className={`${style.headLine} container my-2 rounded-2 d-flex justify-content-between align-items-center`}>
                <h2 className={`${style.header2} py-4 text-white m-0`}>Movies Home</h2>
                <div className={`mx-4`}>
                    <Link to="/home" className={`btn btn-primary mx-2`}>Home</Link>
                    <Link to="/addmovie" className={`btn btn-primary mx-2`}>Add Movie</Link>
                </div>
            </div>
        </div>
    </>
}
