import "./styles.css";
import { Weather } from "./weather";
import { putDataInPage } from "./ui";

console.log("Working");

const weather = new Weather();

const weatherBtn = document.querySelector("button");
const location = document.querySelector("input");
const loader = document.getElementById("loader");

weatherBtn.addEventListener("click", async () => {
  
  loader.style.display = "block"; // show loader

  const data = await weather.getWeather(location.value.trim());
  console.log(data);

  if (data) {
    setTimeout(() => {
      loader.style.display = "none"; // hide loader after delay
      putDataInPage(data);
    }, 2000);
  } else {
    loader.style.display = "none"; // hide loader immediately if no data
  }
});