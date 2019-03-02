import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import storage from 'local-storage-fallback';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this._authService.isAuthenticated;

    if (!isAuthenticated) {
      storage.setItem('login.redirect', state.url); // save requested url for later redirect
      this._authService.login();
      return false;
    }

    return true;
  }

}
