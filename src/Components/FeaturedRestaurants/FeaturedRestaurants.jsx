import React from "react";
import "./FeaturedRestaurants.css";

const restaurants = [
  {
    name: "Spice Villa",
    location: "Mumbai",
    image: "https://source.unsplash.com/200x150/?restaurant,food",
  },
  {
    name: "Tandoori Tales",
    location: "Delhi",
    image: "https://source.unsplash.com/200x150/?restaurant,curry",
  },
  {
    name: "Pizza Hub",
    location: "Bangalore",
    image: "https://source.unsplash.com/200x150/?restaurant,pizza",
  },
  {
    name: "Sushi World",
    location: "Chennai",
    image: "https://source.unsplash.com/200x150/?restaurant,sushi",
  },
];

const FeaturedRestaurants = () => {
  return (
    <div className="featured-restaurants-container">
      {restaurants.map((rest, index) => (
        <div className="restaurant-card" key={index}>
          <img src={rest.image} alt={rest.name} />
          <h3>{rest.name}</h3>
          <p>{rest.location}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedRestaurants;
