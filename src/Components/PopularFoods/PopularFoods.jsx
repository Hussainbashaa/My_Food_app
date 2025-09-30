import React, { useState, useEffect } from "react";
import "./PopularFoods.css";

const PopularFoods = ({ searchTerm }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      let res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      let data = await res.json();
      if (data.meals) setFoods(data.meals);
    };
    fetchFoods();
  }, []);

  const filteredFoods = foods?.filter((food) =>
    food.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="popular-section">
      <div className="scrolling-wrapper">
        {filteredFoods?.map((food) => (
          <div className="scroll-card" key={food.idMeal}>
            <img src={food.strMealThumb} alt={food.strMeal} />
            <h3>{food.strMeal}</h3>
            <p>{food.strArea}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
