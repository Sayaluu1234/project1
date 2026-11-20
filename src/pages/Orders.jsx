import { useState } from "react";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD1002",
      productName: "Farm Fresh Potatoes",
      buyerName: "Priya Singh",
      sellerName: "Suresh Patil",
      quantity: 50,
      total: 1500,
      paymentStatus: "Paid via COD",
      status: "Shipped",
      date: "22 July 2026",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
    },
    {
      id: "ORD1003",
      productName: "Sweet Alphonso Mangoes",
      buyerName: "Rahul Patil",
      sellerName: "Anil Deshmukh",
      quantity: 15,
      total: 1800,
      paymentStatus: "Paid via UPI",
      status: "Delivered",
      date: "20 July 2026",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredOrders = orders.filter((o) => {
    if (activeFilter === "All") return true;
    return o.status === activeFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Order Tracking</h1>
          <p className="text-emerald-100 text-sm mt-1">
            Monitor real-time farm produce shipments and delivery history.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 text-white text-sm font-bold">
          Total Orders: <span className="text-amber-300 font-extrabold">{orders.length}</span>
        </div>
      </div>

      {/* Filter Status Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
        {["All", "Pending", "Shipped", "Delivered"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeFilter === tab
                ? "bg-emerald-700 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
          <div className="text-4xl">📦</div>
          <h3 className="text-lg font-bold text-slate-800">No Orders Found</h3>
          <p className="text-slate-500 text-sm">No shipments match the selected status filter.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;