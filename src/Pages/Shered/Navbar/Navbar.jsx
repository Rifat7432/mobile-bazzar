import React from "react";
import { useContext } from "react";
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const user1 = true;
  const user2 = false;
  const user3 = false;
  // const user = false;
  const navItems = (
    <>
     
    
       
  
   
     
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>Dashboard</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
      {user?.uid ? <li>
        <button onClick={logOut}>Logout</button>
      </li>
      :
      <li>
        <Link to={'/login'}>Login</Link>
      </li>}
    </>
  );
  return (
    <div className="navbar justify-around bg-base-200">
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
             {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal mx-5 p-0">
          {navItems}
          
        </ul>
      </div>
    
     <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
