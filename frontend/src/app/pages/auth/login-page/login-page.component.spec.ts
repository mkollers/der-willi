import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { LoaderServiceMock } from '../../../../mocks/loader-service.mock';
import { MatDialogMock } from '../../../../mocks/mat-dialog.mock';
import { MatSnackbarMock } from '../../../../mocks/mat-snackbar.mock';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: LoaderService, useClass: LoaderServiceMock },
        { provide: MatSnackBar, useClass: MatSnackbarMock }
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
