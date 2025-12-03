import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  http = inject(HttpClient);
  endpoint = "https://jsonplaceholder.typicode.com/todos/1"

  getTestJSON(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  
}