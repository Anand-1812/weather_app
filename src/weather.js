export class Weather {
  API_KEY = 'RNM8B62YRMRJQUANU58M5Y8EM';
  
  constructor() {
    this.apiKey = this.API_KEY
  }

  // fetch weather from api
  async getWeather(location) {
    // using asynchronomus js
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.API_KEY}`, {mode : 'cors'})

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const weatherData = await response.json();
      console.log(weatherData);
      console.log(weatherData.address);
      console.log(weatherData.currentConditions.temp);
      console.log(weatherData.currentConditions.icon);

      return this.dataToJson(weatherData);

    } catch (error) {
      console.error("Failed to fetch weather data: ", error);
    }
  }

  dataToJson(weatherData) {
    return  {
      city: weatherData.address,
      temperature: weatherData.currentConditions.temp,
      description: weatherData.description,
      realTemp: weatherData.currentConditions.feelslike,
      humid: weatherData.currentConditions.humidity,
      icon: weatherData.currentConditions.icon
    }
  }

}