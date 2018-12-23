import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headline$ = new BehaviorSubject<string>('');

  constructor() { }

  get headline() {
    return this.headline$.value;
  }

  set headline(value: string) {
    this.headline$.next(value);
  }
}
