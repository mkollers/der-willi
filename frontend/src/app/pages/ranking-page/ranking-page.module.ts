import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { LayoutModule } from './../../shared/layout/layout.module';
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
    MatTableModule,

    // Custom
    LayoutModule
  ], providers: [
    RankingResolver
  ]
})
export class RankingPageModule { }
