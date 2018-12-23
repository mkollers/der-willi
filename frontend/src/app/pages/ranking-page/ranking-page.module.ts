import { LayoutModule } from './../../shared/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingPageRoutingModule } from './ranking-page-routing.module';
import { RankingPageComponent } from './ranking-page.component';

@NgModule({
  declarations: [RankingPageComponent],
  imports: [
    CommonModule,
    RankingPageRoutingModule,

    // Custom
    LayoutModule
  ]
})
export class RankingPageModule { }
