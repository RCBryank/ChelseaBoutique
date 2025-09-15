import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Config } from 'tailwindcss';
import { WebUser } from '../models/web-user.model';
import { config, Observable } from 'rxjs';
import { SignInForm, WebUserAuthenticatedInfo } from '../constants/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private URLBase = environment.apiURL + "/auth";

  public StoreWebUserAuthenticatedInfo(info: WebUserAuthenticatedInfo) {
    localStorage.setItem("ID", info.ID.toString());
    localStorage.setItem("Email", info.Email);
    localStorage.setItem("Name", info.Name);
    localStorage.setItem("LastName", info.LastName);
    localStorage.setItem("ProfilePhoto", info.ProfilePhoto || "");
  }

  public SignIn(credentials: SignInForm): Observable<any> {
    return this.http.post<Config>(this.URLBase + "/login", credentials, { withCredentials: true });
  }

  public StoreWebUser(webuser: WebUser, file: File | null): Observable<any> {
    const form = new FormData();
    form.append("file", file || '');
    form.append("swebuser", JSON.stringify(webuser));
    return this.http.post<Config>(this.URLBase + "/signup", form);
  }

  public GetUserInfo(): Observable<any> {
    return this.http.get<Config>(this.URLBase + "/getinfo", { withCredentials: true });
  }
}
