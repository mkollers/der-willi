import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { LayoutModule } from '../../../shared/layout/layout.module';
import { TrackmaniaModule } from '../../../shared/trackmania/trackmania.module';
import { RankingPageRoutingModule } from './ranking-page-routing.module';
import { RankingPageComponent } from './ranking-page.component';
import { RankingResolver } from './resolvers/ranking-resolver';

@NgModule({
  declarations: [RankingPageComponent],
  imports: [
    CommonModule,
    RankingPageRoutingModule,
    FlexLayoutModule,

    // Material
    MatButtonModule,
    MatDialogModule,
    MatTableModule,

    // Custom
    LayoutModule,
    TrackmaniaModule
  ], providers: [
    RankingResolver
  ]
})
export class RankingPageModule { }
