import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trackmania-tabs',
  templateUrl: './trackmania-tabs.component.html',
  styleUrls: ['./trackmania-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackmaniaTabsComponent {

  constructor() { }
}
