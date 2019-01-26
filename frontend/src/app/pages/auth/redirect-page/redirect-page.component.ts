import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { StorageHelper } from '../../../shared/helper/classes/storage-helper';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedirectPageComponent {

  constructor(
    private _router: Router,
    authService: AuthService
  ) {
    authService.handleAuthentication()
      .then(() => this.redirect())
      .catch(console.error);
  }

  private redirect() {
    const url = StorageHelper.getItem('login.redirect') || '/';
    this._router.navigateByUrl(url);
  }

}
