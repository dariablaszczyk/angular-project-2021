import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  selectedCity: any;
  temperature: any;
  pressure: any;
  icon: any;
  imageSource: any;
  errorMessage: any;


  constructor(private weatherService: WeatherService) { }
  cities = ["warsaw", "cairo", "miami", "tokyo"]

  ngOnInit(): void {
  }

  showTemperature() {
    this.weatherService.city = this.selectedCity;
    this.weatherService.getWeather().subscribe(
      result => {
      console.log(result);
      this.errorMessage = null;
      this.temperature = Object(result).main.temp;
      this.pressure = Object(result).main.pressure;
      this.icon = Object(result).weather[0].icon;
      this.imageSource = `http://openweathermap.org/img/wn/${this.icon}.png`;
    },
    error => {
      this.errorMessage = error.statusText + ", please be patient and try one more time";
      this.temperature = null;
      this.pressure = null;
      this.icon = null;
      this.imageSource = null;
    })
  }

}
