import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/services/auth.service';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header, [app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'der-willi-header'
  }
})
export class HeaderComponent {
  user$: Observable<firebase.User>;

  constructor(
    private _authService: AuthService,
    @Inject(INJECTOR) private _injector: Injector
  ) {
    this.user$ = _authService.user$;
  }

  async logout() {
    const router = this._injector.get(Router);

    await this._authService.logout();
    router.navigateByUrl('/login');
  }
}
