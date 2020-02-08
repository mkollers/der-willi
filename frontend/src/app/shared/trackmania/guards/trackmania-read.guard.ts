import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackmaniaReadGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  async canActivate() {
    const claims = await this._authService.permissions$.pipe(first()).toPromise();

    if (!claims?.trackmania_read) {
      this._router.navigate(['/error/forbidden']);
      return false;
    }

    return true;
  }

}
