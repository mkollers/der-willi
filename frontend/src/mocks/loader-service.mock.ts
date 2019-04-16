import { BehaviorSubject } from 'rxjs';

export class LoaderServiceMock {
    isLoading$ = new BehaviorSubject<boolean>(null);
    set isLoading(value: boolean) { this.isLoading$.next(value); }
    get isLoading() { return this.isLoading$.value; }
}