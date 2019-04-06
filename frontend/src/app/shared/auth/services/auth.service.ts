import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth$: Observable<firebase.User>;

  constructor(
    private _auth: AngularFireAuth
  ) {
    this.auth$ = this._auth.user;
  }

  forgetPassword = (email: string) => this._auth.auth.sendPasswordResetEmail(email);
  login = (email: string, password: string) => this._auth.auth.signInWithEmailAndPassword(email, password);
  logout = () => this._auth.auth.signOut();
  register = (email: string, password: string) => this._auth.auth.createUserWithEmailAndPassword(email, password);
}
