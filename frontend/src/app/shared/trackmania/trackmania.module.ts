import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { LayoutModule } from '../layout/layout.module';
import { TrackmaniaTabsComponent } from './components/trackmania-tabs/trackmania-tabs.component';
import { CreateRoundDialogComponent } from './dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from './dialogs/track-times-dialog/track-times-dialog.component';

@NgModule({
  declarations: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent,
    TrackmaniaTabsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,

    // Custom
    LayoutModule
  ], exports: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent,
    TrackmaniaTabsComponent
  ], entryComponents: [
    CreateRoundDialogComponent,
    TrackTimesDialogComponent
  ]
})
export class TrackmaniaModule { }
