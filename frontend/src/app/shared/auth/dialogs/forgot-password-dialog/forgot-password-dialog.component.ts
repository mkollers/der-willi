import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '@shared/layout/services/loader.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordDialogComponent {
  fg: FormGroup;

  constructor(
    private _authService: AuthService,
    private _loaderService: LoaderService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    fb: FormBuilder
  ) {
    this.fg = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
    });
  }

  async submit() {
    this._loaderService.isLoading = true;

    try {
      const email = this.fg.value.email;
      await this._authService.forgotPassword(email);
      this.dialogRef.close();
      this._snackBar.open('Wir haben dir soeben eine E-Mail zugesendet', '', { duration: 10000 });
    } catch (err) {
      console.error(err);
      this._snackBar.open('Hoppla, da ist was schiefgelaufen...', '', { duration: 10000 });
    }

    this._loaderService.isLoading = false;
  }
}
