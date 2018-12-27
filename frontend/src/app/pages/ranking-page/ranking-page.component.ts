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
    private _header: HeaderService,
    private _title: Title,
    route: ActivatedRoute
  ) {
    this.setPageData();
    this.rankings$ = route.data.pipe(
      map(data => data.rankings)
    );
  }

  setPageData = () => {
    this._header.headline = 'Trackmania Turbo';
    this._header.navigateBackUri = null;
    this._title.setTitle('Trackmania Turbo - Männerabend 2.0');
  }
}
