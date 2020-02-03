import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderServiceMock } from '@mocks/header-service.mock';
import { TitleMock } from '@mocks/title.mock';
import { HeaderService } from '@shared/layout/services/header.service';

import { TrackListPageComponent } from './track-list-page.component';

describe('TrackListPageComponent', () => {
  let component: TrackListPageComponent;
  let fixture: ComponentFixture<TrackListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackListPageComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: HeaderService, useClass: HeaderServiceMock },
        { provide: Title, useClass: TitleMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
