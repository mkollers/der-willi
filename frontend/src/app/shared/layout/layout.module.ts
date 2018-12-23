import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { HeaderService } from './services/header.service';

@NgModule({
  declarations: [
    HeaderComponent
  ], imports: [
    CommonModule,
    FlexLayoutModule,

    // Material
    MatToolbarModule
  ], exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
