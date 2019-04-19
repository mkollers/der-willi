import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { User } from '../../../shared/data-access/models/user';
import { UserService } from '../../../shared/data-access/services/user.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-personal-data-page',
  templateUrl: './personal-data-page.component.html',
  styleUrls: ['./personal-data-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDataPageComponent {
  @HostBinding('class.center-vertical') centerVertical = true;
  @HostBinding('class.page-padding') pagePadding = true;
  fg: FormGroup;

  constructor(
    private _authService: AuthService,
    private _loaderService: LoaderService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _userService: UserService,
    fb: FormBuilder
  ) {
    this.fg = fb.group({
      forename: fb.control('', [Validators.required]),
      surname: fb.control('', Validators.required),
      nickname: fb.control(''),
    });
  }

  async submit() {
    this._loaderService.isLoading = true;

    try {
      const auth = await this._authService.user$.pipe(first()).toPromise();
      const user: User = this.fg.value;

      await this._userService.create(auth.uid, user);
      this._router.navigateByUrl('/');
    } catch (err) {
      this._snackBar.open('Hoppla, da ist was schiefgelaufen...', '', { duration: 10000 });
      this._loaderService.isLoading = false;
    }
  }

}
