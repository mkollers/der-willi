import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/services/auth.service';
import { LoaderService } from '@shared/layout/services/loader.service';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForbiddenPageComponent {

  constructor(
    private _authService: AuthService,
    private _loaderService: LoaderService,
    private _router: Router
  ) { }

  async logout() {
    this._loaderService.isLoading = true;

    await this._authService.logout();
    this._router.navigateByUrl('/login');
  }
}
