import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import useAdmin from "../Hooks/IsAdmin";
import Loader from "../Pages/Shered/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  console.log(admin);
  if (loading || adminLoading) {
    return <Loader></Loader>;
  }

  if (user && admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
