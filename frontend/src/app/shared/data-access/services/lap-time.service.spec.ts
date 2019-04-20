import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFirestoreMock } from '../../../../mocks/angular-firestore.mock';
import { LapTimeService } from './lap-time.service';

describe('LapTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useClass: AngularFirestoreMock }
    ]
  }));

  it('should be created', () => {
    const service: LapTimeService = TestBed.get(LapTimeService);
    expect(service).toBeTruthy();
  });
});
