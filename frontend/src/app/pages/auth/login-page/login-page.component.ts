import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthErrorMessages } from '@shared/auth/data/auth-error.messages';
import { AuthService } from '@shared/auth/services/auth.service';
import { BaseComponent } from '@shared/helper/components/base.component';
import { LoaderService } from '@shared/layout/services/loader.service';

import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent extends BaseComponent {
  fg: FormGroup;

  constructor(
    @Inject(INJECTOR) private _injector: Injector,
    fb: FormBuilder
  ) {
    super();

    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', Validators.required)
    });
  }

  async login() {
    const authService = this._injector.get(AuthService);
    const loaderService = this._injector.get(LoaderService);
    const router = this._injector.get(Router);

    loaderService.isLoading = true;

    try {
      const email: string = this.fg.value.email;
      const password: string = this.fg.value.password;

      await authService.login(email, password);
      router.navigateByUrl('/');
    } catch (err) {
      this._handleError(err);
      loaderService.isLoading = false;
    }
  }

  forgotPassword() {
    const dialog = this._injector.get(MatDialog);

    dialog.open<ForgotPasswordDialogComponent, MatDialogConfig, void>(ForgotPasswordDialogComponent, {
      width: '450px',
      maxWidth: 'calc(100% - 32px)',
      panelClass: ['willi-overlay-pane']
    });
  }

  private _handleError(err: any) {
    const snackBar = this._injector.get(MatSnackBar);

    const message = AuthErrorMessages[err.code] || 'Hoppla, da ist was schiefgelaufen...';
    snackBar.open(message, '', { duration: 10000 });
  }
}
