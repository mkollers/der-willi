import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Tab } from '../../../layout/components/tabs/tab';

@Component({
  selector: 'trackmania-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavTabsComponent {
  tabs: Tab[] = [{
    name: 'Bestenliste',
    url: '/ranking'
  }, {
    name: 'Tracks',
    url: '/tracks'
  }];

  constructor() { }

}
