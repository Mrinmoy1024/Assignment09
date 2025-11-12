import React from "react";

const experts = [
  {
    name: "June Green",
    specialization: "Indoor Plant Specialist",
    image:
      "https://i.ibb.co.com/tw2QvY5H/27-A43-AC1-F191-4-E2-D-9-F18-64-E7513-C97-D5-819x1024.jpg",
  },
  {
    name: "Harry Lewis",
    specialization: "Succulent & Cactus Expert",
    image: "https://i.ibb.co.com/gLpqQpNJ/harry-lewis-banner-600x600.jpg",
  },
  {
    name: "Clara Flora",
    specialization: "Air Purifying Plants Expert",
    image: "https://i.ibb.co.com/mFJ9XF4K/images.jpg",
  },
];

const GreenExperts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🌿 Meet Our Green Experts
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {experts.map((expert, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <img
              src={expert.image}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl text-black font-semibold">{expert.name}</h3>
            <p className="text-gray-500">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;
