import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import * as _ from 'lodash';

import { LapTime } from '../../../../shared/data-access/models/lap-time';
import { LapTimeService } from '../../../../shared/data-access/services/lap-time.service';

@Injectable()
export class LapTimeResolver implements Resolve<Promise<LapTime[]>> {
    constructor(
        private _lapTimeService: LapTimeService
    ) { }

    async resolve() {
        try {
            const lapTimes = await this._lapTimeService.getAll().toPromise();

            // Order by ordering time ascending
            return _.orderBy(lapTimes, lt => lt.time);
        } catch (err) {
            return null;
        }
    }
}