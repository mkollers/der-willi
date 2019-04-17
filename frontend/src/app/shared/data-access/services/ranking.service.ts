import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';

import { Ranking } from '../models/ranking';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getAll() {
    return this._db.collection<Ranking>('trackmania_ranking').valueChanges();
  }
}
