import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Config } from "tailwindcss";
import { Tabletest } from "../models/tabletest.model";

@Injectable({
    providedIn: 'root'
})
export class tabletestService {
    private http = inject(HttpClient);
    private URLBase = environment.apiURL  + "/tabletest";

    public Storetabletest(tabletest: Tabletest) {
        
        this.http.post<Config>(this.URLBase, tabletest).subscribe(config => {
            console.log(tabletest);
        })/**/
    }
}