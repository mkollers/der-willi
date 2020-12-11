import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _refreshTokenSubscription: Subscription;
  user$: Observable<firebase.User>;
  permissions$: Observable<{ [key: string]: boolean }>;

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
      tap(() => console.log('refresh token'))
    ).subscribe();
  }

  forgotPassword = (email: string) => this._auth.sendPasswordResetEmail(email);
  login = (email: string, password: string) => this._auth.signInWithEmailAndPassword(email, password);
  logout = () => this._auth.signOut();
  register = (email: string, password: string) => this._auth.createUserWithEmailAndPassword(email, password);

  ngOnDestroy = () => this._refreshTokenSubscription.unsubscribe();

  private async _mergeUserAndIssuedAtTime$(user: firebase.User): Promise<[firebase.User, Date]> {
    const issuedAtTime = (await user.getIdTokenResult()).issuedAtTime;
    return [user, new Date(issuedAtTime)];
  }

  private _hasToEnforceTokenRefresh$(user: firebase.User, issuedAtTime: Date) {
    return this._db.collection('metadata').doc<{ refreshTime: string }>(user.uid).valueChanges().pipe(
      filter(metadata => !!metadata),
      map(metadata => new Date(metadata.refreshTime)),
      filter(refreshTime => refreshTime > issuedAtTime)
    );
  }
}
