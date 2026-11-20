// ==============================
// Application Information
// ==============================

export const APP_NAME = "Online Marketplace for Farmers";

export const APP_DESCRIPTION =
  "Buy and sell fresh farm products directly from farmers.";

export const CURRENCY = "₹";

// ==============================
// User Roles
// ==============================

export const USER_ROLES = {
  ADMIN: "admin",
  FARMER: "farmer",
  BUYER: "buyer",
};

// ==============================
// Product Categories
// ==============================

export const PRODUCT_CATEGORIES = [
  "Vegetables",
  "Fruits",
  "Grains",
  "Pulses",
  "Dairy",
  "Spices",
  "Seeds",
  "Flowers",
  "Organic Products",
  "Others",
];

// ==============================
// Order Status
// ==============================

export const ORDER_STATUS = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

// ==============================
// Payment Status
// ==============================

export const PAYMENT_STATUS = [
  "Pending",
  "Success",
  "Failed",
  "Refunded",
];

// ==============================
// Payment Methods
// ==============================

export const PAYMENT_METHODS = [
  "UPI",
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "Cash on Delivery",
];

// ==============================
// Firebase Collections
// ==============================

export const COLLECTIONS = {
  USERS: "users",
  PRODUCTS: "products",
  ORDERS: "orders",
  PAYMENTS: "payments",
};

// ==============================
// Routes
// ==============================

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCTS: "/products",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
  PAYMENTS: "/payments",
  PROFILE: "/profile",
  DASHBOARD: "/dashboard",
  BUYERS: "/buyers",
  ADMIN_DASHBOARD: "/admin-dashboard",
  FARMER_DASHBOARD: "/farmer-dashboard",
  BUYER_DASHBOARD: "/buyer-dashboard",
};

// ==============================
// Default Images
// ==============================

export const DEFAULT_PRODUCT_IMAGE =
  "https://via.placeholder.com/400x300?text=No+Image";

export const DEFAULT_PROFILE_IMAGE =
  "https://via.placeholder.com/200?text=Profile";

// ==============================
// Pagination
// ==============================

export const PRODUCTS_PER_PAGE = 8;

// ==============================
// Contact Information
// ==============================

export const CONTACT = {
  EMAIL: "support@farmmarket.com",
  PHONE: "+91 9876543210",
  ADDRESS: "Sangli, Maharashtra, India",
};