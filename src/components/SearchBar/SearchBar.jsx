import "./index.css";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { useState, useEffect } from "react";
import axios from "axios";


export default function App() {
  // state to hold the weather
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  
  // function to fetch the weather
  const fetchWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  
  
    return (
      <div className="App">
        <header>Weather Love Station</header>
       <Search weatherSearch= {setCityName} cityName={cityName} fetchWeather={fetchWeather} /> 
      <WeatherDisplay weather= {weather}/> 
      <audio src="/waterfalls.mp3" controls loop/>
      </div>
      
    );
  }



