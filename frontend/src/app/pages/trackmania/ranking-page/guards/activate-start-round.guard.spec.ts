import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateStartRoundGuard } from './activate-start-round.guard';

describe('ActivateStartRoundGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateStartRoundGuard]
    });
  });

  it('should ...', inject([ActivateStartRoundGuard], (guard: ActivateStartRoundGuard) => {
    expect(guard).toBeTruthy();
  }));
});
