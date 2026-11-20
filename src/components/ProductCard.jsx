import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Category Tag Overlay */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        <span className="bg-emerald-900/80 backdrop-blur-md text-emerald-100 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Stock Status Tag */}
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-amber-400 text-emerald-950 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider">
          Fresh Harvest
        </span>
      </div>

      {/* Product Image Container */}
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden bg-slate-100 aspect-4/3">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
          }
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <span className="text-sm">👨‍🌾</span> {product.seller || "Local Farmer"}
            </span>
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              ★ 4.9
            </span>
          </div>

          <Link to={`/products/${product.id}`} className="block">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 mt-1">
            Available Quantity: <span className="font-semibold text-slate-700">{product.quantity} kg</span>
          </p>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-black text-emerald-800 tracking-tight">
              ₹{product.price}
            </span>
            <span className="text-xs text-slate-400 font-normal"> / kg</span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm flex items-center gap-1.5 active:scale-95 ${
              added
                ? "bg-emerald-800 text-white shadow-emerald-200"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100"
            }`}
          >
            {added ? (
              <>
                <span>✓</span> Added
              </>
            ) : (
              <>
                <span>🛒</span> + Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;