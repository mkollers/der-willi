import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class TrackListResolver implements Resolve<Promise<number[]>> {
    constructor() { }

    async resolve(route: ActivatedRouteSnapshot) {
        try {
            const id = +route.params.seriesId;

            const start = id * 40 + 1;
            const tracks = [];
            for (let i = start; i < start + 40; i++) {
                tracks.push(i);
            }

            return tracks;
        } catch (err) {
            return null;
        }
    }
}