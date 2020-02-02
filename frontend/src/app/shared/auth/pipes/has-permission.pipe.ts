import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'hasPermission'
})
export class HasPermissionPipe implements PipeTransform {
  constructor(private _authService: AuthService) { }

  transform(value: string): Observable<boolean> {
    return this._authService.permissions$.pipe(
      map(permissions => permissions && permissions[value])
    );
  }

}
