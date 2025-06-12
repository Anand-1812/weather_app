import "./styles.css";
import { Weather } from "./weather";
import { putDataInPage } from "./ui";

console.log("Working");

const weather = new Weather();

const weatherBtn = document.querySelector("button");
const location = document.querySelector("input");

weatherBtn.addEventListener("click", async () => {
  const data = await weather.getWeather(location.value);
  console.log(data);
  putDataInPage(data);
});