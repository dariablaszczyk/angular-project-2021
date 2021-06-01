import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  city: any;
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=a623c29bd6729f12ffe00e920ab70426`
    );
  }
}
