import React from "react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Product Image */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {item.name}
          </h2>

          <p className="text-gray-600">
            Price: ₹{item.price} / kg
          </p>

          <p className="text-sm text-gray-500">
            Seller: {item.seller}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDecrease(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          -
        </button>

        <span className="text-lg font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => onIncrease(item.id)}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <p className="text-lg font-bold text-green-700">
          ₹{item.price * item.quantity}
        </p>

        <button
          onClick={() => onRemove(item.id)}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;