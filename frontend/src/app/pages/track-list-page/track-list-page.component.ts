import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

import { BaseComponent } from './../../shared/helper/components/base.component';
import { HeaderService } from './../../shared/layout/services/header.service';

@Component({
  selector: 'app-track-list-page',
  templateUrl: './track-list-page.component.html',
  styleUrls: ['./track-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackListPageComponent extends BaseComponent {
  tracks$: Observable<number[]>;

  constructor(
    private _header: HeaderService,
    private _route: ActivatedRoute,
    private _title: Title
  ) {
    super();
    this.setPageData();

    this.tracks$ = this._route.data.pipe(map(data => data.tracks));
  }

  setPageData() {
    this._header.navigateBackUri = '/series';
    this._route.data.pipe(
      takeWhile(() => this.alive),
      map(data => data.title),
      tap(value => this._header.headline = value),
      tap(value => this._title.setTitle(`${value} - Männerabend 2.0`))
    ).subscribe();
  }
}
