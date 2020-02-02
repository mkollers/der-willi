import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServiceMock } from '@mocks/auth-service.mock';
import { LoaderServiceMock } from '@mocks/loader-service.mock';
import { AuthService } from '@shared/auth/services/auth.service';
import { LoaderService } from '@shared/layout/services/loader.service';
import { MatSnackbarMock } from '@mocks/mat-snackbar.mock';

import { RegisterPageComponent } from './register-page.component';
import { AuthErrorMessages } from '@shared/auth/data/auth-error.messages';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: LoaderService, useClass: LoaderServiceMock },
        { provide: MatSnackBar, useClass: MatSnackbarMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
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

    describe('loading animation', () => {
      let loader: LoaderService;

      beforeEach(() => {
        loader = TestBed.get(LoaderService);
      });

      it('show loading on submit called', async () => {
        // Arrange
        spyOn(authService, 'register').and.stub();

        // Act
        await fixture.ngZone.run(async () => {
          await component.submit();
        });

        // Assert
        expect(loader.isLoading).toEqual(true);
      });

      it('hide loading on login error', async () => {
        // Arrange
        spyOn(authService, 'register').and.returnValue(Promise.reject('Nuclear meltdown'));
        spyOn(console, 'error').and.stub();

        // Act
        await component.submit();

        // Assert
        expect(loader.isLoading).toEqual(false);
      });
    });

    describe('error handling', () => {
      let snackBar: MatSnackBar;

      beforeEach(() => {
        snackBar = TestBed.get(MatSnackBar);
      });

      // tslint:disable-next-line: forin
      for (const code in AuthErrorMessages) {
        it(code, async () => {
          // Arrange
          spyOn(authService, 'register').and.returnValue(Promise.reject({ code: code }));
          spyOn(console, 'error').and.stub();
          spyOn(snackBar, 'open').and.stub();

          // Act
          await component.submit();

          // Assert
          expect(snackBar.open).toHaveBeenCalledWith(AuthErrorMessages[code], '', { duration: 10000 });
        });
      }
    });
  });
});
