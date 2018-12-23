import { TestBed } from '@angular/core/testing';

import { LapTimeService } from './lap-time.service';

describe('LapTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LapTimeService = TestBed.get(LapTimeService);
    expect(service).toBeTruthy();
  });
});
