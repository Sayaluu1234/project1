import { useState } from "react";

const ProductForm = ({ onSubmit, initialData }) => {
  const [product, setProduct] = useState(initialData || {
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.quantity
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit({
      ...product,
      image: product.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
    });

    setProduct({
      name: "",
      category: "",
      price: "",
      quantity: "",
      description: "",
      image: null,
    });

    e.target.reset();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-sm border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-extrabold text-slate-900">
          {initialData ? "Edit Crop Produce 🌾" : "List New Crop Produce 🌾"}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {initialData ? "Update harvest details." : "Fill in harvest details to publish on the public marketplace."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        {/* Product Name */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Crop / Produce Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={product.name}
            onChange={handleChange}
            placeholder="e.g. Farm Fresh Potatoes"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Category & Price Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Category *
            </label>
            <select
              name="category"
              required
              value={product.category}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Category</option>
              <option value="Vegetables">🥦 Vegetables</option>
              <option value="Fruits">🍎 Fruits</option>
              <option value="Grains">🌾 Grains</option>
              <option value="Dairy">🥛 Dairy</option>
              <option value="Pulses">🫘 Pulses</option>
              <option value="Spices">🌶️ Spices</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Price (₹ per kg) *
            </label>
            <input
              type="number"
              name="price"
              required
              value={product.price}
              onChange={handleChange}
              placeholder="e.g. 45"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Available Quantity (kg) *
          </label>
          <input
            type="number"
            name="quantity"
            required
            value={product.quantity}
            onChange={handleChange}
            placeholder="Available stock in kg"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Produce Description
          </label>
          <textarea
            rows="3"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Mention farm origin, harvest date, organic status..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        {/* Image Input */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Produce Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full border border-slate-200 rounded-xl p-2 bg-slate-50 text-slate-600 text-xs"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl transition shadow-md text-base mt-2"
        >
          {initialData ? "Update Crop Listing ➔" : "Publish Crop Listing ➔"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;