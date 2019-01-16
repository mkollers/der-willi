import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ActionBarComponent,
    HeaderComponent
  ], imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ], exports: [
    ActionBarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
