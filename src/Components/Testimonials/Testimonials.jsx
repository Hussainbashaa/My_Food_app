import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ritaka Dhapte",
    feedback: "Best food ever! Fast delivery and amazing taste.",
  },
  {
    name: "Srisha",
    feedback: "Love the variety. Always fresh and hot meals.",
  },
  {
    name: "Nikhil",
    feedback: "Hoomie is my go-to app for dinner. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((t, index) => (
        <div className="testimonial-card" key={index}>
          <p>"{t.feedback}"</p>
          <h4>- {t.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
