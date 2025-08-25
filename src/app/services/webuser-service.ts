import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Config } from 'tailwindcss';
import { WebUser } from '../models/web-user.model';
import { config, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebuserService {
  private http = inject(HttpClient);
  private URLBase = environment.apiURL + "/webuser";

  public StoreWebUser(webuser: WebUser): Observable<any> {
    return this.http.post<Config>(this.URLBase, webuser);
  }
}
