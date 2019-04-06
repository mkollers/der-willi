import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-shell',
  templateUrl: './no-shell.component.html',
  styleUrls: ['./no-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoShellComponent {

  constructor() { }

}
