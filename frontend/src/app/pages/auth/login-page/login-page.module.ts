import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthModule } from '@shared/auth/auth.module';

import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [
    ForgotPasswordDialogComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,

    // Custom
    AuthModule
  ]
})
export class LoginPageModule { }
