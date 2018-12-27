import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headline$ = new BehaviorSubject<string>('');
  navigateBackUri$ = new BehaviorSubject<string | any[]>(null);

  constructor() { }

  get headline() {
    return this.headline$.value;
  }

  set headline(value: string) {
    this.headline$.next(value);
  }

  get navigateBackUri() {
    return this.navigateBackUri$.value;
  }

  set navigateBackUri(value: string | any[]) {
    this.navigateBackUri$.next(value);
  }
}
