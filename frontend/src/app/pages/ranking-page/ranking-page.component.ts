import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ranking } from './../../shared/data-access/models/ranking';
import { HeaderService } from './../../shared/layout/services/header.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent {
  rankings$: Observable<Ranking[]>;
  displayedColumns = ['position', 'name', 'points'];

  constructor(
    header: HeaderService,
    route: ActivatedRoute,
    title: Title
  ) {
    header.headline = 'Trackmania Turbo';
    title.setTitle('Trackmania Turbo - Männerabend 2.0');
    this.rankings$ = route.data.pipe(
      map(data => data.rankings)
    );
  }

}
