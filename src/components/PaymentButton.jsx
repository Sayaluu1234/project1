import React from "react";

const PaymentButton = ({
  amount,
  onClick,
  disabled = false,
  text = "Proceed to Payment",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        py-3
        rounded-lg
        font-semibold
        text-white
        transition-all
        duration-300
        ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }
      `}
    >
      {text}

      {amount && (
        <span className="ml-2 font-bold">
          ₹{amount}
        </span>
      )}
    </button>
  );
};

export default PaymentButton;