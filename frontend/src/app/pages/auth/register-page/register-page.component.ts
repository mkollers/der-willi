import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';
import { AuthErrorMessages } from '@shared/auth/data/auth-error.messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  fg: FormGroup;

  constructor(
    private _authService: AuthService,
    private _loaderService: LoaderService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    fb: FormBuilder
  ) {
    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  async submit() {
    this._loaderService.isLoading = true;

    try {
      const email: string = this.fg.value.email;
      const password: string = this.fg.value.password;

      await this._authService.register(email, password);
      this._router.navigateByUrl('/register/personal-data');
    } catch (err) {
      this._handleError(err);
      this._loaderService.isLoading = false;
    }
  }

  private _handleError(err: any) {
    const message = AuthErrorMessages[err.code] || 'Hoppla, da ist was schiefgelaufen...';
    this._snackBar.open(message, '', { duration: 10000 });
  }
}
