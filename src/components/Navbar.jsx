import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart() || { totalItems: 0 };
  const { currentUser, logout } = useAuth() || {};
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (logout) {
      await logout();
      navigate("/login");
    }
  };

  return (
    <nav className="bg-emerald-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-2 tracking-tight hover:text-emerald-200 transition">
          <span className="text-3xl">🌾</span> AgriMarket
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-amber-300 font-bold border-b-2 border-amber-300 pb-1" : "hover:text-amber-300 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-amber-300 font-bold border-b-2 border-amber-300 pb-1" : "hover:text-amber-300 transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-amber-300 font-bold border-b-2 border-amber-300 pb-1" : "hover:text-amber-300 transition"
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/farmer-dashboard"
            className={({ isActive }) =>
              isActive ? "text-amber-300 font-bold border-b-2 border-amber-300 pb-1" : "hover:text-amber-300 transition"
            }
          >
            Farmer Dashboard
          </NavLink>
        </div>

        {/* Cart + Auth Status */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="relative text-2xl flex items-center p-2 rounded-full hover:bg-emerald-700 transition">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-emerald-950 font-extrabold text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
                {totalItems}
              </span>
            )}
          </Link>

          {currentUser ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="flex items-center justify-center w-9 h-9 bg-emerald-700 rounded-full text-emerald-100 border border-emerald-600 hover:bg-emerald-600 transition cursor-pointer text-lg" title="Profile">
                👤
              </Link>
              <button
                onClick={handleLogout}
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 px-4 py-2 rounded-lg font-semibold text-sm transition shadow"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="bg-white text-emerald-800 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition shadow text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-amber-400 hover:bg-amber-500 text-emerald-950 px-4 py-2 rounded-lg font-semibold transition shadow text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-emerald-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-900 px-6 py-5 space-y-4 border-t border-emerald-700">
          <NavLink
            to="/"
            className="block text-lg font-medium hover:text-amber-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="block text-lg font-medium hover:text-amber-300"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className="block text-lg font-medium hover:text-amber-300"
            onClick={() => setMenuOpen(false)}
          >
            Orders
          </NavLink>

          <NavLink
            to="/farmer-dashboard"
            className="block text-lg font-medium hover:text-amber-300"
            onClick={() => setMenuOpen(false)}
          >
            Farmer Dashboard
          </NavLink>

          <Link
            to="/cart"
            className="block text-lg font-medium hover:text-amber-300 flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            <span>Cart</span>
            <span className="bg-amber-400 text-emerald-950 font-bold px-2 py-0.5 rounded-full text-xs">
              {totalItems} items
            </span>
          </Link>

          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full text-left bg-amber-400 text-emerald-950 px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/login"
                className="block text-center bg-white text-emerald-800 px-4 py-2 rounded-lg font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-center bg-amber-400 text-emerald-950 px-4 py-2 rounded-lg font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;