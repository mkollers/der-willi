import { LapTime } from './../models/lap-time';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LapTimeService {

  constructor() { }

  getAll() {
    const data: LapTime[] = [];
    for (let i = 1; i <= faker.random.number({ min: 3, max: 30 }); i++) {
      data.push(new LapTime(faker.name.findName(), faker.random.number({ min: 1000, max: 90000 })));
    }

    return of(data);
  }
}
