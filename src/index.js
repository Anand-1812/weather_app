import "./styles.css";
import { Weather } from "./weather";
import { putDataInPage } from "./ui";

console.log("Working");

const weather = new Weather();

const weatherBtn = document.querySelector("button");
const location = document.querySelector("input");
const spinner = document.getElementById("spinner");
const dataDiv = document.querySelector(".data-div");

weatherBtn.addEventListener("click", async () => {
  dataDiv.innerHTML = "";


  const locationVal = location.value.trim();
  if (!locationVal) return;

  spinner.style.display = "block"; // Show spinner

  try {
    const data = await weather.getWeather(locationVal);

    setTimeout(() => {
      spinner.style.display = "none"; // Hide spinner
      if (data) {
        putDataInPage(data);
      } else {
        dataDiv.innerHTML = "<p>No data found for this location.</p>";
      }
    }, 2000);
  } catch (error) {
    spinner.style.display = "none";
    console.error("Failed to fetch weather data:", error);
    dataDiv.innerHTML = "<p>Error fetching data. Please try again.</p>";
  }
  
});