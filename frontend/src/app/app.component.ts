import { ChangeDetectionStrategy, Component, Inject, INJECTOR, Injector } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo, takeWhile } from 'rxjs/operators';

import { BaseComponent } from './shared/helper/components/base.component';
import { LoaderService } from './shared/layout/services/loader.service';
import { UpdateService } from './shared/layout/services/update.service';

@Component({
  selector: 'app-root, [app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent {
  isRouting$: Observable<boolean>;

  constructor(
    @Inject(INJECTOR) private _injector: Injector,
    updateService: UpdateService
  ) {
    super();

    // Register all required SVG icons, for usage in mat-icon
    this._initIcons();

    // Display a loading indicator while navigating from one route to another
    this._setupSplashScreen();

    // Show an information, when a newer version than the current, loaded by the PWA service worker, version is available
    updateService.subscribeUpdates();
  }

  /**
   * Registers all required svg-icons for the whole application
   */
  private _initIcons() {
    this._registerIcons('custom', ['logo']);
  }

  /** Registers one icon for a namespace. Requires the svg to be under "assets/icons/${namespace}/${name}.svg" */
  private _registerIcon(namespace: string, name: string) {
    const iconRegistry = this._injector.get(MatIconRegistry);
    const sanitizer = this._injector.get(DomSanitizer);
    const url = `assets/icons/${namespace}/${name}.svg`;
    iconRegistry.addSvgIconInNamespace(namespace, name, sanitizer.bypassSecurityTrustResourceUrl(url));
  }

  /** Registers many icons in one namespace. Requires the svg to be under "assets/icons/${namespace}/${name}.svg" */
  private _registerIcons(namespace: string, names: string[]) {
    for (const name of names) {
      this._registerIcon(namespace, name);
    }
  }

  /** Start subscribing routing events to track when routing starts and wenn it ends, to a loading indicator */
  private _setupSplashScreen() {
    const router = this._injector.get(Router);
    const loaderService = this._injector.get(LoaderService);

    const navigationStart$ = router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );
    const navigationEnd$ = router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
      mapTo(false)
    );
    this.isRouting$ = merge(navigationStart$, navigationEnd$, loaderService.isLoading$);
  }
}
