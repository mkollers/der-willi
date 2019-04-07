import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';

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
    const email: string = this.fg.value.email;
    const password: string = this.fg.value.password;

    try {
      await this._authService.register(email, password);
      this._router.navigateByUrl('/register/personal-data');
    } catch (err) {
      this._handleError(err);
      this._loaderService.isLoading = false;
    }
  }

  private _handleError(err: any) {
    let content = 'Hoppla, da ist was schiefgelaufen...';

    switch (err.code) {
      case 'auth/email-already-in-use':
        content = 'Die angegebene E-Mail wird bereits verwendet';
        break;
      case 'auth/weak-password':
        content = 'Das Kennwort muss mindestens 6 Zeichen lang sein';
        break;
      default:
        console.error(err);
        break;
    }
    this._snackBar.open(content, '', { duration: 10000 });
  }
}
