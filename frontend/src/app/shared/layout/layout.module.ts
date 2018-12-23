import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackmaniaTabsComponent } from './components/trackmania-tabs/trackmania-tabs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TrackmaniaTabsComponent,
    ActionBarComponent
  ], imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    // Material
    MatTabsModule,
    MatToolbarModule
  ], exports: [
    ActionBarComponent,
    HeaderComponent,
    TrackmaniaTabsComponent
  ]
})
export class LayoutModule { }
