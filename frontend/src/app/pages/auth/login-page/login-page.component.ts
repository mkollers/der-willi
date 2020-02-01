import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgotPasswordDialogComponent } from '@shared/auth/dialogs/forgot-password-dialog/forgot-password-dialog.component';
import { AuthService } from '@shared/auth/services/auth.service';
import { BaseComponent } from '@shared/helper/components/base.component';
import { LoaderService } from '@shared/layout/services/loader.service';
import { AuthErrorMessages } from '@shared/auth/data/auth-error.messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent extends BaseComponent {
  fg: FormGroup;

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _loaderService: LoaderService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    fb: FormBuilder
  ) {
    super();

    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', Validators.required)
    });
  }

  async login() {
    this._loaderService.isLoading = true;

    try {
      const email: string = this.fg.value.email;
      const password: string = this.fg.value.password;

      await this._authService.login(email, password);
      this._router.navigateByUrl('/');
    } catch (err) {
      this._handleError(err);
      this._loaderService.isLoading = false;
    }
  }

  forgotPassword() {
    this._dialog.open<ForgotPasswordDialogComponent, MatDialogConfig, void>(ForgotPasswordDialogComponent, {
      width: '450px',
      maxWidth: 'calc(100% - 32px)'
    });
  }

  private _handleError(err: any) {
    const message = AuthErrorMessages[err.code] || 'Hoppla, da ist was schiefgelaufen...';
    this._snackBar.open(message, '', { duration: 10000 });
  }
}
