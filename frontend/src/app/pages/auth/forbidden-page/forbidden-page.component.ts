import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForbiddenPageComponent {

  constructor() {
  }
}
