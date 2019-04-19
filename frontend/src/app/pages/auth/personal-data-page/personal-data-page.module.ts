import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PersonalDataPageRoutingModule } from './personal-data-page-routing.module';
import { PersonalDataPageComponent } from './personal-data-page.component';

@NgModule({
  declarations: [PersonalDataPageComponent],
  imports: [
    CommonModule,
    PersonalDataPageRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class PersonalDataPageModule { }
