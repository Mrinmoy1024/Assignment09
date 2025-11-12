import React from "react";

const tips = [
  {
    title: "💧 Watering Tips",
    description:
      "Most indoor plants need watering once a week. Always check the soil - it should be slightly dry before watering again to avoid root rot.",
  },
  {
    title: "☀️ Sunlight",
    description:
      "Place your plants in bright, indirect sunlight. Succulents and cacti can tolerate direct light, but leafy plants prefer softer illumination.",
  },
  {
    title: "🌿 Fertilizing",
    description:
      "Feed your plants once a month with a balanced fertilizer during spring and summer. Avoid fertilizing during dormancy in winter.",
  },
];

const PlantCareTips = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-green-100 rounded-2xl mb-16 shadow-inner">
      <h2 className="text-3xl text-green-800 font-bold mb-10 text-center tracking-wide">
        🪴 Essential Plant Care Tips
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-200"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3 drop-shadow-sm">
              {tip.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
