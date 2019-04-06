import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoShellComponent } from './no-shell.component';

describe('NoShellComponent', () => {
  let component: NoShellComponent;
  let fixture: ComponentFixture<NoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
