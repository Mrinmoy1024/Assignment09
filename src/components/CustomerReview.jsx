import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Ahmed",
      image: "https://i.ibb.co.com/sdC3D1xn/images1.jpg",
      rating: 5,
      text: "Absolutely love the plants I ordered! They arrived fresh and healthy. The consultation service was also very helpful.",
    },
    {
      id: 2,
      name: "Ryan Cooper",
      image: "https://i.ibb.co.com/jvk92S0B/ryan-cooper.jpg",
      rating: 4,
      text: "Great selection and quick delivery! The packaging could be slightly better, but overall an awesome experience.",
    },
    {
      id: 3,
      name: "Maya Patel",
      image: "https://i.ibb.co.com/4nkYMk7x/images2.jpg",
      rating: 5,
      text: "Beautiful indoor plants and amazing customer service. The staff helped me pick the perfect ones for my apartment.",
    },
  ];

  return (
    <div className="bg-base-200 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        🌿 What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="card-body items-center text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{review.name}</h3>

              <div className="flex justify-center my-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
