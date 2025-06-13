export function putDataInPage(data) {
  const dataDiv = document.querySelector(".data-div");

  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-data";

  const impDiv = document.createElement("div");
  impDiv.className = "imp-div";

  const city = document.createElement("h3");
  city.textContent = `City: ${data.city}`;

  const tempBtn = document.createElement("button");
  tempBtn.className = "toogle-temp";
  tempBtn.innerHTML = `<span class="temp-label">in °C</span>`;

  impDiv.append(city, tempBtn);

  // Temperature (c and F)
  const temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = `Temperature: ${data.temperature} °F`;
  temp.dataset.f = data.temperature;
  temp.dataset.c = ((data.temperature - 32) * 5 / 9).toFixed(2);
  temp.dataset.unit = "f";

  const descp = document.createElement("p");
  descp.textContent = `Condtion: ${data.description}`;

  const realTemp = document.createElement("p");
  realTemp.className = "realTemp";
  realTemp.textContent = `Feels Like: ${data.realTemp} °F`;
  realTemp.dataset.f = data.realTemp;
  realTemp.dataset.c = ((data.realTemp - 32) * 5 / 9).toFixed(2);
  realTemp.dataset.unit = "f";

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.humid}%`;

  weatherCard.append(impDiv, temp, descp, realTemp, humidity);
  dataDiv.appendChild(weatherCard);

  let isCelsius = false;

  tempBtn.addEventListener("click", () => {
    isCelsius = !isCelsius;
    tempBtn.classList.toggle("active");

    if (isCelsius) {
      tempBtn.querySelector(".temp-label").textContent = "in °F";
      temp.textContent = `Temperature: ${toCelsius(data.temperature)} °C`;
    realTemp.textContent = `Feels Like: ${toCelsius(data.realTemp)} °C`;
    } else {
      tempBtn.querySelector(".temp-label").textContent = "in °C";
      temp.textContent = `Temperature: ${data.temperature} °F`;
      realTemp.textContent = `Feels Like: ${data.realTemp} °F`;
    }
  });

  function toCelsius(f) {
    return Math.round((f - 32) * 5 / 9);
  }
}