import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import * as _ from 'lodash';

import { Ranking } from '../../../shared/data-access/models/ranking';
import { RankingService } from '../../../shared/data-access/services/ranking.service';

@Injectable()
export class RankingResolver implements Resolve<Promise<Ranking[]>> {
    constructor(
        private _rankingService: RankingService
    ) { }

    async resolve() {
        try {
            const rankings = await this._rankingService.getAll().toPromise();

            // Order by ordering date descending
            return _.orderBy(rankings, r => r.points, 'desc');
        } catch (err) {
            return null;
        }
    }
}