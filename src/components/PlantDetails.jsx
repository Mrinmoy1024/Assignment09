import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: `/plants/${id}` } });
      return;
    }
  }, [user, navigate, id]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found || null);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Error fetching plants.json:", err);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Consultation booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!plant)
    return <div className="text-center mt-10">Plant not found 😢</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 h-auto object-cover rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{plant.plantName}</h1>
          <p className="text-gray-700 mb-2">{plant.description}</p>
          <p className="text-green-600 font-bold mb-1">Price: ${plant.price}</p>
          <p className="text-yellow-500 mb-1">Rating: {plant.rating} ⭐</p>
          <p className="text-gray-500 mb-4">Stock: {plant.availableStock}</p>

          <form onSubmit={handleBook} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="input w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="input w-full"
              required
            />
            <button type="submit" className="btn btn-green w-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
