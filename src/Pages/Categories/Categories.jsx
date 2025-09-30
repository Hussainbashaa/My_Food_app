import React, { useState, useEffect } from "react";
import './Categories.css'
const Categories = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      let data = await res.json();
      setAreas(data.meals);
    };
    fetchAreas();
  }, []);

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      let data = await res.json();
      setFoods(data.meals);
    };
    fetchFoods();
  }, []);

  return (
    <div>
    <div className="page-container">
      <h1>Categories / Areas</h1>
      <ul>
        {areas.map((area, i) => (
          <li key={i}>{area.strArea}</li>
        ))}
      </ul>
    </div>
     <div className="page-container">
      <h1>All Foods</h1>
      <div className="food-grid">
        {foods?.map((food) => (
          <div key={food.idMeal} className="food-card">
            <img src={food.strMealThumb} alt={food.strMeal} />
            <h3>{food.strMeal}</h3>
            <p>{food.strArea}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Categories;
