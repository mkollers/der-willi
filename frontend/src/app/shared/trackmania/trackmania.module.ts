import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    FlexLayoutModule,
    ReactiveFormsModule,

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
    TrackTimesDialogComponent
  ], entryComponents: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ]
})
export class TrackmaniaModule { }
