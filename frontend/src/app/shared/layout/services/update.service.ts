import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private _subscription: Subscription;

  constructor(
    private _swUpdate: SwUpdate,
    private _snackbar: MatSnackBar
  ) { }

  subscribeUpdates() {
    this._subscription = this._swUpdate.available.subscribe(evt => {
      const snack = this._snackbar.open(
        'Update verfügbar! Lade die Web-App neu um die neusten Änderungen zu sehen.', 'Aktualisieren', { duration: 6000 }
      );

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
    });
  }

  unsubscribe() {
    this._subscription.unsubscribe();
  }
}
