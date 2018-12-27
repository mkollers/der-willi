import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { HelperModule } from 'src/app/shared/helper/helper.module';

import { LapTimeResolver } from './resolvers/lap-time-resolver';
import { TrackPageRoutingModule } from './track-page-routing.module';
import { TrackPageComponent } from './track-page.component';

@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    TrackPageRoutingModule,
    FlexLayoutModule,

    // Material
    MatTableModule,

    // Custom
    HelperModule
  ], providers: [
    LapTimeResolver
  ]
})
export class TrackPageModule { }
