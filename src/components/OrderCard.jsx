import { useState } from "react";

const OrderCard = ({ order }) => {
  const [showDetail, setShowDetail] = useState(false);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "Accepted":
        return "bg-blue-100 text-blue-900 border-blue-200";
      case "Shipped":
        return "bg-indigo-100 text-indigo-900 border-indigo-200";
      case "Delivered":
        return "bg-emerald-100 text-emerald-900 border-emerald-200";
      case "Cancelled":
        return "bg-rose-100 text-rose-900 border-rose-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition space-y-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Order ID</span>
          <h3 className="text-lg font-black text-slate-900">#{order.id}</h3>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`px-3.5 py-1 rounded-full text-xs font-bold border ${getStatusBadge(
              order.status
            )}`}
          >
            ● {order.status}
          </span>
          <span className="text-xs text-slate-500 font-medium">Placed on {order.date}</span>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src={order.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200"} alt={order.productName} className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0" />
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">Product</p>
            <p className="font-bold text-slate-900 text-base mt-0.5 leading-tight">{order.productName}</p>
            <p className="text-xs text-slate-500 mt-1">Quantity: {order.quantity} kg</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 font-semibold uppercase">Seller / Farmer</p>
          <p className="font-bold text-emerald-800 text-base mt-0.5">👨‍🌾 {order.sellerName}</p>
          <p className="text-xs text-slate-500">Buyer: {order.buyerName}</p>
        </div>

        <div className="sm:text-right">
          <p className="text-xs text-slate-400 font-semibold uppercase">Total Paid</p>
          <p className="font-black text-emerald-800 text-xl mt-0.5">₹{order.total}</p>
          <span className="inline-block text-[11px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-100 mt-1">
            ✓ {order.paymentStatus}
          </span>
        </div>
      </div>

      {/* Accordion Detail Toggle */}
      {showDetail && (
        <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 animate-fade-in bg-slate-50 p-4 rounded-xl">
          <p><strong className="text-slate-800">Dispatch Hub:</strong> Central Agriculture Logistics, Sangli</p>
          <p><strong className="text-slate-800">Estimated Delivery:</strong> Within 24-48 Hours</p>
          <p><strong className="text-slate-800">Quality Certificate:</strong> Grade A Organic Certified Harvest</p>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition"
        >
          {showDetail ? "Hide Details ▲" : "Track Order Details ▼"}
        </button>
      </div>
    </div>
  );
};

export default OrderCard;