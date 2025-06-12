export function putDataInPage(data) {
  const body = document.querySelector("body");

  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-data";

  const city = document.createElement("p");
  city.textContent = `City: ${data.city}`;

  const temp = document.createElement("p");
  temp.textContent = `Temperature: ${data.temperature}`;

  const descp = document.createElement("p");
  descp.textContent = `Condtion: ${data.description}`;

  const realTemp = document.createElement("p");
  realTemp.textContent = `Feels Like: ${data.realTemp}`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.humid}`;

  weatherCard.append(city, temp, descp, realTemp, humidity);
  body.appendChild(weatherCard);
}