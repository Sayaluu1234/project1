import React from "react";

const Buyers = () => {
  // Dummy Data (Replace with Firebase Firestore)
  const buyers = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      phone: "9876543210",
      city: "Pune",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya@gmail.com",
      phone: "9876501234",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Rahul Deshmukh",
      email: "rahul@gmail.com",
      phone: "9876547890",
      city: "Nashik",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Buyers
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">City</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {buyers.map((buyer) => (
              <tr
                key={buyer.id}
                className="border-b hover:bg-gray-100"
              >
                <td className="px-4 py-3">{buyer.id}</td>

                <td className="px-4 py-3">{buyer.name}</td>

                <td className="px-4 py-3">{buyer.email}</td>

                <td className="px-4 py-3">{buyer.phone}</td>

                <td className="px-4 py-3">{buyer.city}</td>

                <td className="px-4 py-3 text-center">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2">
                    View
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Buyers;