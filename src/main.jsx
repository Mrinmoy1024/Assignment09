import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import CartProvider from "./components/CartContext";
import AuthProvider from "./components/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </AuthProvider>

    <ToastContainer></ToastContainer>
  </StrictMode>
);
