import React from 'react'
import "./Cards.css"
import { useState,useEffect } from 'react';


const Cards = ({searchTerm,area}) => {
 const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      let data = await api.json();
      console.log(data.meals);
      setFoods(data.meals);
    };
    fetchData();
  }, [area]);

  const filteredFoods = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="main-Container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <div className="card" key={index}>
              <div className="img-container">
                <img src={food.strMealThumb} alt="img" className="img" />
              </div>
              <div className="data-container">
                <p className="FoodName">{food.strMeal}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items Found!....</p>
        )}
      </div>
    </div>
  );
}

export default Cards
