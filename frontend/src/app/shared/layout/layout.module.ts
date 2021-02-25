import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@shared/auth/auth.module';

import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoShellComponent } from './components/no-shell/no-shell.component';
import { ShellComponent } from './components/shell/shell.component';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
  declarations: [
    ActionBarComponent,
    HeaderComponent,
    ShellComponent,
    NoShellComponent,
    ColorPipe
  ], imports: [
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,

    // Custom
    AuthModule,
  ], exports: [
    ActionBarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
