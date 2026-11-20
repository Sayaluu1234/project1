import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export const initialProducts = [
  {
    id: 2,
    name: "Farm Fresh Potatoes",
    category: "Vegetables",
    seller: "Suresh Patil",
    price: 30,
    quantity: 150,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
  },
  {
    id: 3,
    name: "Sweet Alphonso Mangoes",
    category: "Fruits",
    seller: "Anil Deshmukh",
    price: 120,
    quantity: 80,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
  },
  {
    id: 4,
    name: "Spicy Green Chillies",
    category: "Vegetables",
    seller: "Mahesh Jadhav",
    price: 60,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=600",
  },
  {
    id: 5,
    name: "Premium Basmati Rice",
    category: "Grains",
    seller: "Ramesh Pawar",
    price: 90,
    quantity: 500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
  },
  {
    id: 6,
    name: "Pure Cow Milk (1L)",
    category: "Dairy",
    seller: "Ganesh Gaikwad",
    price: 65,
    quantity: 40,
    image: "/images/dairy/milk.png",
  },
  {
    id: 7,
    name: "Organic Red Onions",
    category: "Vegetables",
    seller: "Vikram Shinde",
    price: 35,
    quantity: 200,
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600",
  },
  {
    id: 8,
    name: "Golden Wheat Grains",
    category: "Grains",
    seller: "Santosh More",
    price: 45,
    quantity: 350,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
  },
  {
    id: 9,
    name: "Fresh Red Apples",
    category: "Fruits",
    seller: "Rahul Sharma",
    price: 150,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bac6?w=600",
  },
  {
    id: 10,
    name: "Sweet Bananas",
    category: "Fruits",
    seller: "Prakash Desai",
    price: 40,
    quantity: 200,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600",
  },
  {
    id: 11,
    name: "Juicy Oranges",
    category: "Fruits",
    seller: "Kiran Patil",
    price: 80,
    quantity: 150,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600",
  },
  {
    id: 12,
    name: "Fresh Watermelon",
    category: "Fruits",
    seller: "Sanjay Gupta",
    price: 60,
    quantity: 50,
    image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600",
  },
  {
    id: 13,
    name: "Organic Brown Rice",
    category: "Grains",
    seller: "Arjun Reddy",
    price: 110,
    quantity: 300,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600",
  },
  {
    id: 14,
    name: "Nutritious Quinoa",
    category: "Grains",
    seller: "Pooja Hegde",
    price: 250,
    quantity: 120,
    image: "https://images.unsplash.com/photo-1585994807490-482a98e820cb?w=600",
  },
  {
    id: 15,
    name: "Pearl Millet (Bajra)",
    category: "Grains",
    seller: "Vijay Singh",
    price: 40,
    quantity: 400,
    image: "https://images.unsplash.com/photo-1632054619478-f7c81a545362?w=600",
  },
  {
    id: 16,
    name: "Rolled Oats",
    category: "Grains",
    seller: "Deepak Kumar",
    price: 90,
    quantity: 250,
    image: "https://images.unsplash.com/photo-1517595304677-8c01c0bb0df5?w=600",
  },
  {
    id: 17,
    name: "Barley Grains",
    category: "Grains",
    seller: "Sneha Patil",
    price: 65,
    quantity: 180,
    image: "https://images.unsplash.com/photo-1611488005391-7f91cc4b744d?w=600",
  },
  {
    id: 18,
    name: "Fresh Paneer (Cottage Cheese)",
    category: "Dairy",
    seller: "Raju Dairy Farms",
    price: 200,
    quantity: 50,
    image: "/images/dairy/paneer.png",
  },
  {
    id: 19,
    name: "Organic Pure Ghee",
    category: "Dairy",
    seller: "Gokul Dairy",
    price: 600,
    quantity: 30,
    image: "/images/dairy/ghee.png",
  },
  {
    id: 20,
    name: "Natural Fresh Yogurt",
    category: "Dairy",
    seller: "Amulya Farms",
    price: 50,
    quantity: 100,
    image: "/images/dairy/yogurt.png",
  },
  {
    id: 21,
    name: "Homemade White Butter",
    category: "Dairy",
    seller: "Kisan Dairy",
    price: 150,
    quantity: 40,
    image: "/images/dairy/white_butter.png",
  },
  {
    id: 22,
    name: "Fresh Mozzarella Cheese",
    category: "Dairy",
    seller: "Shivaji Farms",
    price: 250,
    quantity: 20,
    image: "/images/dairy/mozzarella.png",
  },
  {
    id: 23,
    name: "Organic Turmeric Powder",
    category: "Spices",
    seller: "Meera Spices",
    price: 180,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1615486171448-4fd1313d42e6?w=600",
  },
  {
    id: 24,
    name: "Ground Cumin (Jeera)",
    category: "Spices",
    seller: "Rajasthan Naturals",
    price: 220,
    quantity: 40,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
  },
  {
    id: 25,
    name: "Coriander Powder",
    category: "Spices",
    seller: "Spices of India",
    price: 160,
    quantity: 75,
    image: "https://images.unsplash.com/photo-1599813083167-7eaee2f47c94?w=600",
  },
  {
    id: 26,
    name: "Whole Black Pepper",
    category: "Spices",
    seller: "Kerala Spice Co.",
    price: 450,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=600",
  },
  {
    id: 27,
    name: "Premium Saffron (Kesar)",
    category: "Spices",
    seller: "Kashmir Valley Farms",
    price: 1200,
    quantity: 5,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600",
  },
  {
    id: 28,
    name: "Crunchy Orange Carrots",
    category: "Vegetables",
    seller: "Kisan Farm Naturals",
    price: 45,
    quantity: 80,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
  },
  {
    id: 29,
    name: "Fresh Green Spinach",
    category: "Vegetables",
    seller: "Green Leaf Farms",
    price: 30,
    quantity: 50,
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600",
  },
  {
    id: 30,
    name: "Organic Cauliflower",
    category: "Vegetables",
    seller: "Sushil Farms",
    price: 50,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600",
  },
  {
    id: 31,
    name: "Sweet Bell Peppers",
    category: "Vegetables",
    seller: "Sunrise Vegetables",
    price: 90,
    quantity: 40,
    image: "https://images.unsplash.com/photo-1615485966453-294db40e70ab?w=600",
  },
  {
    id: 32,
    name: "Purple Eggplant (Brinjal)",
    category: "Vegetables",
    seller: "Deshmukh Agro",
    price: 40,
    quantity: 70,
    image: "https://images.unsplash.com/photo-1498837164805-728b74ff68bc?w=600",
  },
  {
    id: 33,
    name: "Fresh Green Cabbage",
    category: "Vegetables",
    seller: "Kisan Farm Naturals",
    price: 25,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600",
  },
  {
    id: 34,
    name: "Sweet Green Peas",
    category: "Vegetables",
    seller: "Green Leaf Farms",
    price: 60,
    quantity: 40,
    image: "https://images.unsplash.com/photo-1595856728516-724bc2f8c5c7?w=600",
  },
  {
    id: 35,
    name: "Fresh Broccoli",
    category: "Vegetables",
    seller: "Sunrise Vegetables",
    price: 120,
    quantity: 30,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
  },
  {
    id: 36,
    name: "Fresh Okra (Lady Finger)",
    category: "Vegetables",
    seller: "Deshmukh Agro",
    price: 45,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1605336043818-f2e7b8daebf6?w=600",
  },
  {
    id: 37,
    name: "Organic Garlic",
    category: "Vegetables",
    seller: "Sushil Farms",
    price: 150,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1540148426941-859a16f3d9d3?w=600",
  },
  {
    id: 38,
    name: "Fresh Ginger Root",
    category: "Vegetables",
    seller: "Kisan Farm Naturals",
    price: 180,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1596706077364-e4099cbda7dc?w=600",
  },
  {
    id: 39,
    name: "Crispy Green Beans",
    category: "Vegetables",
    seller: "Green Leaf Farms",
    price: 50,
    quantity: 55,
    image: "https://images.unsplash.com/photo-1563236052-87893a903ef8?w=600",
  },
  {
    id: 40,
    name: "Fresh Cucumber",
    category: "Vegetables",
    seller: "Sunrise Vegetables",
    price: 30,
    quantity: 80,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600",
  },
  {
    id: 41,
    name: "Red Radish",
    category: "Vegetables",
    seller: "Deshmukh Agro",
    price: 40,
    quantity: 45,
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=600",
  },
  {
    id: 42,
    name: "Bottle Gourd (Lauki)",
    category: "Vegetables",
    seller: "Sushil Farms",
    price: 25,
    quantity: 70,
    image: "https://images.unsplash.com/photo-1628103138804-d50d7e4dbce4?w=600",
  },
  {
    id: 43,
    name: "Fresh Pumpkin",
    category: "Vegetables",
    seller: "Kisan Farm Naturals",
    price: 35,
    quantity: 50,
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600",
  },
  {
    id: 44,
    name: "Sweet Potato",
    category: "Vegetables",
    seller: "Sunrise Vegetables",
    price: 45,
    quantity: 90,
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600",
  },
  {
    id: 45,
    name: "Fresh Beetroot",
    category: "Vegetables",
    seller: "Deshmukh Agro",
    price: 40,
    quantity: 60,
    image: "https://images.unsplash.com/photo-1593105559379-3732cce6c342?w=600",
  },
  {
    id: 46,
    name: "Crisp Celery",
    category: "Vegetables",
    seller: "Green Leaf Farms",
    price: 55,
    quantity: 30,
    image: "https://images.unsplash.com/photo-1611077543888-84226d71b87a?w=600",
  },
  {
    id: 47,
    name: "Green Zucchini",
    category: "Vegetables",
    seller: "Sushil Farms",
    price: 65,
    quantity: 40,
    image: "https://images.unsplash.com/photo-1601314983084-25e24347781b?w=600",
  },
  {
    id: 48,
    name: "Fresh White Mushrooms",
    category: "Vegetables",
    seller: "Kisan Farm Naturals",
    price: 120,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1606859359691-3829023ebc69?w=600",
  },
  {
    id: 49,
    name: "Asparagus Spears",
    category: "Vegetables",
    seller: "Sunrise Vegetables",
    price: 250,
    quantity: 15,
    image: "https://images.unsplash.com/photo-1518568740560-333139a27e72?w=600",
  },
  {
    id: 50,
    name: "Fresh Leeks",
    category: "Vegetables",
    seller: "Green Leaf Farms",
    price: 80,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1602035889721-6674e2d3b27b?w=600",
  },
  {
    id: 51,
    name: "White Turnip",
    category: "Vegetables",
    seller: "Deshmukh Agro",
    price: 30,
    quantity: 75,
    image: "https://images.unsplash.com/photo-1599557457492-959c87840131?w=600",
  },
  {
    id: 52,
    name: "Fresh Mint Leaves",
    category: "Vegetables",
    seller: "Sushil Farms",
    price: 20,
    quantity: 100,
    image: "https://images.unsplash.com/photo-1555541999-73f1d82b2fa6?w=600",
  }
];

const Products = () => {
  const { addToCart } = useCart() || { addToCart: () => {} };
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("default");

  const handleSearch = ({ search, category }) => {
    let result = products.filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "" || product.category === category;
      return matchesName && matchesCategory;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    const sorted = [...filteredProducts];
    if (value === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-8 shadow-md">
        <h1 className="text-3xl font-extrabold tracking-tight">Marketplace Products</h1>
        <p className="mt-2 text-emerald-100 text-sm sm:text-base">
          Browse through fresh farm-harvested produce listed directly by regional farmers.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <p className="text-sm font-semibold text-gray-600">
          Showing <span className="text-emerald-700 font-bold">{filteredProducts.length}</span> products
        </p>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
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
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg font-medium">No products match your current search parameters.</p>
          <button
            onClick={() => setFilteredProducts(products)}
            className="mt-4 text-emerald-700 font-semibold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
