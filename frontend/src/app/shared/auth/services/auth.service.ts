import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Dictionary } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _refreshTokenSubscription: Subscription;
  user$: Observable<firebase.User>;
  permissions$: Observable<Dictionary<boolean>>;

  constructor(
    private _auth: AngularFireAuth,
    private _db: AngularFirestore
  ) {
    this.user$ = _auth.user;
    this.permissions$ = _auth.idTokenResult.pipe(
      filter(token => !!token),
      map(token => token.claims['https://www.der-willi.de/permissions'])
    );

    this._refreshTokenSubscription = this.user$.pipe(
      filter(user => !!user),
      switchMap(this._mergeUserAndIssuedAtTime$),
      switchMap(([user, issuedAtTime]) => this._hasToEnforceTokenRefresh$(user, issuedAtTime)),
      tap(() => this._auth.auth.currentUser.getIdToken(true)),
      tap(() => console.log('refresh token'))
    ).subscribe();
  }

  forgetPassword = (email: string) => this._auth.auth.sendPasswordResetEmail(email);
  login = (email: string, password: string) => this._auth.auth.signInWithEmailAndPassword(email, password);
  logout = () => this._auth.auth.signOut();
  register = (email: string, password: string) => this._auth.auth.createUserWithEmailAndPassword(email, password);

  ngOnDestroy = () => this._refreshTokenSubscription.unsubscribe();

  private async _mergeUserAndIssuedAtTime$(user: firebase.User): Promise<[firebase.User, Date]> {
    const issuedAtTime = (await user.getIdTokenResult()).issuedAtTime;
    return [user, new Date(issuedAtTime)];
  }

  private _hasToEnforceTokenRefresh$(user: firebase.User, issuedAtTime: Date) {
    return this._db.collection('metadata').doc<{ refreshTime: string }>(user.uid).valueChanges().pipe(
      map(metadata => new Date(metadata.refreshTime)),
      filter(refreshTime => refreshTime > issuedAtTime)
    );
  }
}
