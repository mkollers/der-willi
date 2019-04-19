import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { UserServiceMock } from '../../../../mocks/user-service.mock';
import { UserService } from '../../data-access/services/user.service';
import { AuthService } from '../services/auth.service';
import { PersonalDataGuard } from './personal-data.guard';

describe('PersonalDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        PersonalDataGuard,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock }
      ]
    });
  });

  it('should ...', inject([PersonalDataGuard], (guard: PersonalDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
