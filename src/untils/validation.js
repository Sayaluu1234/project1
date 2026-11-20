// ==============================
// Currency Formatter
// ==============================

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

// ==============================
// Date Formatter
// ==============================

export const formatDate = (date) => {
  if (!date) return "";

  // Firebase Timestamp support
  if (date.seconds) {
    date = new Date(date.seconds * 1000);
  }

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ==============================
// Generate Random Order ID
// ==============================

export const generateOrderId = () => {
  return `ORD-${Date.now()}`;
};

// ==============================
// Generate Random Payment ID
// ==============================

export const generatePaymentId = () => {
  return `PAY-${Date.now()}`;
};

// ==============================
// Capitalize First Letter
// ==============================

export const capitalize = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

// ==============================
// Truncate Long Text
// ==============================

export const truncateText = (text, maxLength = 100) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};

// ==============================
// Calculate Total Price
// ==============================

export const calculateTotal = (items) => {
  if (!items || items.length === 0) return 0;

  return items.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );
};

// ==============================
// Search Products
// ==============================

export const searchProducts = (products, keyword) => {
  if (!keyword) return products;

  return products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
};

// ==============================
// Filter Products by Category
// ==============================

export const filterByCategory = (products, category) => {
  if (!category || category === "All") {
    return products;
  }

  return products.filter(
    (product) => product.category === category
  );
};

// ==============================
// Validate Email
// ==============================

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ==============================
// Validate Phone Number (India)
// ==============================

export const isValidPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

// ==============================
// Get Status Badge Color
// ==============================

export const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Confirmed":
      return "bg-blue-100 text-blue-700";

    case "Processing":
      return "bg-purple-100 text-purple-700";

    case "Shipped":
      return "bg-indigo-100 text-indigo-700";

    case "Delivered":
    case "Success":
      return "bg-green-100 text-green-700";

    case "Cancelled":
    case "Failed":
      return "bg-red-100 text-red-700";

    case "Refunded":
      return "bg-gray-100 text-gray-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

// ==============================
// Calculate Discount
// ==============================

export const calculateDiscount = (
  originalPrice,
  discountPercentage
) => {
  if (!discountPercentage) return originalPrice;

  return (
    originalPrice -
    (originalPrice * discountPercentage) / 100
  ).toFixed(2);
};

// ==============================
// Get Greeting
// ==============================

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";

  return "Good Evening";
};