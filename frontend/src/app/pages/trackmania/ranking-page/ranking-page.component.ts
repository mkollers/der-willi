import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as faker from 'faker';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/helper/components/base.component';

import { Ranking } from '../../../shared/data-access/models/ranking';
import { HeaderService } from '../../../shared/layout/services/header.service';
import { CreateRoundDialogComponent } from '../../../shared/trackmania/dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from '../../../shared/trackmania/dialogs/track-times-dialog/track-times-dialog.component';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankingPageComponent extends BaseComponent {
  rankings$: Observable<Ranking[]>;
  displayedColumns = ['position', 'name', 'points'];

  constructor(
    private _dialog: MatDialog,
    private _header: HeaderService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _title: Title
  ) {
    super();
    this._setPageData();
    this._subscribeDialogParams();
    this.rankings$ = _route.data.pipe(
      map(data => data.rankings)
    );
  }

  start() {
    const dialogref = this._dialog.open(CreateRoundDialogComponent, {
      panelClass: 'fullscreen-mobile'
    });

    dialogref.beforeClosed().pipe(
      tap(() => this._router.navigate([this._router.url], { queryParams: {} })),
      filter(names => names && names.length),
      tap(names => this.trackRound(names))
    ).subscribe();
  }

  private _setPageData = () => {
    this._header.headline = 'Trackmania Turbo';
    this._header.navigateBackUri = null;
    this._title.setTitle('Trackmania Turbo - Männerabend 2.0');
  }

  private _subscribeDialogParams() {
    this._route.queryParams.pipe(
      filter(params => !!params['start-round']),
      tap(() => this.start())
    ).subscribe();
  }

  private trackRound(names: string[]) {
    names = faker.helpers.shuffle(names);

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
