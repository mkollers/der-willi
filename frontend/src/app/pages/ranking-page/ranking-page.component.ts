import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@shared/auth/services/auth.service';
import { Ranking } from '@shared/data-access/models/ranking';
import { BaseComponent } from '@shared/helper/components/base.component';
import { HeaderService } from '@shared/layout/services/header.service';
import { CreateRoundDialogComponent } from '@shared/trackmania/dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from '@shared/trackmania/dialogs/track-times-dialog/track-times-dialog.component';
import * as faker from 'faker';
import { Observable, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, takeWhile, tap, skip } from 'rxjs/operators';
import { RankingService } from '@shared/data-access/services/ranking.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankingPageComponent extends BaseComponent {
  rankings$: Observable<Ranking[]>;
  displayedColumns = ['position', 'name', 'points'];
  canStart$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _header: HeaderService,
    private _rankingService: RankingService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _title: Title
  ) {
    super();
    this._setPageData();
    this._subscribeDialogParams();

    const coldRankings$ = _route.data.pipe(map(data => data.rankings));
    const hotRankings$ = _rankingService.getAll().pipe(
      skip(1)
    );
    this.rankings$ = merge(coldRankings$, hotRankings$);

    this.canStart$ = this._authService.permissions$.pipe(
      map(permissions => permissions && permissions.trackmania_write) // TODO Start with resolved value to avoid flickering
    );
  }

  start() {
    const dialogref = this._dialog.open(CreateRoundDialogComponent, {
      panelClass: 'fullscreen-mobile'
    });

    dialogref.beforeClosed().pipe(
      tap(() => this._router.navigate([this._router.url], { queryParams: {} })), // Remove query params
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
      takeWhile(() => this.alive),
      map(params => 'names' in params), // only if the url contains ?names=
      distinctUntilChanged(),           // just start it once, not multiple
      filter(contains => contains),     // filter only true values
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
