import { useState } from "react";
import { Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import farmerLogo from "../assets/farmer_profile_logo.png";

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("my-products");
  const [editingProduct, setEditingProduct] = useState(null);

  const [myProducts, setMyProducts] = useState([
    {
      id: 101,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 40,
      quantity: 120,
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
    },
    {
      id: 102,
      name: "Organic Potatoes",
      category: "Vegetables",
      price: 30,
      quantity: 150,
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
    },
    {
      id: 103,
      name: "Green Chillies",
      category: "Vegetables",
      price: 60,
      quantity: 20,
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=600",
    },
    {
      id: 104,
      name: "Fresh Cabbage",
      category: "Vegetables",
      price: 25,
      quantity: 100,
      status: "In Stock",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600",
    },
    {
      id: 105,
      name: "Organic Garlic",
      category: "Vegetables",
      price: 150,
      quantity: 5,
      status: "Low Stock",
      image: "https://images.unsplash.com/photo-1540148426941-859a16f3d9d3?w=600",
    },
  ]);

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setMyProducts(
        myProducts.map((p) =>
          p.id === editingProduct.id ? { ...productData, id: editingProduct.id, price: Number(productData.price), quantity: Number(productData.quantity) } : p
        )
      );
      setEditingProduct(null);
    } else {
      setMyProducts([
        ...myProducts,
        {
          id: Date.now(),
          name: productData.name,
          category: productData.category,
          price: Number(productData.price),
          quantity: Number(productData.quantity),
          status: "In Stock",
          image: productData.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
        },
      ]);
    }
    setActiveTab("my-products");
  };

  const handleDeleteProduct = (id) => {
    setMyProducts(myProducts.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="bg-amber-400 text-emerald-950 text-xs font-black uppercase px-3 py-1 rounded-full">
            Farmer Portal
          </span>
          <h1 className="text-3xl font-extrabold mt-2">Welcome Back, Farmer!</h1>
          <p className="text-emerald-100 text-sm mt-1">
            Manage your crop listings, track incoming buyer orders, and view earnings.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setActiveTab(activeTab === "add-product" ? "my-products" : "add-product");
          }}
          className="bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl transition shadow"
        >
          {activeTab === "add-product" ? "← Back to My Listings" : "+ Add New Crop"}
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div 
          onClick={() => setActiveTab("my-products")}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 text-2xl rounded-xl flex items-center justify-center font-bold">
            🌾
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Active Listings</p>
            <h3 className="text-2xl font-black text-gray-900">{myProducts.length} Crops</h3>
          </div>
        </div>

        <Link to="/orders" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 text-2xl rounded-xl flex items-center justify-center font-bold">
            📦
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Pending Orders</p>
            <h3 className="text-2xl font-black text-gray-900">4 Orders</h3>
          </div>
        </Link>

        <Link to="/payments" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-blue-100 text-blue-800 text-2xl rounded-xl flex items-center justify-center font-bold">
            💰
          </div>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase">Total Revenue</p>
            <h3 className="text-2xl font-black text-gray-900">₹18,450</h3>
          </div>
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 gap-6">
        <button
          onClick={() => setActiveTab("my-products")}
          className={`pb-3 font-bold text-sm ${
            activeTab === "my-products"
              ? "text-emerald-700 border-b-2 border-emerald-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          My Listed Crops ({myProducts.length})
        </button>
        <button
          onClick={() => {
            setEditingProduct(null);
            setActiveTab("add-product");
          }}
          className={`pb-3 font-bold text-sm ${
            activeTab === "add-product"
              ? "text-emerald-700 border-b-2 border-emerald-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          + Add New Product
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-3 font-bold text-sm ${
            activeTab === "profile"
              ? "text-emerald-700 border-b-2 border-emerald-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Profile
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "profile" ? (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 shadow-sm flex items-center justify-center bg-white">
              <img src={farmerLogo} alt="Farmer Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Ramesh Farmer</h2>
              <p className="text-gray-500">ramesh.farmer@example.com</p>
              <span className="inline-block mt-2 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                Verified Seller
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-700 border-b pb-2">Farm Details</h3>
              <p><span className="font-semibold text-gray-600">Farm Name:</span> Ramesh Organic Farms</p>
              <p><span className="font-semibold text-gray-600">Location:</span> Nashik, Maharashtra</p>
              <p><span className="font-semibold text-gray-600">Total Area:</span> 15 Acres</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-gray-700 border-b pb-2">Account Info</h3>
              <p><span className="font-semibold text-gray-600">Joined:</span> Jan 2024</p>
              <p><span className="font-semibold text-gray-600">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-gray-600">Bank Linked:</span> HDFC Bank ending in 1234</p>
            </div>
          </div>
        </div>
      ) : activeTab === "add-product" ? (
        <div className="pt-4">
          <ProductForm 
            key={editingProduct ? editingProduct.id : "new"} 
            onSubmit={handleSaveProduct} 
            initialData={editingProduct} 
          />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Listed Crop Products</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Image</th>
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price / kg</th>
                  <th className="px-6 py-4">Available Stock</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {myProducts.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md object-cover border border-gray-200" />
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-700">₹{item.price}</td>
                    <td className="px-6 py-4 font-medium">{item.quantity} kg</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-extrabold rounded-full ${
                          item.status === "In Stock"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setEditingProduct(item);
                          setActiveTab("add-product");
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs border border-blue-200 px-3 py-1.5 rounded-lg hover:bg-blue-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(item.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-xs border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
