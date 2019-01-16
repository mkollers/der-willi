import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { TrackTimesDialogComponent } from './track-times-dialog.component';

describe('TrackTimesDialogComponent', () => {
  let component: TrackTimesDialogComponent;
  let fixture: ComponentFixture<TrackTimesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackTimesDialogComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MatDialogRef, useClass: MatDialogRefMock },
      ]
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
