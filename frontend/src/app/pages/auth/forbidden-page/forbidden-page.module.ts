import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ForbiddenPageRoutingModule } from './forbidden-page-routing.module';
import { ForbiddenPageComponent } from './forbidden-page.component';

@NgModule({
  declarations: [ForbiddenPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ForbiddenPageRoutingModule
  ]
})
export class ForbiddenPageModule { }
