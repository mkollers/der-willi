import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../../data-access/services/user.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) { }

  async canActivate() {
    const auth = await this._authService.user$.pipe(first()).toPromise();
    const user = await this._userService.getUser(auth.uid).pipe(first()).toPromise();
    if (user && user.forename && user.surname) {
      return true;
    }

    this._router.navigateByUrl('/register/personal-data');
    return false;
  }

}