import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import useAdmin from "../../Hooks/IsAdmin";
import useBuyer from "../../Hooks/IsBuyer";
import useSeller from "../../Hooks/IsSeller";
import Navbar from "../../Pages/Shered/Navbar/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  const [seller, sellerLoading] = useSeller(user?.email);
  const [buyer, buyerLoading] = useBuyer(user?.email);
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
            {seller && (
              <>
                <li>
                  <Link to={"/dashboard/addProduct"}>Add Product</Link>
                </li>

                <li>
                  <Link to={"/dashboard/myProduct"}>My Product</Link>
                </li>
              </>
            )}
            {buyer && (
              <>
                <li>
                  <Link to={"/dashboard/myOrders"}>My Orders</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to={"/dashboard/allSellers"}>All Sellers</Link>
                </li>

                <li>
                  <Link to={"/dashboard/allBuyers"}>All Buyers</Link>
                </li>
                <li>
                  <Link to={"/dashboard/report"}>Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
