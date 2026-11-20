
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import AppRoutes from "./routes/approutes";

function App() {
  return (
    <BrowserRouter basename="/project1">
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
