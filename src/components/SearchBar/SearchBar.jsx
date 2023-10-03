import { useState, useEffect } from "react";
import axios from "axios";


export default function SearchBar() {
  // state to hold the weather
  const [cocktail, setCocktail] = useState(" ");
 
  // const apiKey = process.env.REACT_APP_API_KEY;
  
 
  const fetchCocktail = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      const response = await axios.get(url);
      const drink = response.data.drinks[0]
      setCocktail(drink)
      console.log(response.data);
      } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCocktail()
    
  }, []);

  
  
    return (
      <div className="container">
       <h1>What's Your Favorite Cocktail</h1>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb}></img>
        <p>{cocktail.strIngredient1}</p>
        <p>{cocktail.strIngredient2}</p>
        <p>{cocktail.strIngredient3}</p>
        <p>{cocktail.strIngredient4}</p>
        <p>{cocktail.strInstructions}</p>

          </div>
   
      
    );
  }



