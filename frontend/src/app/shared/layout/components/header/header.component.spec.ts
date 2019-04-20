import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../../mocks/auth-service.mock';
import { HeaderServiceMock } from '../../../../../mocks/header-service.mock';
import { AuthService } from '../../../auth/services/auth.service';
import { HeaderService } from '../../services/header.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule,
        MatMenuModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: HeaderService, useClass: HeaderServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
