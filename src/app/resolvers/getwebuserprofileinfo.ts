import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, of, throwError } from "rxjs";
import { Landingpage } from "../pages/landingpage/landingpage";
import { toObservable } from "@angular/core/rxjs-interop";
import { AuthService } from "../services/auth-service";

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<any> {
    constructor(private service: AuthService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.GetUserInfo().pipe(
            catchError((errordetails) => {
                //console.log(error);
                //return throwError(() => error)
                return of({ error: errordetails })
            })
        );
    }
}

/**/