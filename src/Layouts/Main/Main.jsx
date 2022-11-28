import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../Pages/Shered/Categories/Categories";
import Footer from "../../Pages/Shered/Footer/Footer";
import Navbar from "../../Pages/Shered/Navbar/Navbar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar></Navbar>
      <Categories></Categories>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
