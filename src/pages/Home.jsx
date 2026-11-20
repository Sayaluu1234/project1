import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { initialProducts } from "./Products";

const Home = () => {
  const { addToCart } = useCart() || { addToCart: () => {} };

  const [products] = useState(initialProducts.slice(0, 4));

  const [filteredProducts, setFilteredProducts] = useState(products);

  const categoriesList = [
    { title: "Vegetables", icon: "🥦", bg: "bg-emerald-50 text-emerald-800 border-emerald-100", count: "120+ Listings" },
    { title: "Fruits", icon: "🍎", bg: "bg-rose-50 text-rose-800 border-rose-100", count: "80+ Listings" },
    { title: "Grains", icon: "🌾", bg: "bg-amber-50 text-amber-800 border-amber-100", count: "250+ Listings" },
    { title: "Dairy", icon: "🥛", bg: "bg-blue-50 text-blue-800 border-blue-100", count: "45+ Listings" },
  ];

  const handleSearch = ({ search, category }) => {
    const filtered = products.filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "" || product.category === category;

      return matchesName && matchesCategory;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="space-y-12">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-emerald-800/40">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-400/90 text-emerald-950 font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            <span>✨</span> 100% Direct Farm-to-Table Marketplace
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Support Local Farmers, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-200">
              Eat 100% Farm Fresh.
            </span>
          </h1>

          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl leading-relaxed">
            Eliminate middleman margins. Buy freshly harvested vegetables, fruits, grains, and dairy straight from verified regional farmers.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-amber-400 hover:bg-amber-300 text-emerald-950 px-8 py-4 rounded-2xl font-extrabold shadow-lg shadow-amber-400/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-base"
            >
              Explore Fresh Crops ➔
            </Link>

            <Link
              to="/farmer-dashboard"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-md transition text-base"
            >
              Farmer Portal 👨‍🌾
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 border-t border-emerald-800/60 grid grid-cols-3 gap-4 text-center sm:text-left max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">500+</p>
              <p className="text-xs text-emerald-200/80 font-medium mt-0.5">Verified Farmers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">10k+</p>
              <p className="text-xs text-emerald-200/80 font-medium mt-0.5">Orders Delivered</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-amber-300">100%</p>
              <p className="text-xs text-emerald-200/80 font-medium mt-0.5">Direct Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Spotlight Bar */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Explore Categories</h2>
          <Link to="/products" className="text-sm font-bold text-emerald-700 hover:underline">View All ➔</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoriesList.map((cat) => (
            <Link
              key={cat.title}
              to="/products"
              className={`p-5 rounded-2xl border ${cat.bg} hover:shadow-md transition-all flex flex-col justify-between h-32 group`}
            >
              <div className="text-3xl group-hover:scale-110 transition-transform w-fit">{cat.icon}</div>
              <div>
                <h3 className="font-bold text-base">{cat.title}</h3>
                <p className="text-xs opacity-75">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Featured Products */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">Direct Harvest</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Harvests
            </h2>
          </div>

          <Link
            to="/products"
            className="text-emerald-700 font-bold hover:text-emerald-800 text-sm flex items-center gap-1 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition"
          >
            Browse All ({products.length}) ➔
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 font-medium">No produce matches your current search criteria.</p>
          </div>
        )}
      </section>

      {/* Trust & Value Proposition */}
      <section className="grid md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 space-y-3 hover:shadow-md transition">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 text-2xl rounded-2xl flex items-center justify-center font-bold">
            🌱
          </div>
          <h3 className="text-lg font-bold text-slate-900">100% Farm Fresh</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Directly harvested from accredited local farms to ensure peak nutrient retention and natural taste.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 space-y-3 hover:shadow-md transition">
          <div className="w-12 h-12 bg-amber-100 text-amber-800 text-2xl rounded-2xl flex items-center justify-center font-bold">
            🚚
          </div>
          <h3 className="text-lg font-bold text-slate-900">Direct Logistics</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Eliminates multi-tier distribution delays. Rapid farm-to-doorstep transportation.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 space-y-3 hover:shadow-md transition">
          <div className="w-12 h-12 bg-blue-100 text-blue-800 text-2xl rounded-2xl flex items-center justify-center font-bold">
            🤝
          </div>
          <h3 className="text-lg font-bold text-slate-900">Fair Farmer Revenue</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Farmers receive 100% of their listed crop prices without middleman commission cuts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;