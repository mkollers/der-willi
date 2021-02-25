import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForbiddenPageRoutingModule } from './forbidden-page-routing.module';
import { ForbiddenPageComponent } from './forbidden-page.component';

@NgModule({
  declarations: [ForbiddenPageComponent],
  imports: [
    CommonModule,
    ForbiddenPageRoutingModule
  ]
})
export class ForbiddenPageModule { }
