import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  user$: Observable<firebase.User>;
  headline$: Observable<string>;
  navigateBackUri$: Observable<string | any[]>;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    headerService: HeaderService
  ) {
    this.user$ = _authService.user$;
    this.headline$ = headerService.headline$;
    this.navigateBackUri$ = headerService.navigateBackUri$;
  }

  async logout() {
    await this._authService.logout();
    this._router.navigateByUrl('/login');
  }
}
