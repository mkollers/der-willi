import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { Ranking } from '../../shared/data-access/models/ranking';
import { HeaderService } from '../../shared/layout/services/header.service';
import {
  CreateRoundDialogComponent
} from '../../shared/trackmania/dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from '../../shared/trackmania/dialogs/track-times-dialog/track-times-dialog.component';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent {
  rankings$: Observable<Ranking[]>;
  displayedColumns = ['position', 'name', 'points'];

  constructor(
    private _dialog: MatDialog,
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

  start() {
    const dialogref = this._dialog.open(CreateRoundDialogComponent, {
      panelClass: 'fullscreen-mobile'
    });

    dialogref.beforeClosed().pipe(
      filter(names => names.length),
      tap(names => this.trackRound(names))
    ).subscribe();
  }

  private trackRound(names: string[]) {
    const dialogref = this._dialog.open(TrackTimesDialogComponent, {
      data: names,
      panelClass: 'fullscreen-mobile'
    });

    dialogref.beforeClosed().pipe(
      filter(again => again),
      tap(() => this.trackRound(names))
    ).subscribe();
  }
}
