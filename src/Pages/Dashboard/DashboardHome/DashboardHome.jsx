import React, { useContext } from "react";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import useAdmin from "../../../Hooks/IsAdmin";
import useBuyer from "../../../Hooks/IsBuyer";
import useSeller from "../../../Hooks/IsSeller";
import AllSellers from "../Admin/AllSellers/AllSellers";
import MyOrders from "../Buyer/MyOrders/MyOrders";
import MyProduct from "../Seller/MyProduct/MyProduct";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  const [seller, sellerLoading] = useSeller(user?.email);
  const [buyer, buyerLoading] = useBuyer(user?.email);
  return (
    <div>
      {admin && <AllSellers></AllSellers>}
      {seller && <MyProduct></MyProduct>}
      {buyer && <MyOrders></MyOrders>}
    </div>
  );
};

export default DashboardHome;
