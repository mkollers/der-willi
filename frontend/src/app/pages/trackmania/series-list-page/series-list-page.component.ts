import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderService } from '../../../shared/layout/services/header.service';

@Component({
  selector: 'app-series-list-page',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['./series-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesListPageComponent {

  constructor(
    private _header: HeaderService,
    private _title: Title
  ) {
    this.setPageData();
  }

  setPageData() {
    this._header.headline = 'Trackmania Turbo';
    this._header.navigateBackUri = null;
    this._title.setTitle('Trackmania Turbo - Männerabend 2.0');
  }
}
