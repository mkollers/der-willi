import { BehaviorSubject } from 'rxjs';

export class HeaderServiceMock {
    headline$ = new BehaviorSubject<string>(null);
    set headline(value: string) { this.headline$.next(value); }
    get headline() { return this.headline$.value; }

    navigateBackUri$ = new BehaviorSubject<string | any[]>(null);
    set navigateBackUri(value: string | any[]) { this.navigateBackUri$.next(value); }
    get navigateBackUri() { return this.navigateBackUri$.value; }
}