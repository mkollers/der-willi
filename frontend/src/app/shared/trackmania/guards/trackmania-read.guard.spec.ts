import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { AuthService } from '../../auth/services/auth.service';
import { TrackmaniaReadGuard } from './trackmania-read.guard';

describe('TrackmaniaReadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        TrackmaniaReadGuard
      ]
    });
  });

  it('should ...', inject([TrackmaniaReadGuard], (guard: TrackmaniaReadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
