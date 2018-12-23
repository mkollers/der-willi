import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackmaniaTabsComponent } from './trackmania-tabs.component';

describe('TrackmaniaTabsComponent', () => {
  let component: TrackmaniaTabsComponent;
  let fixture: ComponentFixture<TrackmaniaTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackmaniaTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackmaniaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
