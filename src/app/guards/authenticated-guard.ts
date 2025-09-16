import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Observer } from 'rxjs';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService);
  const router = inject(Router);

  authservice.isAuthenticated().subscribe({
    next: (response) => {
      
    },
    error: (error) => {
      router.navigate(['/home']);
    }
  })


  /*subscribe((response: Observer<any>) => {
    console.log(response.status);
    if (response.status == "401")
      router.navigate(['/home']);

    return true;
  }, (error) => {
    router.navigate(['/home']);
  })*/

  return true;

  //router.navigate(['/home']);
  //return true;
};
