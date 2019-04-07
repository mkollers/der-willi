import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoShellComponent } from './components/no-shell/no-shell.component';
import { ShellComponent } from './components/shell/shell.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    ActionBarComponent,
    HeaderComponent,
    TabsComponent,
    ShellComponent,
    NoShellComponent
  ], imports: [
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ], exports: [
    ActionBarComponent,
    HeaderComponent,
    TabsComponent
  ]
})
export class LayoutModule { }
