import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthErrorMessages } from '@shared/auth/data/auth-error.messages';
import { AuthService } from '@shared/auth/services/auth.service';
import { LoaderService } from '@shared/layout/services/loader.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  fg: FormGroup;

  constructor(
    @Inject(INJECTOR) private _injector: Injector,
    fb: FormBuilder
  ) {
    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  async submit() {
    const authService = this._injector.get(AuthService);
    const loaderService = this._injector.get(LoaderService);
    const router = this._injector.get(Router);

    loaderService.isLoading = true;

    try {
      const email: string = this.fg.value.email;
      const password: string = this.fg.value.password;

      await authService.register(email, password);
      router.navigateByUrl('/register/personal-data');
    } catch (err) {
      this._handleError(err);
      loaderService.isLoading = false;
    }
  }

  private _handleError(err: any) {
    const snackBar = this._injector.get(MatSnackBar);

    const message = AuthErrorMessages[err.code] || 'Hoppla, da ist was schiefgelaufen...';
    snackBar.open(message, '', { duration: 10000 });
  }
}
