import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth() || {};

  if (currentUser?.role === "farmer") {
    return <Navigate to="/farmer-dashboard" replace />;
  }

  if (currentUser?.role === "buyer") {
    return <Navigate to="/buyer-dashboard" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-extrabold">User Dashboard</h1>
        <p className="text-emerald-100 text-sm mt-1">
          Welcome {currentUser ? currentUser.email : "Valued User"}. Choose your portal below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/farmer-dashboard"
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition space-y-3 group"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-800 text-3xl rounded-2xl flex items-center justify-center font-bold">
            🌾
          </div>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition">
            Farmer Portal ➔
          </h2>
          <p className="text-gray-500 text-sm">
            List new crop harvests, update product pricing, view inventory, and process orders.
          </p>
        </Link>

        <Link
          to="/buyer-dashboard"
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition space-y-3 group"
        >
          <div className="w-14 h-14 bg-amber-100 text-amber-800 text-3xl rounded-2xl flex items-center justify-center font-bold">
            🛒
          </div>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition">
            Buyer Dashboard ➔
          </h2>
          <p className="text-gray-500 text-sm">
            Track your farm-fresh orders, saved addresses, purchase history, and payments.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
