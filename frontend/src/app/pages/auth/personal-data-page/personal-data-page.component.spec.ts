import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { LoaderServiceMock } from '../../../../mocks/loader-service.mock';
import { MatSnackbarMock } from '../../../../mocks/mat-snackbar.mock';
import { UserServiceMock } from '../../../../mocks/user-service.mock';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { UserService } from '../../../shared/data-access/services/user.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';
import { PersonalDataPageComponent } from './personal-data-page.component';

describe('PersonalDataPageComponent', () => {
  let component: PersonalDataPageComponent;
  let fixture: ComponentFixture<PersonalDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDataPageComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: LoaderService, useClass: LoaderServiceMock },
        { provide: MatSnackBar, useClass: MatSnackbarMock },
        { provide: UserService, useClass: UserServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
