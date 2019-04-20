import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo, takeWhile } from 'rxjs/operators';

import { BaseComponent } from './shared/helper/components/base.component';
import { LoaderService } from './shared/layout/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent {
  isRouting$: Observable<boolean>;

  constructor(
    private _loaderService: LoaderService,
    private _router: Router
  ) {
    super();

    // Display a loading indicator while navigating from one route to another
    this._setupLoadingIndicator();
  }

  /** Start subscribing routing events to track when routing starts and wenn it ends, to a loading indicator */
  private _setupLoadingIndicator() {
    const navigationStart$ = this._router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );
    const navigationEnd$ = this._router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
      mapTo(false)
    );
    this.isRouting$ = merge(navigationStart$, navigationEnd$, this._loaderService.isLoading$);
  }
}
