import "./styles.css";
import { Weather } from "./weather";
import { putDataInPage } from "./ui";

console.log("Working");

const weather = new Weather();

const weatherBtn = document.querySelector("button");
const location = document.querySelector("input");
const spinner = document.getElementById("spinner");

weatherBtn.addEventListener("click", async () => {

  const locationVal = location.value.trim();
  if (!locationVal) return;

  spinner.style.display = "block"; // Show spinner

  const data = await weather.getWeather(locationVal);

  setTimeout(() => {
    spinner.style.display = "none"; // Hide spinner
    if (data) putDataInPage(data);
  }, 2000);
  
});