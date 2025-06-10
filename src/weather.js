const API_KEY = 'RNM8B62YRMRJQUANU58M5Y8EM';

export async function getWeather(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, {mode : 'cors'})
  const weatherData = await response.json();
  console.log(weatherData);
  console.log(weatherData.address);
  console.log(weatherData.currentConditions.conditions);
  console.log(weatherData.currentConditions.temp);

}

