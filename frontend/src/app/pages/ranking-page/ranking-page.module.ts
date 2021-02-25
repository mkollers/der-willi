import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AuthModule } from '@shared/auth/auth.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { TrackmaniaModule } from '@shared/trackmania/trackmania.module';

import { RankingPageRoutingModule } from './ranking-page-routing.module';
import { RankingPageComponent } from './ranking-page.component';
import { RankingResolver } from './resolvers/ranking-resolver';

@NgModule({
  declarations: [RankingPageComponent],
  imports: [
    CommonModule,
    RankingPageRoutingModule,

    // Material
    MatDialogModule,
    MatTableModule,

    // Custom
    AuthModule,
    LayoutModule,
    TrackmaniaModule
  ], providers: [
    RankingResolver
  ]
})
export class RankingPageModule { }
