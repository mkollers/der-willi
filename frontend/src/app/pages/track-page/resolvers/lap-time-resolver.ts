import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LapTime } from '@shared/data-access/models/lap-time';
import { LapTimeService } from '@shared/data-access/services/lap-time.service';
import { first } from 'rxjs/operators';

@Injectable()
export class LapTimeResolver implements Resolve<Promise<LapTime[]>> {
    constructor(
        private _lapTimeService: LapTimeService
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        try {
            const trackId = +route.parent.params.trackId;
            return await this._lapTimeService.getByTrack(trackId).pipe(first()).toPromise();
        } catch (err) {
            return null;
        }
    }
}