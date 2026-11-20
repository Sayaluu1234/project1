import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useCart() || {
    cartItems: [],
    removeFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    clearCart: () => {},
    totalPrice: 0,
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-6">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-700 text-5xl rounded-full flex items-center justify-center mx-auto">
          🛒
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Looks like you haven't added any fresh produce to your cart yet. Explore our marketplace to support local farmers!
        </p>
        <Link
          to="/products"
          className="inline-block bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-emerald-800 transition shadow"
        >
          Browse Marketplace Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 text-sm mt-1">Review your fresh farm selections</p>
        </div>

        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 font-medium text-sm border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-5 hover:shadow-md transition"
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl border border-gray-100 flex-shrink-0"
              />

              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">Category: {item.category}</p>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">Seller: {item.seller}</p>
                <p className="text-emerald-800 font-bold mt-2 text-base">
                  ₹{item.price} <span className="text-xs text-gray-400 font-normal">/ kg</span>
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-200">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 rounded-lg bg-white shadow-xs text-gray-700 font-bold hover:bg-gray-100 flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-bold text-gray-800 w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 rounded-lg bg-white shadow-xs text-gray-700 font-bold hover:bg-gray-100 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Item Total & Remove */}
              <div className="text-right flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                <p className="text-lg font-black text-gray-900">₹{item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 hover:text-red-700 font-medium mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit space-y-6">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charge</span>
              <span className="font-semibold text-emerald-600">FREE</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Taxes</span>
              <span className="font-semibold text-gray-900">₹0</span>
            </div>

            <div className="border-t pt-3 flex justify-between text-lg font-black text-gray-900">
              <span>Total Amount</span>
              <span className="text-emerald-700">₹{totalPrice}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block text-center w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-md transition"
          >
            Proceed to Checkout ➔
          </Link>

          <p className="text-xs text-center text-gray-400">
            🔒 Safe & Secure Farm Direct Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
