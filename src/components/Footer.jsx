import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-2 tracking-tight">
            <span className="text-3xl">🌾</span> AgriMarket
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Empowering regional farmers with direct digital trade. Eliminate middlemen, enjoy farm-fresh organic produce, and ensure fair earnings for agriculture.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-emerald-400 font-bold">
            <span className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-full">
              ✓ Verified Farmers
            </span>
            <span className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-full">
              ✓ 100% Direct Trade
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-amber-400">Navigation</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition">Marketplace Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-emerald-400 transition">All Crops & Produce</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-emerald-400 transition">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-emerald-400 transition">Track Orders</Link>
            </li>
            <li>
              <Link to="/farmer-dashboard" className="hover:text-emerald-400 transition">Farmer Portal</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-amber-400">Support & Contact</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <span>📧</span> support@agrimarket.com
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <span>⏰</span> Mon - Sat: 8 AM - 8 PM
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span> Sangli, Maharashtra, India
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-amber-400">Stay Updated</h3>
          <p className="text-xs text-slate-400 mb-3">
            Subscribe for seasonal harvest alerts and price updates.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-sm"
            >
              {subscribed ? "Subscribed! ✓" : "Subscribe"}
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-4">
        <p>© {new Date().getFullYear()} AgriMarket. Direct Farm-to-Table Marketplace. All Rights Reserved.</p>
        
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition">Terms of Trade</a>
          <a href="#" className="hover:text-emerald-400 transition">Farmer Accreditation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;