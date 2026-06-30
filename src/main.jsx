import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CartProvider from "./store/CartProvider";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <AuthContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);