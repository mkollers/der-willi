import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackListResolver } from './resolvers/track-list-resolver';
import { TrackListPageRoutingModule } from './track-list-page-routing.module';
import { TrackListPageComponent } from './track-list-page.component';

@NgModule({
  declarations: [TrackListPageComponent],
  imports: [
    CommonModule,
    TrackListPageRoutingModule
  ], providers: [
    TrackListResolver
  ]
})
export class TrackListPageModule { }
