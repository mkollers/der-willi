import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoundDialogComponent } from './create-round-dialog.component';

describe('CreateRoundDialogComponent', () => {
  let component: CreateRoundDialogComponent;
  let fixture: ComponentFixture<CreateRoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoundDialogComponent ]
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
