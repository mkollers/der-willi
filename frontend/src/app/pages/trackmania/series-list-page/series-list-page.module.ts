import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TrackmaniaModule } from 'src/app/shared/trackmania/trackmania.module';

import { LayoutModule } from '../../../shared/layout/layout.module';
import { SeriesListPageRoutingModule } from './series-list-page-routing.module';
import { SeriesListPageComponent } from './series-list-page.component';

@NgModule({
  declarations: [SeriesListPageComponent],
  imports: [
    CommonModule,
    SeriesListPageRoutingModule,
    FlexLayoutModule,

    // Material
    MatButtonModule,

    // Custom
    LayoutModule,
    TrackmaniaModule
  ]
})
export class SeriesListPageModule { }
