import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderServiceMock } from '../../../../mocks/header-service.mock';
import { TitleMock } from '../../../../mocks/title.mock';
import { TimespanPipe } from '../../../shared/helper/pipes/timespan.pipe';
import { HeaderService } from '../../../shared/layout/services/header.service';
import { TrackPageComponent } from './track-page.component';

describe('TrackPageComponent', () => {
  let component: TrackPageComponent;
  let fixture: ComponentFixture<TrackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackPageComponent, TimespanPipe],
      imports: [
        MatTableModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: HeaderService, useClass: HeaderServiceMock },
        { provide: Title, useClass: TitleMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    const route: ActivatedRoute = TestBed.get(ActivatedRoute);
    spyOnProperty(route, 'parent').and.returnValue(route);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
