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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
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
