import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-medium text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default Loader;