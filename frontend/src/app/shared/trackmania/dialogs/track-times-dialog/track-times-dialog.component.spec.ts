import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTimesDialogComponent } from './track-times-dialog.component';

describe('TrackTimesDialogComponent', () => {
  let component: TrackTimesDialogComponent;
  let fixture: ComponentFixture<TrackTimesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTimesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTimesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
