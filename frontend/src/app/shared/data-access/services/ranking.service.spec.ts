import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFirestoreMock } from '../../../../mocks/angular-firestore.mock';
import { RankingService } from './ranking.service';

describe('RankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useClass: AngularFirestoreMock }
    ]
  }));

  it('should be created', () => {
    const service: RankingService = TestBed.get(RankingService);
    expect(service).toBeTruthy();
  });
});
