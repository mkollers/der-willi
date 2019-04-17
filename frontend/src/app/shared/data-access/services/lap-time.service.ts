import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { LapTime } from './../models/lap-time';

@Injectable({
  providedIn: 'root'
})
export class LapTimeService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getByTrack(trackId: number) {
    return this._db.collection<LapTime>('trackmania_times', ref => ref.where('track', '==', trackId)).valueChanges();
  }
}
