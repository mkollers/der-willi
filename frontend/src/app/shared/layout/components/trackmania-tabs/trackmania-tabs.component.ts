import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-trackmania-tabs',
  templateUrl: './trackmania-tabs.component.html',
  styleUrls: ['./trackmania-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackmaniaTabsComponent implements AfterViewInit {
  isViewInitialized = false; // Remove this after the following issue is fixed: https://github.com/angular/material2/issues/11811

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router
  ) { }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this._changeDetectorRef.detectChanges();
  }

  isLinkActive(rla: RouterLinkActive) {
    const routerLink = rla.linksWithHrefs.first;

    return this._router.isActive(routerLink.urlTree, false);
  }
}
