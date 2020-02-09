import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { LayoutModule } from '../layout/layout.module';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { CreateRoundDialogComponent } from './dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from './dialogs/track-times-dialog/track-times-dialog.component';

@NgModule({
  declarations: [
    CreateRoundDialogComponent,
    NavTabsComponent,
    TrackTimesDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,

    // Custom
    LayoutModule
  ], exports: [
    CreateRoundDialogComponent,
    NavTabsComponent,
    TrackTimesDialogComponent
  ], entryComponents: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ]
})
export class TrackmaniaModule { }
