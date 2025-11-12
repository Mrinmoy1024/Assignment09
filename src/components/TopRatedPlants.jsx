import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

const TopRatedPlants = () => {
  const [plants, setPlants] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 6);
        setPlants(topRated);
      })
      .catch((err) => toast.error("Error loading plants:", err));
  }, []);

  const handleAddToCart = (plant) => {
    addToCart(plant);
    toast.success(`${plant.plantName} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">🌟 Top Rated Indoor Plants</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
            <h3 className="text-xl text-black font-semibold">
              {plant.plantName}
            </h3>
            <p className="text-green-600 font-bold">${plant.price}</p>
            <p className="text-yellow-500">⭐ {plant.rating}</p>

            <div className="mt-3 flex gap-2">
              <Link
                to={`/plants/${plant.plantId}`}
                className="flex-1 btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
              >
                View Details
              </Link>
              <button
                onClick={() => handleAddToCart(plant)}
                className="flex-1 btn btn-sm bg-green-600 text-white hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPlants;
