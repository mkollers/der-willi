import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderService } from '../../../shared/layout/services/header.service';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForbiddenPageComponent {

  constructor(
    headerService: HeaderService
  ) {
    headerService.headline = 'Zugriff verweigert';
   }
}
