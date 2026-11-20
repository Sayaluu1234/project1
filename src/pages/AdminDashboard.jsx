import React from "react";

const AdminDashboard = () => {
  // Dummy Data (Replace with Firebase data later)
  const dashboardData = {
    farmers: 120,
    buyers: 350,
    products: 560,
    orders: 890,
    revenue: 245000,
  };

  const cards = [
    {
      title: "Total Farmers",
      value: dashboardData.farmers,
      color: "bg-green-100",
      textColor: "text-green-700",
      icon: "👨‍🌾",
    },
    {
      title: "Total Buyers",
      value: dashboardData.buyers,
      color: "bg-blue-100",
      textColor: "text-blue-700",
      icon: "🛒",
    },
    {
      title: "Total Products",
      value: dashboardData.products,
      color: "bg-yellow-100",
      textColor: "text-yellow-700",
      icon: "📦",
    },
    {
      title: "Total Orders",
      value: dashboardData.orders,
      color: "bg-purple-100",
      textColor: "text-purple-700",
      icon: "📋",
    },
    {
      title: "Total Revenue",
      value: `₹${dashboardData.revenue.toLocaleString()}`,
      color: "bg-red-100",
      textColor: "text-red-700",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} rounded-xl shadow-md p-6 hover:shadow-lg transition`}
          >
            <div className="text-4xl">{card.icon}</div>

            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              {card.title}
            </h2>

            <p className={`mt-2 text-3xl font-bold ${card.textColor}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✅ New farmer registered</li>
          <li>📦 New product added</li>
          <li>🛒 Buyer placed an order</li>
          <li>💳 Payment completed</li>
          <li>🚚 Order marked as delivered</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;