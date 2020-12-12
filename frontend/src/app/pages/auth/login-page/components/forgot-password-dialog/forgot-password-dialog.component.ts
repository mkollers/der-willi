import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@shared/auth/services/auth.service';
import { LoaderService } from '@shared/layout/services/loader.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordDialogComponent {
  fg: FormGroup;

  constructor(
    @Inject(INJECTOR) private _injector: Injector,
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    fb: FormBuilder
  ) {
    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
    });
  }

  async submit() {
    const authService = this._injector.get(AuthService);
    const loaderService = this._injector.get(LoaderService);
    const snackBar = this._injector.get(MatSnackBar);

    loaderService.isLoading = true;

    try {
      const email = this.fg.value.email;
      await authService.forgotPassword(email);
      this.dialogRef.close();
      snackBar.open('Wir haben dir soeben eine E-Mail zugesendet', '', { duration: 10000 });
    } catch (err) {
      console.error(err);
      snackBar.open('Hoppla, da ist was schiefgelaufen...', '', { duration: 10000 });
    }

    loaderService.isLoading = false;
  }
}
