import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { CartContext } from "../components/CartContext";
import { toast } from "react-toastify";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => toast.error("Error loading plants:", err));
  }, []);

  const handleBuyNow = (plant) => {
    addToCart(plant);
    navigate("/cart");
  };

  const handleAddToCart = (plant) => {
    addToCart(plant);
    toast.success(`${plant.plantName} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🌿 Our Plants</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="border rounded-2xl shadow hover:shadow-lg transition p-4 bg-white flex flex-col justify-between"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl text-black font-semibold">
              {plant.plantName}
            </h2>
            <p className="text-sm text-gray-500">{plant.category}</p>
            <p className="mt-2 text-green-600 font-bold">${plant.price}</p>
            <p className="text-yellow-500 mb-2">⭐ {plant.rating}</p>
            <p className="text-xs text-gray-400 mb-3">
              Provided by: {plant.providerName}
            </p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => handleAddToCart(plant)}
                className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 flex-1"
              >
                Add to Cart
              </button>

              <button
                onClick={() => handleBuyNow(plant)}
                className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700 flex-1"
              >
                Buy Now
              </button>
            </div>

            <Link
              to={`/plant-details/${plant.plantId}`}
              className="mt-3 btn btn-sm bg-green-600 text-white hover:bg-green-700 w-full text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
