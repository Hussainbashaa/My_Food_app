import React, { useState } from "react";

import Hero from "../../Components/HeroSection/Hero";

import PopularFoods from "../../Components/PopularFoods/PopularFoods";
import FeaturedRestaurants from "../../Components/FeaturedRestaurants/FeaturedRestaurants";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  const [searchTerm] = useState("");

  return (
    <div>
      <Hero />

      <section className="popular-section">
        <h2>Popular Foods</h2>
        <PopularFoods searchTerm={searchTerm} />
      </section>

      <section className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <FeaturedRestaurants />
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <SpecialOffers />
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
