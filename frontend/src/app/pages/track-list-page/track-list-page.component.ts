import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@shared/helper/components/base.component';
import { HeaderService } from '@shared/layout/services/header.service';
import { Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-track-list-page',
  templateUrl: './track-list-page.component.html',
  styleUrls: ['./track-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackListPageComponent extends BaseComponent {
  tracks = new Array(160);

  constructor(
    private _header: HeaderService,
    private _title: Title
  ) {
    super();
    this._setPageData();
  }

  private _setPageData() {
    this._header.headline = 'Tracks';
    this._header.navigateBackUri = null;
    this._title.setTitle(`Tracks - Männerabend 2.0`);
  }
}
