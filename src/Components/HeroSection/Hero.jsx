import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [foods, setFoods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
        );
        let data = await api.json();
        if (data.meals) {
          setFoods(data.meals);
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (foods.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [foods]);

  if (foods.length === 0) {
    return <p>Loading meals...</p>;
  }

  return (
    <div className="main-section">
      <div className="img-c">
        <img
          src={foods[currentIndex].strMealThumb}
          alt={foods[currentIndex].strMeal}
          className="hero-img"
        />
        <div className="hero-card">
          <h3 className="h3">Hoomie</h3>
          <p className="p">Every spice has a story</p>
          <button className="button">Order NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
