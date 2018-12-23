import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderService } from './../../shared/layout/services/header.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent {

  constructor(
    header: HeaderService,
    title: Title
  ) {
    header.headline = 'Trackmania Turbo';
    title.setTitle('Trackmania Turbo - Männerabend 2.0');
  }

}
