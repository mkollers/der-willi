import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DocumentReference } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as faker from 'faker';

import { FocusEventMock } from '../../../../../mocks/focus-event.mock';
import { LapTimeServiceMock } from '../../../../../mocks/lapt-time-service.mock';
import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { LapTimeService } from '../../../data-access/services/lap-time.service';
import { MAX_TRACK, TrackTimesDialogComponent } from './track-times-dialog.component';

describe('TrackTimesDialogComponent', () => {
  let component: TrackTimesDialogComponent;
  let fixture: ComponentFixture<TrackTimesDialogComponent>;
  let names: string[];

  beforeEach(async(() => {
    names = [faker.name.firstName(), faker.name.firstName(), faker.name.firstName()];

    TestBed.configureTestingModule({
      declarations: [TrackTimesDialogComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: names },
        { provide: MAX_TRACK, useValue: names },
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: LapTimeService, useClass: LapTimeServiceMock }
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

  describe('select', () => {
    it('should select the text', () => {
      // Arrange
      const event = new FocusEventMock();
      spyOn(event.target, 'select').and.stub();

      // Act
      component.select(event);

      // Assert
      expect(event.target.select).toHaveBeenCalledTimes(1);
    });

    it('should select the text on ios/safari', fakeAsync(() => {
      // Arrange
      const event = new FocusEventMock();
      spyOn(event.target, 'select').and.stub();
      spyOn(event.target, 'setSelectionRange').and.stub();
      spyOn(window, 'setTimeout').and.callThrough();

      // Act
      component.select(event);
      tick();

      // Assert
      expect(setTimeout).toHaveBeenCalled();
      expect(event.target.select).toHaveBeenCalledTimes(2);
      expect(event.target.setSelectionRange).toHaveBeenCalledWith(0, 99999);
    }));
  });

  describe('finish', () => {
    let dialogRef: MatDialogRef<TrackTimesDialogComponent>;
    let lapTimeService: LapTimeService;

    beforeEach(() => {
      dialogRef = TestBed.get(MatDialogRef);
      lapTimeService = TestBed.get(LapTimeService);
    });

    it('should pass through again value', async () => {
      // Arrange
      spyOn(dialogRef, 'close').and.stub();
      spyOn(lapTimeService, 'create').and.returnValue(Promise.resolve() as unknown as Promise<DocumentReference>);

      // Act
      await component.finish(true);

      // Assert
      expect(dialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should pass retry = false per default', async () => {
      // Arrange
      spyOn(dialogRef, 'close').and.stub();
      spyOn(lapTimeService, 'create').and.returnValue(Promise.resolve() as unknown as Promise<DocumentReference>);

      // Act
      await component.finish();

      // Assert
      expect(dialogRef.close).toHaveBeenCalledWith(false);
    });
  });
});
