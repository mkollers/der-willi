import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { SeriesTitleResolver } from './resolvers/series-title-resolver';
import { TrackListResolver } from './resolvers/track-list-resolver';
import { TrackListPageRoutingModule } from './track-list-page-routing.module';
import { TrackListPageComponent } from './track-list-page.component';

@NgModule({
  declarations: [TrackListPageComponent],
  imports: [
    CommonModule,
    TrackListPageRoutingModule,
    FlexLayoutModule,

    // Material
    MatButtonModule
  ], providers: [
    SeriesTitleResolver,
    TrackListResolver
  ]
})
export class TrackListPageModule { }
