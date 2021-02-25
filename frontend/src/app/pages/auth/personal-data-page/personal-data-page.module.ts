import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,

    // Material
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class PersonalDataPageModule { }
