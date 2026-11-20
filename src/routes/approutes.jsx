import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Buyers from "../pages/Buyers";

import AdminDashboard from "../pages/AdminDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import FarmerDashboard from "../pages/FarmerDashboard";

import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/cart" element={<Cart />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payments />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buyers" element={<Buyers />} />

          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/buyer-dashboard"
            element={<BuyerDashboard />}
          />

          <Route
            path="/farmer-dashboard"
            element={<FarmerDashboard />}
          />
        </Route>
      </Route>

      {/* Authentication Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;