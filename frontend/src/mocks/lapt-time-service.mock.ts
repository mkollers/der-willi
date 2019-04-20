import { of } from 'rxjs';

export class LapTimeServiceMock {
    create = () => of(undefined);
    getByTrack = () => of(undefined);
}