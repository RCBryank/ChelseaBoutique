import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Config } from 'tailwindcss';
import { WebUser } from '../models/web-user.model';
import { config, Observable } from 'rxjs';
import { SignInForm, WebUserAuthenticatedInfo, WebUserProfileExtendedDetailsInfo } from '../constants/interfaces';

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

  public StoreWebUser(webuser: WebUser): Observable<any> {
    return this.http.post<Config>(this.URLBase + "/signup", webuser);
  }

  public isAuthenticated() {
    const id = Number(localStorage.getItem("ID"));
    return this.http.post<Config>(this.URLBase + "/isAuthenticated", id, {
      withCredentials: true
    });
  }

  public GetUserInfo(): Observable<any> {
    return this.http.get<any>(this.URLBase + "/getinfo", { withCredentials: true });
  }

  public UpdateProfile(webuser: WebUserProfileExtendedDetailsInfo): Observable<any> {
    return this.http.put<any>(this.URLBase + "/updateprofile", webuser, { withCredentials: true });
  }

  public UpdatePassword(WebUserPassword: string): Observable<any> {
    const Form = new FormData();
    Form.append("newwebuserpassword", WebUserPassword);

    return this.http.put<any>(this.URLBase + "/updatepassword", Form, { withCredentials: true });
  }
}
