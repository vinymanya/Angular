import { Component, OnInit } from "@angular/core";

import { WeatherService } from "../weather.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weather = this.weatherService
      .getWeather("Cyprus")
      .then(weather => {
        this.humidity = weather.main.humidity;
        this.temp = weather.main.temp;
        this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
        this.maxTemp = weather.main.temp_max;
        this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
        this.minTemp = weather.main.temp_min;
        this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
        this.clouds = weather.weather[0].description;
        // console.log(this.weather);
      })
      .catch(error => {
        console.log(`something went wrong: ${error}`);
      });
  }
}
