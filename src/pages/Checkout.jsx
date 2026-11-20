import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart() || {
    cartItems: [],
    totalPrice: 0,
    clearCart: () => {},
  };

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      navigate("/orders");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center bg-white rounded-2xl p-8 shadow-lg space-y-4 my-10">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 text-4xl rounded-full flex items-center justify-center mx-auto animate-bounce">
          ✓
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">Order Placed Successfully!</h2>
        <p className="text-gray-600 text-sm">
          Thank you for supporting local farmers. Your fresh produce order has been dispatched.
        </p>
        <p className="text-xs text-emerald-700 font-semibold">Redirecting to your orders list...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
        <p className="text-gray-500 text-sm mt-1">Complete your delivery address and payment details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Delivery Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Delivery Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Address *</label>
            <textarea
              name="address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
              placeholder="House/Flat No., Street, Landmark"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">City / Town</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Pune"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="411001"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 border-b pb-3 pt-4">Payment Options</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-emerald-50/50 transition">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handleChange}
                className="accent-emerald-700 w-4 h-4"
              />
              <div>
                <span className="font-bold text-gray-900 block text-sm">Cash on Delivery (COD)</span>
                <span className="text-xs text-gray-500">Pay cash upon receiving fresh produce</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-emerald-50/50 transition">
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === "upi"}
                onChange={handleChange}
                className="accent-emerald-700 w-4 h-4"
              />
              <div>
                <span className="font-bold text-gray-900 block text-sm">UPI Payment (GPay / PhonePe / Paytm)</span>
                <span className="text-xs text-gray-500">Instant digital payment</span>
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-md transition text-base mt-6"
          >
            Confirm & Place Order (₹{totalPrice})
          </button>
        </form>

        {/* Mini Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Items Summary</h2>

          <div className="divide-y max-h-80 overflow-y-auto pr-1 space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="pt-3 flex justify-between text-sm">
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity} kg</p>
                </div>
                <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Items Total</span>
              <span className="font-semibold text-gray-900">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
            <div className="flex justify-between text-base font-black text-gray-900 border-t pt-2">
              <span>Total Payable</span>
              <span className="text-emerald-700">₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
