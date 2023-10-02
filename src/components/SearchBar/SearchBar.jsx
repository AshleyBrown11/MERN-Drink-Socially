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
      <div className="App">
       
        <h1>See My Cocktail</h1>
        <img src={cocktail.strDrinkThumb}></img>
        <h2>{cocktail.strDrink}</h2>
        <p>{cocktail.strInstructions}</p>
        
     </div>
      
    );
  }



