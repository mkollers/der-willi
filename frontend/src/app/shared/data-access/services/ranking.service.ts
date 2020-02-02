import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';
import values from 'lodash/values';
import flatten from 'lodash/flatten';
import sumBy from 'lodash/sumBy';
import { map, tap } from 'rxjs/operators';

import { LapTime } from '../models/lap-time';
import { Ranking } from '../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getAll() {
    return this._db.collection<LapTime>('trackmania_times')
      .valueChanges().pipe(
        map(times => orderBy(times, t => [t.trackId, t.time])),
        map(times => uniqBy(times, t => t.trackId + t.name)),
        map(times => groupBy(times, t => t.trackId)),
        map(grouped => mapValues(grouped, g => g.map(v =>
          ({ ...v, points: g.length - g.indexOf(v) })
        ))),
        map(grouped => values(grouped)),
        map(dimensional => flatten(dimensional)),
        map(vals => groupBy(vals, v => v.name)),
        map(vals => mapValues(vals, v => sumBy(v, t => t.points))),
        map(vals => Object.keys(vals).map(key => new Ranking(key, vals[key])))
      );
  }
}
