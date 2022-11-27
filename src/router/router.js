import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Buyer/Payment/Payment";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/Seller/MyProduct/MyProduct";
import Home from "../Pages/Home/Home/Home";
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
        path: "/",
        element: <Home></Home>,
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
      {
        path:'/dashboard/myOrders',
        element:<MyOrders></MyOrders>
      },
      {
        path:'/dashboard/payment/:id',
        element:<Payment></Payment>,
        loader:({params})=>{
          return fetch(`http://localhost:5000/orderPayment/${params.id}`)
        }
      },
    ]
  }
]);
export default router;
