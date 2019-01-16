import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';

import { MatDialogRefMock } from '../../../../../mocks/mat-dialog-ref.mock';
import { CreateRoundDialogComponent } from './create-round-dialog.component';

describe('CreateRoundDialogComponent', () => {
  let component: CreateRoundDialogComponent;
  let fixture: ComponentFixture<CreateRoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRoundDialogComponent],
      imports: [
        MatAutocompleteModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
