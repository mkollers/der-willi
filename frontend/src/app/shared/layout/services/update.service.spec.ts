import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';

import { UpdateService } from './update.service';

describe('UpdateService', () => {
  const swUpdateMock = {
    available: of()
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatSnackBar, useValue: {} }
      ]
    });
  });

  it('should be created', () => {
    const service: UpdateService = TestBed.get(UpdateService);
    expect(service).toBeTruthy();
  });
});
