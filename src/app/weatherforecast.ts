import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Weatherforecast {
  private http = inject(HttpClient);
  private URLBase = environment.apiURL + "/weatherforecast";

  public GetWeather() {
    return this.http.get<any>(this.URLBase);
  }
}
