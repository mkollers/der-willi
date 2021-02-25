import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrackmaniaModule } from '@shared/trackmania/trackmania.module';

import { TrackListPageRoutingModule } from './track-list-page-routing.module';
import { TrackListPageComponent } from './track-list-page.component';

@NgModule({
  declarations: [TrackListPageComponent],
  imports: [
    CommonModule,
    TrackListPageRoutingModule,

    // Custom
    TrackmaniaModule
  ]
})
export class TrackListPageModule { }
