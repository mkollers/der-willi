import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterViewInit {
  @Input() tabs: Tab[];
  @Input() color = 'accent';
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
