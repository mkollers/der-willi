import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import storage from 'local-storage-fallback';
import { of, Subscription, timer } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth0 = new auth0.WebAuth(environment.auth0);
  private _refreshSubscription: Subscription;

  constructor() { }

  get isAuthenticated() {
    // Check whether the current time is past the access Token's expiry time
    const expiresAt = JSON.parse(storage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  changePassword = (email: string) => this._changePassword(email);
  handleAuthentication = () => this._handleAuthentication();
  login = () => this._auth0.authorize();
  logout = () => this._logout();
  register = (mail: string) => this._auth0.authorize({ mode: 'signUp', login_hint: mail });
  renewToken = () => this._renewToken();

  /** Sends an email from auth0 to reset the password */
  private _changePassword(email: string) {
    return new Promise((resolve, reject) => {
      this._auth0.changePassword({ email, connection: 'Username-Password-Authentication' }, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }

  /** Parses the url hash, after navigating back from auth0 SAML-Page */
  private async _handleAuthentication() {
    const authResult = await this._parseHash();
    await this._setSession(authResult);
  }

  private _logout() {
    // Remove tokens, expiry time, and everything else  from local or session storage
    storage.clear();

    this._unscheduleRenewal();

    this._auth0.logout({ federated: true, returnTo: window.location.origin });
  }

  private _scheduleRenewal() {
    if (!this.isAuthenticated) {
      return;
    }
    this._unscheduleRenewal();

    const expiresAt = JSON.parse(storage.getItem('expires_at'));

    const expiresIn$ = of(expiresAt).pipe(
      // Use timer to track delay until expiration to run the refresh at the proper time
      mergeMap(value => timer(Math.max(1, value - Date.now())))
    );

    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this._refreshSubscription = expiresIn$.pipe(
      tap(async () => await this.renewToken()),
      tap(() => this._scheduleRenewal())
    ).subscribe();
  }

  private _renewToken() {
    return new Promise((resolve, reject) => {
      this._auth0.checkSession({}, (err, result: auth0.Auth0DecodedHash) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        this._setSession(result);
        resolve();
      });
    });
  }

  private _unscheduleRenewal() {
    if (this._refreshSubscription) {
      this._refreshSubscription.unsubscribe();
    }
  }

  private async _setSession(authResult: auth0.Auth0DecodedHash) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
    storage.setItem('access_token', authResult.accessToken);
    storage.setItem('id_token', authResult.idToken);
    storage.setItem('expires_at', expiresAt);

    this._scheduleRenewal();
  }

  private _parseHash(): Promise<auth0.Auth0DecodedHash> {
    return new Promise((resolve, reject) => {
      this._auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          return resolve(authResult);
        }
        reject(err);
      });
    });
  }
}
