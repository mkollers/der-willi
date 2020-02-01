import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServiceMock } from '@mocks/auth-service.mock';
import { LoaderServiceMock } from '@mocks/loader-service.mock';
import { MatDialogRefMock } from '@mocks/mat-dialog-ref.mock';
import { MatSnackbarMock } from '@mocks/mat-snackbar.mock';
import { LoaderService } from '@shared/layout/services/loader.service';

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

  describe('submit', () => {
    let authService: AuthService;

    beforeEach(() => {
      authService = TestBed.get(AuthService);
    });

    it('should close the dialog', async () => {
      // Arrange
      const dialog: MatDialogRef<ForgotPasswordDialogComponent> = TestBed.get(MatDialogRef);
      spyOn(authService, 'forgotPassword').and.returnValue(Promise.resolve());
      spyOn(dialog, 'close').and.stub();

      // Act
      await component.submit();

      // Assert
      expect(dialog.close).toHaveBeenCalledTimes(1);
    });

    describe('loading animation', () => {
      let loader: LoaderService;

      beforeEach(() => {
        loader = TestBed.get(LoaderService);
      });

      it('show animation at the beginning', () => {
        // Arrange
        spyOn(authService, 'forgotPassword').and.stub();

        // Act
        component.submit();

        // Assert
        expect(loader.isLoading).toBe(true);
      });

      it('hide animation after completion', async () => {
        // Arrange
        spyOn(authService, 'forgotPassword').and.returnValue(Promise.reject());
        spyOn(console, 'error').and.stub();

        // Act
        await component.submit();

        // Assert
        expect(loader.isLoading).toBe(false);
      });
    });

    describe('snackbar messages', () => {
      let snackBar: MatSnackBar;

      beforeEach(() => {
        snackBar = TestBed.get(MatSnackBar);
      });

      it('should show success message', async () => {
        // Arrange
        spyOn(authService, 'forgotPassword').and.returnValue(Promise.resolve());
        spyOn(snackBar, 'open').and.stub();

        // Act
        await component.submit();

        // Assert
        expect(snackBar.open).toHaveBeenCalledWith('Wir haben dir soeben eine E-Mail zugesendet', '', { duration: 10000 });
      });

      it('should show error message', async () => {
        // Arrange
        spyOn(authService, 'forgotPassword').and.returnValue(Promise.reject());
        spyOn(snackBar, 'open').and.stub();
        spyOn(console, 'error').and.stub();

        // Act
        await component.submit();

        // Assert
        expect(snackBar.open).toHaveBeenCalledWith('Hoppla, da ist was schiefgelaufen...', '', { duration: 10000 });
      });
    });
  });
});
