import axios from "axios";

const getWeather = (city) => {

  // Get the weather using a city as a parameter
  //  The city can be provided by the user or can be obtained from the current position

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=eed4708dfbdf137040a5c234469e9683`;

  const weather = axios(url);

  if (weather) {
    return weather;
  }

  return {
    error: 404,
    text: "Not Found",
  };
};

export default getWeather;
