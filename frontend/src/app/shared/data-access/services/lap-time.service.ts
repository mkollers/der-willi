import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { LapTime } from './../models/lap-time';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LapTimeService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getByTrack(trackId: number) {
    return this._db.collection<LapTime>('trackmania_times',
      ref => ref.orderBy('time').where('trackId', '==', trackId)
    ).valueChanges();
  }

  create(trackId: number, lapTime: LapTime) {
    const data = { trackId, ...lapTime };

    return this._db.collection<LapTime>('trackmania_times').add(data);
  }
}
