import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Index";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </>
);
