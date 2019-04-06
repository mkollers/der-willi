import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  async canActivate() {
    const user = await this._authService.auth$.pipe(first()).toPromise();

    if (!user) {
      this._router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
