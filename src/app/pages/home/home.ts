import { Component, inject } from '@angular/core';
import { Menu } from '../../sections/menu/menu';
import { Weatherforecast } from '../../weatherforecast';
import { RouterOutlet } from '@angular/router';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";

@Component({
  selector: 'app-home',
  imports: [Menu, RouterOutlet, LayoutWebstore],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  weatherforecastservice = inject(Weatherforecast);
  weathers: any[] = [];
/*
  constructor() {
    this.weatherforecastservice.GetWeather().subscribe(data => { this.weathers = data; })
  }*/
}
