import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Racer } from '../models/racer';

@Injectable({
  providedIn: 'root'
})
export class RacerService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getAll(): Observable<Racer[]> {
    return this._db.collection<Racer>('trackmania_racers', ref => ref.orderBy('name'))
      .valueChanges();
  }
}
