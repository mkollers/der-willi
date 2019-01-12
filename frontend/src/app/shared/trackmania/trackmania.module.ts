import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CreateRoundDialogComponent } from './dialogs/create-round-dialog/create-round-dialog.component';

@NgModule({
  declarations: [CreateRoundDialogComponent],
  imports: [
    CommonModule,

    // Material
    MatToolbarModule
  ], exports: [
    CreateRoundDialogComponent
  ], entryComponents: [
    CreateRoundDialogComponent
  ]
})
export class TrackmaniaModule { }
