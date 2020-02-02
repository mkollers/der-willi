import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@shared/auth/services/auth.service';
import { Ranking } from '@shared/data-access/models/ranking';
import { RankingService } from '@shared/data-access/services/ranking.service';
import { BaseComponent } from '@shared/helper/components/base.component';
import { HeaderService } from '@shared/layout/services/header.service';
import { CreateRoundDialogComponent } from '@shared/trackmania/dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from '@shared/trackmania/dialogs/track-times-dialog/track-times-dialog.component';
import * as faker from 'faker';
import storage from 'local-storage-fallback';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, skip, takeWhile, tap } from 'rxjs/operators';

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
    private _route: ActivatedRoute,
    private _router: Router,
    private _title: Title,
    rankingService: RankingService,
  ) {
    super();
    this._setPageData();
    this._subscribeDialogParams();

    const coldRankings$ = _route.data.pipe(map(data => data.rankings));
    const hotRankings$ = rankingService.getAll().pipe(
      skip(1)
    );
    this.rankings$ = merge(coldRankings$, hotRankings$);

    this.canStart$ = this._authService.permissions$.pipe(
      map(permissions => permissions && permissions.trackmania_write) // TODO Start with resolved value to avoid flickering
    );
  }

  startRound() {
    const names = storage.getItem('names') || '';
    return this._router.navigate(['.'], { queryParams: { names } });
  }

  start() {
    const dialogref = this._dialog.open(CreateRoundDialogComponent, {
      panelClass: 'fullscreen-mobile'
    });

    dialogref.beforeClosed().pipe(
      tap(() => this._router.navigate([this._router.url], { queryParams: {} })), // Remove query params
      filter(names => names && names.length), // Open next dialog if names are set
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
