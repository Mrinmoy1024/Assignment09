import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0)
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 😢</h2>
        <button
          onClick={() => navigate("/plants")}
          className="btn bg-green-600 text-white hover:bg-green-700"
        >
          Buy Plants
        </button>
      </div>
    );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.plantId}
          className="border rounded-xl p-4 flex items-center gap-4 bg-white shadow mb-4"
        >
          <img
            src={item.image}
            className="w-24 h-24 object-cover rounded-lg"
            alt={item.plantName}
          />
          <div className="flex-1">
            <h2 className="text-black font-semibold text-lg">
              {item.plantName}
            </h2>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-green-600 font-bold">
              ${item.price} x {item.quantity || 1} = $
              {(item.price * (item.quantity || 1)).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.plantId)}
            className="btn btn-sm btn-error"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button className="btn bg-purple-600 text-white hover:bg-purple-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
