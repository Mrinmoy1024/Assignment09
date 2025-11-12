import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { toast } from "react-toastify";

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const topSlides = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
        setSlides(topSlides);
      })
      .catch((err) => toast.error("Error loading hero slides: ", err));
  }, []);

  const goToPlants = () => {
    navigate("/plants");
  };

  if (slides.length === 0)
    return <div className="text-center py-20">Loading Hero Section...</div>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        🌿 Featured Indoor Plants
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((plant) => (
          <SwiperSlide key={plant.plantId}>
            <div
              onClick={goToPlants}
              className="cursor-pointer border rounded-2xl shadow hover:shadow-lg transition bg-white p-4 flex flex-col h-full"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl text-black font-semibold">
                {plant.plantName}
              </h3>
              <p className="text-gray-500 text-sm">{plant.category}</p>
              <p className="mt-2 text-green-600 font-bold">${plant.price}</p>
              <p className="text-yellow-500 mb-2">⭐ {plant.rating}</p>
              <p className="text-sm text-gray-600 italic">“{plant.slogan}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
