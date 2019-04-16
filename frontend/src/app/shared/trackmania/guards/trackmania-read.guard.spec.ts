import { TestBed, async, inject } from '@angular/core/testing';

import { TrackmaniaReadGuard } from './trackmania-read.guard';

describe('TrackmaniaReadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackmaniaReadGuard]
    });
  });

  it('should ...', inject([TrackmaniaReadGuard], (guard: TrackmaniaReadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
