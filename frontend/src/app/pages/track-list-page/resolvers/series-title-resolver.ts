import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class SeriesTitleResolver implements Resolve<Promise<string>> {
    constructor() { }

    async resolve(route: ActivatedRouteSnapshot) {
        try {
            const id = +route.params.seriesId;
            switch (id) {
                case 0:
                    return 'White Series';
                case 1:
                    return 'Green Series';
                case 2:
                    return 'Blue Series';
                case 3:
                    return 'Red Series';
                case 4:
                    return 'Black Series';
            }
        } catch (err) {
            return null;
        }
    }
}