import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AuthModule } from '@shared/auth/auth.module';
import { HelperModule } from '@shared/helper/helper.module';
import { LayoutModule } from '@shared/layout/layout.module';

import { LapTimeResolver } from './resolvers/lap-time-resolver';
import { TrackPageRoutingModule } from './track-page-routing.module';
import { TrackPageComponent } from './track-page.component';

@NgModule({
  declarations: [TrackPageComponent],
  imports: [
    CommonModule,
    TrackPageRoutingModule,

    // Material
    MatTableModule,

    // Custom
    AuthModule,
    HelperModule,
    LayoutModule
  ], providers: [
    LapTimeResolver
  ]
})
export class TrackPageModule { }
