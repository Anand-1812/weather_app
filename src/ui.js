export function putDataInPage(data) {
  const dataDiv = document.querySelector(".data-div");

  const weatherCard = document.createElement("div");
  weatherCard.className = "weather-data";

  const impDiv = document.createElement("div");
  impDiv.className = "imp-div";

  const city = document.createElement("h3");
  city.textContent = `City: ${data.city}`;

  const tempBtn = document.createElement("button");
  tempBtn.className = "toggle-temp";
  tempBtn.innerHTML = `<span class="temp-label">in °C</span>`;

  impDiv.append(city, tempBtn);

  const temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = `Temperature: ${data.temperature} °F`;
  temp.dataset.f = data.temperature;
  temp.dataset.c = ((data.temperature - 32) * 5 / 9).toFixed(2);

  const descp = document.createElement("p");
  descp.textContent = `Condition: ${data.description}`;

  const realTemp = document.createElement("p");
  realTemp.className = "realTemp";
  realTemp.textContent = `Feels Like: ${data.realTemp} °F`;
  realTemp.dataset.f = data.realTemp;
  realTemp.dataset.c = ((data.realTemp - 32) * 5 / 9).toFixed(2);

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
      temp.textContent = `Temperature: ${temp.dataset.c} °C`;
      realTemp.textContent = `Feels Like: ${realTemp.dataset.c} °C`;

      const tempC = parseFloat(temp.dataset.c);
      const realTempC = parseFloat(realTemp.dataset.c);

      if (tempC >= 39 || realTempC >= 39) {
        temp.style.color = "red";
        realTemp.style.color = "red";
      } else {
        temp.style.color = "";
        realTemp.style.color = "";
      }

    } else {
      tempBtn.querySelector(".temp-label").textContent = "in °C";
      temp.textContent = `Temperature: ${temp.dataset.f} °F`;
      realTemp.textContent = `Feels Like: ${realTemp.dataset.f} °F`;
      temp.style.color = "";
      realTemp.style.color = "";
    }
  });
}
