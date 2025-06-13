export function putDataInPage(data) {
  const dataDiv = document.querySelector(".data-div");

  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-data";

  const city = document.createElement("h3");
  city.textContent = `City: ${data.city}`;

  const temp = document.createElement("p");
  temp.textContent = `Temperature: ${data.temperature} °F`;

  const descp = document.createElement("p");
  descp.textContent = `Condtion: ${data.description}`;

  const realTemp = document.createElement("p");
  realTemp.textContent = `Feels Like: ${data.realTemp} °F`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.humid}%`;

  weatherCard.append(city, temp, descp, realTemp, humidity);
  dataDiv.appendChild(weatherCard);
}