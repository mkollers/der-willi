import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgotPasswordDialogComponent } from 'src/app/shared/auth/dialogs/forgot-password-dialog/forgot-password-dialog.component';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  @HostBinding('class.center-vertical') centerVertical = true;
  fg: FormGroup;

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _loaderService: LoaderService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    fb: FormBuilder
  ) {
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

  forgetPassword() {
    this._dialog.open(ForgotPasswordDialogComponent, {
      minWidth: '320px'
    });
  }

  private _handleError(err: any) {
    let content = 'Hoppla, da ist was schiefgelaufen...';

    switch (err.code) {
      case 'auth/invalid-email':
        content = 'Die E-Mail Adresse ist falsch formatiert.';
        break;
      case 'auth/user-not-found':
        content = 'Diese E-Mail Adresse ist uns leider nicht bekannt';
        break;
      case 'auth/wrong-password':
        content = 'Das angegebene Kennwort ist leider falsch';
        break;
      default:
        console.error(err);
        break;
    }
    this._snackBar.open(content, '', { duration: 10000 });
  }
}
