import React from "react";
import HeroSection from "../components/HeroSection";
import TopRatedPlants from "../components/TopRatedPlants";
import PlantCareTips from "../components/PlantCareTips";
import GreenExperts from "../components/GreenExperts";
import CustomerReview from "../components/CustomerReview";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TopRatedPlants></TopRatedPlants>
      <PlantCareTips></PlantCareTips>
      <GreenExperts />
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
