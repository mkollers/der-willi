import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RedirectPageRoutingModule } from './redirect-page-routing.module';
import { RedirectPageComponent } from './redirect-page.component';

@NgModule({
  declarations: [RedirectPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RedirectPageRoutingModule
  ]
})
export class RedirectPageModule { }
