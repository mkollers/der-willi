import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { LoaderServiceMock } from '../../../../mocks/loader-service.mock';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { LoaderService } from '../../../shared/layout/services/loader.service';
import { ForbiddenPageComponent } from './forbidden-page.component';

describe('ForbiddenPageComponent', () => {
  let component: ForbiddenPageComponent;
  let fixture: ComponentFixture<ForbiddenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForbiddenPageComponent],
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: LoaderService, useClass: LoaderServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
