import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderService } from '../../shared/layout/services/header.service';

@Component({
  selector: 'app-series-list-page',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['./series-list-page.component.scss']
})
export class SeriesListPageComponent {

  constructor(
    header: HeaderService,
    title: Title
  ) {
    header.headline = 'Trackmania Turbo';
    title.setTitle('Trackmania Turbo - Männerabend 2.0');
  }

}
