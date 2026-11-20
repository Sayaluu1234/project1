import React from "react";

const Card = ({
  title,
  children,
  footer,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ${className}`}
    >
      {title && (
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {title}
          </h2>
        </div>
      )}

      <div className="p-6">
        {children}
      </div>

      {footer && (
        <div className="border-t px-6 py-4 bg-gray-50 rounded-b-xl">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
