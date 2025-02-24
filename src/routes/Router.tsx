import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Product from "../pages/Product";
import ErrorPage from "../pages/ErrorPage";
import CarDetails from "../component/Product/CardDetails";
import Cart from "../pages/Cart";
import OrderVerification from "../pages/VerifyOrder";
import OrderDetails from "@/pages/Order";
import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import CreateCar from "@/pages/dashboard/CreateCar";
import Order from "@/pages/dashboard/Order";
import Products from "@/pages/dashboard/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoute>
            <CarDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/verify",
        element: (
          <ProtectedRoute>
            <OrderVerification />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard/create-car",
            element: <CreateCar />,
          },
          {
            path: "/dashboard/orders",
            element: <Order />,
          },
          {
            path: "/dashboard/products",
            element: <Products />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
