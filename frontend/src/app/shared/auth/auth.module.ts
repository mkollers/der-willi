import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HasPermissionPipe } from './pipes/has-permission.pipe';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [
    HasPermissionPipe,
    UserNamePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Firebase
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    // Material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule
  ], exports: [
    HasPermissionPipe,
    UserNamePipe
  ]
})
export class AuthModule { }
