import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";

import Dashboard from "../dashboard/Dashboard";

import UDashboardLayout from "../UDashboard/UDashboardLayout";
import UDashboard from "../UDashboard/UDashboard";
import UViewproduct from "../UDashboard/UViewproduct";
import SingleProduct from "../shop/SingleProduct";

import { login } from "../Don";
import EditProduct from "../dashboard/EditProduct";
import ManageProduct from "../dashboard/ManageProduct";
import UploadProduct from "../dashboard/UploadProduct";


import PrivateRoute from "../Authentication/PrivateRoute";
import DashboardLayout from "../dashboard/DashboardLayout";
import AdminProduct from "../dashboard/AdminProducts";
import AdminSingleProduct from "../dashboard/AdminSingleProduct";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import LogOut from "../Authentication/LogOut";
import UserPrivateRoute from "../Authentication/UserPrivateRoute";


// import PrivateRoute from "../PrivateRoute/PrivateRoute";


// import LogOut from "../components/Logout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: login ? <Home /> : <Login />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/searchById/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`https://inventory-mern-project-lu4g.vercel.app/searchById/${params.id}`)
      }
    ]
  },

  {
    path: "/admin/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadProduct />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageProduct />,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditProduct />,
        loader: ({ params }) => fetch(`https://inventory-mern-project-lu4g.vercel.app/admin/dashboard/edit/${params.id}`)
      },
      {
        path: "/admin/dashboard/view-products",
        element: <AdminProduct />,
      },
      {
        path: "/admin/dashboard/single-product/:id",
        element: <AdminSingleProduct />,
        loader: ({ params }) => fetch(`https://inventory-mern-project-lu4g.vercel.app/searchById/${params.id}`)
      }

    ]

  },
  {
    path: "/user/dashboard",
    element:<UserPrivateRoute>
      <UDashboardLayout />
    </UserPrivateRoute>,
    
    children: [
      {
        path: "/user/dashboard",
        element: <UDashboard />

      },
      {
        path: "/user/dashboard/viewproducts",
        element: <UViewproduct />
      },
      {
        path: "/user/dashboard/products",
        element: <Shop />
      },

      {},
    ]

  },
  {
    path: "/register",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signout",
    element: <LogOut />
  },
]);

export default router;







