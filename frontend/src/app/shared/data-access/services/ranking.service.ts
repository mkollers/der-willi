import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';

import { Ranking } from '../models/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor() { }

  getAll() {
    const data: Ranking[] = [];
    for (let i = 1; i <= 15; i++) {
      data.push(new Ranking(faker.name.findName(), faker.random.number({ max: 300 })));
    }

    return of(data);
  }
}
