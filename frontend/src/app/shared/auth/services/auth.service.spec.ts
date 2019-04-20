import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireAuthMock } from '../../../../mocks/angular-fire-auth.mock';
import { AngularFirestoreMock } from '../../../../mocks/angular-firestore.mock';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    providers: [
      { provide: AngularFireAuth, useClass: AngularFireAuthMock },
      { provide: AngularFirestore, useClass: AngularFirestoreMock }
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
