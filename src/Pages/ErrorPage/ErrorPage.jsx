import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
        navigate('/login');
    }
    return (
        <div className='relative'>
            <img className='h-screen w-screen' src="https://i.ibb.co/sJW12sF/oops-404-error-with-broken-robot-concept-illustration-114360-1932.webp" alt="" />
            <div className=' absolute bottom-1/3 left-12'><button className='btn  btn-primary' onClick={handleLogOut}>Logout</button>
                <p className='text-slate-700 font-bold text-4xl'>Something wrong,</p>
                <p className='text-slate-700 font-bold text-4xl'>Hit the logout button for </p>
                <p className='text-slate-700 font-bold text-4xl'>come back </p>
            </div>
            
        </div>
    );
};

export default ErrorPage;