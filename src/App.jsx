
import { HashRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import AppRoutes from "./routes/approutes";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
