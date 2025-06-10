import "./styles.css";
import { Weather } from "./weather";

const weather = new Weather();

console.log("Working");
console.log(weather.getWeather("delhi"));