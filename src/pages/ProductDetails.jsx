import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { initialProducts } from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart() || { addToCart: () => {} };
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  // Find product by ID
  const foundProduct = initialProducts.find((p) => p.id === Number(id));

  // Default mock data for missing fields
  const product = foundProduct ? {
    ...foundProduct,
    description: foundProduct.description || "Locally grown produce cultivated using traditional farming practices.",
    farmName: foundProduct.farmName || foundProduct.seller + " Farms",
    location: foundProduct.location || "Maharashtra, India",
    harvestDate: foundProduct.harvestDate || "Recent Harvest",
    rating: foundProduct.rating || 4.5,
    reviewsCount: foundProduct.reviewsCount || 12,
  } : {
    id: id || 1,
    name: "Farm Fresh Potatoes",
    category: "Vegetables",
    description:
      "Locally grown potatoes cultivated using traditional farming practices. Ideal for curries, chips, and daily meals.",
    seller: "Suresh Patil",
    farmName: "Suresh Agro Farms",
    location: "Nashik, Maharashtra",
    price: 30,
    quantity: 150,
    harvestDate: "27 July 2026",
    rating: 4.9,
    reviewsCount: 34,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=900",
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: qty });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: qty });
    navigate("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium">
        <Link to="/" className="hover:text-emerald-700">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-emerald-700">Products</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{product.name}</span>
      </nav>

      {/* Main Detail Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 grid md:grid-cols-2 gap-10">
        {/* Product Showcase Image */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-50 aspect-square border border-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-emerald-900/80 backdrop-blur-md text-emerald-100 text-xs font-bold px-3 py-1 rounded-full shadow">
            {product.category}
          </span>
          <span className="absolute top-4 right-4 bg-amber-400 text-emerald-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow">
            Harvested Today
          </span>
        </div>

        {/* Product Spec & Action */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                <span>📍 {product.location}</span>
                <span>•</span>
                <span className="text-amber-500">★ {product.rating} ({product.reviewsCount} reviews)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Farmer Identity Box */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                👨‍🌾
              </div>
              <div>
                <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Farmer Direct Seller</p>
                <h4 className="font-bold text-slate-900 text-base">{product.seller}</h4>
                <p className="text-xs text-slate-500">{product.farmName} • {product.location}</p>
              </div>
            </div>

            {/* Price & Quantity Selector */}
            <div className="pt-2 flex items-center justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-emerald-800 tracking-tight">
                  ₹{product.price}
                </span>
                <span className="text-sm text-slate-400 font-normal"> / kg</span>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-9 h-9 rounded-lg bg-white shadow-xs text-slate-800 font-extrabold hover:bg-slate-50 flex items-center justify-center text-lg"
                >
                  -
                </button>
                <span className="font-bold text-slate-900 w-8 text-center text-base">{qty} kg</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-9 h-9 rounded-lg bg-white shadow-xs text-slate-800 font-extrabold hover:bg-slate-50 flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            {addedNotice && (
              <div className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl text-center animate-fade-in">
                ✓ Added {qty} kg of {product.name} to your shopping cart!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                🛒 Add {qty} kg to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                ⚡ Buy Now (₹{product.price * qty})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Product Information Tabs */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
        <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
          Farmer Direct Guarantee
        </h3>

        <div className="grid sm:grid-cols-3 gap-6 text-sm">
          <div className="flex gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h4 className="font-bold text-slate-900">Zero Chemical Residue</h4>
              <p className="text-slate-500 text-xs mt-1">Organically nurtured soil and natural pest management.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <h4 className="font-bold text-slate-900">Eco-Vent Crates</h4>
              <p className="text-slate-500 text-xs mt-1">Packed in breathable containers to preserve moisture and crispness.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-2xl">🤝</span>
            <div>
              <h4 className="font-bold text-slate-900">100% Direct Trade</h4>
              <p className="text-slate-500 text-xs mt-1">Your payment directly supports Rajesh Patil's family farm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;