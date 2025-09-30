import React from "react";
import "./Marquee.css";

const Marquee = ({ items, reverse }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee ${reverse ? "reverse" : ""}`}>
        {items.map((item, index) => (
          <div className="marquee-item" key={index}>
            <img src={item} alt={`item-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
