import "./styles.css";
import { Weather } from "./weather";

console.log("Working");

const weather = new Weather();

const weatherBtn = document.querySelector("button");
const location = document.querySelector("input");

weatherBtn.addEventListener("click", () => {
  console.log(weather.getWeather(location.value));
});