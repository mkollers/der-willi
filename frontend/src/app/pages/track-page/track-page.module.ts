import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackPageRoutingModule } from './track-page-routing.module';
import { TrackPageComponent } from './track-page.component';

@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    TrackPageRoutingModule
  ]
})
export class TrackPageModule { }
