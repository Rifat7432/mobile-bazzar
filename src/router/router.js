import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/Seller/MyProduct/MyProduct";
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
        loader:({params})=>{
          return fetch(`http://localhost:5000/categoryProducts/${params.id}`)
        }
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
        element:<MyProduct></MyProduct>
      },
      {
        path:'/dashboard/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/dashboard/myProduct',
        element:<MyProduct></MyProduct>
      },
      {
        path:'/dashboard/allSellers',
        element:<AllSellers></AllSellers>
      },
      {
        path:'/dashboard/allBuyers',
        element:<AllBuyers></AllBuyers>
      },
      {
        path:'/dashboard/allBuyers',
        element:<AllBuyers></AllBuyers>
      },
    ]
  }
]);
export default router;
