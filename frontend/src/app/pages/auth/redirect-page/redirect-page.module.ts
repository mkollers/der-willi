import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectPageRoutingModule } from './redirect-page-routing.module';
import { RedirectPageComponent } from './redirect-page.component';

@NgModule({
  declarations: [RedirectPageComponent],
  imports: [
    CommonModule,
    RedirectPageRoutingModule
  ]
})
export class RedirectPageModule { }
