import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Ranking } from '@shared/data-access/models/ranking';
import { RankingService } from '@shared/data-access/services/ranking.service';
import orderBy from 'lodash/orderBy';
import { first } from 'rxjs/operators';

@Injectable()
export class RankingResolver implements Resolve<Promise<Ranking[]>> {
    constructor(
        private _rankingService: RankingService
    ) { }

    async resolve() {
        try {
            const rankings = await this._rankingService.getAll().pipe(first()).toPromise();

            // Order by ordering date descending
            return orderBy(rankings, r => r.points, 'desc');
        } catch (err) {
            return null;
        }
    }
}