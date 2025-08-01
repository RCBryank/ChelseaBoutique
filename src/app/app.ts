import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weatherforecast } from './weatherforecast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ChelseaBoutique');
  weatherforecastservice = inject(Weatherforecast);
  weathers: any[] = [];

  constructor() {
    this.weatherforecastservice.GetWeather().subscribe(data => { this.weathers = data; })
  }
}
