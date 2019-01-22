import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as faker from 'faker';
import { FocusEventMock } from 'src/mocks/focus-event.mock';

import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { TrackTimesDialogComponent } from './track-times-dialog.component';

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
        { provide: MatDialogRef, useClass: MatDialogRefMock }
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

    beforeEach(() => {
      dialogRef = TestBed.get(MatDialogRef);
    });

    it('should pass through again value', () => {
      // Arrange
      spyOn(dialogRef, 'close').and.stub();

      // Act
      component.finish(true);

      // Assert
      expect(dialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should pass retry = false per default', () => {
      // Arrange
      spyOn(dialogRef, 'close').and.stub();

      // Act
      component.finish();

      // Assert
      expect(dialogRef.close).toHaveBeenCalledWith(false);
    });
  });
});
