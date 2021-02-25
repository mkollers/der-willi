import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { LayoutModule } from '../layout/layout.module';
import { CreateRoundDialogComponent } from './dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from './dialogs/track-times-dialog/track-times-dialog.component';

@NgModule({
  declarations: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule,

    // Material
    MatAutocompleteModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,

    // Custom
    LayoutModule
  ], exports: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ], entryComponents: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ]
})
export class TrackmaniaModule { }
