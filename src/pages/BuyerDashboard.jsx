import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const BuyerDashboard = () => {
  const { currentUser } = useAuth() || {};

  const buyer = {
    name: currentUser ? currentUser.email.split("@")[0] : "Amit Sharma",
    email: currentUser ? currentUser.email : "amit@gmail.com",
    totalOrders: 12,
    wishlist: 8,
    cartItems: 3,
  };

  const recentOrders = [
    {
      id: "ORD002",
      product: "Farm Fresh Potatoes",
      quantity: "10 kg",
      amount: 350,
      status: "Pending",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-4">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="bg-amber-400 text-emerald-950 text-xs font-black uppercase px-3 py-1 rounded-full">
            Buyer Dashboard
          </span>
          <h1 className="text-3xl font-extrabold mt-2 capitalize">
            Welcome back, {buyer.name} 👋
          </h1>
          <p className="text-emerald-100 text-sm mt-1">{buyer.email}</p>
        </div>

        <Link
          to="/products"
          className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-6 py-3 rounded-2xl transition shadow"
        >
          Explore Fresh Produce ➔
        </Link>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Purchases</p>
          <p className="text-3xl font-black text-slate-900">{buyer.totalOrders} Orders</p>
          <p className="text-xs text-emerald-600 font-semibold">✓ 100% Direct Farmer Trade</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Wishlist</p>
          <p className="text-3xl font-black text-slate-900">{buyer.wishlist} Produce</p>
          <p className="text-xs text-slate-400">Saved harvest items</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cart Items</p>
          <p className="text-3xl font-black text-emerald-800">{buyer.cartItems} Items</p>
          <Link to="/cart" className="text-xs text-emerald-700 font-bold hover:underline">View Cart ➔</Link>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link to="/products" className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition text-center space-y-2 group">
          <div className="text-3xl group-hover:scale-110 transition-transform">🥦</div>
          <p className="font-bold text-slate-900 text-sm">Products</p>
        </Link>

        <Link to="/cart" className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition text-center space-y-2 group">
          <div className="text-3xl group-hover:scale-110 transition-transform">🛒</div>
          <p className="font-bold text-slate-900 text-sm">Cart</p>
        </Link>

        <Link to="/orders" className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition text-center space-y-2 group">
          <div className="text-3xl group-hover:scale-110 transition-transform">📦</div>
          <p className="font-bold text-slate-900 text-sm">Orders</p>
        </Link>

        <Link to="/profile" className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition text-center space-y-2 group">
          <div className="text-3xl group-hover:scale-110 transition-transform">👤</div>
          <p className="font-bold text-slate-900 text-sm">Profile</p>
        </Link>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Recent Purchase History</h2>
          <Link to="/orders" className="text-xs font-bold text-emerald-700 hover:underline">View All ➔</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Produce Item</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">#{order.id}</td>
                  <td className="px-6 py-4">
                    <img src={order.image} alt={order.product} className="w-10 h-10 rounded-md object-cover border border-slate-200" />
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{order.product}</td>
                  <td className="px-6 py-4">{order.quantity}</td>
                  <td className="px-6 py-4 font-bold text-emerald-800">₹{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-extrabold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;