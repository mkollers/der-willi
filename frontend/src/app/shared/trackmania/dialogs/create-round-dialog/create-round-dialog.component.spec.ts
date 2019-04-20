import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import * as faker from 'faker';

import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { CreateRoundDialogComponent } from './create-round-dialog.component';
import { ActivatedRoute } from '@angular/router';

describe('CreateRoundDialogComponent', () => {
  let component: CreateRoundDialogComponent;
  let fixture: ComponentFixture<CreateRoundDialogComponent>;
  let dialogRef: MatDialogRef<CreateRoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRoundDialogComponent],
      imports: [
        MatAutocompleteModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: { queryParams: { names: '' } }
          }
        }
      ]
    }).compileComponents();

    dialogRef = TestBed.get(MatDialogRef);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add another player to the form group', () => {
    // Arrange
    const fa = component.fg.get('players') as FormArray;
    spyOn(component.fg, 'get').and.returnValue(fa);

    // Act
    component.addPlayer();

    // Assert
    expect(component.fg.get).toHaveBeenCalledWith('players');
    expect(component.fg.value.players.length).toBe(3);
  });

  it('should close the dialog and return the names', fakeAsync(() => {
    // Arrange
    spyOn(dialogRef, 'close').and.stub();
    const names = [faker.name.firstName(), faker.name.firstName()];
    const compiled = fixture.debugElement;
    const inputs = compiled.queryAll(By.css('input[type=text]'));

    // Act
    inputs[0].nativeElement.value = names[0];
    inputs[0].nativeElement.dispatchEvent(new Event('input'));
    inputs[1].nativeElement.value = names[1];
    inputs[1].nativeElement.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    fixture.whenStable();
    component.next();

    // Assert
    expect(dialogRef.close).toHaveBeenCalledWith(names);
  }));
});
