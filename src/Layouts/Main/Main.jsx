import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../../Pages/Shered/Categories/Categories';
import Navbar from '../../Pages/Shered/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;