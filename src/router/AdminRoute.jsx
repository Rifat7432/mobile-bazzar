import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import useAdmin from "../Hooks/IsAdmin"

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [admin,adminLoading] = useAdmin(user?.email)
    const location = useLocation();
console.log(admin)
    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && admin){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;