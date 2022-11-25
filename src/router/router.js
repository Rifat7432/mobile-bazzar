import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import CategoryProducts from "../Pages/Products/CategoryProducts/CategoryProducts";
import SignUp from "../Pages/Signup/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/category/:id",
        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<AddProduct></AddProduct>
      }
    ]
  }
]);
export default router;
