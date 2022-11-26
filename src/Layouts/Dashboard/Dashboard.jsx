import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shered/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
            {
              <>
                <li>
                  <Link to={'/dashboard/addProduct'}>Add Product</Link>
                </li>

                <li>
                  <Link to={'/dashboard/myProduct'} >My Product</Link>
                </li>

                <li>
                  <Link>My Buyers</Link>
                </li>
              </>
            }
            {
              <>
                <li>
                  <Link to={'/dashboard/myOrders'}>My Orders</Link>
                </li>
                <li>
                  <Link>Submenu 7</Link>
                </li>
              </>
            }
            {
              <>
                <li>
                  <Link to={'/dashboard/allSellers'}>All Sellers</Link>
                </li>

                <li>
                  <Link to={'/dashboard/allBuyers'}>All Buyers</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
