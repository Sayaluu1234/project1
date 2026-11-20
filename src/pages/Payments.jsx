import React, { useState } from "react";

const Payments = () => {
  // Dummy Data (Replace with Firebase Firestore)
  const [payments] = useState([
    {
      id: "PAY001",
      orderId: "ORD1001",
      amount: 1000,
      method: "UPI",
      status: "Success",
      date: "24 July 2026",
    },
    {
      id: "PAY002",
      orderId: "ORD1002",
      amount: 1750,
      method: "Credit Card",
      status: "Success",
      date: "22 July 2026",
    },
    {
      id: "PAY003",
      orderId: "ORD1003",
      amount: 800,
      method: "Cash on Delivery",
      status: "Pending",
      date: "20 July 2026",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">
          Payment History
        </h1>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
          Total Payments: {payments.length}
        </span>
      </div>

      {payments.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Payments Found
          </h2>

          <p className="text-gray-500 mt-2">
            Your payment history will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Payment ID</th>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{payment.id}</td>
                  <td className="px-4 py-3">{payment.orderId}</td>
                  <td className="px-4 py-3 font-semibold">
                    ₹{payment.amount}
                  </td>
                  <td className="px-4 py-3">{payment.method}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Payments;