import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from './../../shared/layout/services/header.service';
import { Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/helper/components/base.component';

@Component({
  selector: 'app-track-list-page',
  templateUrl: './track-list-page.component.html',
  styleUrls: ['./track-list-page.component.scss']
})
export class TrackListPageComponent extends BaseComponent {
  tracks$: Observable<number[]>;

  constructor(
    header: HeaderService,
    route: ActivatedRoute,
    title: Title
  ) {
    super();

    route.data.pipe(
      takeWhile(() => this.alive),
      map(data => data.title),
      tap(value => header.headline = value),
      tap(value => title.setTitle(value))
    ).subscribe();
    this.tracks$ = route.data.pipe(map(data => data.tracks));
  }
}
