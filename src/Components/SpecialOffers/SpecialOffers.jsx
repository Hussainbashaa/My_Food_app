import React from "react";
import "./SpecialOffers.css";

const offers = [
  {
    title: "20% off on all Indian Meals",
    image: "https://source.unsplash.com/200x150/?indian,curry",
  },
  {
    title: "Buy 1 Get 1 Free Pizza",
    image: "https://source.unsplash.com/200x150/?pizza",
  },
  {
    title: "Free Dessert with Main Course",
    image: "https://source.unsplash.com/200x150/?dessert",
  },
];

const SpecialOffers = () => {
  return (
    <div className="offers-container">
      {offers.map((offer, index) => (
        <div className="offer-card" key={index}>
          <img src={offer.image} alt={offer.title} />
          <h3>{offer.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SpecialOffers;
