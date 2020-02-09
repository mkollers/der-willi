import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ForbiddenPageRoutingModule } from './forbidden-page-routing.module';
import { ForbiddenPageComponent } from './forbidden-page.component';

@NgModule({
  declarations: [ForbiddenPageComponent],
  imports: [
    CommonModule,
    ForbiddenPageRoutingModule,

    // Material
    MatButtonModule
  ]
})
export class ForbiddenPageModule { }
