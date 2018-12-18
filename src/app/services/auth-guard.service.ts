import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(next);

    if ( this.auth.isAuthenticated() ) {
      console.log('Paso el Guard');
      return true;
    } else {
      console.log('Blokeado por el Guard');
      return false;
    }
  }
}
