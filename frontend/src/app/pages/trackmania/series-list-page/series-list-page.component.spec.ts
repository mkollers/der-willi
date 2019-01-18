import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { HeaderServiceMock } from '../../../..//mocks/header-service.mock';
import { TitleMock } from '../../../../mocks/title.mock';
import { HeaderService } from '../../../shared/layout/services/header.service';
import { SeriesListPageComponent } from './series-list-page.component';

describe('SeriesListPageComponent', () => {
  let component: SeriesListPageComponent;
  let fixture: ComponentFixture<SeriesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListPageComponent],
      providers: [
        { provide: HeaderService, useClass: HeaderServiceMock },
        { provide: Title, useClass: TitleMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
