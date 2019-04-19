import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthServiceMock } from '../../../../../mocks/auth-service.mock';
import { LoaderServiceMock } from '../../../../../mocks/loader-service.mock';
import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { MatSnackbarMock } from '../../../../../mocks/mat-snackbar.mock';
import { LoaderService } from '../../../layout/services/loader.service';
import { AuthService } from '../../services/auth.service';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog.component';

describe('ForgotPasswordDialogComponent', () => {
  let component: ForgotPasswordDialogComponent;
  let fixture: ComponentFixture<ForgotPasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordDialogComponent],
      imports: [
        ReactiveFormsModule
      ], providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: LoaderService, useClass: LoaderServiceMock },
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MatSnackBar, useClass: MatSnackbarMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
