import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@shared/layout/layout.module';
import { TrackmaniaModule } from '@shared/trackmania/trackmania.module';

import { SeriesListPageRoutingModule } from './series-list-page-routing.module';
import { SeriesListPageComponent } from './series-list-page.component';

@NgModule({
  declarations: [SeriesListPageComponent],
  imports: [
    CommonModule,
    SeriesListPageRoutingModule,

    // Material
    MatButtonModule,

    // Custom
    LayoutModule,
    TrackmaniaModule
  ]
})
export class SeriesListPageModule { }
