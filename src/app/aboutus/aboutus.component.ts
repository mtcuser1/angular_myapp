import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  query = 'Manila';
  clouds: string;

  constructor(private WeatherService: WeatherService) { }

  ngOnInit() {
    this.loadWeatherDetails();
  }

  loadWeatherDetails() {
    this.WeatherService.getWeather(this.query)
     .subscribe((data: any) => {
      console.log(data);
       this.clouds = data.weather[0].description;
     });

  }

}
