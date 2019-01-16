import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListPageComponent } from './series-list-page.component';

describe('SeriesListPageComponent', () => {
  let component: SeriesListPageComponent;
  let fixture: ComponentFixture<SeriesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListPageComponent ]
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
