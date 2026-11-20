import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    { label: "All", value: "" },
    { label: "Vegetables", value: "Vegetables" },
    { label: "Fruits", value: "Fruits" },
    { label: "Grains", value: "Grains" },
    { label: "Dairy", value: "Dairy" },
    { label: "Spices", value: "Spices" },
  ];

  const handleCategorySelect = (catValue) => {
    setCategory(catValue);
    onSearch({ search, category: catValue });
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    onSearch({ search: val, category });
  };

  const handleClear = () => {
    setSearch("");
    setCategory("");
    onSearch({ search: "", category: "" });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 space-y-4">
      {/* Search Input Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 pointer-events-none text-lg">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search fresh vegetables, fruits, grains, seller name..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition text-sm sm:text-base"
          />
          {search && (
            <button
              onClick={() => {
                setSearch("");
                onSearch({ search: "", category });
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-sm font-bold"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <select
            value={category}
            onChange={(e) => handleCategorySelect(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Categories</option>
            <option value="Vegetables">🥦 Vegetables</option>
            <option value="Fruits">🍎 Fruits</option>
            <option value="Grains">🌾 Grains</option>
            <option value="Dairy">🥛 Dairy</option>
            <option value="Pulses">🫘 Pulses</option>
            <option value="Spices">🌶️ Spices</option>
          </select>

          {(search || category) && (
            <button
              onClick={handleClear}
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold transition"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Category Quick Tags */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-1">
          Quick Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => handleCategorySelect(cat.value)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              category === cat.value
                ? "bg-emerald-700 text-white shadow-sm scale-105"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;