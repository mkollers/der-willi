import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderServiceMock } from '@mocks/loader-service.mock';
import { UpdateServiceMock } from '@mocks/update-service.mock';
import { LoaderService } from '@shared/layout/services/loader.service';
import { UpdateService } from '@shared/layout/services/update.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: LoaderService, useClass: LoaderServiceMock },
        { provide: UpdateService, useClass: UpdateServiceMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
